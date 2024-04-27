'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm, Controller } from 'react-hook-form';
import postMyNotice from '@/src/api/postMyNotice';
import putMyNotice from '@/src/api/putMyNotice';
import getNoticeData from '@/src/api/getNoticeData';
import getShop from '@/src/api/getShop';
import Input from '@/src/components/common/input/Input';
import Button from '@/src/components/common/Button';
import TextArea from '@/src/components/common/TextArea';
import ModalPortal from '@/src/components/common/modal/ModalPortal';
import Modal from '@/src/components/common/modal/Modal';
import BackSpaceButton from '@/src/components/common/BackSpaceButton';
import { getTimeDifference } from '@/src/lib/caculate';
import { MyNoticeFormData } from '@/src/types/interface';
import Spinner from '../Spinner';
import styles from './MyNoticeRegister.module.scss';
import DatePicker from '../common/Datepicker';

interface MyNoticeRegisterProps {
  token: string;
  shopId: string;
}

export default function MyNoticeRegister({
  token,
  shopId,
}: MyNoticeRegisterProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [originalPay, setOriginalPay] = useState(0);
  const params = useSearchParams();
  const datePickerRef = useRef();
  const noticeId = params.get('noticeId');
  const [isShow, setIsShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('등록이 완료되었습니다.');
  const handleShowModal = (modalState: boolean) => {
    setIsShow(modalState);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
    clearErrors,
  } = useForm<MyNoticeFormData>({
    mode: 'onBlur',
    defaultValues: {
      hourlyPay: '',
      startsAt: new Date(),
      workhour: '',
      description: '',
    },
  });

  const {
    hourlyPay: hourlyPayError,
    startsAt: startsAtError,
    workhour: workhourError,
    description: descriptionError,
  } = errors;

  const handleHourlyPayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) clearErrors('hourlyPay');
  };

  const handleWorkHourInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value) clearErrors('workhour');
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue('description', e.target.value);
  };

  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  const handleConfirmButton = () => {
    if (noticeId) {
      router.push(`/shops/${shopId}/notices/${noticeId}`);
    } else {
      router.push('/myshop');
    }
    router.refresh();
  };

  const onSubmit = async (formData: MyNoticeFormData) => {
    try {
      if (noticeId) {
        await putMyNotice(token, shopId, noticeId, formData);
        setModalMessage('수정이 완료되었습니다.');
      } else {
        await postMyNotice(token, shopId, formData);
      }
      handleShowModal(true);
    } catch (error) {
      setModalMessage(error.message);
      handleShowModal(true);
    }
  };

  useEffect(() => {
    if (!noticeId) return;
    const fetchNoticeData = async (
      targetShopId: string,
      targetNoticeId: string,
    ) => {
      const result = await getNoticeData(targetShopId, targetNoticeId);
      const { id, closed, shop, ...noticeData } = result.item;
      const timeConverTedNoticeData = {
        ...noticeData,
        startsAt: noticeData.startsAt.replace('Z', ''),
      };
      Object.entries(timeConverTedNoticeData).forEach(([fieldName, value]) => {
        if (fieldName === 'startsAt') {
          setValue(fieldName, new Date(value));
        } else {
          setValue(fieldName, value);
        }
      });
      setIsLoading(false);
    };

    fetchNoticeData(shopId, noticeId);
  }, [watch, shopId, noticeId, setValue]);

  useEffect(() => {
    const fetchOriginalPayData = async (targetShopId: string) => {
      try {
        const result = await getShop(targetShopId);
        const { originalHourlyPay } = result.item;
        setOriginalPay(originalHourlyPay);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchOriginalPayData(shopId);
  }, [shopId]);

  if (isLoading && noticeId) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackSpaceButton onClose={handleGoBack} size={25} />
        <p>공고 등록</p>
      </div>
      <form className={styles.formBox} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputArea}>
          <Input
            label='시급 *'
            inputType='number'
            onChange={handleHourlyPayChange}
            error={hourlyPayError}
            placeholder='시급을 입력해 주세요'
            register={register('hourlyPay', {
              required: '필수 입력사항입니다.',
              validate: {
                minWage: value =>
                  Number(value) >= Number(originalPay) ||
                  `기본시급(${originalPay}) 보다 낮은 값은 입력할 수 없습니다`,
              },
            })}
          />
          <div className={styles.pickerBox}>
            <p>시작 일시 *</p>
            <Controller
              name='startsAt'
              control={control}
              rules={{
                required: '필수 선택사항입니다.',
                validate: value => {
                  const selectedValue = new Date(value);
                  if (getTimeDifference(selectedValue.toISOString())) {
                    return '현재보다 이전 시간대는 선택할 수 없습니다.';
                  }
                  return true;
                },
              }}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  timeSelect
                  value={watch('startsAt')}
                  error={startsAtError}
                  ref={datePickerRef}
                />
              )}
            />
            {startsAtError && (
              <div className={styles.error}>{startsAtError.message}</div>
            )}
          </div>
          <Input
            label='업무 시간 *'
            inputType='number'
            onChange={handleWorkHourInputChange}
            error={workhourError}
            placeholder='업무 시간을 입력해 주세요'
            register={register('workhour', {
              required: '필수 입력사항입니다.',
            })}
          />
        </div>
        <TextArea
          labelName='공고 설명'
          textLimit={200}
          placeholder='공고 설명을 입력해 주세요'
          register={register('description')}
          onChange={handleTextAreaChange}
          value={watch('description')}
          error={descriptionError}
        />
        <div className={styles.submitButton}>
          <div className={styles.buttonSize}>
            <Button buttonType='submit' text='등록하기' size='L' />
          </div>
        </div>
      </form>
      {isShow && (
        <ModalPortal>
          <Modal
            icon='check'
            message={modalMessage}
            minWidth='20rem'
            maxWidth='40rem'
            buttonText={['확인']}
            buttonWidthPercent='25%'
            handleModal={handleShowModal}
            handleButton={[handleConfirmButton]}
          />
        </ModalPortal>
      )}
    </div>
  );
}

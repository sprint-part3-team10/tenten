'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import putMyProfile from '@/src/api/putMyProfile';
import getProfileData from '@/src/api/getProfileData';
import Input from '@/src/components/common/input/Input';
import Dropdown from '@/src/components/common/Dropdown';
import Button from '@/src/components/common/Button';
import TextArea from '@/src/components/common/TextArea';
import ModalPortal from '@/src/components/common/modal/ModalPortal';
import Modal from '@/src/components/common/modal/Modal';
import BackSpaceButton from '@/src/components/common/BackSpaceButton';
import { MyProfileFormData } from '@/src/types/interface';
import { LOCATION_LIST } from '@/src/constants/dropdownList';
import { PHONE_NUMBER_REGEX } from '@/src/constants/regEx';
import Spinner from '../Spinner';
import styles from './MyProfileRegister.module.scss';

interface MyProfileRegisterProps {
  token: string;
  userId: string;
}

type SetValueFunction = (
  fieldName: 'name' | 'phone' | 'address' | 'bio',
  value: string,
) => void;

export default function MyProfileRegister({
  token,
  userId,
}: MyProfileRegisterProps) {
  const [isLoading, setIsLoading] = useState(true);
  const params = useSearchParams();
  const isEditing = params.get('action') === 'edit';
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
    clearErrors,
  } = useForm<MyProfileFormData>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      bio: '',
    },
  });

  const {
    name: nameError,
    phone: phoneNumberError,
    bio: introductionError,
  } = errors;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) clearErrors('name');
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) clearErrors('phone');
  };

  const handleLocationInputChange = (selectedValue: string) => {
    setValue('address', selectedValue);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue('bio', e.target.value);
    clearErrors('bio');
  };
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  const handleConfirmButton = () => {
    router.push('/myprofile');
    router.refresh();
  };

  const onSubmit = async (formData: MyProfileFormData) => {
    try {
      await putMyProfile(token, userId, formData);
      if (isEditing) setModalMessage('수정이 완료되었습니다');
      handleShowModal(true);
    } catch (error) {
      if (error instanceof Error) {
        setModalMessage(error.message);
      } else {
        setModalMessage('알 수 없는 오류가 발생했습니다.');
      }
      handleShowModal(true);
    }
  };

  useEffect(() => {
    const fetchProfileData = async (targetUserId: string) => {
      const result = await getProfileData(targetUserId);
      const { id, email, type, shop, ...userData } = result;
      if (!isEditing && userData.name) {
        router.push('/');
        return;
      }
      const setValueTyped = setValue as SetValueFunction;

      Object.entries(userData).forEach(([fieldName, value]) => {
        setValueTyped(fieldName as 'name' | 'phone' | 'address' | 'bio', value);
      });
      setIsLoading(false);
    };

    fetchProfileData(userId);
  }, [isEditing, setValue, userId, router]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <BackSpaceButton onClose={handleGoBack} size={25} />
        <p>내 프로필</p>
      </div>
      <form className={styles.formBox} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputArea}>
          <Input
            label='이름 *'
            inputType='text'
            onChange={handleNameChange}
            error={nameError}
            placeholder='예) 홍길동'
            register={register('name', {
              required: '필수 입력사항입니다.',
            })}
          />
          <Input
            label='연락처 *'
            inputType='text'
            onChange={handlePhoneNumberChange}
            error={phoneNumberError}
            placeholder='예) 010-0000-0000'
            register={register('phone', {
              required: '필수 입력사항입니다.',
              pattern: {
                value: PHONE_NUMBER_REGEX,
                message: '연락처를 정확히 입력해주세요. 예) 010-0000-0000',
              },
            })}
          />
          <Dropdown
            labelName='선호 지역'
            optionList={LOCATION_LIST}
            register={register('address')}
            value={watch('address')}
            onChange={handleLocationInputChange}
          />
        </div>
        <TextArea
          labelName='자기 소개 *'
          textLimit={100}
          placeholder='본인을 소개해 주세요!'
          register={register('bio', {
            required: '필수 입력사항입니다.',
          })}
          value={watch('bio')}
          onChange={handleTextAreaChange}
          error={introductionError}
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

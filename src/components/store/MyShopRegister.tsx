'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import createPresignedUrl from '@/src/api/createPresignedUrl';
import postMyShop from '@/src/api/postMyShop';
import putMyShop from '@/src/api/putMyShop';
import getShop from '@/src/api/getShop';
import ModalPortal from '@/src/components/common/modal/ModalPortal';
import Modal from '@/src/components/common/modal/Modal';
import Input from '@/src/components/common/input/Input';
import Dropdown from '@/src/components/common/Dropdown';
import BackSpaceButton from '@/src/components/common/BackSpaceButton';
import Button from '@/src/components/common/Button';
import TextArea from '@/src/components/common/TextArea';
import {
  STORE_CATEGORY_LIST,
  LOCATION_LIST,
} from '@/src/constants/dropdownList';
import Image from 'next/image';
import cameraIcon from '@/public/icons/camera.svg';
import { MyShopFormData } from '@/src/types/interface';
import Spinner from '../Spinner';
import styles from './MyShopRegister.module.scss';

interface MyShopRegisterProps {
  token: string;
  shopId: string;
}

export default function MyShopRegister({ token, shopId }: MyShopRegisterProps) {
  const [isLoading, setIsLoading] = useState(true);
  const params = useSearchParams();
  const isEditing = params.get('action') === 'edit';
  const [isShow, setIsShow] = useState(false);
  const handleShowModal = (modalState: boolean) => {
    setIsShow(modalState);
  };
  const [modalMessage, setModalMessage] = useState('등록이 완료되었습니다.');

  const imageInputRef = useRef(null);
  const handleFilePickerClick = () => {
    imageInputRef.current.click();
  };
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useForm<MyShopFormData>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      category: '',
      address1: '',
      address2: '',
      imageUrl: '',
      originalHourlyPay: '',
      description: '',
    },
  });

  const handleConfirmButton = () => {
    if (!watch('imageUrl')) return;
    router.push('/myshop');
    router.refresh();
  };

  const {
    name: nameError,
    category: categoryError,
    address1: address1Error,
    address2: address2Error,
    originalHourlyPay: originalHourlyPayError,
    description: descriptionError,
  } = errors;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) clearErrors('name');
  };
  const handleDetailAddressChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value) clearErrors('address2');
  };
  const handleHourlyPayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) clearErrors('originalHourlyPay');
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setValue('category', selectedCategory);
    clearErrors('category');
  };
  const handleLocationChange = (selectedLocation: string) => {
    setValue('address1', selectedLocation);
    clearErrors('address1');
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue('description', e.target.value);
    clearErrors('description');
  };

  const handleImageFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files[0];
    const presignedUrl = await createPresignedUrl(file, token);
    setValue('imageUrl', presignedUrl);
  };

  const onSubmit = async (formData: MyShopFormData) => {
    try {
      if (isEditing) {
        await putMyShop(token, shopId, formData);
        setModalMessage('수정이 완료되었습니다.');
      } else {
        await postMyShop(token, formData);
      }
      handleShowModal(true);
    } catch (error) {
      setModalMessage(error.message);
      handleShowModal(true);
    }
  };

  useEffect(() => {
    const fetchShopData = async (targetShopId: string) => {
      if (!isEditing && shopId !== '쿠키가 존재하지 않습니다.') {
        router.push('/');
        return;
      }
      if (!isEditing) {
        setIsLoading(false);
        return;
      }
      const result = await getShop(targetShopId);
      const { user, ...shopData } = result.item;
      Object.entries(shopData).forEach(([fieldName, value]) => {
        setValue(fieldName, value);
      });
      setIsLoading(false);
    };

    fetchShopData(shopId);
  }, [isEditing, setValue, router]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.header}>
          <BackSpaceButton onClose={handleGoBack} size={25} />
          <p>내 가게 정보</p>
        </div>
        <form className={styles.formBox} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBox}>
            <Input
              label='가게 이름 *'
              inputType='text'
              onChange={handleNameChange}
              error={nameError}
              placeholder='상호명을 적어주세요'
              register={register('name', {
                required: '필수 입력사항입니다.',
              })}
            />
            <Dropdown
              labelName='분류 *'
              optionList={STORE_CATEGORY_LIST}
              register={register('category', {
                required: '필수 입력사항입니다.',
              })}
              error={categoryError}
              value={watch('category')}
              onChange={handleCategoryChange}
            />
            <Dropdown
              labelName='주소 *'
              optionList={LOCATION_LIST}
              register={register('address1', {
                required: '필수 입력사항입니다.',
              })}
              error={address1Error}
              value={watch('address1')}
              onChange={handleLocationChange}
            />
            <Input
              label='상세 주소 *'
              inputType='text'
              onChange={handleDetailAddressChange}
              placeholder='상세 주소를 입력해 주세요'
              error={address2Error}
              register={register('address2', {
                required: '필수 입력사항입니다',
              })}
            />
            <Input
              label='기본 시급 *'
              inputType='number'
              onChange={handleHourlyPayChange}
              placeholder='기본 시급을 적어주세요'
              error={originalHourlyPayError}
              register={register('originalHourlyPay', {
                required: '필수 입력사항입니다',
                validate: {
                  minWage: value =>
                    Number(value) >= 9860 ||
                    '최저시급(9860원) 보다 낮은 값은 입력할 수 없습니다',
                },
              })}
            />
          </div>
          <div className={styles.imageInputBox}>
            <input
              ref={imageInputRef}
              className={styles.imageInput}
              type='file'
              accept='image/*'
              onChange={handleImageFileChange}
            />
            <p>가게 이미지 *</p>
            <div
              className={styles.storeImageBox}
              onClick={handleFilePickerClick}
            >
              {watch('imageUrl') ? (
                <Image
                  className={styles.storeImage}
                  src={watch('imageUrl')}
                  alt='가게이미지'
                  fill
                  sizes='48rem'
                  priority
                />
              ) : (
                <div className={styles.defaultImageBox}>
                  <Image src={cameraIcon} width={32} height={32} alt='카메라' />
                  <p>이미지 추가하기</p>
                </div>
              )}
            </div>
          </div>
          <TextArea
            labelName='가게 설명 *'
            textLimit={200}
            placeholder='가게 설명을 적어주세요'
            register={register('description', {
              required: '필수 입력사항입니다.',
            })}
            value={watch('description')}
            onChange={handleTextAreaChange}
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
    </div>
  );
}

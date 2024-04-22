'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Input from '@/src/components/common/input/Input';
import Dropdown from '@/src/components/common/Dropdown';
import Button from '@/src/components/common/Button';
import TextArea from '@/src/components/common/TextArea';
import ModalPortal from '@/src/components/common/modal/ModalPortal';
import Modal from '@/src/components/common/modal/Modal';
import { LOCATION_LIST } from '@/src/constants/dropdownList';
import BackSpaceButton from '@/src/components/common/BackSpaceButton';
import styles from './page.module.scss';

interface MyProfileFormData {
  name: string;
  phoneNumber: string;
  location: string;
  introduction: string;
}

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const handleShowModal = (modalState: boolean) => {
    setIsShow(modalState);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<MyProfileFormData>({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      phoneNumber: '',
      location: '',
    },
  });
  const {
    name: nameError,
    phoneNumber: phoneNumberError,
    introduction: introductionError,
  } = errors;
  const onSubmit = (formData: MyProfileFormData) => {
    console.log(formData);
    handleShowModal(true);
  };
  const handleLocationInputChange = (selectedValue: string) => {
    setValue('location', selectedValue);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue('introduction', e.target.value);
  };
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
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
            error={nameError}
            placeholder='예) 홍길동'
            register={register('name', {
              required: '필수 입력사항입니다.',
            })}
          />
          <Input
            label='연락처 *'
            inputType='text'
            error={phoneNumberError}
            placeholder='예) 010-0000-0000'
            register={register('phoneNumber', {
              required: '필수 입력사항입니다.',
              pattern: {
                value: /^010-\d{4}-\d{4}$/,
                message: '연락처를 정확히 입력해주세요. 예) 010-0000-0000',
              },
            })}
          />
          <Dropdown
            labelName='선호 지역'
            optionList={LOCATION_LIST}
            register={register('location')}
            value={watch('location')}
            onChange={handleLocationInputChange}
          />
        </div>
        <TextArea
          labelName='자기 소개 *'
          textLimit={10}
          placeholder='본인을 소개해 주세요!'
          register={register('introduction', {
            required: '필수 입력사항입니다.',
          })}
          value={watch('introduction')}
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
            message='등록이 완료되었습니다.'
            minWidth='20rem'
            maxWidth='40rem'
            buttonText={['확인']}
            buttonWidthPercent='25%'
            handleModal={handleShowModal}
          />
        </ModalPortal>
      )}
    </div>
  );
}

'use client';

import BackSpaceButton from '@/src/components/common/BackSpaceButton';
import { useForm } from 'react-hook-form';
import Input from '@/src/components/common/input/Input';
import Dropdown from '@/src/components/common/Dropdown';
import { useRouter } from 'next/navigation';
import { LOCATION_LIST } from '@/src/constants/dropdownList';
import Button from '@/src/components/common/Button';
import TextArea from '@/src/components/common/TextArea';
import styles from './page.module.scss';

interface MyProfileFormData {
  name: string;
  phoneNumber: string;
  location: string;
  introduction: string;
}

export default function Home() {
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
  const onSubmit = (formData: MyProfileFormData) => console.log(formData);
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
        <p>내 프로필</p>
        <BackSpaceButton onClose={handleGoBack} size={25} />
      </div>
      <form className={styles.formBox} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputArea}>
          <Input
            label='이름*'
            inputType='text'
            error={nameError}
            register={register('name', {
              required: '필수 입력사항입니다.',
            })}
          />
          <Input
            label='연락처*'
            inputType='text'
            error={phoneNumberError}
            register={register('phoneNumber', {
              required: '필수 입력사항입니다.',
              pattern: {
                value: /^[0-9]+$/,
                message: '숫자만 입력해 주세요!',
              },
            })}
          />
          <Dropdown
            labelName='선호지역'
            optionList={LOCATION_LIST}
            register={register('location')}
            value={watch('location')}
            onChange={handleLocationInputChange}
          />
        </div>
        <TextArea
          labelName='소개*'
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
    </div>
  );
}

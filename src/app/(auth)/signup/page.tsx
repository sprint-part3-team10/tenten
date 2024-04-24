'use client';

import Input from '@/src/components/common/input/Input';
import TypeSelector from '@/src/components/TypeSelector';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/public/icons/logo.svg';
import Button from '@/src/components/common/Button';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/src/constants/signRegEx';
import postUserData from '@/src/api/postUser';
import Toast from '@/src/components/common/toast/Toast';
import useToast from '@/src/hooks/useToast';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

interface SignupFormData {
  email: string;
  password: string;
  passwordCheck: string;
}

export default function SignUp() {
  const [isEmployer, setIsEmployer] = useState<boolean>(true);
  const [userType, setUserType] = useState<'employee' | 'employer'>('employee');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({ mode: 'onChange' });
  const [isWarning, setIsWarning] = useState<boolean>(false);
  const { showToast, toastMessage, setToastMessage, displayToast } =
    useToast(3000);

  const router = useRouter();

  const pw = watch('password');

  const {
    email: emailError,
    password: passwordError,
    passwordCheck: passwordCheckError,
  } = errors;

  const handleType = () => {
    setIsEmployer(prevState => !prevState);
    setUserType(isEmployer ? 'employer' : 'employee');
  };

  const onSubmit = async ({
    email,
    password,
    passwordCheck,
  }: SignupFormData) => {
    try {
      await postUserData(email, password, userType);
      setToastMessage('정상적으로 가입되었습니다.');
      setIsWarning(false);
      setTimeout(() => {
        router.push('/signin');
      }, 3000);
    } catch (error: any) {
      setToastMessage(error.message);
      setIsWarning(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Link href='/'>
          <Image src={Logo} alt='홈페이지 로고' width={248} height={45} />
        </Link>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='이메일'
            inputType='text'
            error={emailError}
            register={register('email', {
              pattern: {
                value: EMAIL_REGEX,
                message: '이메일 형식으로 작성해주세요.',
              },
            })}
          />

          <Input
            label='비밀번호'
            inputType='password'
            error={passwordError}
            register={register('password', {
              pattern: {
                value: PASSWORD_REGEX,
                message: '비밀번호는 8-16자, 문자 및 숫자를 포함해야 합니다',
              },
            })}
          />

          <Input
            label='비밀번호 확인'
            inputType='password'
            error={passwordCheckError}
            register={register('passwordCheck', {
              validate: value => value === pw || '비밀번호가 일치하지 않습니다',
            })}
          />
          <TypeSelector
            label='회원 유형'
            onChange={handleType}
            isEmployer={isEmployer}
          />
          <Button buttonType='submit' text='가입하기' size='L' />
          <div className={styles.movePage}>
            이미 가입하셨나요?{' '}
            <Link className={styles.link} href='/signin'>
              로그인 하기
            </Link>
          </div>
        </form>
      </div>
      {showToast && toastMessage && (
        <Toast message={toastMessage} isWarning={isWarning} />
      )}
    </>
  );
}

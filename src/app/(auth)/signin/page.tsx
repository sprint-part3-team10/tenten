'use client';

import Logo from '@/public/icons/logo.svg';
import Button from '@/src/components/common/Button';
import Input from '@/src/components/common/input/Input';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/src/constants/signRegEx';
import useToast from '@/src/hooks/useToast';
import Toast from '@/src/components/common/toast/Toast';
import { useState } from 'react';
import postLogin from '@/src/api/postLogin';
import styles from './page.module.scss';
import { useRouter } from 'next/navigation';

interface SigninFormData {
  email: string;
  password: string;
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({ mode: 'onChange' });
  const [isWarning, setIsWarning] = useState<boolean>(false);
  const { showToast, toastMessage, setToastMessage, displayToast } =
    useToast(3000);
  const router = useRouter();

  const { email: emailError, password: passwordError } = errors;

  const onSubmit = async ({ email, password }: SigninFormData) => {
    setToastMessage('');
    try {
      await postLogin(email, password);
      setToastMessage('정상적으로 로그인 되었습니다.');
      setIsWarning(false);
      setTimeout(() => {
        router.push('/');
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
                message: '올바른 이메일 형식이 아닙니다',
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
          <Button buttonType='submit' text='로그인 하기' size='L' />

          <div className={styles.movePage}>
            회원이 아니신가요?{' '}
            <Link className={styles.signLink} href='/signup'>
              회원가입하기
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

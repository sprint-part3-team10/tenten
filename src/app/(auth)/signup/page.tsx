'use client';

import Input from '@/src/components/common/input/Input';
import TypeSelector from '@/src/components/TypeSelector';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/public/icons/logo.png';
import Button from '@/src/components/common/Button';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/src/constants/regEx';
import postUserData from '@/src/api/postUser';
import Toast from '@/src/components/common/toast/Toast';
import useToast from '@/src/hooks/useToast';
import { useRouter } from 'next/navigation';
import styles from './page.module.scss';

interface SignUpData {
  email: string;
  password: string;
}

interface SignUpFormData extends SignUpData {
  passwordCheck: string;
}

export default function SignUp() {
  const [isEmployer, setIsEmployer] = useState<boolean>(true);
  const [userType, setUserType] = useState<'employee' | 'employer'>('employee');
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: 'onChange',
    defaultValues: { email: '', password: '', passwordCheck: '' },
  });
  const [isWarning, setIsWarning] = useState<boolean>(false);
  const { showToast, toastMessage, setToastMessage } = useToast();
  const router = useRouter();

  const {
    email: emailError,
    password: passwordError,
    passwordCheck: passwordCheckError,
  } = errors;

  const handleType = () => {
    setIsEmployer(prevState => !prevState);
    setUserType(isEmployer ? 'employer' : 'employee');
  };

  const onSubmit = async (data: SignUpData) => {
    setToastMessage('');
    const { email, password } = data;
    try {
      await postUserData(email, password, userType);
      setToastMessage('정상적으로 가입되었습니다.');
      setIsWarning(false);
      setTimeout(() => {
        router.replace('/signin', { scroll: false });
      }, 1500);
    } catch (error: any) {
      setToastMessage(error.message);
      setIsWarning(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href='/' scroll={false}>
          <Image
            src={Logo}
            alt='홈페이지 로고'
            width={250}
            height={60}
            priority
          />
        </Link>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label='이메일'
            inputType='text'
            placeholder='example@example.com'
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
            placeholder='비밀번호'
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
            placeholder='비밀번호 확인'
            error={passwordCheckError}
            register={register('passwordCheck', {
              validate: value =>
                value === getValues('password') ||
                `비밀번호가 일치하지 않습니다`,
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
            <Link className={styles.link} href='/signin' scroll={false}>
              로그인 하기
            </Link>
          </div>
        </form>
      </div>
      {showToast && toastMessage && (
        <Toast message={toastMessage} isWarning={isWarning} />
      )}
    </div>
  );
}

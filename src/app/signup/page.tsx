'use client';

import Input from '@/src/components/common/input/Input';
import TypeSelector from '@/src/components/TypeSelector';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import Logo from '@/public/icons/logo.svg';
import Button from '@/src/components/common/Button';
import { useForm } from 'react-hook-form';
import styles from './page.module.scss';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/src/constants/signRegEx';

interface SignupFormData {
  email: string;
  password: string;
  passwordCheck: string;
}

export default function SignUp() {
  const [isEmployer, setIsEmployer] = useState<boolean>(true);
  const [userType, setUserType] = useState<string>('employee');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({ mode: 'onChange' });

  const password = watch('password');
  console.log(password);

  const {
    email: emailError,
    password: passwordError,
    passwordCheck: passwordCheckError,
  } = errors;

  const handleType = () => {
    setIsEmployer(!isEmployer);
    if (isEmployer) {
      setUserType('employer');
    } else {
      setUserType('employee');
    }
  };
  console.log(userType);
  const onSubmit = async (formData: SignupFormData) => {
    try {
      // await signin(data);
      // navigate("/");
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        console.log('error', '존재하지 않거나 비밀번호가 일치하지 않습니다');
      } else {
        console.log('error', '로그인 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <Link href='/'>
        <Image src={Logo} alt='홈페이지 로고' width={248} height={45} />
      </Link>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label='이메일'
          inputType='email'
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

        <Input
          label='비밀번호 확인'
          inputType='password'
          error={passwordCheckError}
          register={register('passwordCheck', {
            validate: value =>
              value === password || '비밀번호가 일치하지 않습니다',
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
  );
}

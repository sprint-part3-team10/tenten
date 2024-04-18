'use client';

import Logo from '@/public/icons/logo.svg';
import Button from '@/src/components/common/Button';
import Input from '@/src/components/common/input/Input';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './page.module.scss';

// email, 비밀번호 조건 RegEx
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

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

  const { email: emailError, password: passwordError } = errors;

  // const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   if (name === 'email') {
  //     setEmailError(!emailRegEx.test(value));
  //   } else if (name === 'password') {
  //     setPasswordError(!passwordRegEx.test(value));
  //   }

  //   setValues(prevValues => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };

  const onSubmit = async (formData: SigninFormData) => {
    try {
      // await login(data);
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
              value: emailRegEx,
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
              value: passwordRegEx,
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
      <Button buttonType='submit' text='Large 버튼 예시' size='L' />
      <Button
        buttonType='submit'
        text='Middle 버튼 예시'
        size='M'
        widthValue='20rem'
      />
      <Button
        buttonType='submit'
        text='Small 버튼 예시'
        size='S'
        widthValue='30rem'
      />
      <Button buttonType='submit' text='1' isWhite />
      <Button
        buttonType='submit'
        text='반응형+disable 케이스'
        isWhite
        isDisable
      />
    </div>
  );
}

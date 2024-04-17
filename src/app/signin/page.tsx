'use client';

import Input from '@/components/common/Input';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './page.module.scss';

// email, 비밀번호 조건 RegEx
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

export default function SignIn() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmailError(!emailRegEx.test(value));
    } else if (name === 'password') {
      setPasswordError(!passwordRegEx.test(value));
    }

    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // await login(values);
      // navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('error', '존재하지 않거나 비밀번호가 일치하지 않습니다');
      } else {
        // 기타 에러 처리
        console.log('error', '회원가입 중 오류가 발생했습니다.');
      }
    }
  };
  return (
    <div className={styles.container}>
      <Link href='/'>
        <Image
          src='/images/logo.svg'
          alt='홈페이지 로고'
          width={248}
          height={45}
        />
      </Link>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.email}>
          <Input
            label='이메일'
            name='email'
            inputType='email'
            value={values.email}
            onChange={handleChange}
            isError={emailError}
            errorMessage='올바른 이메일 형식이 아닙니다'
          />
        </div>
        <div className={styles.password}>
          <Input
            label='비밀번호'
            name='password'
            inputType='password'
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className={styles.btn}>
          로그인하기
        </button>
        <div className={styles.movePage}>
          회원이 아니신가요?{' '}
          <Link className={styles.signLink} href='/signup'>
            회원가입하기
          </Link>
        </div>
      </form>
    </div>
  );
}

'use client';

import Logo from '@/public/icons/logo.svg';
import Button from '@/src/components/common/Button';
import Input from '@/src/components/common/input/Input';
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
        <Image src={Logo} alt='홈페이지 로고' width={248} height={45} />
      </Link>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label='이메일'
          name='email'
          inputType='email'
          value={values.email}
          preContent='example@example.com'
          onChange={handleChange}
          isError={emailError}
          errorMessage='올바른 이메일 형식이 아닙니다'
        />
        <Input
          label='비밀번호'
          name='password'
          inputType='password'
          preContent='비밀번호'
          value={values.password}
          onChange={handleChange}
        />
        <Button buttonType={'submit'} text={'로그인 하기'} size={'L'} />

        <div className={styles.movePage}>
          회원이 아니신가요?{' '}
          <Link className={styles.signLink} href='/signup'>
            회원가입하기
          </Link>
        </div>
      </form>
      <Button buttonType={'submit'} text={'Large 버튼 예시'} size={'L'} />
      <Button buttonType={'submit'} text={'Middle 버튼 예시'} size={'M'} />
      <Button buttonType={'submit'} text={'Small 버튼 예시'} size={'S'} />
      <Button buttonType={'submit'} text={'White 버튼'} isWhite={true} />
      <Button
        buttonType={'submit'}
        text={'반응형+disable 케이스'}
        isWhite={true}
        isDisable={true}
      />
    </div>
  );
}

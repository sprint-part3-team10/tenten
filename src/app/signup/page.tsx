'use client';

import Input from '@/components/common/Input';
import TypeSelector from '@/components/TypeSelector';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './page.module.scss';

// email, 비밀번호 조건 RegEx
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;

interface Values {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  type: 'employee' | 'employer';
  isPwError: boolean;
}

export default function SignUp() {
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
    type: 'employee',
    isPwError: false,
  });
  const [isEmployer, setIsEmployer] = useState<boolean>(true);
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

  const handleType = () => {
    setIsEmployer(!isEmployer);
    if (isEmployer) {
      setValues(prevValues => ({
        ...prevValues,
        type: 'employer',
      }));
    } else {
      setValues(prevValues => ({
        ...prevValues,
        type: 'employee',
      }));
    }
  };
  console.log(values.type);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (values.password !== values.passwordCheck) {
      console.log('warn', '비밀번호가 일치하지 않습니다.');
    } else {
      console.log('');
    }

    const { email, password, type } = values;
    try {
      // await axios.post("/users", {
      //   email,
      //   password,
      //   type,
      // });
      // 가입이 완료되었다는 modal 실행 필요
      // await login({ email, password });
      // navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('error', '잘못된 형식의 요청입니다');
      } else if (error.response && error.response.status === 409) {
        // 이메일 중복 에러 처리
        console.log('error', '이미 사용 중인 이메일입니다.');
      } else {
        // 기타 에러 처리
        console.log('error', '회원가입 중 오류가 발생했습니다.');
      }
    }
  };

  return (
    <div className={styles.signupContainer}>
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
            isError={passwordError}
            errorMessage='최소 8자 이상, 두 종류 이상의 문자로 설정해주세요'
          />
        </div>
        <div className={styles.pwcheck}>
          <Input
            label='비밀번호 확인'
            name='passwordCheck'
            inputType='password'
            value={values.passwordCheck}
            onChange={handleChange}
            isError={values.password !== values.passwordCheck}
            errorMessage='비밀번호가 일치하지 않습니다'
          />
        </div>
        <div className={styles.userType}>
          <TypeSelector
            label='회원 유형'
            onChange={handleType}
            isEmployer={isEmployer}
          />
        </div>
        <button type='submit' className={styles.btn}>
          가입하기
        </button>
        <div>
          이미 가입하셨나요?{' '}
          <Link className={styles.link} href='/signin'>
            로그인 하기
          </Link>
        </div>
      </form>
    </div>
  );
}

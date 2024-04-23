import { BASE_URL } from './api';

interface UserProps {
  email: string;
  password: string;
  type: 'employee' | 'employer';
}

const postUserData = async (
  email: string,
  password: string,
  type: 'employee' | 'employer',
): Promise<UserProps> => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      type,
    }),
  });
  const result = await res.json();

  if (!res.ok) {
    let errorMessage = '';
    switch (res.status) {
      case 400:
        errorMessage = '올바른 이메일이 아닙니다.';
        break;
      case 409:
        errorMessage = '이미 존재하는 이메일입니다.';
        break;
      default:
        errorMessage = '';
        break;
    }
    throw new Error(errorMessage);
  }

  return result;
};

export default postUserData;

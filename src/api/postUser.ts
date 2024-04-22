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
) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      type,
    }),
  });
  return res;
};

export default postUserData;

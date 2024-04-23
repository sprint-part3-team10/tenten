import { BASE_URL } from './api';

interface LoginProps {
  email: string;
  password: string;
}

const postLogin = async (
  email: string,
  password: string,
): Promise<LoginProps> => {
  const res = await fetch(`${BASE_URL}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return res.json();
};

export default postLogin;

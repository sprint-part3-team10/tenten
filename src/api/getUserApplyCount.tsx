import { BASE_URL } from './api';

const getUserApplyCount = async (userId: string): Promise<number> => {
  const res = await fetch(`${BASE_URL}/users/${userId}/applications`, {
    headers: {
      Authorization:
        'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNjZmMDgwYy01MjY1LTRiNzAtODM2ZS0wZjEzNjBiNTcwMTAiLCJpYXQiOjE3MTM3NzE4MTZ9.iThYxjVCfoeIYhDlzhpR79rgOjnaSRb1nKhZxvDaVtM',
    },
  });
  const result = await res.json();

  if (result.status === 403) {
    throw new Error('권한이 없습니다.');
  } else if (result.status === 400) {
    throw new Error('요청 양식이 잘못되었습니다.');
  }
  return result.count;
};

export default getUserApplyCount;

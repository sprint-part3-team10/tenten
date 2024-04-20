import { BASE_URL } from './api';

interface ProfileProps {
  name: string;
  phone: string;
  address: string;
  bio: string;
}
const getProfileData = async (userId: string): Promise<ProfileProps> => {
  const res = await fetch(`${BASE_URL}/users/${userId}`);
  const result = await res.json();

  if (result.status === 404) {
    throw new Error('내 프로필이 등록되어있지 않습니다.');
  }
  return result.links[1].body;
};

export default getProfileData;

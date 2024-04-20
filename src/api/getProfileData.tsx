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
  return result.links[1].body;
};

export default getProfileData;

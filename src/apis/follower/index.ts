import { client } from '@/apis/client';

export const getUserProfile = async () => {
  const response = await client.get('/user');
  return response;
};

import { client } from '@/apis/client';

const API_URL = {
  GET_USER_PROFILE: '/user',

  GET_FOLLOWERS: (name: string) => `/users/${name}/followers`,
  GET_FOLLOWING: (name: string) => `/users/${name}/following`,

  FOLLOW_USER: (username: string) => `user/following/${username}`,
};

export const getUserProfile = async () => {
  const { data } = await client.get(API_URL.GET_USER_PROFILE);
  console.log(data);
  return data;
};

export const getFollowers = async (name: string) => {
  const { data } = await client.get(API_URL.GET_FOLLOWERS(name));
  console.log(data);
  return data;
};

export const getFollowing = async (name: string) => {
  const { data } = await client.get(API_URL.GET_FOLLOWING(name));
  return data;
};

export const followUser = async (name: string) => {
  await client.put(API_URL.FOLLOW_USER(name));
};

export const unfollowUser = async (name: string) => {
  await client.delete(API_URL.FOLLOW_USER(name));
};

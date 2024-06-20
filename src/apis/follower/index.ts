// 코드리뷰를 위해 새로운 브랜치 생성, 주석 추가를 통해 변경점을 만들고 pr날림
import { client } from '@/apis/client';

const API_URL = {
  GET_USER_PROFILE: '/user',

  GET_FOLLOWERS: (name: string) => `/users/${name}/followers`,
  GET_FOLLOWING: (name: string) => `/users/${name}/following`,

  FOLLOW_USER: (username: string) => `user/following/${username}`,
};

export const getUserProfile = async () => {
  const { data } = await client.get(API_URL.GET_USER_PROFILE);
  return data;
};

export const getFollowers = async (name: string) => {
  const { data } = await client.get(API_URL.GET_FOLLOWERS(name));
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

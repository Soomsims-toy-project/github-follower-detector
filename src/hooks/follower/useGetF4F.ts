import { UserProps } from '@/types/follower';

export const useGetF4F = (followerList: UserProps[], followingList: UserProps[]) => {
  const f4fList = followingList.filter((following) => followerList.some((follower) => follower.id === following.id));

  const notF4fList = followerList.filter(
    (follower) => !followingList.some((following) => following.id === follower.id),
  );

  return { f4fList, notF4fList };
};

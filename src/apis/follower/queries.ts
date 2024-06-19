import { queryClient } from '@/apis/queryClient';
import { useMutation, useQuery } from '@tanstack/react-query';

import { followUser, getFollowers, getFollowing, getUserProfile, unfollowUser } from '.';

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });
};

export const useGetFollowers = (name: string) => {
  return useQuery({
    queryKey: ['followers', name],
    queryFn: () => getFollowers(name),
  });
};

export const useGetFollowing = (name: string) => {
  return useQuery({
    queryKey: ['following', name],
    queryFn: () => getFollowing(name),
  });
};

export const useFollowUser = (name: string) => {
  return useMutation({
    mutationFn: () => followUser(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
      queryClient.invalidateQueries({ queryKey: ['follower', name] });
    },
  });
};

export const useUnfollowUser = (name: string) => {
  return useMutation({
    mutationFn: () => unfollowUser(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
      queryClient.invalidateQueries({ queryKey: ['follower', name] });
    },
  });
};

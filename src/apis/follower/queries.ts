import { useQuery } from '@tanstack/react-query';

import { getUserProfile } from '.';

export const useUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });
};

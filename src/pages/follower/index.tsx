import { useGetFollowers, useGetFollowing, useUserProfile } from '@/apis/follower/queries';
import FollowerList from '@/components/follower/FollowerList';
import UserProfile from '@/components/follower/UserProfile';
import { useGetF4F } from '@/hooks/follower/useGetF4F';

import { UserProfileDataProps } from '../../types/follower';

const FollowerPage = () => {
  const userProfile = useUserProfile();
  console.log('userprofile', userProfile);
  const { name, login, bio, avatar_url, followers, following } = (userProfile?.data as UserProfileDataProps) || {};
  const { data: followerList = [] } = useGetFollowers(login);
  const { data: followingList = [] } = useGetFollowing(login);

  const { f4fList, notF4fList } = useGetF4F(followerList, followingList);

  return (
    <main className="flex min-h-full flex-grow flex-col items-center bg-grey">
      <section className="mt-8">
        <UserProfile
          userName={name}
          description={bio}
          imageURL={avatar_url}
          follower={followers}
          following={following}
        />
      </section>
      <section className="mt-16 flex gap-16">
        <FollowerList number={f4fList.length} followerInfoList={f4fList} type={'follow'} />
        <FollowerList number={notF4fList.length} followerInfoList={notF4fList} type={'unfollow'} />
      </section>
    </main>
  );
};

export default FollowerPage;

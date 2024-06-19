import { useUserProfile } from '@/apis/follower/queries';
import FollowerList from '@/components/follower/FollowerList';
import UserProfile from '@/components/follower/UserProfile';

import { UserProfileDataProps } from './_types';

const FollowerPage = () => {
  // Todo: followerData 팔로우 언팔로우에 따라 csr로 상태 관리 (react-query 사용)
  const { data: userProfile } = useUserProfile();
  const { name, bio, avatar_url, followers, following } = (userProfile?.data as UserProfileDataProps) || {};

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
        {/* <FollowerList
          className="text-mid_blue"
          title="맞팔중인 사용자 수"
          number={48}
          followerInfoList={initialFollowerData}
        />
        <FollowerList
          className="text-mid_red"
          title="맞팔이 아닌 사용자 수"
          number={48}
          followerInfoList={initialFollowerData}
        /> */}
      </section>
    </main>
  );
};

export default FollowerPage;

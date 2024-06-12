import FollowerList from '@/components/follower/FollowerList';
import UserProfile from '@/components/follower/UserProfile';

import { mockData } from './_data/mock';
import { FollowerPageProps } from './_types';

export async function getServerSideProps() {
  // userProfileData: 서버 사이드에서 데이터를 미리 받아옴 userProfile은 동적으로 계속 바뀌지 않으므로
  // Todo: api 코드 작성 (임시로 mockData를 받아오는 코드 작성)
  const userProfileData = {
    userName: 'suwonthugger1',
    description: 'thug life',
    imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4',
    follower: 3,
    following: 4,
  };

  return {
    props: {
      userProfileData,
      initialFollowerData: mockData, // followerData" 처음에는 서버 사이드에서 FollowerData를 받아오고 이후 csr로 동작 (팔로우 언팔로우에 따라 데이터가 바뀜)
    },
  };
}

const FollowerPage = ({ userProfileData, initialFollowerData }: FollowerPageProps) => {
  // Todo: followerData 팔로우 언팔로우에 따라 csr로 상태 관리 (react-query 사용)

  return (
    <main className="flex min-h-screen flex-grow flex-col items-center bg-grey">
      <section className="mt-8">
        <UserProfile
          userName={userProfileData.userName}
          description={userProfileData.description}
          imageURL={userProfileData.imageURL}
          follower={userProfileData.follower}
          following={userProfileData.following}
        />
      </section>
      <section className="mt-16 flex gap-16">
        <FollowerList
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
        />
      </section>
    </main>
  );
};

export default FollowerPage;

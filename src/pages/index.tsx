import { useRouter } from 'next/router';

import MainButton from '@/components/main/Button';

function MainPage() {
  const router = useRouter();
  const onClickToken = () => {
    router.push('https://github.com/settings/tokens');
  };
  const onClickFollowList = () => {
    router.push('/follower');
  };

  return (
    <main className={`text-blue-600 flex min-h-full flex-grow flex-col justify-center bg-grey text-[3rem]`}>
      <h2 className="text-center">메인페이지</h2>
      <MainButton className="w-fit bg-light_grey" text="Github 토큰 만들러 가기" onClick={onClickToken} />
      <MainButton className="bg-blue" text="나의 맞팔 확인하기" onClick={onClickFollowList} />
    </main>
  );
}

export default MainPage;

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
    <main
      className={`text-blue-600 flex min-h-full flex-grow flex-col items-center justify-center bg-grey text-[3rem]`}>
      <section className={`flex w-[100rem] flex-col justify-start rounded-[15px] border-2 border-black p-10`}>
        <MainButton className="mb-[1rem] w-fit bg-light_grey" text="Github 토큰 만들러 가기" onClick={onClickToken} />
        <p className={`mb-[3rem] text-[1.5rem]`}>﹒ 토큰 발급 시 권한 user(Update ALL user data)를 체크해주세요!</p>
        <input className={`black mb-[4rem] h-[4.5rem] rounded-[10px] p-5 text-[1.5rem] text-grey`} />
        <MainButton className="bg-blue" text="나의 맞팔 확인하기" onClick={onClickFollowList} />
      </section>
    </main>
  );
}

export default MainPage;

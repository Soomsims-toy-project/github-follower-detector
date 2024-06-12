import Link from 'next/link';
import { ChangeEvent, useState } from 'react';

function MainPage() {
  const [token, setToken] = useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const onClickFollowList = () => {
    sessionStorage.setItem('token', token);
  };

  return (
    <main
      className={`text-blue-600 flex min-h-full flex-grow flex-col items-center justify-center bg-grey text-[3rem]`}>
      <section className={`flex w-[100rem] flex-col justify-start rounded-[15px] border-2 border-black p-10`}>
        <Link
          className="mb-[1rem] w-fit rounded-[10px] bg-light_grey p-[1rem] text-center text-2xl font-bold"
          href="https://github.com/settings/tokens">
          Github 토큰 만들러 가기
        </Link>
        <p className={`mb-[3rem] text-[1.5rem]`}>﹒ 토큰 발급 시 권한 user(Update ALL user data)를 체크해주세요!</p>
        <input
          onChange={onChangeInput}
          className={`black mb-[4rem] h-[4.5rem] rounded-[10px] p-5 text-[1.5rem] text-grey`}
          placeholder="Github Token을 입력해주세요."
        />
        <Link href={'/follower'} className={`rounded-[10px] bg-blue text-center text-2xl font-bold`}>
          <button type="button" onClick={onClickFollowList} className="size-full p-[1rem]">
            나의 맞팔 확인하기
          </button>
        </Link>
      </section>
    </main>
  );
}

export default MainPage;

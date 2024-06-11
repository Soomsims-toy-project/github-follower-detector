import Image from 'next/image';

import FollowerButton from './FollowerButton';

interface IFollowerItem {
  githubID: string;
}

function FollowerItem({ githubID }: IFollowerItem) {
  return (
    <div className="flex h-40 items-center gap-36 border-b-2">
      <div className="flex items-center gap-6">
        <div className="overflow-hidden rounded-full">
          <Image
            src={'https://avatars.githubusercontent.com/u/127329855?v=4'}
            alt="프로필 사진 이미지"
            width={48}
            height={48}
          />
        </div>
        <h3 className="text-2xl">{githubID}</h3>
      </div>
      <FollowerButton className="border-blue bg-light_blue text-blue" text={'예시 버튼'} />
    </div>
  );
}

export default FollowerItem;

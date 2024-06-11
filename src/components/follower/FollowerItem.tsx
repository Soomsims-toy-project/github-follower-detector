import Image, { ImageLoaderProps } from 'next/legacy/image';

import FollowerButton from './FollowerButton';

interface FollowerItemProps {
  userName: string;
  imageURL: string;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function FollowerItem({ userName, imageURL }: FollowerItemProps) {
  return (
    <div className="flex h-40 w-[36rem] items-center justify-between border-b-2 border-light_grey">
      <div className="flex items-center gap-6">
        <div className="overflow-hidden rounded-full">
          <Image loader={imageLoader} src={imageURL} alt="프로필 사진 이미지" width={48} height={48} priority />
        </div>
        <h3 className="text-2xl">{userName}</h3>
      </div>
      <FollowerButton className="border-blue bg-light_blue text-blue" text={'예시 버튼'} />
    </div>
  );
}

export default FollowerItem;

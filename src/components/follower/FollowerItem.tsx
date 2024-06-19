import { useFollowUser, useUnfollowUser } from '@/apis/follower/queries';

import Image, { ImageLoaderProps } from 'next/legacy/image';

import FollowerButton from './FollowerButton';

interface FollowerItemProps {
  name: string;
  imageURL: string;
  type: 'follow' | 'unfollow';
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function FollowerItem({ name, imageURL, type }: FollowerItemProps) {
  const { mutate: followUser } = useFollowUser(name);
  const { mutate: unfollowUser } = useUnfollowUser(name);

  const handleClick = () => {
    if (type === 'follow') {
      unfollowUser();
    } else {
      followUser();
    }
  };

  return (
    <div className="flex h-40 w-full items-center justify-between border-b-2 border-light_grey">
      <div className="flex items-center gap-6">
        <div className="overflow-hidden rounded-full">
          <Image loader={imageLoader} src={imageURL} alt="프로필 사진 이미지" width={48} height={48} priority />
        </div>
        <h3 className="text-2xl">{name}</h3>
      </div>
      <FollowerButton type={type} onClick={handleClick} />
    </div>
  );
}

export default FollowerItem;

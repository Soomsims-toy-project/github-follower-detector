import Image, { ImageLoaderProps } from 'next/legacy/image';

interface UserProfileProps {
  userName: string;
  description: string;
  imageURL: string;
  follower: number;
  following: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

function UserProfile({ userName, description, imageURL, follower, following }: UserProfileProps) {
  return (
    <div className="flex w-[88rem] items-center justify-between rounded-2xl bg-dark_grey px-24 py-16">
      <div className="flex gap-24">
        <div className="overflow-hidden rounded-full">
          <Image loader={imageLoader} src={imageURL} alt="프로필 사진 이미지" width={144} height={144} priority />
        </div>
        <div className="flex flex-col gap-12">
          <h1 className="text-7xl">{userName}</h1>
          <p className="text-5xl">{description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="rounded-xl border px-8 py-5 text-center text-3xl">{`팔로워: ${follower}`}</div>
        <div className="rounded-xl border px-8 py-5 text-center text-3xl">{`팔로잉: ${following}`}</div>
      </div>
    </div>
  );
}

export default UserProfile;

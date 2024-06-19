import { UserProps } from '@/types/follower';

import FollowerItem from './FollowerItem';

interface FollowerListProps {
  number: number;
  followerInfoList: UserProps[];
  className?: string;
  type: 'follow' | 'unfollow';
}

function FollowerList({ number, followerInfoList, type }: FollowerListProps) {
  const numberStyle = type === 'unfollow' ? 'text-mid_red' : 'text-mid_blue';
  const title = type === 'unfollow' ? '맞팔이 아닌 사용자 수' : '맞팔중인 사용자 수';

  return (
    <div className="flex w-[42rem] flex-col rounded-xl bg-dark_grey py-12">
      <h1 className="mb-12 text-center text-4xl">
        {title} <span className={numberStyle}>{number}</span> 명
      </h1>
      <div className="max-h-[40rem] overflow-y-auto px-12">
        <ul>
          {followerInfoList.map((follower) => (
            <li key={follower.login}>
              <FollowerItem name={follower.login} imageURL={follower.avatar_url} type={type} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FollowerList;

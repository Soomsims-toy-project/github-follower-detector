import FollowerItem from './FollowerItem';

interface FollowerInfo {
  userName: string;
  imageURL: string;
}

interface FollowerListProps {
  title: string;
  number: number;
  followerInfoList: FollowerInfo[];
  className?: string;
}

function FollowerList({ title, number, followerInfoList, className }: FollowerListProps) {
  return (
    <div className="flex flex-col rounded-xl bg-dark_grey py-12">
      <h1 className="mb-12 text-center text-4xl">
        {title} <span className={className}>{number}</span> 명
      </h1>
      <div className="max-h-[40rem] overflow-y-auto px-12">
        <ul>
          {followerInfoList.map((follower) => (
            <li key={follower.userName}>
              <FollowerItem userName={follower.userName} imageURL={follower.imageURL} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FollowerList;

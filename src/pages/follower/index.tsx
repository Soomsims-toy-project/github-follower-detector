import FollowerList from '@/components/follower/FollowerList';
import UserProfile from '@/components/follower/UserProfile';

const mockData = [
  { userName: 'suwonthugger1', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger2', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger3', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger4', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger5', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger6', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger7', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger8', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger9', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger10', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger11', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger12', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger13', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger14', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger15', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger16', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger17', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
  { userName: 'suwonthugger18', imageURL: 'https://avatars.githubusercontent.com/u/127329855?v=4' },
];

const FollowerPage = () => {
  return (
    <main className="flex min-h-screen flex-grow flex-col items-center bg-grey">
      <section className="mt-8">
        <UserProfile
          userName={mockData[0].userName}
          description={'thug life'}
          imageURL={mockData[0].imageURL}
          follower={3}
          following={4}
        />
      </section>
      <section className="mt-16 flex gap-16">
        <FollowerList className="text-mid_blue" title="맞팔중인 사용자 수" number={48} followerInfoList={mockData} />
        <FollowerList className="text-mid_red" title="맞팔이 아닌 사용자 수" number={48} followerInfoList={mockData} />
      </section>
    </main>
  );
};

export default FollowerPage;

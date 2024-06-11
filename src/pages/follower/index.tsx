import FollowerItem from '@/components/follower/FollowerItem';

const FollowerPage = () => {
  return (
    <div className="flex min-h-screen flex-grow bg-grey">
      <p>맞팔 확인 페이지</p>
      <div className="flex flex-col">
        <FollowerItem githubID="suwonthugger" />
        <FollowerItem githubID="suwonthugger" />
        <FollowerItem githubID="suwonthugger" />
      </div>
    </div>
  );
};

export default FollowerPage;

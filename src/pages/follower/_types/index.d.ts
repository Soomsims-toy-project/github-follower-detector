interface Follower {
  userName: string;
  imageURL: string;
}

interface UserProfileData {
  userName: string;
  description: string;
  imageURL: string;
  follower: number;
  following: number;
}

export interface FollowerPageProps {
  userProfileData: UserProfileData;
  initialFollowerData: Follower[];
}

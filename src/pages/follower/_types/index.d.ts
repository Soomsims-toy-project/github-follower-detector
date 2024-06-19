interface FollowerProps {
  name: string;
  avatar_url: string;
}

export interface UserProfileDataProps {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  following: number;
}

export interface FollowerPageProps {
  userProfileData: UserProfileDataProps;
  initialFollowerData: FollowerProps[];
}

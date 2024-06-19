import { MouseEventHandler } from 'react';

interface FollowerButtonProps {
  onClick?: MouseEventHandler;
  type: 'unfollow' | 'follow';
}

function FollowerButton({ onClick, type }: FollowerButtonProps) {
  const buttonStyle = `rounded-lg border px-3 py-2 text-center text-xl ${type === 'unfollow' ? 'border-blue bg-light_blue text-blue' : 'border-red bg-light_red text-red'}`;
  const buttonText = type === 'follow' ? '언팔로우' : '맞팔하기';

  return (
    <button className={buttonStyle} onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default FollowerButton;

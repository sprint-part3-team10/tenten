import Image from 'next/image';
import leftArrow from '@/public/icons/leftArrow.svg';

interface CloseButtonProps {
  onClose: () => void;
  size: number;
}

export default function CloseButton({ onClose, size }: CloseButtonProps) {
  return (
    <div
      onClick={onClose}
      style={{
        cursor: 'pointer',
      }}
    >
      <Image src={leftArrow} width={size} height={size} alt='뒤로가기' />
    </div>
  );
}

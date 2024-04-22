import Image from 'next/image';
import backSpace from '@/public/icons/backSpace.svg';

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
      <Image src={backSpace} width={size} height={size} alt='X버튼' />
    </div>
  );
}

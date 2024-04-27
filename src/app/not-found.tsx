import Link from 'next/link';
import Image from 'next/image';
import warning from '@/public/icons/modalWarning.svg';
import notfound from '@/public/images/404.png';
import './notFound.scss';

export default function NotFound() {
  return (
    <div className='container404'>
      <div className='errorImage'>
        <Image
          src={notfound}
          fill
          priority
          alt='404페이지'
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h1 className='errorTitle'>404 Not Found</h1>
      <Image src={warning} alt='느낌표 아이콘' width={60} height={80} />
      <p className='errorMessage'>해당 페이지를 찾을 수 없어요.</p>
      <Link href='/' className='returnHome'>
        홈으로 돌아가기
      </Link>
    </div>
  );
}

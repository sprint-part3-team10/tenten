import Link from 'next/link';
import styles from './Footer.module.scss';
import Envelope from '@/public/icons/envelope.svg';
import Facebook from '@/public/icons/facebook.svg';
import Instagram from '@/public/icons/instagram.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div>
        <span className={styles.copyright}>©codeit - 2023</span>
        <div>
          <Link className={styles.link} href='/privacy'>
            Privacy Policy
          </Link>
          <Link className={styles.link} href='/faq'>
            FAQ
          </Link>
        </div>
        <div>
          <Link href='https://www.mail.google.com/'>
            <Image src={Envelope} alt='envelope Logo' width={25} height={25} />
          </Link>
          <Link href='https://www.facebook.com/'>
            <Image src={Facebook} alt='facebook Logo' width={25} height={25} />
          </Link>
          <Link href='https://www.instagram.com/'>
            <Image
              src={Instagram}
              alt='instagram Logo'
              width={25}
              height={25}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

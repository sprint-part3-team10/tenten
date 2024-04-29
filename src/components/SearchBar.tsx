'use client';

import Image from 'next/image';
import search from '@/public/icons/search.svg';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  const [searchShop, setSearchShop] = useState('');
  const router = useRouter();
  const pathName = usePathname();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchShop(event.target.value);
  };

  const handlePressKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchShop) {
        router.push(`/search?q=${searchShop}`);
      }
    }

    if (event.key === 'Escape') {
      setSearchShop('');
    }
  };

  useEffect(() => {
    if (!pathName.includes('search')) {
      setSearchShop('');
    }
  }, [pathName]);

  return (
    <div className={styles.container}>
      <Image src={search} width={20} height={20} alt='검색' />
      <input
        className={styles.searchInput}
        placeholder='가게 이름으로 찾아보세요.'
        value={searchShop}
        onChange={handleChangeInput}
        onKeyDown={handlePressKey}
      />
    </div>
  );
}

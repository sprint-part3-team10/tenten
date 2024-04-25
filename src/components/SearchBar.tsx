'use client';

import Image from 'next/image';
import search from '@/public/icons/search.svg';
import styles from './SearchBar.module.scss';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar() {
  const [searchShop, setSearchShop] = useState('');
  const router = useRouter();

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchShop(event.target.value);
  };

  const handlePressKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (searchShop) {
        router.push(`/search?q=${searchShop}`);
      }
    }
    // ESC를 누를 경우, search 내용 지워짐
    if (event.key === 'Escape') {
      setSearchShop('');
    }
  };

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

import { useState } from 'react';

function usePagination(limit: number) {
  const [selectedPage, setSelectedPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const handlePageChange = (page: number) => {
    setSelectedPage(page);
    setOffset((page - 1) * limit);
  };

  return { selectedPage, offset, handlePageChange };
}

export default usePagination;

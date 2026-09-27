import { useState } from 'react';

export const usePagination = (initialPage = 0, initialSize = 10) => {
  const [page, setPage] = useState(initialPage);
  const [size, setSize] = useState(initialSize);

  return { page, size, setPage, setSize, nextPage: () => setPage((p) => p + 1), prevPage: () => setPage((p) => Math.max(0, p - 1)) };
};

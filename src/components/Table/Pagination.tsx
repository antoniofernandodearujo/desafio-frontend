import React from 'react';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps){
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        className={`mx-1 px-3 py-1 border rounded-full ${i === currentPage ? 'bg-gray-400 text-white' : 'bg-white text-gray-700 border-gray-300'}`}
        onClick={() => onPageChange(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-center items-center mt-4 space-x-2">
      <button
        className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-full"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        Anterior
      </button>
      {pages}
      <button
        className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-full"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        >
          Próximo
        </button>
      </div>
    );
};
  

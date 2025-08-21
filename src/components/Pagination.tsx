import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2; // Number of pages to show around the current page

    const left = currentPage - delta;
    const right = currentPage + delta;

    let l = 1;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pages.push(i);
      } else if (i - l > 1) {
        pages.push('...');
      }
      l = i;
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex justify-center items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Previous
      </button>

      <ul className="inline-flex items-center -space-x-px">
        {pageNumbers.map((page, index) => (
          <li key={index}>
            {typeof page === 'number' ? (
              <button
                onClick={() => onPageChange(page)}
                className={`px-3 py-2 leading-tight border border-gray-400 dark:border-gray-600 ${page === currentPage
                  ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                  : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                }`}
              >
                {page}
              </button>
            ) : (
              <span className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-400 dark:border-gray-600 cursor-default">
                {page}
              </span>
            )}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;

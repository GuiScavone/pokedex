import React from 'react'

const Pagination = () => {
  const pages = [];
  for(let i=1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page) => (
      <button   
      key={page}
      onClick={() => onPageChange(page)}
      disable={page === currentPage}
      >
        {page}
      </button>
     ))}
    </div>
  );
};

export default Pagination;

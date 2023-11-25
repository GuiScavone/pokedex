// import React from 'react'

// const Pagination = () => {
//   const pages = [];
//   for(let i=1; i <= totalPages; i++) {
//     pages.push(i);
//   }
//   return (
//     <div>
//       {pages.map((page) => (
//       <button   
//       key={page}
//       onClick={() => onPageChange(page)}
//       disable={page === currentPage}
//       >
//         {page}
//       </button>
//      ))}
//     </div>
//   );
// };

// export default Pagination;


import React from "react";
import { PaginationStyled } from "./styled";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return (
        <PaginationStyled>
            <button onClick={onLeftClick}><div>◀️</div></button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}><div>▶️</div></button>
        </PaginationStyled>
    )
}

export default Pagination;
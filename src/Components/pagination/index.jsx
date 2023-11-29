import React from "react";
import { PaginationStyled, ArrowButton } from "./styled";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <PaginationStyled>
      <ArrowButton onClick={onLeftClick} className="button-paginate">
        -
      </ArrowButton>
      <div>
        {page} de {totalPages}
      </div>
      <ArrowButton onClick={onRightClick} className="button-paginate">
        +
      </ArrowButton>
    </PaginationStyled>
  );
};

export default Pagination;

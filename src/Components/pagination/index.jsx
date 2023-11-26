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
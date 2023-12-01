import React from "react";
import { PaginationStyled, ArrowButton, ScrollToTopButton, BackHome } from "./styled";
import { Link } from "react-router-dom";
import backball from "../../assets/pokeball.png";


const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <PaginationStyled>
      <BackHome>
      <Link to="/">
  <button>
    <img src={backball} alt="BackHome" />
    <p>Back Home</p>
  </button>
</Link>
</BackHome>
      <ArrowButton onClick={onLeftClick} className="button-paginate">
        -
      </ArrowButton>
      <div>
        {page} de {totalPages}
      </div>
      <ArrowButton onClick={onRightClick} className="button-paginate">
        +
      </ArrowButton>
      <BackHome>
      <ScrollToTopButton onClick={scrollToTop}>
  <button>
    <img src={backball} alt="Back Top Page" />
    <p>Scroll Top Page</p>
  </button>
</ScrollToTopButton>
</BackHome>
    </PaginationStyled>
  );
};

export default Pagination;


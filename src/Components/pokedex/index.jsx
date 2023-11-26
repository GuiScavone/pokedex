import React from "react";
import Pagination from "../pagination";
import Pokemon from "../pokemon";
import { PokeGrid } from "./styled";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;
  
  const onLeftClickHandler = () => {
      if(page > 0) {
          setPage(page-1)
      }
  }
  const onRightClickHandler = () => {
      if(page+1 !== totalPages){
          setPage(page+1)
      }
  };

return (
    <div>
      <div className="pokedex-header">
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, segura fera...</div>
      ) : (
        <PokeGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </PokeGrid>
      )}
    </div>
  );
};


export default Pokedex;

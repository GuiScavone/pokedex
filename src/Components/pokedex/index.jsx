import React from "react";
import Pagination from "../pagination";
import Pokemon from "../pokemoncard";
import { PokeGrid } from "./styled";
import Loading from "../../assets/pikachu-running.gif";

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

      </div>
      {loading ? (
        <div>
            <img src={Loading} alt="pikachu running"/>
        </div>
      ) : (
        <PokeGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </PokeGrid>
      )}
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
    </div>
  );
};


export default Pokedex;

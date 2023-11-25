// // import styled from 'styled-components';

// // // export const GridContainer = styled.div`
// // //  display: grid;
// // //  grid-template-columns: repeat(4, 3fr);
// // //  gap: 10px;
// // //  padding: 50px;
// // // `;

// // // export const Card = styled.div`
// // //   display: grid;
// // //   flex-direction: column;
// // //   align-items: center;
// // //   justify-content: space-around;
// // //   width: 200px;
// // //   height: 200px;
// // //   padding: 20px 1px;
// // //   margin: 10px 0;
// // //   text-align: center;
// // //   position: relative;
// // //   box-shadow: 0 10px 15px -3px rgba(33, 150, 243, 0.4), 0 4px 6px -4px rgba(33, 150, 243, 0.4);
// // //   border-radius: 10px;
// // //   background-color: #6B6ECC;
// // //   background: linear-gradient(180deg, rgba(153, 83, 195, 0.50) 0%, #3DA33A 100%)
// // // `;


// // // export const Content = styled.div`
// // //   padding: 20px;
// // // `;

// // // export const Price = styled.div`
// // //   color: white;
// // //   font-weight: 800;
// // //   font-size: 50px;
// // //   text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
// // // `;

// // // export const Description = styled.div`
// // //   color: rgba(255, 255, 255, 0.6);
// // //   margin-top: 10px;
// // //   font-size: 14px;
// // // `;

// // // export const Title = styled.div`
// // //   font-weight: 800;
// // //   text-transform: uppercase;
// // //   color: rgba(255, 255, 255, 0.64);
// // //   margin-top: 10px;
// // //   font-size: 10px;
// // //   letter-spacing: 1px;
// // // `;

// // // export const Button = styled.button`
// // //   -webkit-user-select: none;
// // //   -moz-user-select: none;
// // //   user-select: none;
// // //   border: none;
// // //   outline: none;
// // //   color: rgb(255 255 255);
// // //   text-transform: uppercase;
// // //   font-weight: 700;
// // //   font-size: 0.75rem;
// // //   padding: 0.75rem 1.5rem;
// // //   background-color: rgb(33 150 243);
// // //   border-radius: 0.5rem;
// // //   width: 90%;
// // //   text-shadow: 0px 4px 18px #2c3442;
// // //   cursor: pointer;
// // // `;

// // // export const PokeImg = styled.img `
// // // align-items: center;
// // //   width: 86;
// // //   height: 85;
// // //   max-width: 100%;
// // // `;







// import styled from 'styled-components';

// export const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   gap: 10px;
//   padding: 50px;
// `;

// export const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   width: 200px;
//   height: 300px; /* Aumentei a altura para acomodar a imagem e o conteúdo */
//   padding: 20px 10px; /* Ajustei o padding */
//   margin: 10px;
//   text-align: center;
//   position: relative;
//   box-shadow: 0 10px 15px -3px rgba(33, 150, 243, 0.4), 0 4px 6px -4px rgba(33, 150, 243, 0.4);
//   border-radius: 10px;
//   background-color: #6B6ECC;
//   background: linear-gradient(180deg, rgba(153, 83, 195, 0.50) 0%, #3DA33A 100%);
// `;

// export const Content = styled.div`
//   padding: 20px;
// `;

// export const Price = styled.div`
//   color: white;
//   font-weight: 800;
//   font-size: 20px; /* Ajustei o tamanho da fonte */
//   text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.42);
// `;

// export const Description = styled.div`
//   color: rgba(255, 255, 255, 0.6);
//   margin-top: 10px;
//   font-size: 14px;
// `;

// export const Title = styled.div`
//   font-weight: 800;
//   text-transform: uppercase;
//   color: rgba(255, 255, 255, 0.64);
//   margin-top: 10px;
//   font-size: 16px; /* Ajustei o tamanho da fonte */
//   letter-spacing: 1px;
// `;

// export const Button = styled.button`
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   user-select: none;
//   border: none;
//   outline: none;
//   color: rgb(255 255 255);
//   text-transform: uppercase;
//   font-weight: 700;
//   font-size: 0.75rem;
//   padding: 0.75rem 1.5rem;
//   background-color: rgb(33 150 243);
//   border-radius: 0.5rem;
//   width: 90%;
//   text-shadow: 0px 4px 18px #2c3442;
//   cursor: pointer;
// `;

// export const PokeImg = styled.img`
//   width: 100%; 
//   height: auto;
//   border-radius: 50%; 
//   margin-top: 10px;
// `;

// export const Typebox = styled.div`
//   color: white;
//   padding: 5px;
//   border-radius: 5px;
//   margin: 0 5px;
// `;


import styled from "styled-components";


export const PokemonCardContainer = styled.div`
 border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 250px; /* Adjusted to take full width within the grid */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PokemonImageContainer = styled.div`
  text-align: center;
  padding: 16px;
  background-color: #f0f0f0;
  
`;

export const PokemonImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const PokemonName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const PokemonId = styled.div`
  font-size: 1rem;
  color: #666;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PokemonType = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PokemonTypeText = styled.div`
  background-color: #e0e0e0;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 4px;
`;

export const PokemonHeartButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Button = styled.button`
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: none;
  outline: none;
  color: rgb(255 255 255); 
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.75rem 1.5rem;
  background-color: rgb(33 150 243);
  border-radius: 0.5rem;
  width: 90%;
  text-shadow: 0px 4px 18px #2c3442;
  cursor: pointer;
`;
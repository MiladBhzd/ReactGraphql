import React from "react";
import { useQuery } from "@apollo/client";
import Pokemon from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 20 },
  });
  console.log(pokemons);
  return (
    <div className="container">
      {pokemons &&
        pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
    </div>
  );
};

export default PokemonsContainer;

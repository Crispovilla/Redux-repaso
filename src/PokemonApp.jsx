import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { isLoading, pokemons, page, url } = useSelector(
    (state) => state.pokemons
  );

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <h1>Pokemon App</h1>
      <hr />
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
      {pokemons.map(({ name, url }) => (
        <div key={name}>
          <ul>
            <li>{name}</li>
          </ul>
          <img src={url} alt="pokemon-imagen" />
        </div>
      ))}
    </>
  );
};

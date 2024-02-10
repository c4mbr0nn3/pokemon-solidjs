import { For, createResource } from "solid-js";

const fetchPokemon = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const { results } = await response.json();
  const randomPokemon = results.sort(() => 0.5 - Math.random()).slice(0, 20);
  const requests = randomPokemon.map((pokemon) =>
    fetch(pokemon.url).then((res) => res.json())
  );
  const pokemons = await Promise.all(requests);

  return pokemons;
};

function Home() {
  const [pokemon] = createResource(fetchPokemon);
  return (
    <>
      <h1 class="text-3xl text-center text-white p-5 rounded shadow bg-red-500">
        My Pokedex
      </h1>
      <h2 class="text-xl pt-3">Pokemon List</h2>
      <span>{pokemon.loading && "Loading..."}</span>
      <div class="grid grid-cols-4 gap-3 py-3">
        <For each={pokemon()}>
          {(item) => (
            <div class="flex flex-col h-40 bg-white rounded shadow p-3">
              <div class="text-lg font-mono font-thin capitalize line-clamp-1">
                {item.name}
              </div>
              <div>
                <figure>
                  <img src={item.sprites.front_shiny} alt={item.name} />
                </figure>
              </div>
            </div>
          )}
        </For>
      </div>
    </>
  );
}

export default Home;

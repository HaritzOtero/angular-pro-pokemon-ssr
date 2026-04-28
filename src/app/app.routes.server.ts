import { RenderMode, ServerRoute } from '@angular/ssr';

const TOTAL_POKEMONS = 10;

export const serverRoutes: ServerRoute[] = [
  {
    path: 'pokemons/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const pokemonNameList = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`,
      ).then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon names');
        }
        return response.json();
      });

      return pokemonNameList.results.map((pokemon: { name: string }) => ({
        id: pokemon.name,
      }));
    },
  },

  {
    path: 'pokemons/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const pokemonNameList = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`,
      ).then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch Pokémon names');
        }

        return response.json();
      });

      const pokemonList = pokemonNameList.results.map((pokemon: { name: string }) => ({
        id: pokemon.name,
      }));

      return pokemonList;
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];

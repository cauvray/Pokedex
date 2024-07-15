import type { PartialPokemon } from '$lib/models/Pokemon';
import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	const data: PartialPokemon[] = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then((response) => response.json())
		.then((data) =>
			data.results.map((pokemon: { name: string; url: string }) => {
				const id = pokemon.url.split('/')[6];
				return {
					id,
					name: pokemon.name,
					spriteNormalUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
				};
			})
		);
	return { pokemons: data };
};

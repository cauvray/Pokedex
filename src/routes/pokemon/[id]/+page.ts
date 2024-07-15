import type { Pokemon } from '$lib/models/Pokemon';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	const id = params.id;
	const data: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then((response) => response.json())
		.then((pokemon) => {
			return {
				id: pokemon.id,
				name: pokemon.name,
				abilities: pokemon.abilities.map(
					(ability: { ability: { name: string; url: string } }) => ability.ability.name
				),
				types: pokemon.types.map((type: { type: { name: string; url: string } }) => type.type.name),
				height: pokemon.height,
				weight: pokemon.weight,
				spriteNormalUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
				spriteShinyUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`
			};
		});
	return data;
};

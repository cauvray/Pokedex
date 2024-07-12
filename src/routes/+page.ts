export const load = async () => {
	const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
		.then((response) => response.json())
		.then((data) =>
			data.results.map((pokemon: { name: string; url: string }) => {
				const id = pokemon.url.split('/')[6];
				return {
					id,
					name: pokemon.name,
					// types: pokemon.types.map((type) => type.type.name),
					spriteNormalUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
					spriteShinyUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`
				};
			})
		);
	return { pokemons: data };
};

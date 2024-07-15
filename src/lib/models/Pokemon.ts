import type { PokemonTypeEnum } from '$lib/enum/TypeEnum';

export type Pokemon = {
	id: string;
	name: string;
	spriteNormalUrl: string;
	spriteShinyUrl: string;
	abilities: string[];
	types: PokemonTypeEnum[];
	height: number;
	weight: number;
};

export type PartialPokemon = Pick<Pokemon, 'id' | 'name' | 'spriteNormalUrl'>;

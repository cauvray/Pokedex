<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PartialPokemon } from '$lib/models/Pokemon';
	import { handleError } from '$lib/utils/image-not-found';
	import { fly } from 'svelte/transition';

	export let pokemon: PartialPokemon;

	const goToPokemonDetails = (pokemonId: string) => {
		goto(`/pokemon/${pokemonId}`);
	};
</script>

<button
	class="w-36 relative group"
	in:fly={{ x: 10, delay: 50 }}
	on:click={() => goToPokemonDetails(pokemon.id)}
>
	<div class="flex flex-col items-center cardBackground">
		<!-- Pokemon Name-->
		<div class="w-full text-center items-center">
			<h3 class="pokemonName uppercase">
				{pokemon.name}
			</h3>
		</div>
		<!-- Pokemon Pic-->
		<div class="flex flex-row justify-center items-center m-2 pokePicBackground">
			<div
				class="absolute w-24 h-24 -z-50 rounded-full group-hover:border-blue-600 group-hover:border-8 duration-500"
			></div>
			<img
				class="group-hover:-translate-y-0.5 group-hover:scale-150 group-hover:rotate-3 duration-300"
				src={pokemon.spriteNormalUrl}
				alt="pokemon pic"
				on:error={handleError}
			/>
		</div>
	</div>
</button>

<style>
	.pokemonName {
		@apply text-lg
      text-slate-700
      font-bold
      group-hover:text-sm
      group-hover:text-blue-600
      duration-500;
	}

	.cardBackground {
		@apply bg-blue-100/50
      p-2
      rounded-md
      drop-shadow-md
      group-hover:bg-transparent
      duration-300
      transition-all
      ease-linear;
	}

	.pokePicBackground {
		@apply bg-blue-200
      rounded-full
      group-hover:bg-transparent
      ease-linear
      duration-200;
	}
</style>

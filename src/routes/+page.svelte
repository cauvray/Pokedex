<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import type { PartialPokemon } from '$lib/models/Pokemon';
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
	let filteredPokemons: PartialPokemon[] = data.pokemons;

	const handleSearchFor = (e: Event) => {
		const searchText = (e.target as HTMLInputElement).value;

		if (!data) return;

		if (searchText.length > 0) {
			filteredPokemons = data.pokemons.filter((pokemon: PartialPokemon) => {
				return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
			});
		} else {
			filteredPokemons = data.pokemons;
		}
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="w-3/5 h-14 flex m-auto items-center">
		<input
			type="text"
			class="w-full h-full outline-none rounded-full drop-shadow-md text-center"
			placeholder="Search a pokemon..."
			on:keyup={handleSearchFor}
		/>
	</div>

	{#if !filteredPokemons || filteredPokemons.length === 0}
		<p class="text-center">No pokemons found</p>
	{:else}
		<div class="flex flex-wrap justify-center gap-6" in:fade={{ delay: 500 }}>
			{#each filteredPokemons as pokemon}
				<PokemonCard {pokemon} />
			{/each}
		</div>
	{/if}
</div>

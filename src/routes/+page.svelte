<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import type { Pokemon } from '$lib/models/Pokemon';
	import type { KeyboardEventHandler } from 'svelte/elements';
	import { fade } from 'svelte/transition';

	export let data: any;
	let filteredPokemons: Pokemon[] = data.pokemons;

	const handleSearchFor = (e: any) => {
		const searchText = e.target.value;

		if (!data) return;

		if (searchText.length > 0) {
			filteredPokemons = data.pokemons.filter((pokemon: Pokemon) => {
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

<div class="p-5">
	<div class="w-full h-14 mb-5 px-7 border rounded-full flex items-center">
		<!-- <span class="h-6 w-6 text-gray-600 mr-4"><GiMagnifyingGlass /></span> -->
		<input
			type="text"
			class="w-full h-full outline-none"
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

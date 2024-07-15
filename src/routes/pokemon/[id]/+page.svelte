<script lang="ts">
	import PokemonDetailImage from '$lib/components/PokemonDetailImage.svelte';
	import PokemonInfoCard from '$lib/components/PokemonInfoCard.svelte';
	import PokemonTypeBadge from '$lib/components/PokemonTypeBadge.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Pokemon {data.name}</title>
</svelte:head>

<div class={`flex flex-col gap-6 w-2/3 p-4 mx-auto rounded-md drop-shadow-md bg-white/50`}>
	<div class="w-full text-center items-center">
		<p class="pokemonName uppercase font-extrabold text-4xl">
			{data.name}
		</p>
	</div>
	<div class="flex gap-2 justify-center">
		{#each data.types as type}
			<PokemonTypeBadge {type} />
		{/each}
	</div>
	<PokemonDetailImage pokemonImageUrl={data.spriteNormalUrl} type={data.types[0]} />
	<div class="flex mx-auto">
		<PokemonInfoCard title={'Weight'} values={[data.weight]} />
		<PokemonInfoCard title={'Height'} values={[data.height]} />
	</div>

	<div class="w-1/2 mx-auto">
		<PokemonInfoCard title={'Abilities'} values={data.abilities} />
	</div>
	<PokemonDetailImage pokemonImageUrl={data.spriteShinyUrl} type={data.types[0]} />
</div>

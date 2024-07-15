<script lang="ts">
	import { bgColors, borderColors } from '$lib/enum/TypeColor';
	import type { PokemonTypeEnum } from '$lib/enum/TypeEnum';
	import { handleError } from '$lib/utils/image-not-found';

	export let pokemonImageUrl: string;
	export let type: PokemonTypeEnum;
</script>

<div
	class={`mx-auto group flex flex-row justify-center items-center m-2 ${bgColors.get(
		type
	)} bg-opacity-20 rounded-full w-fit`}
>
	<div
		class={`absolute w-56 h-56 -z-50 rounded-full ${borderColors.get(
			type
		)} group-hover:border-8 duration-200`}
	></div>
	<img
		class={`group-hover:-translate-y-0.5 group-hover:scale-125 group-hover:rotate-3 duration-300`}
		src={pokemonImageUrl}
		alt="pokemon pic"
		width="200"
		on:error={handleError}
	/>
</div>

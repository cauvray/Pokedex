<script lang="ts">
	import { bgColors } from '$lib/enum/TypeColor';
	import type { PokemonTypeEnum } from '$lib/enum/TypeEnum';

	export let type: PokemonTypeEnum;
</script>

<div class={`uppercase text-sm font-semibold py-1 px-4 rounded-full ${bgColors.get(type)}`}>
	{type}
</div>

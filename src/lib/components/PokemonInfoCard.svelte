<script lang="ts">
	export let title: string;
	export let values: string[] | number[];
</script>

<table class="w-full border border-slate-200">
	<thead>
		<tr class="bg-slate-200">
			<th scope="col" class="text-lg">{title}</th>
		</tr>
	</thead>
	<tbody>
		{#each values as value}
			<tr>
				<td class="text-center capitalize">{value}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	th,
	td {
		padding: 0.5rem;
	}
</style>

<script lang="ts" module>
	import { type Snippet } from 'svelte';

	interface HeaderBrandProps {
		title: string;
		hamburger?: Snippet;
	}
</script>

<script lang="ts">
	const { hamburger, title }: HeaderBrandProps = $props();
</script>

<div class="flex items-center gap-2">
	{@render hamburger?.()}
	<a href="/"> <h1 class="text-base font-extrabold text-nowrap lg:text-xl">{title}</h1></a>
</div>

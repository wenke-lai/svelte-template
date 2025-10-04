<script lang="ts" module>
	import { type Snippet } from 'svelte';

	interface MainClasses {
		main?: string;
		div?: string;
	}

	interface MainProps {
		classes?: MainClasses;
		children: Snippet;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	const { children, classes }: MainProps = $props();
</script>

<main class={cn('relative w-full', classes?.main)}>
	<div class={cn('space-y-8 p-4', classes?.div)}>
		{@render children()}
	</div>
</main>

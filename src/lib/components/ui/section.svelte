<script lang="ts" module>
	import type { Snippet } from 'svelte';

	interface Classes {
		section?: string;
		div?: string;
	}

	interface SectionProps {
		children: Snippet;
		classes?: Classes;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	const { children, classes }: SectionProps = $props();
</script>

<section class={cn('relative w-full', classes?.section)}>
	<div class={cn('container mx-auto', classes?.div)}>
		{@render children()}
	</div>
</section>

<script lang="ts" module>
	import { type Snippet } from 'svelte';

	interface HeaderActionProps {
		children: Snippet;
	}
</script>

<script lang="ts">
	const { children }: HeaderActionProps = $props();
</script>

<div class="flex h-full items-center gap-2">
	{@render children()}
</div>

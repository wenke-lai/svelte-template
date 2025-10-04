<script lang="ts" module>
	interface Classes {
		dock?: string;
		icons?: string;
		label?: string;
		placeholder?: string;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import { IconBookmarkOff, IconHome, IconSettingsOff } from '@tabler/icons-svelte';

	const { classes }: { classes?: Classes } = $props();

	let c = $state(false);

	const isclick = () => {
		c = true;
	};
</script>

<div class={cn('h-16', classes?.placeholder)}></div>

<div class={cn('dock', classes?.dock)}>
	<a href="/">
		<IconHome class={cn(classes?.icons)} />
		<span class={cn('dock-label', classes?.label)}>Home</span>
	</a>

	<a href="/articles" class="pointer-events-none cursor-not-allowed text-gray-400">
		<IconBookmarkOff class={cn(classes?.icons)} />
		<span class={cn('dock-label', classes?.label)}>Bookmark</span>
	</a>

	<a href="/settings" class="pointer-events-none cursor-not-allowed text-gray-400">
		<IconSettingsOff class={cn(classes?.icons)} />
		<span class={cn('dock-label', classes?.label)}>Settings</span>
	</a>
</div>

<script lang="ts" module>
	interface Classes {
		svg?: string;
	}

	interface ThemeControllerProps {
		classes?: Classes;
	}
</script>

<script lang="ts">
	import { current, type Theme } from '$lib/stores/theme';
	import { cn } from '$lib/utils';
	import { IconMoon, IconSun } from '@tabler/icons-svelte';
	import { getContext } from 'svelte';

	const { classes }: ThemeControllerProps = $props();

	const theme = getContext<Theme>('theme');

	const handleToggle = () => {
		current.toggle(theme.light, theme.dark);
	};
</script>

<label class="swap swap-rotate">
	<!-- this hidden checkbox controls the state -->
	<input
		type="checkbox"
		class="theme-controller"
		checked={$current === theme.dark}
		onchange={handleToggle}
	/>

	<!-- sun icon -->
	<IconSun class={cn('swap-on size-8', classes?.svg)} />

	<!-- moon icon -->
	<IconMoon class={cn('swap-off size-8', classes?.svg)} />
</label>

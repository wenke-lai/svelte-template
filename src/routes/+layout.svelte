<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import ThemeController from '$lib/components/theme-controller.svelte';
	import { type Theme } from '$lib/stores/theme';
	import { setContext } from 'svelte';

	import '../app.css';

	let { children } = $props();

	const theme: Theme = { light: 'wireframe', dark: 'black' };
	setContext<Theme>('theme', theme);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<script>
		switch (localStorage.getItem('theme')) {
			case 'light':
				document.documentElement.setAttribute('data-theme', 'wireframe');
				break;
			case 'dark':
				document.documentElement.setAttribute('data-theme', 'black');
				break;
			default:
				localStorage.removeItem('theme');
		}
	</script>
</svelte:head>

<ThemeController />
{@render children?.()}

<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import ThemeController from '$lib/components/theme-controller.svelte';
	import { Footer, FooterDesktop, FooterDock } from '$lib/components/ui/footer';
	import {
		Header,
		HeaderActions,
		HeaderBrand,
		HeaderHamburger,
		HeaderNavbar,
		HeaderSignIn
	} from '$lib/components/ui/header';
	import Main from '$lib/components/ui/main.svelte';
	import { current, type Theme } from '$lib/stores/theme';
	import { onMount, setContext } from 'svelte';
	import { ClerkProvider } from 'svelte-clerk';

	import '../app.css';

	let { children } = $props();

	const theme: Theme = { light: 'wireframe', dark: 'black' };
	setContext<Theme>('theme', theme);

	const site = {
		title: 'Wenke Lai',
		description: 'Svelte Template Description',
		navLinks: [{ title: '快速連結', links: [{ href: '/', label: '首頁' }] }]
	};

	onMount(() => {
		switch (localStorage.getItem('theme')) {
			case 'light':
				current.set(theme.light);
				break;
			case 'dark':
				current.set(theme.dark);
				break;
			default:
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					current.set(theme.dark);
				} else {
					current.set(theme.light);
				}
		}
	});
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

<ClerkProvider>
	<Header classes={{ header: 'bg-base-200' }}>
		<HeaderBrand title={site.title}>
			{#snippet hamburger()}
				<HeaderHamburger classes={{ drawer: 'block lg:hidden', svg: 'size-6' }} links={[]} />
			{/snippet}
		</HeaderBrand>
		<HeaderNavbar
			classes={{ nav: 'hidden lg:block' }}
			links={[{ href: '/private', label: '受保護的頁面' }]}
		/>
		<HeaderActions>
			<ThemeController classes={{ svg: 'size-6' }} />
			<HeaderSignIn />
		</HeaderActions>
	</Header>

	<Main classes={{ main: 'lg:mb-12' }}>
		{@render children?.()}
	</Main>

	<Footer>
		<FooterDesktop
			classes={{ container: 'hidden lg:block' }}
			title={site.title}
			description={site.description}
			copyright={{ year: 2025, title: site.title }}
			navLinks={site.navLinks}
		/>
		<FooterDock classes={{ dock: 'fixed lg:hidden', placeholder: 'block lg:hidden' }} />
	</Footer>
</ClerkProvider>

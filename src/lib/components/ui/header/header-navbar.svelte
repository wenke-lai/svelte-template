<script lang="ts" module>
	interface HeaderNavbarClasses {
		nav?: string;
		ul?: string;
	}

	interface HeaderLink {
		label: string;
		href: string;
	}

	interface HeaderNavbarProps {
		links: HeaderLink[];
		classes?: HeaderNavbarClasses;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	const { links, classes }: HeaderNavbarProps = $props();
</script>

<nav class={cn(classes?.nav)}>
	<ul class={cn('menu menu-horizontal lg:menu-lg', classes?.ul)}>
		{#each links as link}
			<li><a href={link.href}>{link.label}</a></li>
		{/each}
	</ul>
</nav>

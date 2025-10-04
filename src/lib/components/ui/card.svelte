<script lang="ts" module>
	import { type Snippet } from 'svelte';

	interface Classes {
		card?: string;
		body?: string;
		title?: string;
		actions?: string;
	}

	interface CardProps {
		classes?: Classes;
		title?: string;
		href?: string;
		children?: Snippet;
		actions?: Snippet;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils';

	const { classes, href, title, children, actions }: CardProps = $props();
</script>

{#snippet card()}
	<div class={cn('card shadow-sm shadow-base-content/40', classes?.card)}>
		<div class={cn('card-body', classes?.body)}>
			<h4 class={cn('card-title capitalize', classes?.title)}>{title}</h4>
			{@render children?.()}

			{#if actions}
				<div class={cn('card-actions justify-end', classes?.actions)}>
					{@render actions?.()}
				</div>
			{/if}
		</div>
	</div>
{/snippet}

{#if href}
	<a {href}>
		{@render card?.()}
	</a>
{:else}
	{@render card?.()}
{/if}

<script lang="ts" module>
	interface Classes {
		container?: string;
		content?: string;
		section?: string;
		title?: string;
		link?: string;
		social?: string;
		copyright?: string;
	}

	interface Copyright {
		year: number;
		title: string;
	}

	interface Link {
		href: string;
		label: string;
	}

	interface NavLinks {
		title: string;
		links: Link[];
	}

	interface FooterDesktopProps {
		classes?: Classes;
		title: string;
		description: string;
		copyright: Copyright;
		navLinks: NavLinks[];
	}
</script>

<script lang="ts">
	import { cn } from '$lib/utils';
	import { IconBrandGithub, IconBrandThreads } from '@tabler/icons-svelte';

	const { classes, title, description, copyright, navLinks }: FooterDesktopProps = $props();

	const socialLinks = [
		{
			icon: IconBrandGithub,
			href: 'https://github.com/wenke-studio',
			label: 'GitHub'
		},
		{
			icon: IconBrandThreads,
			href: 'https://threads.net/@wenke_studio',
			label: 'Threads'
		}
	];
</script>

{#snippet renderNavLinks(navLinks: NavLinks)}
	<h3 class={cn('text-lg font-semibold text-base-content', classes?.title)}>
		{navLinks.title}
	</h3>

	<ul class="space-y-2">
		{#each navLinks.links as link}
			<li>
				<a
					href={link.href}
					class={cn(
						'text-sm text-base-content/70 transition-colors hover:text-primary',
						classes?.link
					)}>{link.label}</a
				>
			</li>
		{/each}
	</ul>
{/snippet}

<div class={cn('border-t border-base-content/10 bg-base-300', classes?.container)}>
	<div class={cn('mx-auto max-w-6xl px-6 py-8', classes?.content)}>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<!-- About Section -->
			<div class={cn('space-y-4', classes?.section)}>
				<h3 class={cn('text-lg font-semibold text-base-content', classes?.title)}>
					{title}
				</h3>
				<p class="text-sm leading-relaxed text-base-content/70">
					{description}
				</p>
			</div>

			<!-- Quick Links -->
			<div class={cn('space-y-4', classes?.section)}>
				{#each navLinks as navLink}
					{@render renderNavLinks(navLink)}
				{/each}
			</div>

			<!-- Social Media & Contact -->
			<div class={cn('space-y-4', classes?.section)}>
				<h3 class={cn('text-lg font-semibold text-base-content', classes?.title)}>聯絡方式</h3>
				<div class="flex space-x-4">
					{#each socialLinks as social}
						<a
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class={cn(
								'rounded-lg p-2 text-base-content/70 transition-colors hover:bg-base-200 hover:text-primary',
								classes?.social
							)}
							aria-label={social.label}
						>
							<social.icon class="size-5" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Copyright -->
		<div class="mt-8 border-t border-base-content/10 pt-6">
			<div class="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
				<p class={cn('text-sm text-base-content/60', classes?.copyright)}>
					© {copyright.year}
					{copyright.title}. All rights reserved.
				</p>
			</div>
		</div>
	</div>
</div>

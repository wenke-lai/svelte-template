import { paraglideMiddleware } from '$lib/paraglide/server';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { withClerkHandler } from 'svelte-clerk/server';
import { Security } from './utils/security';

const handleParaglide: Handle = ({ event, resolve }) =>
	paraglideMiddleware(event.request, ({ request, locale }) => {
		event.request = request;

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('%paraglide.lang%', locale)
		});
	});

export const handle = sequence(
	// Svelte Clerk
	withClerkHandler(),

	// Custom Security with Svelte Clerk
	({ event, resolve }) => {
		event.locals.security = new Security(event);
		return resolve(event);
	},

	// Paraglide
	handleParaglide
);

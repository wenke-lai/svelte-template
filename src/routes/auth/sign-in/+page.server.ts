import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	// If user is already authenticated, redirect to dashboard or the redirect_url
	if (locals.security.auth.userId) {
		const redirectUrl = url.searchParams.get('redirect_url') || '/private';
		redirect(303, redirectUrl);
	}

	// Return any data needed for the signin page
	return {
		redirectUrl: url.searchParams.get('redirect_url')
	};
};

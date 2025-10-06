import type { SessionAuthObject } from '@clerk/backend';
import { redirect, type RequestEvent } from '@sveltejs/kit';

export class Security {
	private readonly auth: SessionAuthObject;

	constructor(private readonly event: RequestEvent) {
		this.auth = event.locals.auth();
	}

	isAuthenticated() {
		if (!this.auth.userId) {
			redirect(307, '/auth/sign-in?redirect_url=/private');
		}
		return this;
	}

	async getToken() {
		const token = await this.auth.getToken();
		return token || '';
	}
}

import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';

export type ThemeName = 'wireframe' | 'black';

export type Theme = {
	light: ThemeName;
	dark: ThemeName;
};

export type Current = ThemeName | '';

function createThemeStore() {
	const { subscribe, set } = writable<Current>('');

	return {
		subscribe,
		set,
		toggle: (lightTheme: ThemeName, darkTheme: ThemeName) => {
			if (!browser) return;

			const currentTheme = get({ subscribe });
			const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
			const themeKey = newTheme === lightTheme ? 'light' : 'dark';

			localStorage.setItem('theme', themeKey);
			document.documentElement.setAttribute('data-theme', newTheme);
			set(newTheme);
		}
	};
}

export const current = createThemeStore();

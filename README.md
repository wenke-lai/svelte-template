# Svelte Template

## Quick Start

fork this project to development.

## Themes

This project uses [DaisyUI](https://daisyui.com/) for theming. To change themes, update the following files:

1. [src/lib/stores/theme.ts](src/lib/stores/theme.ts#L4) - Update `ThemeName` type:

   ```typescript
   export type ThemeName = 'cupcake' | 'dark';
   ```

2. [src/routes/+layout.svelte](src/routes/+layout.svelte#L20) - Update theme configuration:

   ```typescript
   const theme: Theme = { light: 'cupcake', dark: 'dark' };
   ```

3. [src/routes/+layout.svelte](src/routes/+layout.svelte#L53) - Update default theme:

   ```typescript
   document.documentElement.setAttribute('data-theme', 'cupcake');
   ```

4. [src/app.css](src/app.css#L6) - Add themes to daisyui plugin:

   ```css
   daisyui: {
       themes: [
           cupcake --default,
           dark,
       ],
   },
   ```

5. [src/app.css](src/app.css#L11) - Update dark mode variant:
   ```css
   @custom-variant dark (&:where([data-theme=dark], [data-theme=cupcake] *));
   ```

See [DaisyUI themes documentation](https://daisyui.com/docs/themes/) for more details.

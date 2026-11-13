
// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  // Tells Prettier to load the Astro layout formatting pipeline
  plugins: ['prettier-plugin-astro'],
  // Optional style customization variables
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  // Enforces Prettier to scan and format your .astro files correctly
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

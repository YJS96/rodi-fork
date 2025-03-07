module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 100,
  trailingComma: 'all',
  tabWidth: 2,
  singleQuote: true,
  bracketSpacing: true,
  semi: true,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
};

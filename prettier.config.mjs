/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  "arrowParens": "always",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "jsxSingleQuote": false,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "semi": true,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "es5",
  "useTabs": false,
  "tabWidth": 2
};

export default config;

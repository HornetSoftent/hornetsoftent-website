import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    // Ajoutez vos règles personnalisées ici
    rules: {
      "react/no-unescaped-entities": "off", // Désactive la règle
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
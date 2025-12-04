import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default tseslint.config(
    {
      ignores: ["**/node_modules", "**/dist", "**/build"]
    },

    // Базовые правила ESLint
    js.configs.recommended,

    // TypeScript правила
    ...tseslint.configs.recommended,

    // React правила
    pluginReact.configs.flat.recommended,

    // Кастомные настройки
    {
      files: ["**/*.{js,jsx,ts,tsx}"],

      languageOptions: {
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
          ecmaFeatures: {
            jsx: true
          }
        },

        globals: {
          ...globals.browser,
          ...globals.es2021
        }
      },

      settings: {
        react: {
          version: "detect"
        }
      },

      rules: {
        // Отключаем проблемное правило
        "constructor-super": "off",

        // React специфичные
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off", // Не нужно с TypeScript

        // TypeScript специфичные
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": ["warn", {
          "argsIgnorePattern": "^_"
        }]
      }
    }
);
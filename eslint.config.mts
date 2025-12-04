import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Игнорируемые файлы
  {
    ignores: ["**/node_modules", "**/dist", "**/build", "**/*.config.js"]
  },

  // Базовые правила JavaScript
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    rules: {
      "constructor-super": "off",
      "no-this-before-super": "off"
    }
  },

  // TypeScript правила
  tseslint.configs.recommended,

  // React правила
  pluginReact.configs.flat.recommended,

  // Кастомные настройки для React
  {
    files: ["**/*.{jsx,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: "detect",
        runtime: "automatic" // Для React 17+
      }
    },
    rules: {
      // Отключаем требование импорта React
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-indent": [2,4],

      // Другие React правила
      "react/prop-types": "off", // Не нужно для TypeScript
      "react/display-name": "warn"
    }
  },

  // Дополнительные правила для TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }]
    }
  }
]);
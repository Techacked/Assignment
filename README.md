# React + TypeScript + Vite Project

This project is a minimal React setup using **Vite** with TypeScript support, Hot Module Replacement (HMR), and ESLint configuration for type-safe and stylistic linting.

---

## Features

- **React** with TypeScript support
- **Vite** for fast development and build
- **HMR (Hot Module Replacement)** for fast refresh
- **ESLint** with type-aware and React-specific linting
- Supports optional **React Compiler** (for improved performance, see [React Compiler docs](https://react.dev/learn/react-compiler/installation))

---

## Available Plugins

1. **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)**
   - Uses **Babel** (or [oxc](https://oxc.rs) for `rollup-vite`) for fast refresh.

2. **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**
   - Uses **SWC** for fast refresh.

---

## ESLint Configuration

The project uses **ESLint** to enforce type-safe rules and React best practices.

### Example ESLint Config (`eslint.config.js`):

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // TypeScript rules for React
      reactX.configs['recommended-typescript'],
      // React DOM rules
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

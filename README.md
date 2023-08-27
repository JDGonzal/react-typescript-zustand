# react-typescript-zustand

Based on this site 
[¡No necesitas Redux en React! Aprende a usar Zustand, alternativa sencilla. (Curso de React)](https://www.youtube.com/watch?v=p2wF2wRjcN0)

## Steps to start
1. Install NPM and NODEJS in your system 
  [Nodejs Download](https://nodejs.org/en/download/current/)
2. Starting in the directory called react, run this command:
```bash
	npm create vite@latest react-typescript-zustand
		package name:
		React
		Typescript + SWC
```
3. Change directory and install dependencies
```bash 
cd react-typescript-zustand
pnpm install
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



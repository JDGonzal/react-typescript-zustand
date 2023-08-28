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
4. Install the react MUI 
```bash
pnpm install @mui/material @emotion/react @emotion/styled
```
5. Install fontsource/roboto and icons-material
```bash
pnpm install @fontsource/roboto @mui/icons-material -E
```
6. Install as developer the ts-standard
```bash
pnpm install ts-standard -D
```
Note: "ts-standard" is a ruler set to work with Typescript and React.

7. based on the ts-standard do changes in ".eslintrc.cjs", change some values in "eslinrc.cjs" and "tsconfig.json".
8. Restart the eslint server , pressing [Shift]+[Ctlr]+[P], search by "ESLint: Restart".

## Changing the project to start the work

1. Deleting the "App.tsx" all into the first `<>` element.
2. Just add the `<h1>JavaScript Quizz</h1>` in the "App.tsx" file.
3. Import in "main.tsx" the font list of "roboto' 
```js
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';
```
3. Delete the "maintsx" the first line `import React from 'react'`, then remove `<React.StrictMode>`, as well.
4. Creating a new component in "src" directory, called "JavaScriptLogo.tsx" and run the `rfce` snippet, and delete the first line.
5. Take the JavaScript log in SVG format from this site [Descarga el logo de HTML5, CSS3 y JavaScript en formato vectorial SVG](https://midu.dev/logos-svg-css-html-javascript/)
6. Change the `<div>` element of the new "JavaScriptLogo.tsx" file.
7. Change the `width={48}` and `height={48}`.
8. Change in "App.tsx".

## Creating a Title of the Header
1. Using a `{Contanier}` from `@mui/material` , in "App.tsx" file, to envolve the `<h1>` element, with a `maxWidth="sm"`.
2. Envolve the `<h1>` element with `Stack`, to put like `direction="row" gap={2} alignItems="center" justifyContent="center"`.
3. Add the `<JavaScriptLogo />` above the `<h1>` element.
4. As weel envolve this `<h1>` element with `Typography`, to use this typographyc, with this `variant="h2" component="h1"`.
5. Finally delete the `<h1>` element.



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



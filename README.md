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

## Add a page that when clicked retrieves all the questions
1. Add a "data.json" in public directory with questions and answers.
2. Add the "start.tsx" in the "src" directory, and run the `rfce` snippet, and delete the first line.
3. Change the `Start` text between `<div>` element by `<Button onClick={() => { }}  variant="contained"></Button>`, element from `@mui/material`.
4. In the middle add the text `Start!` or `¡Vamos a Empezar!`.
5. Add the `<Start/>` below the `</Stack>` in "App.tsx" file.
6. Now install the `zustand`.
```bash
pnpm install zustand -E
```

## Creating the "Store" site to use with *Zustang*
1. Create in the root ("src" directory) a "store" directory.
2. Add a file into "store" directory called "questions.ts".
3. Add in the "src" directory a "types.d.ts" file.
4. Using the "Paste JSON as Code" extension, select all the "data.json" and pressing [Shift]+[Ctrl]+[P], select the "Paste JSON as Code", the name will be "question" then this is the answer:
```js
    // Generated by https://quicktype.io
    export interface Question {
      id:            number;
      question:      string;
      code:          string;
      answers:       string[];
      correctAnswer: number;
    }
```
5. Add to this `interface` two fields:
```js
    export interface Question {
      ...
      userSelectedAnswer?:  number;
      isCorrectUserAnswer?: boolean;
    }
```
6. Import the `interface Question` into "questions.ts" file : 
```js
    import { Question } from  '../types.d';
```
7. Add another interface into "questions.ts" file:
```js
    interface State {
      questions: Question[];
      currentQuestion: number;
      fetchQuestions: (limit: number)=>void;
    }
```
8. Creating the Global estate like:
```js
    export const useQuestionStore = create<State>(( set)=>{
      return {
        questions:[],
        currentQuestion:0,
        fetchQuestions: async(limit: number)=>{
          console.log(limit);
        }
      }
    });
```
9. Call in "App.tsx" file the Store data:
```js
    const questions = useQuestionStore(state => state.questions);
```

## Use the questions in the Store
1. Into the "questions.ts" file for the function complete the set, at least with one question (Copied from "data.json" file):
```js
    fetchQuestions: async (limit: number) => {
          console.log(limit);
          set({
            questions: [
              {
                "id": 1,
                "question": "¿Cuál es la salida de este código?",
                "code": "console.log(typeof NaN)",
                "answers": [
                  "undefined",
                  "NaN",
                  "string",
                  "number"
                ],
                "correctAnswer": 3
              }
            ],
          });
          get();
        }
```
2. Call this `fetchQuestions` into "Start.tsx" file:
```js
      const fetchQuestions = useQuestionStore(state => state.fetchQuestions);
      const handleClick = () => { fetchQuestions(5); }
```
3. Just for test in "App.tsx" file , change the `<Start />` for a conditional:
```js
          {questions.length===0?<Start />:<h1>Juego</h1>}
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



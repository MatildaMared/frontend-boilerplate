# 📝 React boilerplate project

This is an example React boilerplate project using the following techniques:

- Vite
- React
- TypeScript
- styled-components
- Pre-commit using husky hook with lint-staged and prettier formatting

This project is already set up and ready to use by running `npm install` and `npm run dev`, but below are the steps to
create this project from scratch.

---

## 🌸Vite

To set up a boilerplate project using Vite, run the following command:

`npm create vite@latest`

This will prompt you to enter a project name and select a framework. Enter a suitable name and select React and with
TypeScript.

---

## 🌸 Prettier

To install prettier, run the following command:

`npm install prettier --save-dev`

Then create a file called `.prettierrc.json` in the root of the project and add the formatting rules you want to use,
for example:

```json
{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "printWidth": 120
}
```

You can set up auto-save configuration in your IDE to format the code on save, but you can also create a command to
format the code, by adding the following to the `scripts` section of your `package.json` file:

```json
"format": "prettier --write ."
```

---

## 🌸 Pre-commit hook using Husky and lint-staged

To install Husky and lint-staged, run the following command:

`npm install husky lint-staged --save-dev`

Create a file in the root project called `lint-staged.js` and add the following:

```javascript
const config = {
	"*.{js,jsx,ts,tsx}": ["eslint --max-warnings=0"],
	"*.{js,jsx,ts,tsx,json,css,scss,js}": ["prettier --write"],
};

export default config;
```

Then add the following commands to the`scripts`section of your`package.json` file:

```json
"husky-install": "husky install",
"lint-staged": "lint-staged --config lint-staged.js",
```

Then run the following command:

`npm run husky-install`

This will create a `.husky` folder in the root of your project, containing a `pre-commit` file. This file will be
executed when you commit your code.

To configure the pre-commit hook with the lint-staged configuration, run the following command:

`npx husky add .husky/pre-commit "npm run lint-staged"`

Now when you commit your code, it will be formatted using prettier and linted using eslint. It will not be possible to
commit code that does not pass the linting.

---

## 🌸 Reading .env variables in Vite

Start by creating a `.env` file in the root of your project. This file will contain the environment variables you want
to use in your project. For example:

```
VITE_API_KEY=SuperSecretApiKey
```

Don't forget to add the `.env` file to your `.gitignore` file! 😜

Vite is configured to read environment variables from a file called `.env` by default, so you don't need to do any
configuration to make it work.

To read the environment variables in your code, you can use the following syntax:

```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

To set up intellisense when reading the environment variables, you need to add make sure your `vite-env.d.ts`-file
contains the following:

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly
    VITE_API_KEY: string;
}

interface ImportMeta {
    readonly
    env: ImportMetaEnv;
}
```

Don't forget to add new environment variables to the `vite-env.d.ts`-file when you add them to the `.env`-file.

---

## 🌸 styled-components

To install styled-components, run the following command:

`npm install styled-components @types/styled-components`

To create global styles, create a file called `GlobalStyles.tsx` (or any suitable name) somewhere in your project and
add the following:

```tsx
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  // Global styles go here
  :root {
  --primary-color: hotpink;
  }
`;

export default GlobalStyles;
```

Then import the `GlobalStyles` component in your `main.tsx`-file and add it in the render function:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyles from "./styles/GlobalStyles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>,
);
```

You can create several global style files and import them in the `main.tsx`-file.

An example of a good css reset to include in your global styles can be found here:

[Custom CSS Reset by Josh Comeau](https://www.joshwcomeau.com/css/custom-css-reset/)

This is an example of how to create a component using styled-components, note that the preprocessor used by
styled-components, stylis, supports scss-like syntax for automatically nesting styles:

```tsx
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: hotpink;
  }
`;
```

This component can then be used like this in your React return statement:

```tsx
<StyledButton>Click me!</StyledButton>
```

---


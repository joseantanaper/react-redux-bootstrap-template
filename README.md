# react-redux-bootstrap-template

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

Install **Vite** and **Degit** (if not installed):

```sh
npm install vite
npm install degit
```

Create a new project using official **Redux+TS** template for **Vite**:

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux react-redux-bootstrap-template
cd react-redux-bootstrap-template
npm install
npm run dev
```

    Alternative way:
    ```sh
    npm create vite@latest -- --template react-ts
    ```

## 💻 Basic setup for Github Pages:

1. package.json:

```json
"homepage": "https://{username}.github.io/react-redux-bootstrap-template"
...
"scripts":{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  /* "deploy": "gh-pages -d build" */
  /* "deploy": "gh-pages -d build --nojekyll --version" */
}
```

2. vite.config.ts:

```json
"base": "/react-redux-bootstrap-template"
```

3. Custom **public/404.html** is mandatory to avoid 404 on refresh:

4. Deploy:

```sh
npm run deploy
```

Note: dist/build needs to be updated before deploy works!

---

## 💻 Enable Path Alias

```sh
npm install -D @types/node
```

Add aliases to **vite.config.ts**:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@app': path.resolve(__dirname, './src/app'),
    },
  },
  plugins: [react()],
})
```

Add aliases to **tsconfig.json**

```json
{
  "compilerOptions": {
    // ... your other compiler options
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@assets/*": ["src/assets/*"],
      "@components/*": ["src/components/*"],
      "@routes/*": ["src/routes/*"],
      "@app/*": ["src/app/*"],
      "@bootstrap-scss/*": ["./node_modules/bootstrap/scss/bootstrap"],
      "@bootstrap-icons-svg/*": [
        "./node_modules/bootstrap-icons/bootstrap-icons.svg"
      ],
      "@bootstrap-js": [
        "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
      ]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 💻 Add Sass and Bootstrap:

Install **Sass** and **Bootstrap**:

```sh
npm install -D sass
npm install bootstrap@latest
npm install bootstrap-icons
```

Create **scss** in **src/styles/**::

- variables-app.scss: Custom variables for the app
- variables-bootstrap.scss: Overrides for bootstrap variables
- custom.scss:
  ```scss
  @import 'variables-bootstrap.scss';
  @import '@bootstrap-scss/bootstrap.scss';
  @import 'variables-app.scss';
  ...
  ```

Import styles in **main.tsx**:

```ts
import '/style/custom.scss'
```

Rename **.prettierrc.json** to **.prettierrc**

## Add React-Router

```sh
npm install react-router-dom localforage match-sorter sort-by
```

## PropTypes

```sh
npm install --save prop-types
```

---

# Tips

F1: ESLint: Restart ESLint Server


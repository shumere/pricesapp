# First things first

## `This is a SPA web-app`.

## Following technologies are used and implemented:

-**ReactJS** and **JSX** to render components and their content.\
-**Redux**, **React-Redux** and **Redux Toolkit** to manage the states.\
-**Tailwind** for CSS.\
-**Webpack** to optimize production build.\
-*Manifest.json* and *service-worker.js* are included in **Webpack**. Check plugins.\
-**PWA** is enabled. The web-app is installable and can be run in offline mode.

## 0. To install the app:

Run the following command in your terminal:

### `npm i` or `npm install`

## 1. To run the app in development build:

Run the following command in your terminal:

### `npm run start`

Webpack will compile a bundle to run. This will not be optimized. You can ignore warning about bundle maximum size.

## 2. To run the app in production build:

### `npm run build`

Webpack will compile a bundle to run. This is optimized. You still will get warnings about bundle maximum size. Maximum bundle size are extended and will be pre-cashed.

## 3. To run the production build:

### `npm install -g serve`
### `serve -s dist`

### Happy hacking!
# Fusion Travel

This is a solution for 銀河互動 Task from 104.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [QAs](#qas)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/Chious/fusion-travel](https://github.com/Chious/fusion-travel)
- Live Site URL: [https://fusion-travel.vercel.app](https://fusion-travel.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- className, prettier-plugin-tailwindcss - Deals with Tailwind CSS styles
- NextJS - An JS framework based on ReactJS
- react-icons - for import icons

### QAs

##### 1. How to Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### 2. How this projet folder name meaning?

1. `./app`

Router related setting would save in `./app`, for example:

```
├── community
│   ├── page.js
│   └── page.module.css
├── globals.css
├── icon.png
├── layout.js
├── meals
│   ├── [mealSlug]
│   │   ├── page.js
│   │   └── page.module.css
│   ├── error.js
│   ├── loading-out.js
│   ├── loading.module.css
│   ├── page.js
│   ├── page.module.css
│   └── share
│       ├── page.js
│       └── page.module.css
├── not-found.js
├── page.js
└── page.module.css
```

`page.js`: Create it under the folder, it would automatically turn to page.

`layout.js`: Container of page.js, you can setup metadata or some global component(navbar for exaple). If child page don't have their own layout.js, it would apply to their parent's.

`error.js`: If something goes wrong, it would show up error page.

[mealSlug]: It's a dynamic page, you can get value by params in NextJS.

2. `components`:Store React Components.

3. `data`: Store Dummy Data.

### Useful Resources:

1. [How to setup Tailwind Prettier](https://medium.com/@cameronadams1225/setting-up-a-next-js-13-project-with-eslint-and-prettier-735c3ccfd26c)
2. [How to build search and filter Coponent](https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm)

## Author

- Github - [Chious](https://github.com/Chious)

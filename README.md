# Ultimate React Boilerplate

[![Main](https://github.com/shaunsaker/ultimate-react-boilerplate/actions/workflows/main.yml/badge.svg)](https://github.com/shaunsaker/ultimate-react-boilerplate/actions/workflows/main.yml)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c0394429-94d6-485f-bc84-eaa36f5bc040/deploy-status)](https://app.netlify.com/sites/ultimate-react-boilerplate/deploys)

## What is it?

I’m a React Typescript boilerplate with a WIP backend baked in (thanks to Supabase) 😛 Set up your next project/prototype with minimal input, so you can do what you do best, build and test amazing new products 🔥

You can see me in action [here](https://ultimate-react-boilerplate.netlify.app/).

## What's in the box?

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [jotai](https://jotai.org/) for state 👻
- [styled-components](https://styled-components.com/) for styling 💅
- [vite](https://vitejs.dev/) for development ⚡️
- [prettier](https://prettier.io/) for consistent formatting 🎨
- [eslint](https://eslint.org/) for linting 🕵️‍♂️
- [vitest](https://github.com/vitest-dev/vitest) for testing ⚡️
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for integration testing 🐙
- staged linting, thanks to [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) 🚫💩
- [@fontsource](https://fontsource.org/) for custom fonts ✍️
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr) for svg support.

## Setup

OBVIOUS NOTE: Replace "PROJECT_NAME" with your own project's name 😉

```
git clone https://github.com/shaunsaker/ultimate-react-boilerplate.git PROJECT_NAME
cd PROJECT_NAME
yarn
```

## Running

```
yarn dev
```

## Deployment

I'd recommend using [Netlify](netlify.com) for deployment and connecting the site to your Github repo so that new deploys are triggered on every push to `master`.

## Generating Public Assets

After spending many hours building an app, I've found that having to manually generate public assets is one of the most annoying things ever! So I created a script to do this for you 😛 All you need to do is:

1. Update `./public/icon.svg` with your logo. It should be a **square svg**, size does not count in this case 😉
1. Customise `./app.json`.
1. Run the script:

```
yarn ts-node ./scripts/generateAssets
```

And boom 💣🎆, you have all the public assets you'll need, optimised and including a PWA setup 😎✅

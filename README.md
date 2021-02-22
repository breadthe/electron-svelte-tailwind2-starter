# Electron + Svelte + TailwindCSS 2.0 + RollupJS starter

Starter template for [Electron](https://www.electronjs.org/) + [Svelte](https://svelte.dev) + [TailwindCSS](https://tailwindcss.com) apps.

Based on [Svelte + TailwindCSS 2.0 starter](https://github.com/breadthe/svelte-tailwind2-starter).

Features:

- Electron 11
- Svelte 3
- TailwindCSS 2
- Rollup
- SCSS support

There's also a simple dark/light mode switch, and a surprise button 👇

![Light theme](https://user-images.githubusercontent.com/17433578/108366386-edf5d200-71bd-11eb-8c9b-bd355ebb0de0.png)

![Dark theme](https://user-images.githubusercontent.com/17433578/108366378-eafae180-71bd-11eb-8ad2-40cec4f6b7b2.png)

## 🚨 Limitations

In **development** mode (running `npm run dev` / `yarn dev`), the CSS bundle includes *all* of TailwindCSS and weighs in at ~6.8MB. You don't want to deploy this to production.

In **production** mode (running `npm run build` / `yarn build`), all the unused CSS styles are purged, dropping the bundle to a much more manageable size (~7KB in this case). However, I haven't yet found a way to stop Tailwind from purging dynamic Svelte classes (such as `class:dark` or `class:from-blue-700={$dark}`).

As a result, the production bundle won't contain such dynamic classes. To get around this, in `tailwind.config.js`, under `purge`, add an `options` object with a `safelist` array containing all the classes you wish to protect from purging:

```diff
purge: {
    enabled: production,
    content: [
        './src/**/*.html',
        './src/**/*.svelte',
    ],
    options: {
        safelist: [
            'border-blue-300',
            'border-orange-500',
            'border-pink-100',
            'border-pink-900',
            'dark',
            'from-blue-500',
            'from-blue-700',
            'from-yellow-200',
            'text-pink-100',
            'text-pink-900',
            'to-blue-800',
            'to-pink-300',
            'to-purple-800',
            'to-yellow-500',
        ],
    }
},
```

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
# or
yarn install
```

...then start Electron in development mode:

```bash
npm run electron:dev
# or
yarn electron:dev
```

## Building for production

To build for the current platform:

```bash
npm run electron:build
# or
yarn electron:build
```

Platform-specific builds:

```bash
# Mac
yarn electron:build:mac

# Windows
yarn electron:build:win

# Linux
yarn electron:build:linux

```

## App icons

Follow these instructions to generate application icons for each platform (Mac/Windows/Linux).

First, install the [electron-icon-maker](https://github.com/jaretburkett/electron-icon-maker) utility globally.

Next, in your project folder, run the `electron-icon-maker` command to create the icon sets:

```bash
electron-icon-maker --input=generic-app-icon.png
# Creates the following folders:
# ./icons/mac
# ./icons/png
# ./icons/win
```

If you want the `icons` folder to be created inside another folder (such as `src`), modify the command as follows:

```bash
electron-icon-maker --input=generic-app-icon.png --output=./src
```

I like to flatten the icon structure, so that all the icons are in `./icons`.

Finally, configure the icons for each platform in `electron-builder.yml`.

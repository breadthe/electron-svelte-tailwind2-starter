# Electron + Svelte + TailwindCSS 2.0 + RollupJS starter

Starter template for [Electron](https://www.electronjs.org/) + [Svelte](https://svelte.dev) + [TailwindCSS](https://tailwindcss.com) apps.

Based on [Svelte + TailwindCSS 2.0 starter](https://github.com/breadthe/svelte-tailwind2-starter).

It has built-in support for TailwindCSS 2.0, while the bundling is handled by Rollup.

There's also a simple dark/light mode switch, and a surprise button 👇

![Light theme](https://user-images.githubusercontent.com/17433578/103722821-7285eb80-4f96-11eb-85d8-07549005b98c.png)

![Dark theme](https://user-images.githubusercontent.com/17433578/103722826-774a9f80-4f96-11eb-97c6-fa4a34587f9b.png)

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
npm run electron-dev
# or
yarn electron-dev
```

## Building for production

wip

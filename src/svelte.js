import App from './App.svelte';
import "./scss/app.scss";

const app = new App({
    target: document.body,
    props: {
        title: 'Electron + Svelte + Tailwind 2'
    }
});

export default app;

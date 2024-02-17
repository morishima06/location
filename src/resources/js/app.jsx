import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { CookiesProvider } from 'react-cookie';
import Div100vh from 'react-div-100vh';
​

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Location';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) =>
    resolvePageComponent(
      `./Pages/${name}.jsx`,
      import.meta.glob('./Pages/**/*.jsx'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);

    root.render(
      <Div100vh>
      <CookiesProvider>
        <App {...props} />
      </CookiesProvider>
      </Div100vh>
    );
  },
  progress: {
    color: '#4B5563',
  },
});

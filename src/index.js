import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import config from './config';

const container = document.getElementById('root');
const root = createRoot(container);

// If a redirection url was set and it exists, redirect to it
let path = window.location.pathname.replace("/", "");
if (path && config.routes.hasOwnProperty(path)) {
  window.location.href = config.routes[path];
} else {
  // Otherwise, load the APP

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

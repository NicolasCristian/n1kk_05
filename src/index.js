import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import config from './config';

const container = document.getElementById('root');
const root = createRoot(container);

// If a redirection url was set and it exists, redirect to it
let path = window.location.pathname.replace("/", "").split("/");
if (path[0] && config.routes.hasOwnProperty(path[0])) {

  window.location.href = config.routes[path[0]] +
    window.location.pathname.replace("/" + path[0], "") +
    window.location.search +
    window.location.hash;
} else {
  // Otherwise, load the APP

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

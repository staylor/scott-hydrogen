const handleEvent = require('@shopify/hydrogen/worker').default;
const entrypoint = require('../dist/server/entry-server.js').default;
// eslint-disable-next-line node/no-missing-import
const indexHtml = '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <link rel="icon" type="image/svg+xml" href="/assets/favicon.17e50649.svg" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Hydrogen App</title>\n    <link rel="preconnect" href="https://fonts.googleapis.com" />\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n    <link\n      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&family=Roboto:wght@400;500;900&display=swap"\n      rel="stylesheet"\n    />\n    \n    <script type="module" crossorigin src="/assets/index.b22d5ce1.js"><\/script>\n    <link rel="modulepreload" href="/assets/vendor.93abf8b2.js">\n    <link rel="stylesheet" href="/assets/index.0479a38c.css">\n  </head>\n  <body>\n    <div id="root"></div>\n    \n  </body>\n</html>\n';

addEventListener('fetch', (event) => {
  try {
    event.respondWith(
      handleEvent(event, {
        entrypoint,
        indexTemplate: indexHtml,
        cache: caches.default,
        context: event,
      }),
    );
  } catch (error) {
    event.respondWith(
      new Response(error.message || error.toString(), {
        status: 500,
      }),
    );
  }
});

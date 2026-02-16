/**
 * Serves the Ahrefs site verification key as plain UTF-8 text.
 * Used so the verification URL works even when the SPA redirect catches all routes.
 */
const AHREFS_KEY = 'x9bp9x7ps39kzwkn4sh41y3pcp8sb6d5';

exports.handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
    body: AHREFS_KEY,
  };
};

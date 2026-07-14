// Safe redirect script
// Change TARGET_URL to your destination URL.

(() => {
  "use strict";

  const TARGET_URL = "https://example.net/video/";
  const REDIRECT_DELAY_MS = 0;

  // Prevent redirect loops.
  if (window.location.href === TARGET_URL) {
    return;
  }

  window.setTimeout(() => {
    window.location.assign(TARGET_URL);
  }, REDIRECT_DELAY_MS);
})();

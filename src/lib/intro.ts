export const INTRO_DURATION = 2500;
export const INTRO_SESSION_KEY = "orsegups-intro-v2";

// Runs in <head>, before the page can paint. No network or hydration dependency.
// Without JavaScript the intro stays hidden and the page remains available.
export const introBootstrap = `(() => {
  const root = document.documentElement;
  let play = location.pathname === '/' && !location.hash && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  try {
    if (sessionStorage.getItem('${INTRO_SESSION_KEY}')) play = false;
    if (play) sessionStorage.setItem('${INTRO_SESSION_KEY}', 'seen');
  } catch (_) {}
  root.dataset.intro = play ? 'play' : 'skip';
  if (play) setTimeout(() => {
    root.dataset.intro = 'done';
    document.querySelector('.site-shell')?.removeAttribute('inert');
  }, 4000);
})();`;

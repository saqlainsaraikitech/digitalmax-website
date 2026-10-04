import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Standard multi-file build (no singlefile): JS/CSS/images load as separate
// parallel requests instead of one giant 3MB index.html -> much faster
// first paint on slow connections, and files get cached for repeat visits.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 6000,
    // Keep classic CSS syntax (max-width etc.) so older mobile browsers apply it.
    // Without this, the minifier rewrites media queries to range syntax
    // (width<=1100px) which old browsers ignore -> broken mobile layout.
    cssTarget: 'chrome80',
  },
})

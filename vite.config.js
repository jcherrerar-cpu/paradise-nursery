import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Change base to '/<REPO_NAME>/' before deploying to GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/paradise-nursery/',
})

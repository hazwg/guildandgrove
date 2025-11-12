import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to https://<user>.github.io/guild-and-grove/ keep base as below.
// If you use a custom domain or user site, change to base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/guildandgrove/',
})

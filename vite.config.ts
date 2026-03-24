import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'ELITE_FIX_BOUTIQUE'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Remove the manual build block unless you have a specific reason for it
});

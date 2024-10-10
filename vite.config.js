import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Update the base to your repo name
export default defineConfig({
  plugins: [react()],
  base: '/Marknox/', // Your GitHub repository name
});

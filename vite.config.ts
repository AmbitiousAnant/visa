import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Automatically expose Supabase integration variables to the frontend
  envPrefix: ['VITE_', 'NEXT_PUBLIC_', 'SUPABASE_URL', 'SUPABASE_ANON_KEY'],
  server: {
    port: 3000,
    open: false,
    host: true,
  },
});

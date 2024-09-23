// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Replace this with your desired host, e.g., '192.168.1.100' or a custom domain
    port: 9576 // Optional: Change the port if needed
  }
});

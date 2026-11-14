// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://rajashon-hospital.example',
  output: 'server',
  adapter: vercel(),
  devToolbar: { enabled: false },
});
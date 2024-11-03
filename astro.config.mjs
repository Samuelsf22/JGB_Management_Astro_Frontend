// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

import vercel from '@astrojs/vercel/serverless';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon(), auth()],
  output: 'server',
  adapter: vercel()
});
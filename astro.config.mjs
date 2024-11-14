// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel/serverless';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth(), icon()],
  output: 'server',
  adapter: vercel(),
});
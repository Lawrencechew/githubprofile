import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lawrencechew.github.io',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/githubprofile' : '/',
  output: 'static',
});

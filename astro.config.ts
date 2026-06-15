import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ホバー時にページを事前取得してページ遷移を高速化（data-astro-prefetch属性付きリンクのみ対象）
  prefetch: true,

  // Cloudflare PagesのURL（独自ドメイン取得後は差し替える）
  site: 'https://dont-look-back-u83.pages.dev',
  output: 'static',

  trailingSlash: 'always',

  integrations: [sitemap()],
});
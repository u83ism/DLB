import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ホバー時にページを事前取得してページ遷移を高速化（data-astro-prefetch属性付きリンクのみ対象）
  prefetch: true,

  // GitHub Pagesのリポジトリ名をbaseとして設定
  base: '/DLB',

  site: 'https://u83ism.github.io',
  output: 'static',

  // trailingSlash: 'always' により import.meta.env.BASE_URL = '/DLB/' となる
  trailingSlash: 'always',

  integrations: [sitemap()],
});
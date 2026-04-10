import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pagesのリポジトリ名をbaseとして設定
  base: '/DLB',
  site: 'https://u83ism.github.io',
  output: 'static',
  // trailingSlash: 'always' により import.meta.env.BASE_URL = '/DLB/' となる
  trailingSlash: 'always',
});

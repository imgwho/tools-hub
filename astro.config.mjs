import { defineConfig } from 'astro:content';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  // 针对 GitHub Pages 的部署路径优化
  site: 'https://imgwho.github.io',
  base: '/tools-hub',
  vite: {
    plugins: [tailwindcss()]
  }
});

import { defineConfig } from 'vite';
import { book } from 'vite-plugin-book/vite';

export default defineConfig({
    base: '/test-vite-book/',
    plugins: [book()],
});
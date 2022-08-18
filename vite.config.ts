import { defineConfig } from 'vite';
import { book } from 'vite-plugin-book/vite';

export default defineConfig({
    plugins: [book()],
});
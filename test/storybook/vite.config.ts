import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createFilter } from '@rollup/pluginutils';

// Exclude .mdx files from Vite build
const excludeMdx = () => {
  const filter = createFilter(['**/*.mdx']);
  return {
    name: 'exclude-mdx',
    load(id) {
      if (filter(id)) {
        return '';
      }
    },
  };
};

export default defineConfig({
  plugins: [react(), excludeMdx()],
});

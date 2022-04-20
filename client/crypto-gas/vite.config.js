import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/scss/variables";@import "./src/scss/styles";',
      },
    },
  },
  /* All the configurations bellow HAD to be added so vite could be used with web3 library.
     It's terrible, if you ask me. You can find more about it on the following links:

      https://github.com/vitejs/vite/issues/3817
      https://github.com/nodejs/help/issues/3738

    We also had to add all those dependencies into package.json so it works.

    Vitejs with Web3.js? Never. Again. */
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util',
      https: 'agent-base',
    },
  },
});

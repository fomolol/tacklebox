const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: resolve(__dirname, 'docs/'),
  build: {
    ssr: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: '@fomolol/tacklebox',
    },
    outDir: resolve(__dirname, 'dist'),
  },
})

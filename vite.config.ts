import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-redux-bootstrap-template',
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests',
    mockReset: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@resources': path.resolve(__dirname, './src/resources'),
      '@style': path.resolve(__dirname, './src/style'),
      '@bootstrap-scss': path.resolve(
        __dirname,
        './node_modules/bootstrap/scss/bootstrap'
      ),
      '@bootstrap-icons-svg': path.resolve(
        __dirname,
        './node_modules/bootstrap-icons/bootstrap-icons.svg'
      ),
      '@bootstrap-js': path.resolve(
        __dirname,
        './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
      ),
      '@config': path.resolve(__dirname, './src/config'),
      '@routes': path.resolve(__dirname, './src/routes'),
    },
  },
})


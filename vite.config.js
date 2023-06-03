import { defineConfig } from 'vite'

import path from 'path'

export default defineConfig({
  build: {
    emptyOutDir: true,
    minify: 'terser',
    outDir: path.resolve(__dirname, 'production'),
    rollupOptions: {
        output: {
            entryFileNames: 'assets/[name].js',
            assetFileNames: 'assets/[name].[ext]',
            chunkFileNames: 'assets/[name].js',
            manualChunks: undefined,
        }
    }
  }
})

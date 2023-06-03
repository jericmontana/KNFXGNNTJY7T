import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: true,
    minify: 'terser',
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

import tanStackRouter from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import tsPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },

  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },

  plugins: [
    unoCSS(),
    tanStackRouter(),
    react(),
    tsPaths(),
    autoImport({
      imports: [
        'react',
        'ahooks',
        // custom
        { react: ['createContext'], tilg: [['default', 'useTilg']] },
      ],
      dts: './src/types/auto-imports.d.ts',
    }),
  ],
})

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
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },

  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },

  plugins: [
    unoCSS(),
    react(),
    tsPaths(),
    autoImport({
      imports: [
        'react',
        'react-router-dom',
        'ahooks',
        // custom
        { react: ['createContext'], tilg: [['default', 'useTilg']] },
      ],
      dts: './src/types/auto-imports.d.ts',
    }),
  ],
})

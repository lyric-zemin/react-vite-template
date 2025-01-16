import tanStackRouter from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import unoCSS from 'unocss/vite'
import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import gltf from 'vite-plugin-gltf'
import tsPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': [
            'react',
            'react-dom',
            '@tanstack/react-router',
            'zustand',
          ],
          'three-vendor': ['three', '@react-three/fiber'],
        },
      },
    },
    chunkSizeWarningLimit: 1024,
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
      dirs: ['./src/hooks', './src/utils'],
    }),
    // https://github.com/nytimes/rd-bundler-3d-plugins
    // 模型文件支持
    gltf(),
    // https://github.com/UstymUkhman/vite-plugin-glsl
    // 着色器文件格式支持
    glsl({ compress: true }),
  ],
})

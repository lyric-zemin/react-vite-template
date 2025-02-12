import React from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import TsPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    cssMinify: 'lightningcss',
  },

  plugins: [
    // https://github.com/vitejs/vite-plugin-react-swc
    React(),

    // See ./unocss.config.ts
    Unocss(),

    // https://github.com/aleclarson/vite-tsconfig-paths#readme
    TsPaths(),

    // https://github.com/unplugin/unplugin-auto-import#readme
    AutoImport({
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

import TanStackRouter from '@tanstack/router-plugin/vite'
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

    // https://tanstack.com/router/latest/docs/framework/react/overview
    TanStackRouter(),

    // See ./unocss.config.ts
    Unocss(),

    // https://github.com/aleclarson/vite-tsconfig-paths#readme
    TsPaths(),

    // https://github.com/unplugin/unplugin-auto-import#readme
    AutoImport({
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

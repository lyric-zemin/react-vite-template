import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// https://unocss.dev/config/
export default defineConfig({
  theme: {
    colors: {},
  },
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-h-center': 'flex items-center',
    },
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})

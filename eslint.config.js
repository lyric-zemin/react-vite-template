import antfu from '@antfu/eslint-config'

export default antfu(
  {
    react: true,
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
)

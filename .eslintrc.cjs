module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['tailwindcss'],
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:tailwindcss/recommended'
  ],
  rules: {
    'vue/html-self-closing': [0]
  }
}

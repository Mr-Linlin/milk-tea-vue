module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended', // 使用 Vue 3 推荐的配置
    'eslint:recommended', // 使用 ESLint 推荐的规则
    '@vue/typescript/recommended', // 使用 TypeScript 推荐的配置
    'plugin:prettier/recommended', // 启用 Prettier 插件，作为 ESLint 的一部分
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'vue/multi-word-component-names': 'off', // 关闭 Vue 单文件组件名称强制多词规则
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // 忽略未使用变量前缀为 _ 的情况
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 关闭显式模块边界类型检查
  },
};

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    // "off"或者0    关闭规则关闭
    // "warn"或者1    在打开的规则作为警告（不影响退出代码）
    // "error"或者2    把规则作为一个错误（退出代码触发时为1）
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 0, //可以给参数重新赋值
    'consistent-return': 0, //箭头函数不必须return
    'no-unused-expressions': 0, //允许短路和三目运算符
    'comma-dangle': 0, //最后一行不要逗号
    'import/first': 0, //Absolute imports should come before relative imports.
    'import/no-extraneous-dependencies': 0, //毛和春
    'import/extensions': 0 //毛和春
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
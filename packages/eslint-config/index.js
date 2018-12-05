module.exports = {
  extends: [
    '@postmates/eslint-config-base',
    '@postmates/eslint-config-base/rules/strict',
    './rules/react',
    './rules/react-a11y',
    './rules/typescript',
  ].map(require.resolve),
  rules: {}
};

module.exports = {
  plugins: [
    'jsx-a11y',
    '@typescript-eslint',
  ],
  overrides: [{
    parser: '@typescript-eslint/parser',
    files: ['*.ts', '*.tsx'],
    rules: {
      'no-useless-constructor': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/prop-types': 'off',
      'no-param-reassign': 'off',
      'space-infix-ops': 'off',
      'import/export': 'off',
      'import/no-duplicates': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'require-yield': 'off',
      'consistent-return': 'off',
      'jsx-a11y/anchor-is-valid': 'off',

      'arrow-parens': 'error',
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/member-delimiter-style': 'error',
      '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
      '@typescript-eslint/type-annotation-spacing': 'error',
    }
  }]
};

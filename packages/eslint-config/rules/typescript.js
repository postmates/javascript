module.exports = {
  plugins: [
    'typescript',
  ],
  overrides: [{
    parser: 'typescript-eslint-parser',
    files: ['*.ts', '*.tsx'],
    rules: {
      'no-useless-constructor': 'off',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'typescript/no-unused-vars': 'off',
      'react/prop-types': 'off',
      'no-param-reassign': 'off',
      'space-infix-ops': 'off',
      'import/export': 'off',
      'import/no-duplicates': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'require-yield': 'off',
      'consistent-return': 'off',

      'arrow-parens': 'error',
      'typescript/adjacent-overload-signatures': 'error',
      'typescript/member-delimiter-style': 'error',
      'typescript/no-angle-bracket-type-assertion': 'error',
      'typescript/type-annotation-spacing': 'error',
    }
  }]
};

@postmates/eslint-config

[![npm version](https://badge.fury.io/js/%40postmates%2Feslint-config.svg)](https://badge.fury.io/js/%40postmates%2Feslint-config)

This package provides Postmates' .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### @postmates/eslint-config

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`. If you don't need React, see [@postmates/eslint-config-base](https://www.npmjs.com/@postmates/eslint-config-base).

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@postmates/eslint-config@latest" peerDependencies
  ```

  If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev @postmates/eslint-config
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "@postmates/eslint-config@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=@postmates/eslint-config;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev @postmates/eslint-config eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @postmates/eslint-config
  ```
  The cli will produce and run a command like:

  ```sh
  npm install --save-dev@postmates/eslint-config eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

2. Add `"extends": "@postmates"` to your .eslintrc

### eslint-config/airbnb/hooks

This entry point enables the linting rules for React hooks (requires v16.8+). To use, add `"extends": ["@postmates", "@postmates/hooks"]` to your `.eslintrc`

### eslint-config/whitespace

This entry point only warns on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/postmates/javascript/blob/master/packages/eslint-config/whitespace.js).

### eslint-config/base

This entry point is deprecated. See [@postmates/eslint-config-base](https://npmjs.com/@postmates/eslint-config-base).

### eslint-config/legacy

This entry point is deprecated. See [@postmates/eslint-config-base](https://npmjs.com/@postmates/eslint-config-base).

See [Postmates' Javascript styleguide](https://github.com/postmates/javascript) and
the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

module.exports = {
  "root": true,
  "extends": [
    "doly-react",
    "airbnb-typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": true,
    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    "quotes": 0,
    "eol-last": 0,
    "function-paren-newline": 0,
    "implicit-arrow-linebreak": 0,
    "object-curly-newline": 0,
    "no-shadow": 0,
    "no-else-return": 0,
    "no-unused-expressions": 0,
    "no-confusing-arrow": 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "no-use-before-define": 0,
    "operator-linebreak": 0,
    "consistent-return": 0,
    "react/prop-types": 0,
    "react/jsx-indent": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/quotes": 0,
    "@typescript-eslint/comma-dangle": 0,
    "@typescript-eslint/no-unused-expressions": 0,
    "@typescript-eslint/object-curly-spacing": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-wrap-multilines": 0,
    "max-len": 0,
    "quote-props": 0,
    "import/no-extraneous-dependencies": 0,
    "no-trailing-spaces": 0,
    "no-console": 0,
    "import/prefer-default-export": 0
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  }
}
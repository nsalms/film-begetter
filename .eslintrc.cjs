/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "quote-props": 0,
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        quoteProps: "preserve",
      },
    ],
  },
};

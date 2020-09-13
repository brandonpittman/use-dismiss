module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2019,
  },
  env: {
    "jest/globals": true,
    browser: true,
    node: true,
    amd: true,
  },
  extends: [
    "plugin:jest/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // your configuration
  },
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:storybook/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "react-hooks", "jsx-a11y", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "react/no-array-index-key": "error",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};

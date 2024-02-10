module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  plugins: ["solid"],
  extends: [
    "eslint:recommended",
    "plugin:solid/recommended",
    "airbnb-base",
    "plugin:prettier/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    project: ["./jsconfig.json"],
    ecmaVersion: "latest"
  },
  rules: {
    "import/extensions": ["error", "ignorePackages", { "": "never" }],
    "prettier/prettier": [
      "error",
      { endOfLine: "auto", trailingComma: "none" }
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
  }
};

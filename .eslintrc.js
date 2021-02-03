/* eslint-disable-next-line */
module.exports = {
  parser: "babel-eslint",
  // parser: "@babel/eslint-parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    // ecmaFeatures: {
    //   jsx: true, // Allows for the parsing of JSX
    // },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of Vue to use
    },
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],

  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};

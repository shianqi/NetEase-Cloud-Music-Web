module.exports = {
  extends: "standard",
  env: {
    "browser": true,
    "es6": true,
    "jasmine": true,
    "node": true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
  },
  env: {
    browser: true,
    jasmine: true,
  },
  plugins: [
    'react',
    'css-modules',
    'jasmine',
  ],
  rules: {
    'no-unused-vars': 1,
    'comma-dangle': [2, "only-multiline"],
    'camelcase': 1,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
  },
};

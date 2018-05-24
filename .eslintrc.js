module.exports = {
  "env": {
    "es6": true,
    "jest": true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard'
  ],
  "plugins": [
    "react",
    "babel"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": 0,
    "babel/no-invalid-this": 1
  }
}
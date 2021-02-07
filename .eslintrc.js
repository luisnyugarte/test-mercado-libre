module.exports = {
  root: true,
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  "plugins": ["vue"],
  "env": {
    "node": true
  },
  "parser": "vue-eslint-parser",
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': [2, {
      code: 120, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreUrls: true,
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e', // for e.return value
        'rootState', // for vuex rootState
      ],
    }],
  },
  
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.module, vue'],
      },
    },
  },
  globals: {
    axios: true,
    axios_api: true,
    screen: true,
    require: true,
  },

};

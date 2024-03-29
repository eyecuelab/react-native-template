module.exports = {
  'extends': 'airbnb',
  'plugins': [
      'react',
      'jsx-a11y',
  ],
  'rules': {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/forbid-prop-types': 1,
    'no-console': ["error", { allow: ["warn", "error", "log"] }],
  },
  'globals': { "fetch": false },
  "env": {
    "jest": true,
  },
}

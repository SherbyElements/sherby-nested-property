module.exports = {
  // Extends the UdeS ESLint config
  extends: 'eslint-config-udes/polymer-2-element',

  parserOptions: {
    sourceType: 'module'
  },

   // Custom rules
   rules: {
     // Require constructor names to begin with a capital letter
    'new-cap': [
      'error', {
        // Allows any uppercase-started function names that match the specified regex pattern to be called without the
        // new operator
        capIsNewExceptionPattern: '^Sherby',
      }],
   },

  // Limit ESLint to a specific project
  root: true,
};

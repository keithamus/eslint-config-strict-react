'use strict';
module.exports = {
  plugins: [
    'react',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    // Prevent missing displayName in a React component definition
    'react/display-name': [
      2,
      {
        // Accept names from ES6 Classes or proper exports
        'ignoreTranspilerName': false,
      },
    ],
    // Forbid certain props on Components
    'react/forbid-component-props': [
      2,
      {
        'forbid': [ 'className', 'style' ],
      },
    ],
    // Forbid certain propTypes
    'react/forbid-prop-types': [
      2,
      {
        'forbid': [ 'any', 'object', 'array' ],
      },
    ],
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 2,
    // Validate closing bracket location in JSX
    'react/jsx-closing-bracket-location': [
      2,
      {
        // ensure closing bracket aligns to the opening tag
        'location': 'tag-aligned',
      },
    ],
    // Enforce or disallow spaces inside of curly braces in JSX attributes.
    'react/jsx-curly-spacing': [
      2,
      // Spaces are not allowed ever
      'never',
    ],
    // Enforce or disallow spaces around equal signs in JSX attributes.
    'react/jsx-equals-spacing': [
      2,
      // Spaces are not allowed ever
      'never',
    ],
    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': [
      2,
      // Spaces are not allowed ever
      {
        'extensions': '.js',
      },
    ],
    // Configure the position of the first property
    'react/jsx-first-prop-new-line': [
      2,
      // Spaces are not allowed ever
      'multiline',
    ],
    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': [
      2,
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    // Validate props indentation in JSX
    'react/jsx-indent-props': [
      2,
      // indent by 2 spaces
      2,
    ],
    // Validate JSX indentation
    'react/jsx-indent': [
      2,
      // indent by 2 spaces
      2,
    ],
    // Detect missing `key` prop
    'react/jsx-key': [
      2,
    ],
    // Limit maximum of props on a single line in JSX
    'react/jsx-max-props-per-line': [
      2,
      {
        'maximum': 3,
      },
    ],
    // No .bind() or Arrow Functions in JSX Props
    'react/jsx-no-bind': 2,
    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 2,
    // Prevent duplicate properties in JSX
    'react/jsx-no-duplicate-props': 2,
    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': 0,
    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 2,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // Enforce PasalCase for user-defined JSX components
    'react/jsx-pascal-case': [
      2,
      {
        'allowAllCaps': true,
      },
    ],
    // Enforce props alphabetical sorting
    'react/jsx-sort-props': 0,
    // Validate spacing before closing bracket in JSX
    'react/jsx-space-before-closing': [
      2,
      'always',
    ],
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // Prevent missing parentheses around multiline JSX
    'react/jsx-wrap-multilines': 2,
    // Prevent passing of children as props
    'react/no-children-prop': 2,
    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 2,
    // Prevent usage of dangerous JSX properties
    'react/no-danger': 2,
    // Prevent usage of deprecated methods
    'react/no-deprecated': 2,
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': [
      2,
      'allow-in-func',
    ],
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': [
      2,
      'allow-in-func',
    ],
    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 2,
    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 2,
    // Prevent usage of isMounted
    'react/no-is-mounted': 2,
    // Prevent multiple component definition per file
    'react/no-multi-comp': [
      2,
      {
        // Ignore stateless components to encourage
        // "micro-componentisation"
        'ignoreStateless': true,
      },
    ],
    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 2,
    // Prevent usage of setState
    'react/no-set-state': 0,
    // Prevent using string references
    'react/no-string-refs': 2,
    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 2,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': 2,
    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': [
      2,
      // Always use ES6 classes over ES5 ones
      'always',
    ],
    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': 2,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 2,
    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 2,
    // Prevent extra closing tags for components without children
    'react/self-closing-comp': [
      2,
      {
        'component': true,
        'html': true,
      },
    ],
    // Enforce component methods order
    'react/sort-comp': 2,
    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 0,
    // Enforce style prop value being an object
    'react/style-prop-object': 2,
  },
};

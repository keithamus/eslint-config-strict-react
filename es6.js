'use strict';
module.exports = require('./react');
module.exports.env = module.exports.env || {};
module.exports.ecmaFeatures = module.exports.ecmaFeatures || {};
module.exports.rules = module.exports.rules || {};
module.exports.env.es6 = true;
module.exports.ecmaFeatures.classes = true;

// Prefer es6 class instead of createClass for React Components
module.exports.rules['react/prefer-es6-class'] = 2;

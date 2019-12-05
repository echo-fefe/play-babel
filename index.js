// 直接 node traverse.js 报错： SyntaxError: Cannot use import statement outside a module

require('babel-register')({
    presets: ['env']
});

module.exports = require('./hand-book/babel-template');

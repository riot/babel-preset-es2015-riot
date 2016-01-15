module.exports = {
  plugins: [
   [require('transform-es2015-template-literals'), {'loose': true}],
    require('transform-es2015-literals'),
    require('transform-es2015-function-name'),
    require('transform-es2015-arrow-functions'),
    require('transform-es2015-block-scoped-functions'),
   [require('transform-es2015-classes'), {'loose': true}],
    require('transform-es2015-object-super'),
    require('transform-es2015-shorthand-properties'),
   [require('transform-es2015-computed-properties'), {'loose': true}],
   [require('transform-es2015-for-of'), {'loose': true}],
    require('transform-es2015-sticky-regex'),
    require('transform-es2015-unicode-regex'),
    require('check-es2015-constants'),
   [require('transform-es2015-spread'), {'loose': true}],
    require('transform-es2015-parameters'),
   [require('transform-es2015-destructuring'), {'loose': true}],
    require('transform-es2015-block-scoping'),
    require('transform-es2015-typeof-symbol'),
   [require('transform-es2015-modules-commonjs'), { 'allowTopLevelThis': true }],
   [require('transform-regenerator'), { 'async': false, 'asyncGenerators': false }]
  ]
}

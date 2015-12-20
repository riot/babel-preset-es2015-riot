function _r(p) { return require('babel-plugin-' + p) }

module.exports = {
  plugins: [
   [_r('transform-es2015-template-literals'), {'loose': true}],
    _r('transform-es2015-literals'),
    _r('transform-es2015-function-name'),
    _r('transform-es2015-arrow-functions'),
    _r('transform-es2015-block-scoped-functions'),
   [_r('transform-es2015-classes'), {'loose': true}],
    _r('transform-es2015-object-super'),
    _r('transform-es2015-shorthand-properties'),
   [_r('transform-es2015-computed-properties'), {'loose': true}],
   [_r('transform-es2015-for-of'), {'loose': true}],
    _r('transform-es2015-sticky-regex'),
    _r('transform-es2015-unicode-regex'),
    _r('check-es2015-constants'),
   [_r('transform-es2015-spread'), {'loose': true}],
    _r('transform-es2015-parameters'),
   [_r('transform-es2015-destructuring'), {'loose': true}],
    _r('transform-es2015-block-scoping'),
    _r('transform-es2015-typeof-symbol'),
   [_r('transform-es2015-modules-commonjs'), { 'allowTopLevelThis': true }],
   [_r('transform-regenerator'), { 'async': false, 'asyncGenerators': false }]
  ]
}
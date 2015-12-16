require('shelljs/global')

var compiler = require('riot-compiler'),
  expect = require('expect.js'),
  preset

describe('Babel parser preset', function() {
  this.timeout(8000) // for slow pcs

  it('can require all the plugins', function() {
    preset = require('../')
  })

  it('can compiler properly the tag', function() {
    compiler.parsers.js.babel = function (js, opts, url) {
      return require('babel-core').transform(js, preset).code
    }
    expect(compiler.compile(cat('./test/fixtures/component.tag'), {
      type: 'babel'
    })).to.be(cat('./test/expected/component.js'))
  })
})
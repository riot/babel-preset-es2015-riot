riot.tag2('component', '<p>{message}</p>', '', '', function(opts) {
'use strict';

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

this.message = 'hi';
this.action = function () {
  var foo = 'foo';
  return { foo: foo };
};
this.async = regeneratorRuntime.mark(function _callee() {
  var result;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return request();

        case 2:
          result = _context.sent;

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
});
}, '{ }');
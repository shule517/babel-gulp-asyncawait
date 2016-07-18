'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function () {
    function Test() {
        _classCallCheck(this, Test);
    }

    _createClass(Test, [{
        key: 'sleep',
        value: function sleep(msec, val) {
            console.log('sleep(' + val + ')');
            return new Promise(function (resolve, reject) {
                setTimeout(resolve, msec, val);
            });
        }
    }, {
        key: 'main',
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var result1, result2;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log('----- start ----');
                                _context.next = 3;
                                return this.sleep(3000, 'a1');

                            case 3:
                                result1 = _context.sent;

                                console.log('result1 = ' + result1);
                                _context.next = 7;
                                return this.sleep(3000, 'a2');

                            case 7:
                                result2 = _context.sent;

                                console.log('result2 = ' + result2);
                                console.log('----- end -----');

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function main() {
                return _ref.apply(this, arguments);
            }

            return main;
        }()
    }]);

    return Test;
}();

var test = new Test();
test.main();
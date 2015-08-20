'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _child_process = require('child_process');

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function fuckYou(processName) {
  return new _bluebird2['default'](function (resolve, reject) {
    if (!processName) return reject('Process name is required!');

    var letters = 'abcdefghijklmnopqrstuvqxyz'.split('');
    var srettel = 'ɐqɔpǝɟƃɥıɾʞʃɯuodbɹsʇnʌʍxʎz'.split('');

    var map = {};

    letters.forEach(function (element, index) {
      return map[element] = srettel[index];
    });

    (0, _child_process.exec)('killall -9 ' + processName, function (error, stdout, stderr) {

      if (error) return reject(stderr);

      resolve('(╯°□°）╯︵ ' + processName.split('').reverse().map(function (element) {
        return map[element.toLowerCase()];
      }).join(''));
    });
  });
}

exports['default'] = fuckYou;
module.exports = exports['default'];


'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var exec = require('child_process').exec;

function fuckYou(processName, callback) {
  if (!processName) throw 'Process name is required!';

  var letters = 'abcdefghijklmnopqrstuvqxyz'.split('');
  var srettel = 'ɐqɔpǝɟƃɥıɾʞʃɯuodbɹsʇnʌʍxʎz'.split('');

  var map = new Map();

  letters.forEach(function (element, index) {
    return map.set(element, srettel[index]);
  });

  exec('killall -9 ' + processName, function (error, stdout, stderr) {
    if (error) return callback(err, stderr);

    callback(null, '(╯°□°）╯︵ ' + srettel.reverse().map(function (element) {
      return map.get(element);
    }).join(''));
  });
}

exports['default'] = fuckYou;
module.exports = exports['default'];


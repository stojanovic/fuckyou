'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var exec = require('child_process').exec,
    Promise = require('bluebird');

function fuckYou(processName, callback) {
  return new Promise(function (resolve, reject) {
    if (!processName) return reject('Process name is required!');

    var letters = 'abcdefghijklmnopqrstuvqxyz'.split('');
    var srettel = 'ɐqɔpǝɟƃɥıɾʞʃɯuodbɹsʇnʌʍxʎz'.split('');

    var map = new Map();

    letters.forEach(function (element, index) {
      return map.set(element, srettel[index]);
    });

    exec('killall -9 ' + processName, function (error, stdout, stderr) {
      if (error) return reject(stderr);

      resolve('(╯°□°）╯︵ ' + srettel.reverse().map(function (element) {
        return map.get(element);
      }).join(''));
    });
  });
}

exports['default'] = fuckYou;
module.exports = exports['default'];


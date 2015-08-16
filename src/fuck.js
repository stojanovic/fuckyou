'use strict'

const exec = require('child_process').exec

function fuckYou(processName, callback) {
  if (!processName)
    throw('Process name is required!')

  let letters = 'abcdefghijklmnopqrstuvqxyz'.split('')
  let srettel = 'ɐqɔpǝɟƃɥıɾʞʃɯuodbɹsʇnʌʍxʎz'.split('')

  let map = new Map()

  letters.forEach((element, index) => map.set(element, srettel[index]))

  exec(`killall -9 ${processName}`, (error, stdout, stderr) => {
    if (error)
      return callback(err, stderr)

    callback(null, '(╯°□°）╯︵ ' + srettel.reverse().map(element => map.get(element)).join(''))
  })
}

export default fuckYou

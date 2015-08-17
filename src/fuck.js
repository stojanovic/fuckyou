'use strict'

const exec    = require('child_process').exec
    , Promise = require('bluebird')

function fuckYou(processName, callback) {
  return new Promise((resolve, reject) => {
    if (!processName)
      return reject('Process name is required!')

    let letters = 'abcdefghijklmnopqrstuvqxyz'.split('')
    let srettel = 'ɐqɔpǝɟƃɥıɾʞʃɯuodbɹsʇnʌʍxʎz'.split('')

    let map = new Map()

    letters.forEach((element, index) => map.set(element, srettel[index]))

    exec(`killall -9 ${processName}`, (error, stdout, stderr) => {
      if (error)
        return reject(stderr)

      resolve('(╯°□°）╯︵ ' + processName.split('').reverse().map(element => map.get(element.toLowerCase())).join(''))
    })
  })
}

export default fuckYou

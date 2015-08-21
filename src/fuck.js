'use strict'

import { exec } from 'child_process'
import Promise from 'bluebird'

function fuckYou(processName) {
  return new Promise((resolve, reject) => {
    if (!processName)
      return reject('Process name is required!')

    let letters = 'abcdefghijklmnopqrstuvqxyz'.split('')
    let srettel = 'ɐqɔpǝɟƃɥıɾʞʃɯuodbɹsʇnʌʍxʎz'.split('')

    let map = {}

    letters.forEach((element, index) => map[element] = srettel[index])

    exec(`killall -9 ${processName.replace(/ /g, '\\ ')}`, (error, stdout, stderr) => {

      if (error)
        return reject(stderr)

      resolve('(╯°□°）╯︵ ' + processName.split('').reverse().map(element => map[element.toLowerCase()] || element).join(''))
    })
  })
}

export default fuckYou

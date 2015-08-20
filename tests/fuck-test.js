var exec = require('child_process').exec
  , test = require('tape')
  , fuck = require('../fuck')

test('Test killing processes', function(t) {
  t.plan(3)

  var process = exec('ruby tests/script.rb')

  fuck()
    .catch(function(err) {
      t.equal(err, 'Process name is required!', 'Throw an error if process name is not defined')
    })

  setTimeout(function() {
    fuck('ruby').then(function(response) {
      t.equal(response, '(╯°□°）╯︵ ʎqnɹ', 'Kill process that exists.')
    })
  }, 10)

  setTimeout(function() {
    fuck('ruby')
      .catch(function(err) {
        t.ok(err, 'Pass an error if process doesn\'t exist.')
      })
  }, 100)
})

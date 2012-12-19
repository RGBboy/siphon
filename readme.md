# Siphon

Siphon multiple event listeners to a single function.

[![Build Status](https://secure.travis-ci.org/RGBboy/siphon.png)](http://travis-ci.org/RGBboy/siphon)

## Installation

Works with Express 3.0.x

    $ npm install siphon

## Usage

  Siphon will add a one time listener to each emitter in the emitter array

``` javascript
// require it
var siphon = require('siphon'),
    EventEmitter = require('events').EventEmitter
    emitter1 = new EventEmitter(),
    emitter2 = new EventEmitter();

// siphon an event
siphon('init', [emitter1, emitter2], function (emitter1Args, emitter2Args) {
  console.log('Both emitters have fired!');
  console.log(emitter1Args[0] === emitter1);
  console.log(emitter2Args[0] === emitter2);
});

// Fire the events
console.log('Firing emitter 1');
emitter1.emit('init', emitter1);
console.log('Firing emitter 2');
emitter2.emit('init', emitter2);
```

## API

### siphon(eventName, emitters, callback)

* @param {String} eventName
* @param {Array} emitters
* @param {Function} callback

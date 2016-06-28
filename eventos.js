EE = require('events').EventEmitter;
ee = new EE();
die = false;

ee.on('disparar', function() {
    die = true;
});

setTimeout(function() {
    ee.emit('disparar');
}, 100);

while(!die) {
}

console.log('done');

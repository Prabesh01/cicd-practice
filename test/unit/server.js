 var dt = require('../../src/server');

function close_test() {
process.exit(0)
}

setTimeout(close_test, 5000);
dt.test();

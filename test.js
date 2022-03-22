 var dt = require('./index');

function close_test() {
process.exit(0)
}

setTimeout(close_test, 5000);
dt.test();

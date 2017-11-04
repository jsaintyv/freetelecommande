
var remote = require('./src/remote')();
console.log(remote.power);
remote.power().then(()=>console.log('power'));

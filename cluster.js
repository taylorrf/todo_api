var cluster = require('cluster');
var os = require('os');

var os = os.cpus();

if(cluster.isMaster){
  console.log('thread master');
  cluster.fork();
}else{
  console.log('thread slave');
  console.log(os);
}

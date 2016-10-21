var index = function(app){
  app.get('/', function(req, res, next) {
    res.sendFile('views/index.html');
  });
}

module.exports = index;

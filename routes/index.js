var index = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'TODO API' });
  });
}

module.exports = index;

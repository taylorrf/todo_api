var Presenter = require('yayson')().Presenter;

var ListPresenter = function () { Presenter.call(this); }
ListPresenter.prototype = new Presenter();

ListPresenter.prototype.type = 'lists'

ListPresenter.prototype.attributes = function() {
  var attrs = Presenter.prototype.attributes.apply(this, arguments);
  return attrs;
}

module.exports = new ListPresenter;

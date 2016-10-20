var Presenter = require('yayson')().Presenter;

var ItemPresenter = function () { Presenter.call(this); }
ItemPresenter.prototype = new Presenter();

ItemPresenter.prototype.type = 'items'

ItemPresenter.prototype.attributes = function() {
  var attrs = Presenter.prototype.attributes.apply(this, arguments);
  return attrs;
}

module.exports = new ItemPresenter;

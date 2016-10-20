var Presenter = require('yayson')().Presenter;

var UserPresenter = function () { Presenter.call(this); }
UserPresenter.prototype = new Presenter();

UserPresenter.prototype.type = 'lists'

UserPresenter.prototype.attributes = function() {
  var attrs = Presenter.prototype.attributes.apply(this, arguments);
  return attrs;
}

module.exports = new UserPresenter;

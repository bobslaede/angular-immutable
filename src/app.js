import im from './index';

var app = angular.module('app', [
  im.name
]);

angular.bootstrap(document, [app.name])

export default angular.module('im.service', [])
  .service('Immutable', function ($window) {
    return $window.Immutable;
  })
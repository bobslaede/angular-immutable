import imService from '../im-service/im.service'

export default angular.module('im.bind.directive', [])
  .run(function(Immutable) {
    console.log(Immutable);
    console.log([1, 2, 3].map(n => n * 2))
  })
  .directive('imBind', function (Immutable) {
    return {}
  });
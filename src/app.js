var f = function () {
    [1,2].filter(x => x % 2);
  console.log('foo!');
};

var app = angular.module('app', [])
    .run(f);

export default app;
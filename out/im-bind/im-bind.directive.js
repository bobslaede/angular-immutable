System.register((void 0), [], function() {
  "use strict";
  var imService = System.get("../im-service/im.service").default;
  var $__default = angular.module('im.bind.directive', []).run(function(Immutable) {
    console.log(Immutable);
    console.log([1, 2, 3].map((function(n) {
      return n * 2;
    })));
  }).directive('imBind', function(Immutable) {
    return {};
  });
  return {get default() {
      return $__default;
    }};
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8zIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzIiLCJpbS1iaW5kL2ltLWJpbmQuZGlyZWN0aXZlLmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzAiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvNSIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxTQUFTLEFBQUMsVUFBb0IsR0FBQyxDQ0FwQyxVQUFRLEFBQUM7O0lDQUYsVUFBUSxFQ0FmLENBQUEsTUFBSyxJQUFJLEFBQUMsNEJBQWtCO0FDQTVCLEFBQUksSUFBQSxDQUFBLFVBQVMsRUZFRSxDQUFBLE9BQU0sT0FBTyxBQUFDLENBQUMsbUJBQWtCLENBQUcsR0FBQyxDQUFDLElBQ2hELEFBQUMsQ0FBQyxTQUFTLFNBQVE7QUFDcEIsVUFBTSxJQUFJLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQztBQUN0QixVQUFNLElBQUksQUFBQyxDQUFDLENBQUMsQ0FBQSxDQUFHLEVBQUEsQ0FBRyxFQUFBLENBQUMsSUFBSSxBQUFDLEVBQUMsU0FBQSxDQUFBO1dBQUssQ0FBQSxDQUFBLEVBQUksRUFBQTtJQUFBLEVBQUMsQ0FBQyxDQUFBO0VBQ3ZDLENBQUMsVUFDUSxBQUFDLENBQUMsUUFBTyxDQUFHLFVBQVUsU0FBUSxDQUFHO0FBQ3hDLFNBQU8sR0FBQyxDQUFBO0VBQ1YsQ0VUK0IsQUZTOUIsQ0VUOEI7QUNBakMsU0NBQSxhQUF3QjtBQUFFLHVCQUF3QjtJQUFFLEVEQTdCO0FKRW5CLENERm9ELENBQUM7QUVTckQiLCJmaWxlIjoiaW0tYmluZC9pbS1iaW5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXNDb250ZW50IjpbIlN5c3RlbS5yZWdpc3RlcigkX19wbGFjZWhvbGRlcl9fMCwgW10sICRfX3BsYWNlaG9sZGVyX18xKTsiLCJmdW5jdGlvbigpIHtcbiAgICAgICRfX3BsYWNlaG9sZGVyX18wXG4gICAgfSIsImltcG9ydCBpbVNlcnZpY2UgZnJvbSAnLi4vaW0tc2VydmljZS9pbS5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYW5ndWxhci5tb2R1bGUoJ2ltLmJpbmQuZGlyZWN0aXZlJywgW10pXHJcbiAgLnJ1bihmdW5jdGlvbihJbW11dGFibGUpIHtcclxuICAgIGNvbnNvbGUubG9nKEltbXV0YWJsZSk7XHJcbiAgICBjb25zb2xlLmxvZyhbMSwgMiwgM10ubWFwKG4gPT4gbiAqIDIpKVxyXG4gIH0pXHJcbiAgLmRpcmVjdGl2ZSgnaW1CaW5kJywgZnVuY3Rpb24gKEltbXV0YWJsZSkge1xyXG4gICAgcmV0dXJuIHt9XHJcbiAgfSk7IiwiU3lzdGVtLmdldCgkX19wbGFjZWhvbGRlcl9fMCkiLCJ2YXIgJF9fZGVmYXVsdCA9ICRfX3BsYWNlaG9sZGVyX18wIiwicmV0dXJuICRfX3BsYWNlaG9sZGVyX18wIiwiZ2V0ICRfX3BsYWNlaG9sZGVyX18wKCkgeyByZXR1cm4gJF9fcGxhY2Vob2xkZXJfXzE7IH0iXX0=
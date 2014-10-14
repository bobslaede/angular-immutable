import imBind from './im-bind/im-bind';
import imService from './im-service/im.service';

export var im = angular.module('im', [
  imBind.name,
  imService.name
]);
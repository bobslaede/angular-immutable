"use strict";

Object.defineProperties(exports, {
    im: {
        get: function() {
            return im;
        }
    },
    __esModule: {
        value: !0
    }
});

var $__im_45_bind_47_im_45_bind__, $__im_45_service_47_im_46_service__, imBind = ($__im_45_bind_47_im_45_bind__ = require("./im-bind/im-bind"), 
$__im_45_bind_47_im_45_bind__ && $__im_45_bind_47_im_45_bind__.__esModule && $__im_45_bind_47_im_45_bind__ || {
    "default": $__im_45_bind_47_im_45_bind__
}).default, imService = ($__im_45_service_47_im_46_service__ = require("./im-service/im.service"), 
$__im_45_service_47_im_46_service__ && $__im_45_service_47_im_46_service__.__esModule && $__im_45_service_47_im_46_service__ || {
    "default": $__im_45_service_47_im_46_service__
}).default, im = angular.module("im", [ imBind.name, imService.name ]);
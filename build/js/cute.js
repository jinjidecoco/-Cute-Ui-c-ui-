'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function create() {
  console.log('coco');
}

function sum(a, b) {
  // alert(a + b);
}
sum(102, 6);

setTimeout(function () {}, 2000);

function reduce(a, b) {
  console.log(a - b);
}
reduce(209, 0);

var Box = function () {
  function Box(x, y) {
    _classCallCheck(this, Box);

    this.x = x;
    this.y = y;
  }

  _createClass(Box, [{
    key: 'toStrin',
    value: function toStrin() {
      console.log('' + this.x + ',');
    }
  }]);

  return Box;
}();

var box = new Box(2, 3);
Box.toString();
var $ = require("jquery");
//  import $ from "jquery";
(function ($, window, document, undefined) {
  $.fn.tab = function (element, options) {
    var defaults = {
      tabCon: ".tab-container",
      tabNav: ".tab-nav li",
      className: "active",
      tabEvent: "click",
      index: 0
    };
    this.options = $.extend({}, defaults, option || {});
    this.init();
  };
  tab.prototype.init = function () {
    var _this = this;
    var options = this.options;
    var $tabItem = $(options.tabCon).find(options.tabNav);
    $tabItem.removeClass(options.className);
    // $tabItem.hide();
    $tabItem.eq(options.index).addClass(options.className);
    this.addActive();
    this.show();
  };
  tab.prototype.addActive = function () {
    $tabItem.on(options.tabEvent, function () {
      var index = $(this).index();
      alert(index);
      $(this).eq(index).addClass(options.className);
      $(options.tabCon).find('.tab-content').eq(index).show();
    });
  };
  tab.prototype.show = function () {};
  //   tab.prototype.bindEvent = function() {
  //      $tabItem.on(options.tabEvent, function() {
  //        this.index = $(this).index();
  //        $(this)
  //          .eq(options.index)
  //          .addClass(options.className);
  //      });
  //   };
})(jQuery, window, document);
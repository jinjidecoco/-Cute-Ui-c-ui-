   var $ =require("jquery");
  //  import $ from "jquery";
(function($, window, document, undefined) {
  $.fn.tab = function(element, options) {
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
  tab.prototype.init = function() {
    var _this = this;
    var options = this.options;
    var $tabItem = $(options.tabCon).find(options.tabNav);
    $tabItem.removeClass(options.className);
    // $tabItem.hide();
    $tabItem.eq(options.index).addClass(options.className);
    this.addActive();
    this.show();
  };
  tab.prototype.addActive = function() {
    $tabItem.on(options.tabEvent, function() {
      var index = $(this).index();
      alert(index);
      $(this)
        .eq(index)
        .addClass(options.className);
      $(options.tabCon).find('.tab-content').eq(index).show();  
    });
  };
  tab.prototype.show = function() {

  };
//   tab.prototype.bindEvent = function() {
//      $tabItem.on(options.tabEvent, function() {
//        this.index = $(this).index();
//        $(this)
//          .eq(options.index)
//          .addClass(options.className);
//      });
//   };
})(jQuery, window, document);

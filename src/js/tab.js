var $ = require("jquery");
//  import $ from "jquery";
(function($, window, document, undefined) {
  function Tab(element, options) {
    var defaults = {
      tabCon: ".tab-container",
      tabNav: ".tab-nav li",
      className: "active",
      tabEvent: "click",
      index: 0
    };
    this.options = $.extend({}, defaults, options || {});
    this.init();
  }

  Tab.prototype = {
    init: function() {
      var _this = this,
        options = this.options,
        $tabItem = $(options.tabCon).find(options.tabNav),
        $tabContent = $(options.tabCon)
          .find(".tab-content")
          .find(".tab-panel");

      $tabItem.eq(options.index).addClass(options.className);
      $tabContent.eq(options.index).show();
      $tabItem.on(options.tabEvent, function() {
        var index = $(this).index();
        _this.addActive($tabItem, options, index);
        _this.show($tabContent, index);
      });
    },

    addActive: function(element, opt, ind) {
      element.removeClass(opt.className);
      element.eq(ind).addClass(opt.className);
    },

    show: function(element, ind) {
      element
        .eq(ind)
        .show()
        .siblings()
        .hide();
    }

  };

  $.fn.tab = function(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data(".tab");
      if (!data) $(this).data(".tab", (data = new Tab(this, options)));
      if (typeof option == "string") data[option]();
    });
  };
})(jQuery, window, document);

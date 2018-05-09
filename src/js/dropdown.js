var $ = require("jquery");

(function($, window, document, undefined) {

  function Dropdown(element, options) {
    var defaults = {
      bindEvent: "click",
      dropdownContent: ".dropdown-content"
    };
    this.options = $.extend({}, defaults, options || {});
    this.init();
  }

  Dropdown.prototype = {
    init: function() {
      var _this = this,
        options = this.options,
        dropdownBtn = $(".dropdown").find("button"),
        //下拉框内容
        dropdownContent = $(".dropdown").find(options.dropdownContent);
                console.log(options.bindEvent);


        dropdownBtn.on(options.bindEvent, function(e) {
            e.preventDefault();
          _this.toggle(dropdownContent);
        });
    },
    toggle: function(element) {
      element.toggle(400);
    }
  };

  $.fn.dropdown = function(options) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data(".dropdown");
      if (!data) $(this).data(".dropdown", (data = new Dropdown(this)));
      if (typeof options == "string") data[options]();
    });
  };

})(jQuery, window, document);

import Swiper from "./lib/swiper/swiper.min.js";

// import  template  from "./lib/template.js" ;
require("./lib/swiper/swiper.min.css");
require("../css/lib/reset.less");
require("../css/grid.less");
require('../css/header.less');


$(function() {
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    // 如果需要分页器
    pagination: ".swiper-pagination",
    //分页按钮可点击
    paginationClickable: true,
    // 如果需要前进后退按钮
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    autoplay: 5000,
    effect: "fade",
  });
});

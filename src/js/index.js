 require('../css/lib/reset.less');
 require('../css/variable.less');
 require("../css/mixins.less");
 require("../css/grid.less");
 require("../css/button.less");
 require("../css/icon.less");
 require("../css/form.less");
 require("../css/ui-tab.less");
 require('./tab.js');


 $(function(){
    $(".tab-container").tab({
      index: 1,
      className: "cur"
    });

 });

function sum(a, b) {
    // alert(a + b);
}
sum(102, 6);

setTimeout(() => {

}, 2000);

function reduce(a, b) {
    console.log(a - b);
}
reduce(209, 0);

class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
   toStrin(){
       console.log(''+this.x + ',')
   }
}
var box =new Box(2,3);
Box.toString();
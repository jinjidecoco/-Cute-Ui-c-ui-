//  require('./home.js');

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
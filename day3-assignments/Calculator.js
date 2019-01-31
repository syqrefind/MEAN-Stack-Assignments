//class Calculator{
//    constructor(){
//        var value1 = parseInt(prompt("Enter the first value:"));
//        var value2 = parseInt(prompt("Enter the second value:"));
//        this.property1 = value1;
//        this.property2 = value2;
//    }
//    sum(){
//        return this.property1 + this.property2;
//    }
//    mul(){
//        return this.property1 * this.property2;
//    }
//}
//calculator0 = new Calculator();
function Calculator(){
    this.read = function(){
        this.x = prompt('enter x value');
        this.y = prompt('enter y value');
    }
}

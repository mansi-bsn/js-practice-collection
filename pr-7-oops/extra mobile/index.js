function Mobile(modelNo){
    this.modelNo = modelNo;
}

Mobile.prototype.setColor = function(color){
    this.color = color;
}

Mobile.prototype.showdetail = function(){
    console.log("model is: ", this.modelNo);
    console.log("color is: ", this.color);
}

const m1 = new Mobile(123);

m1.setColor("black");

m1.showdetail();
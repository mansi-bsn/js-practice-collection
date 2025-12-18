class Shape{
    rectangle(width, height){
        console.log("Rectangle area: ", width*height);
    }

    circle(r){
        console.log("Circle area: ", 3.14*r*r);
    }
}

const s1 = new Shape;
s1.rectangle(12, 7);
s1.circle(5);
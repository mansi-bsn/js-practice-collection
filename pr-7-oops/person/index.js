class Person{

    father(name, age){
        console.log(`Name is: ${name}. Age is: ${age}`);
    }

    child(name, age){
        console.log(`Name is: ${name}. Age is: ${age}`);
    }
}

const p1 = new Person;

p1.father("abc", 60);
p1.child("def", 20);

class School{

    constructor(name, email, contact){
        this.name = name;
        this.email = email;
        this.contact = contact;
    }

    student(){
        console.log("Student name is: ", this.name);
        console.log("Student email is: ", this.email);
        console.log("Student contact is: ", this.contact);
    }

    faculty(){
        console.log("Faculty name is: ", this.name);
        console.log("Faculty email is: ", this.email);
        console.log("Faculty contact is: ", this.contact);
    }

    peon(){
        console.log("Peon name is: ", this.name);
        console.log("Peon email is: ", this.email);
        console.log("Peon contact is: ", this.contact);
    }
}

const s1 = new School("abc", "abc@gmail.com", 9876437896);
const f1 = new School("def", "def@gmail.com", 5678904657);
const p1 = new School("ghi", "ghi@gmail.com", 9876545678);

s1.student();
f1.faculty();
p1.peon();
function Emp(name, email, salary){
    this.name = name;
    this.email = email;
    this.salary = salary;
}

Emp.prototype.designation = "Web Design";

Emp.prototype.showDetail = function(){
    console.log("Employee name: ", this.name);
    console.log("Employee email: ", this.email);
    console.log("Employee salary: ", this.salary);
    console.log("Employee designation: ", this.designation);
}

const e1 = new Emp("mansi", "abc@gmail.com", 120000);

e1.showDetail();
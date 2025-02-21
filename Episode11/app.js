//...Objects in JS...

const student={
fullname:"Anamika Tiwari",
marks:94.12,
printMarks:function(){
    console.log("Marks=",this.marks);
}
};
student.fullname;
student.marks;
student.printMarks();


const employee={
    calcTax(){
        console.log("Tax rate is 10%");
    } 
};
employee.calcTax();

//Prototypes in JS
const Arjun={
    Salary:2000
};
Arjun.__proto__=employee;
Arjun.calcTax();

const Karan={
    Salary:6000
};
Karan.__proto__=employee;
Karan.calcTax();

//...Classes in JS...
class ToyotaCar{
    constructor(){                             //Constructor
        console.log("Creating new  object")   
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brand=brand;
    }
}
let fortuner=new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus=new ToyotaCar();
lexus.setBrand("lexus");

//...Inheritance in JS...
class Parent{
    hello(){
        console.log("helloo");
    }
}
class  Child extends Parent{}
let obj=new Child();
obj.hello();



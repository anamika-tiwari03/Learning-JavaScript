//Question-1..You are creating a website for college.Create a class User with 2 properties, name and email.It also has a method viewData()
let DATA="Some data of website";
class User{
    Constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("Data");
    }
}

let user1=new User("Anamika","anu@gmail.com");
let user2=new User("Shikha","abc@gmail.com");

//Create Admin class whih inherits from User.Add a new method editData() to Admin that allows to edi website data.
class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA="Some new value";
    }
}
let admin1=new Admin("namee","abc@gmail.com");
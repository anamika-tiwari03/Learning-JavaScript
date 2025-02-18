//prompt the user to enter their full name, Generwte a username
// for them based on the input. Start username with @, followed 
//by their full name and ending with the fullName length.

//eg: username="Ankitha", username should be "@Ankitha7"

let fullname = prompt("Enter fullName");
let username = "@" + fullname + fullname.length;
console.log(username);
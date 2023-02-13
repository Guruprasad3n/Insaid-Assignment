function User(fn, ln, ph, em, qu){
    this.fname = fn
    this.lname = ln
    this.phone = ph
    this.email = em
    this.query = qu
}


function myFunction(event){
    event.preventDefault()
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let query = document.getElementById("query").value;

let data = new User(fname, lname, phone, email, query)
console.log(data)


}
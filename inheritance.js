
function LoginClass(){
    
}
LoginClass.prototype.login = function(unm,pass){
    if(unm != "user" && pass != "123")
    {
        alert("User is Invalid!");
    }
    else{
        alert("Welcome user");
    }
}

function FacultyClass(){
    this.name = "";
    this.tech = "";
    this.salary = 0;
}

function StudentClass(){
    this.name = "";
    this.course = "";
    this.fees = 0;
}

FacultyClass.prototype.setData  = function(nm,tech,sal){
    this.name = nm;
    this.tech = tech;
    this.salary = sal;
}
FacultyClass.prototype.getData = function(){
    document.getElementById("fname").innerText = this.name;
    document.getElementById("tech").innerText = this.tech;
    document.getElementById("salary").innerText = this.salary; 
}

StudentClass.prototype.setData = function(nm,cs,fees){
    this.name = nm;
    this.course = cs;
    this.fees = fees;
}
StudentClass.prototype.getData = function(){
    document.getElementById("sname").innerText = this.name;
    document.getElementById("course").innerText = this.course;
    document.getElementById("fees").innerText = this.fees;
}

StudentClass.prototype.__proto__ = LoginClass.prototype;
FacultyClass.prototype.__proto__ = LoginClass.prototype;

let std1 = new StudentClass();
std1.setData("smit","react js",10000.00);

let faclty1 = new FacultyClass();
faclty1.setData("bhadresh","react js, angular",12000.00);

std1.login("user","123");
faclty1.login("user","123");

std1.getData();
faclty1.getData();
function userClass(){
    this.userName = "";
    this.userTech = "";
    this.saveData = function(uname,tech)
    {
        this.userName = uname;
        this.userTech = tech;
    }
    this.getData = function()
    {
        console.log(`my name is ${this.userName.toUpperCase()} and i am the technical expert on ${this.userTech.toUpperCase()} technology!`);
    }
}

let user1 = new userClass();
user1.saveData("bhadresh gosai","Asp.Net");
user1.getData();
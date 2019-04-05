function userClass(){
    this.userName = "";
    this.userTech = "";
    function saveData(uname, tech)
    {
        this.userName = uname;
        this.userTech = tech;
    }
    function getData()
    {
        document.write(`my name is ${this.userName.toUpperCase()} and i am the technical expert on ${this.userTech.toUpperCase()} technology!`);
    }
}

var user1 = new userClass();
user1.saveData("bhadreshgosai",".net");
user1.getData();
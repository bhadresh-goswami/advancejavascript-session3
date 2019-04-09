function PersonClass(name, birthday) {
    this._name = name;
    this._birthday = birthday;
  }
  
  PersonClass.prototype._calcAge = function() {
    return new Date().getFullYear() - this._birthday.getFullYear();
  };
  
  PersonClass.prototype.sayHi = function() {
    alert(`hi! i am ${this._name}, and my age is age:${this._calcAge()}!`);
  };
  
  let user = new PersonClass("Bhadresh", new Date(1989, 17, 7));
  user.sayHi(); 
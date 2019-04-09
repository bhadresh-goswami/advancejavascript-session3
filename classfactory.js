function PersonClass(name, birthday) {
    
    function calcAge() {
      return new Date().getFullYear() - birthday.getFullYear();
    }
  
    return {
      sayHi() {
        alert(`hi! i am ${name}, and my age is age:${calcAge()}!`);
      }
    };
  }
  
  let user = User("bhadresh gosai", new Date(1989, 17, 7));
  user.sayHi(); 
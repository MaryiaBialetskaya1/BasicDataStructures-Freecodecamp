//17.Check if an Object has a Property.js

//TASK: Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.

//two methods to  check if an object has a specific property:
//1. exemple : users.hasOwnProperty('Alan');
//2. exemple : 'Alan' in users;

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  function isEveryoneHere(userObj) {
    if(
      userObj.hasOwnProperty("Alan")&&
      userObj.hasOwnProperty("Jeff")&&
      userObj.hasOwnProperty("Sarah")&&
      userObj.hasOwnProperty("Ryan")
    ){
      return true;
    }
    return false;
  }

  console.log(isEveryoneHere(users));

  //another way:

  function isEveryoneHere(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  }
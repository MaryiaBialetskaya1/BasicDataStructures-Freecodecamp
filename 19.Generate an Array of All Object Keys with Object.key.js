//19.Generate an Array of All Object Keys with Object.key.js

//Object.keys() method - this method takes an object as the argument and returns an array of strings representing each property in the object. Again, there will be no specific order to the entries in the array.

//TASK: Finish writing the getArrayOfUsers function so that it returns an array containing all the properties in the object it receives as an argument.

let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };

  function getArrayOfUsers(obj) {
    return Object.keys(obj);
  }

  console.log(getArrayOfUsers(users));
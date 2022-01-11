/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/
const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

function findUserByUsername(usersArray, username) {
  return  usersArray.find(function(val, i){
     return val.username === username;
  });
};
// users.find(function(val, i){return val.username === 'akagen'})
// {username: 'akagen'}

// users.find(function(val, i){return val === users[i]})
// {username: 'mlewis'} WRONG

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];


removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

// function removeUser(usersArray, username) {
//   const toDelete = usersArray.find(function(val) {
//     return val.username === username;
//   });
//   console.log(toDelete);
//   const afterDeletion = usersArray.filter(function(val) {
//     return val !== toDelete;
//   });
//   usersArray = afterDeletion;
//   console.log(usersArray);
//   return usersArray;
// };//why doesn't this work?

function removeUser(usersArray, username) {
  const indexToDelete = usersArray.findIndex(function(val) {
    return val.username === username;
  });
    console.log(indexToDelete);
    if (indexToDelete !== -1) {
      return usersArray.splice(indexToDelete, 1);
    } 
    else {
      return;
    };
    
  };
  
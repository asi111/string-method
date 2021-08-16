//! 1 
// let firstName = (prompt("enter first name")) 
// let lestName = (prompt("enter lest name"))
//  function getFirstAndLestName(firstStr , secStr){
//      if(firstStr.length > secStr.length){
//          return firstStr.length
//      }

//      else return secStr.length
//  }

//   console.log(getFirstAndLestName(firstName ,lestName)); 

//! 2

//   let firstNAme = (prompt(" enter first name"))
//   let lestNAme = (prompt(" enter lest name"))
//   function getFirstName(firsStr){
//       if (firsStr.indexOf("a") !=-1){
//           return true
//       }
//       return false
//   }

//   function getLestName(secStr){
//       if(secStr.indexOf("api") != -1){
//           return true
//       }
//         return false 
//   }

//   console.log(getFirstName(firstNAme ));
//   console.log(getLestName(lestNAme));

//! 3

// let fullName = (prompt("enter full name"));
//  function lengthOfStr(str){
//      return str.length
//  }

// function spaceFunction(str){
//   if(str.indexOf(" ") != -1 )  {
//        return true
//   }
//    return false;
// }

// function firstNAme(str){
//     return str.substring(0 ,str.indexOf(" ")  )
// }


// function lestNAme(str){
//     return str.substring(str.indexOf(" ") +1)
// }

// console.log( lengthOfStr(fullName), spaceFunction(fullName),firstNAme(fullName), lestNAme(fullName));

//! 4
// let string = (prompt("enter string"))
// function lengthOfStr(str){
//     if(str.length > 5) {
//         return "long"
//     }
//     return "short"
// }

// console.log(lengthOfStr(string));

//! 5

// let city = prompt("enter city name") 

// function lengthOfStr(str){
//     if(str.length < 3){
//         return "yes"
//     }
//     return "no"
// }
//  console.log(lengthOfStr(city ));

//! 6 

// let ourStr = prompt("enter string");
// let ourNote = prompt ("enter note");

// function getStr(str , note ){
//     if(str.length > 6 ) {
//         return str
//     }

//     return str.indexOf(note )

// }

// console.log(getStr(ourStr ,ourNote ));

//! 7

// let ourStr = prompt("enter string");
// let ourNote = prompt("enter note");

// function isReturnNote(str , note){
//     if(str.indexOf(note) == str.indexOf(note)){
//         return str.indexOf(note)
//     }
//     return str
// }

// console.log(isReturnNote(ourStr , ourNote ));

//! 8
// let firstName = prompt("enter lest name")
// let lestName = prompt("enter lest name")

// function isReturn(str , secStr ){
//     return `${str[0]}. ${secStr.toUpperCase()}`
    
// }

// console.log(isReturn(firstName, lestName ));


//! 9
// let lestName = prompt("enter lest name")
// let secLestName = prompt("enter lest name")
// function getLestName(str, secStr) {
//     if (str.length > secStr.length ) {
       
//         console.log(secStr.toLowerCase()); 
//         return str
//     }
//     console.log(str.toLowerCase()); 
//     return secStr
// }

// console.log(getLestName(lestName, secLestName));

//! 10

// let ourName = prompt("enter name here") 
// let ourNote = prompt("enter note here")
//  function getNameAndNote(name,note){
//      if(name.indexOf(note) != -1 ){
//          return name
//      }
//         return "not exists"
//  }

//  console.log(getNameAndNote(ourName,ourNote));
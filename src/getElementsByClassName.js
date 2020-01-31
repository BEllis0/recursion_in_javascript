// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


// var getElementsByClassName = function(className) {
//   console.log(document.getElementsByClassName(className).length)

//   if (document.getElementsByClassName(className).length === 0) {
//     return 0;
//   }

//   else {
//     getElementsByClassName(document.getElementsByClassName(className).length-1)
//   }

// };

var getElementsByClassName = function(className){
  let body = document.body; 
  let result = [];

  let hasClass = function(body) {
    if(body.classList && body.classList.contains(className)) {
      result.push(body);
    }
    
    if(body.hasChildNodes()) {
      for(let i = 0; i< body.childNodes.length; i++) {
      hasClass(body.childNodes[i]);
      };
    }
  };
  hasClass(body);
  return result;
  };
//Print odd numbers in an array anonymous //
var anonymousOdd=[1,2,3,4,5,6,7,8,9,];
let a=function(anonymousOdd){
    for(var i = 0 ; i< anonymousOdd.length ; i++){
          if(anonymousOdd[i]%2!=0){
              console.log(anonymousOdd[i]);
          } 
     }
  };
anonymousOdd()
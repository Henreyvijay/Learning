var anonymousOdd=[1,2,3,4,5,6,7,8,9,];
let a=function(anonymousOdd){
    for(var i = 0 ; i< anonymousOdd.length ; i++){
          if(anonymousOdd[i]%2!=1){
              console.log(anonymousOdd[i]);
          } 
     }
  };
anonymousOdd()
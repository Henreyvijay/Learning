var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
      console.log(dup);
 })
 (array);
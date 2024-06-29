//Print odd numbers in an array IIFE //
var iifeOdd=[1,2,3,4,5,6,7,8,9];
(function (iifeOdd)
{
   for(var i=0; i<iifeOdd.length; i++)
   {
     if(iifeOdd[i]%2!==0)
     {
        console.log(iifeOdd[i]);
     }
   }
})(iifeOdd);
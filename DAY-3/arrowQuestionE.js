let isPlaindrome = (str) =>{
    let revstr = str.split(" ").reverse
        ().join();
        if(str === revstr){
            console.log('It is a palindrome')
        }else{
            console.log('It is Not palindrome')
        }
}
isPlaindrome("madam")
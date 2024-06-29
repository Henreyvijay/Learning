var checkPalindrome = (function (array) {
    const len = array.length;
    for (let i = 0; i < len / 2; i++) {
        if (array[i] !== array[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
})
const array = ("run");
const value = checkPalindrome(array);

console.log(value);
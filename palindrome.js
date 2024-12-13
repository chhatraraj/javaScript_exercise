//Write a JavaScript function that checks whether a passed string is a palindrome or not?

function isPalindrome(str){
    const length = str.length;
    for(let i =0; i<length/2 ; i++)//iterating only half
    {
        if (str[i] !== str[length-1-i]){
            return false;
        }
    }
    return true;
}
const str_1 = "madam";
const str_2 = "ram";
console.log(isPalindrome(str_1));
console.log(isPalindrome(str_2));
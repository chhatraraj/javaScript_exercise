function rev_num(num){
    let reversed_num = 0;
    while (num!== 0){
        reversed_num = reversed_num*10 + num %10;
        num = Math.floor(num/10); 
    }
    return reversed_num;
}

const num = 12345;
console.log("Original number: " + num);
const result = rev_num(num);
console.log("Reversed number is: " + result);

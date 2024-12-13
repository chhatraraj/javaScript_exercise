//Write a JavaScript function that generates all combinations of a string.
function substring(str1){
    const result = [];
    function search_combination(start, current){
        if (current.length > 0){
            result.push(current);
        }
        for ( let i = start; i< str1.length; i++){
            search_combination(i+1, current + str[i]);
        }
    }
    search_combination(0,'');
    return result;
}
const str = 'Dog';
const result = substring(str);
console.log(result);
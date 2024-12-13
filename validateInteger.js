//Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.
function validateInt(num){
    if(!Number.isInteger(num)){
        throw new Error('Invalid number, Please enter an integer.');
    }
    console.log('number is invalid: ', num);
}
try{
    validateInt(13);
    validateInt(12.3); //FLOAT
}catch(error){
    console.log('Error:', error.message);
}
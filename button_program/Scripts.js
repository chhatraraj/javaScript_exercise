// Define a function to multiply two numbers and display the result
        function multiplyBy() {
            // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
            let num1 = parseFloat(document.getElementById("firstNumber").value);
            let num2 = parseFloat(document.getElementById("secondNumber").value);

            // Check for valid numbers and display the result
            if (!isNaN(num1) && !isNaN(num2)) {
                document.getElementById("result").innerHTML = num1 * num2;
            } else {
                document.getElementById("result").innerHTML = "Please enter valid numbers!";
            }
        }

        // Define a function to divide two numbers and display the result
        function divideBy() {
            let num1 = parseFloat(document.getElementById("firstNumber").value);
            let num2 = parseFloat(document.getElementById("secondNumber").value);

            // Check for valid numbers and handle division by zero
            if (!isNaN(num1) && !isNaN(num2)) {
                if (num2 !== 0) {
                    document.getElementById("result").innerHTML = num1 / num2;
                } else {
                    document.getElementById("result").innerHTML = "Cannot divide by zero!";
                }
            } else {
                document.getElementById("result").innerHTML = "Please enter valid numbers!";
            }
        }
    
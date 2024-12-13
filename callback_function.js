/*
function A(sathi, callback){
    console.log(`${sathi} what are you doing?...`);
    setTimeout(() =>{
        console.log(`${sathi} fighting...`)
        callback(); // calling callback function
    }, 2000); //waits for 2 sec 
}

function Hello() {
    console.log("Good people don't fight! ");
}

A("Bijju", Hello); */

//Callback hell occurs when multiple asynchronous operations are nested within each other, creating deeply indented and hard-to-read code. It becomes difficult to understand, debug, or maintain such code.



/*Scenario: Ordering Food Online (Callback Hell Example) steps: 
Find a restaurant.
Place the order.
Prepare the food.
Deliver the food.
Pay for the food. */

console.log("Starting the process");

setTimeout(() => {
  console.log("Step 1: Finding a restaurant"); 
  setTimeout(() => {
    console.log("Step 2: Placing the order");
    setTimeout(() => {
      console.log("Step 3: Food is being prepared");
      setTimeout(() => {
        console.log("Step 4: Food is out for delivery");
        setTimeout(() => {
          console.log("Step 5: Food delivered.Time to pay!");
          setTimeout(() => {
            console.log("Payment complete.Enjoy your meal!");
          }, 500);
        }, 1000);
      }, 2000);
    }, 1500);
  }, 1000);
}, 500);

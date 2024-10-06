// Prompt the user to enter the maximum limit of the loop
let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop: "));

// Initialize the counters and added value that is declared 
let counter1 = 0;
let counter2 = 0;
let addedValue = 0;

// Using double loop statement to make the map of iterations 
for (let i = 0; i < maxLimit; i++) {
    counter1 = i; // Assign the first current value of i to counter1

    for (let j = 0; j < maxLimit; j++) {
        counter2 = j; // Using j as the second current value to be assigned to counter2

        // Calculate the added value declared as a variable that will add the values
        addedValue = counter1 + counter2;

        // Log the iteration loop points and added value to the console
        console.log(`[${counter1}] [${counter2}] Added value is ${addedValue}`);
    }
}

// Try to do this without using the code from previous work. Only use the JavaScript reference guide: https://docs.google.com/document/d/1sdPHe4xQt_qEzbePtZRdTOcX2hDWpBVV8E_L8JvcPrI/
//
//     Create a main function for all of your code. Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.
//
// - If they press 1, alert "Challenge goes here".
// - If they press 2, alert "2".
// - If they press 3, alert "Hello World".

function main() {
    let userInput = prompt("Please press '1', '2' or '3'. Press 'q' to quit.");
    while (userInput !== 'q') {
        if (userInput === '1') {
            alert("Challenge goes here.");
            let userRes = prompt("Please press 'a', 'b', or 'c'");
            switch(userRes){
                case 'a':
                    alert("A");
                    break;
                case 'b':
                    alert("B");
                    break;
                case 'c':
                    alert("C");
                    break;
                default:
                    alert("That's not an option");
            }
            console.log(userRes);
            }
        else if (userInput === '2') {
            alert("2");
        } else if (userInput === '3') {
            alert("Hello World");
        } else {
            alert("That's not an option.");

        }
        userInput = prompt("Please press '1', '2' or '3'. Press 'q' to quit.");
    }

}
main();
//
//     ### Challenge
// - If they press 1, ask them to press a, b, or c in a different function. If they press a, alert "A", if they press b, alert "B", if they press c, alert "C".
//
//     ### Challenge 2
// - Return the values of a, b, or c to use in the main function.
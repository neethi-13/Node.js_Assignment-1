
//REPL program to find Odd or Even Number

function checkOddOrEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is Even`);
    } 
    else {
        console.log(`${num} is Odd`);
    }

}

checkOddOrEven(5);
checkOddOrEven(10);
checkOddOrEven(15);
checkOddOrEven(20);
checkOddOrEven(25);
checkOddOrEven(30);

//OUTPUT:

/*
5 is Odd
10 is Even
15 is Odd
20 is Even
25 is Odd
30 is Even
*/
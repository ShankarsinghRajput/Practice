// let a =3 ;
// let b=7;
// a=a+b;
// // a+b=b;
// console.log(a!==b);

// let c = (a>b ) true:false
// console.log (c);

// let ranu = 3;
// let A= 9;
//  R=parseInt(prompt("the Son of"));
// if(R == A){
//     console.log("Ranu is bro");
// }

// else if(R<A){
//     console.log("Ranu is definitely the father");
// }
// else if(R !== A){
//     console.log("Ranu is equal to Aadi")
// }



let Amt = 80000;
alert("1. Withdraw ? 2. Deposit");

let Choice = parseInt(prompt("Enter your choice (1 for Withdraw, 2 for Deposit)"));

switch (Choice) { 
    case 1:
        let A = parseInt(prompt("Enter the Amount to Withdraw"));
        Amt = Amt - A;
        console.log("This is your current balance: " + Amt);
        break;

    case 2:
        let B = parseInt(prompt("Enter the Amount to Deposit"));
        Amt = Amt + B;
        console.log("This is your current balance: " + Amt);
        break;

    default:
        console.log("Invalid choice. Please enter 1 or 2.");
}

    



// var chiku = prompt ( "Type chiku here") ;

// var sahiBatt = "chiku";

// if (chiku == sahiBatt ) {alert( "yes chiku")
// }else {
//   alert("incorrect credentials");
// }

// var a = "50";
// var b = 50;
// console.log(a + b)

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// let myArray = ["abdullah", "ali", "shariq",]
// let i = 0;

// alert(myArray)

// do {
// let newStudent = prompt("Enter your name")

// myArray.push(newStudent)

// alert (myArray)
// i++;
// } while (i < 5);
// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// function myFunction (s)

// const mango = ["ab", "cd", "ef", "gh"]
// const banana = mango.slice(1, 3)
// console.log(banana)



// // let totalScore = 0;


// // const Usernumber = prompt();
// // const randomNumber = Math.random();
// // const computerNumber = Math.ceil(randomNumber * 6);
// // alert("Computer number is : " + computerNumber);

// // const iswicket = Usernumber === computerNumber;


// // if (iswicket) {
// //     alert("OUT!")
// //         totalScore += Usernumber;
// //         if (totalScore >= target) {
// //             alert("hurray ! you won")
// //         } else { alert("Your total is: " + totalScore); }


// // }

// for (let i = 1; i <= 3; i++)
//   for (let j = 1; j <= 2; j++)
// //     console.log(i, j);

// const email = prompt ()

// const emailStartIndex = email.indexOf("@")
// const userName = email.slice(0,emailStartIndex)

// alert (userName)

// const emailLastIndex = email.indexOf (".")
// const lastName = email.slice("." , emailLastIndex)

// alert (lastName)



let email = prompt("Enter your Gmail");

let dotIndex = email.indexOf(".");
let lastIndex = email.indexOf ("@");


if (dotIndex !== -1) {
let firstName = email.slice(0, dotIndex);
    alert("First Name: " + firstName);
    let lastName = email.slice (dotIndex + 1 ,lastIndex );
    alert(lastName)
}

if (dotIndex == -1) {
    
    let nameOf = email.slice(0 , lastIndex);
    alert(nameOf)
}
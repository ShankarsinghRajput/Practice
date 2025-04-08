// let marks = prompt("Enter your marks:"); 
// marks = Number(marks); // convert input to number


// if (marks > 90) {
//     console.log("Wonderful! You are a topper! 🎉");
// } else if (marks > 75) {
//     console.log("Amazing! Great job! 🌟");
// } else {
//     console.log("Keep improving! You can do it! 💪");
// }


for (let i = 3; i < 9; i++) {
    console.log(i);
  }
  
  function say(name) {
    return "SUPRABHAT " + name;
  }
  console.log(say("RONDO"));
  
  let fruits = ["apple", "banana", "cherry"];
fruits.push("mango","orange");
console.log(fruits);

function saveData() {
    let person = {
        name: document.getElementById("nameInput").value,
        age: document.getElementById("ageInput").value,
        city: document.getElementById("cityInput").value,
        email: document.getElementById("emailInput").value
    };

    console.log(person);
}


// let person = {
//     name: "Ranu Singh",
//     age: 21,
//     Father: "Aaditya",
//     child: "Kaalu- aka Emmanuel",
//     city: "Mumbai",
//     email:"RANUSINGH@gmail.com"
//   };
//   console.log(person.child, person.Father);
  
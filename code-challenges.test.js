// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe ("evenDivisible", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        expect(evenDivisible(15)).toEqual("15 is divisible by three")
        expect(evenDivisible(0)).toEqual("0 is divisible by three")
        expect(evenDivisible(-7)).toEqual("-7 is not divisible by three")

    })
}) // Failed succesfully: output: ReferenceError: evenDivisible is not defined

// b) Create the function that makes the test pass.
// -------------- FIRST ATTEMPT AND IT DIDNT WORK: THE TEST CONTINUES TO SAY THAT evenDivisible is not defined---------------
// Pseudo code:
// name: evenDivisible
// input: an object as an argument
// output: a string that says if the number is even divisible by three or not
// process: add a function to the object, and use conditionals to see if the number is evenly divisble by 3
// const object1 = { 
//     number: 15, 
//     evenDivisible: function () {
//         if (this.number % 3 === 0) {
//             return `${this.number} is divisible by three`
//         } else {
//             return `the number is not even divisible`
//         }
//     }
//     }
// const object2 = { 
//     number: 0, 
//     evenDivisible: function () {
//         if (this.number % 3 === 0) {
//             return `${this.number} is divisible by three`
//         } else {
//             return `the number is not even divisible`
//         }
//     }
//     }
// const object3 = { 
//     number: -7, 
//     evenDivisible: function () {
//         if (this.number % 3 === 0) {
//             return `${this.number} is divisible by three`
//         } else {
//             return `the number is not even divisible`
//         }
//     }
//     }
// ------------------------ THIS DIDNT WORK----------------------------------
// -------------------- SECOND ATTEMPT : SUCCESSFULL ATTEMPT --------------------------------------
// Pseudo code:
// name: evenDivisible
// input: an object as an argument
// output: a string that says if the number is even divisible by three or not
// process: create a new function, and use conditionals to see if the number is evenly divisble by 3
const evenDivisible = (number) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}
// ---------------------- TEST PASSED --------------------------------

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe ("allCaps", () => {
    it("takes an array of words and returns an array with all the words capitalized", () => {
        expect(allCaps(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allCaps(["temperature", "database", "chopsticks", "mango"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
// Failed succesfully: output: ReferenceError: allCaps is not defined

// b) Create the function that makes the test pass.
// Pseudo code:
// name: allCaps
// input: an array with words in lowercase
// output: an array with all the words capitalized
// process: a function with a for loop, I'll create a new array to store the new array, and use .toUpperCase() to capitalize the first word and then slice()to add the rest of the array starting at index 1
const allCaps = (array) => {
    let capitalizedWords = []
 for (let i = 0; i < array.length; i++) {
   capitalizedWords.push(array[i][0].toUpperCase() + array[i].slice(1))
 } return capitalizedWords
}
console.log(allCaps(randomNouns1))
// ---------------------- TEST PASSED ------------------------
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.
describe ("indexes", () => {
    it("takes in an string and logs the index of the first vowel", () => {
        expect(indexes("learn")).toEqual(1)
        expect(indexes("academy")).toEqual(0)
        expect(indexes("challenges")).toEqual(2)
    })
})
// Failed succesfully: output: ReferenceError: indexes is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
// Pseudo code:
// name: indexes
// input: a string 
// output: logs the index of the first vowel
// process: create a function with a loop that goes through the string and inside of it a conditional statement that looks if the string index contains a vowel 
const indexes = (string) => {
    for (let i = 0; i < string.length; i++) {
        if ("AEIOUaeiou".includes(string[i])){
            return(i)
        }   
    }
} 
console.log(indexes(vowelTester3))
// ---------------------- TEST PASSED ------------------------
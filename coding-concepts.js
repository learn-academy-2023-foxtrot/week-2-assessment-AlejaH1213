// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
console.log(cohort.split(""))

// a) Your answer: split("") is going to separate the string in separate characters separated by a comma
// b) Verify and explain: it did separated the string in separate charaters separated by a comma but also each character has its own '' and they are inside an array

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: it is going to log: Hello, LEARN Student!
// b) Verify and explain: it logged undefined because line is missing the key word return, every function needs a return 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: it is going to log each value in the array multiplied by 2 [8, 10, 12, 14, 16]
// b) Verify and explain: yes, .map() goes through the array and then creates a new array that provides the result of each number multiplied by 2

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: it is going to provide a new array that only has the numbers that are odds
// b) Verify and explain: yes, .filter() goes through the array and creates a new array with the values that satisfy the condition which is number % 2 !== 0

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: this is going to log myCodingSkills = {languages: "JavaScript"}
// b) Verify and explain: I thought it would also log other information in the object like the name and the key but it only logged the value without "" marks 

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: this is going to log Learn { student: "George", cohort: "Echo", year: "2023"}
// b) Verify and explain: yes, when we add information to the class with a new variable (learnStudent) and then we call on that variable it is going to give us all the key: values that are available in that class including the new modified value. 

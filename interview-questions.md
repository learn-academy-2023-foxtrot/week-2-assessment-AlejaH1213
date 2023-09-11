# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AH

1. What is the difference between a parameter and an argument?

Your answer: the difference between a parameter and an argument is that when a function takes a variable as an argument it means that the function can be reusable with other variables and the variable that we put as an argument will be modified when we invoke it with the function. a parameter means that the function is inside the variable if the variable is an object and the function and the variable are interconnected

Researched answer: when we invoke a function, the values that are passed during the invokation are the arguments for example --console.log(function(argument))-- the argument is what is in between (). A parameter is one of the variables in a function, and parameters are considered placeholders for arguments. For example: function = (parameter) => {}, eventually when invoking the function the parameter will be replaced by an argument 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map takes two  parameters a value () and a "string" the value is required but the string is optional

Researched answer: .map() loops through an array and provides a new array of the same lenght. this method is a non mutating method because it doesnt modify the current array but instead provides a new one  .map() takes three arguments a value, an index and array, value is a required parameter and it contains the value of the current element, index and array are optional. 

3. What is the difference between map and filter?

Your answer: .filter() goes through the array and creates a new array with values that satisfy certain condition, .map() goes through the array and provides a new array with transformed values.  

Researched answer: .map() returns an array of the same lenght, while .filter() returns an array with only the values that satidy certain condition. to transform elements we use .map() and to get specific elements that meet a criteria we use .filter()

4. What is iteration?

Your answer: iteration is the action of going through a group of values like a string or an array and evaluate each individual value to either transform it or select it if it meets certain requirements

Researched answer: it is the process of repeatedly going through elements until a condition is met or until all the elements have been accounted for 

5. What is the difference between a function and a method?

Your answer: the difference between a function and a method is that the function is an independent operation, can take different arguments, its reusable and it lives outside of objects. Methods are functions that live inside objects and can only be used in relationship with that object so its not reusable

Researched answer: A function is a stand alone block of code and are invoked by their name, example: -- console.log(function(argument)). Methods are functions that are associated with objects or classes, to invoke a method it is necessary to use dot notation and reference the object or class, example: console.log(object.function())

6. STRETCH: What is hoisting in JavaScript?

Your answer: hoisting in JavaScript refers to the act of using JavaScript to host other code (?no idea?)

Researched answer: hoisting is a mechanism where variables and functions are moved to the top of their scope before executing code, it is used to allow the usage of functions and variables before they are declared

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Spread operator: it allows iterable elements, like arrays or strings, to be spread or put in another array or string. it can be used to copy, merge or convert strings into arrays

2. React state: React is made of many components, React state is a data structure that storages the data within a React component 

3. DOM events: Dom events are the interactions that happen between web applications and users, for example when users click buttons or type in the webpage. 

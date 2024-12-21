const programmingQuestions = [
  {
    text: "What does the acronym OOP stand for?",
    options: [
      { text: "Object-Oriented Programming", isCorrect: true },
      { text: "Objective-Oriented Programming", isCorrect: false },
      { text: "Operation-Oriented Programming", isCorrect: false },
      { text: "Object-Oriented Process", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "Which language is primarily used for web development?",
    options: [
      { text: "JavaScript", isCorrect: true },
      { text: "Python", isCorrect: false },
      { text: "C++", isCorrect: false },
      { text: "Java", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "What is the output of `console.log(typeof null)` in JavaScript?",
    options: [
      { text: "object", isCorrect: true },
      { text: "null", isCorrect: false },
      { text: "undefined", isCorrect: false },
      { text: "string", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Which method is used to add an element to the end of an array in JavaScript?",
    options: [
      { text: "push()", isCorrect: true },
      { text: "pop()", isCorrect: false },
      { text: "shift()", isCorrect: false },
      { text: "unshift()", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "What is the primary purpose of the `virtual` keyword in C++?",
    options: [
      { text: "To enable polymorphism", isCorrect: true },
      { text: "To declare a global variable", isCorrect: false },
      { text: "To optimize memory", isCorrect: false },
      { text: "To create an abstract class", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "What is the time complexity of binary search?",
    options: [
      { text: "O(log n)", isCorrect: true },
      { text: "O(n)", isCorrect: false },
      { text: "O(1)", isCorrect: false },
      { text: "O(n log n)", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Which programming paradigm focuses on functions and immutability?",
    options: [
      { text: "Functional Programming", isCorrect: true },
      { text: "Object-Oriented Programming", isCorrect: false },
      { text: "Procedural Programming", isCorrect: false },
      { text: "Logic Programming", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Which of the following is a valid way to declare a variable in Python?",
    options: [
      { text: "variable_name = 10", isCorrect: true },
      { text: "int variable_name = 10;", isCorrect: false },
      { text: "let variable_name = 10;", isCorrect: false },
      { text: "var variable_name = 10;", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "What does the `finally` block do in a try-catch-finally structure?",
    options: [
      { text: "Executes code regardless of an exception", isCorrect: true },
      { text: "Handles the exception", isCorrect: false },
      { text: "Rethrows the exception", isCorrect: false },
      { text: "Prevents exceptions from propagating", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Which of the following is NOT a primitive data type in Java?",
    options: [
      { text: "String", isCorrect: true },
      { text: "int", isCorrect: false },
      { text: "boolean", isCorrect: false },
      { text: "float", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Which keyword in JavaScript is used to declare a constant variable?",
    options: [
      { text: "const", isCorrect: true },
      { text: "var", isCorrect: false },
      { text: "let", isCorrect: false },
      { text: "constant", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "What is the default value of a reference type in Java?",
    options: [
      { text: "null", isCorrect: true },
      { text: "undefined", isCorrect: false },
      { text: "0", isCorrect: false },
      { text: "empty string", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Which programming language is known for its simplicity and readability?",
    options: [
      { text: "Python", isCorrect: true },
      { text: "C++", isCorrect: false },
      { text: "Assembly", isCorrect: false },
      { text: "Perl", isCorrect: false },
    ],
    difficulty: "Easy",
  },
  {
    text: "What does the `super` keyword do in Java?",
    options: [
      { text: "Accesses the parent class constructor", isCorrect: true },
      { text: "Creates a new instance", isCorrect: false },
      { text: "References a subclass", isCorrect: false },
      { text: "Accesses a static method", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    text: "What does the term 'closure' refer to in JavaScript?",
    options: [
      {
        text: "A function retaining access to its lexical scope",
        isCorrect: true,
      },
      { text: "A function that is immediately invoked", isCorrect: false },
      { text: "A function without a return statement", isCorrect: false },
      { text: "A function with no parameters", isCorrect: false },
    ],
    difficulty: "Hard",
  },
  {
    text: "Which of these is a valid way to create a new thread in Java?",
    options: [
      { text: "Extend Thread class", isCorrect: true },
      { text: "Implement Runnable", isCorrect: true },
      { text: "Call thread()", isCorrect: false },
      { text: "Use the ThreadFactory", isCorrect: true },
    ],
    difficulty: "Hard",
  },
  {
    text: "What is the difference between `==` and `===` in JavaScript?",
    options: [
      { text: "`===` checks both value and type", isCorrect: true },
      { text: "`==` checks only value", isCorrect: true },
      { text: "`==` and `===` are identical", isCorrect: false },
      { text: "`===` checks only type", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Which of the following is an immutable object in Java?",
    options: [
      { text: "String", isCorrect: true },
      { text: "ArrayList", isCorrect: false },
      { text: "HashMap", isCorrect: false },
      { text: "StringBuilder", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "What is the output of `5 + '5'` in JavaScript?",
    options: [
      { text: "55", isCorrect: true },
      { text: "10", isCorrect: false },
      { text: "NaN", isCorrect: false },
      { text: "Error", isCorrect: false },
    ],
    difficulty: "Medium",
  },
  {
    text: "Which of these is a strongly typed programming language?",
    options: [
      { text: "Java", isCorrect: true },
      { text: "JavaScript", isCorrect: false },
      { text: "Python", isCorrect: false },
      { text: "Ruby", isCorrect: false },
    ],
    difficulty: "Easy",
  },
];

module.exports = programmingQuestions;

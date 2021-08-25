// 🦊 Mozilla Developer Network Web Docs
// ⚡ JavaScript — Dynamic client-side scripting
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript


/*
    🔸🔸🔸 JavaScript first steps 🔸🔸🔸
🔹 JavaScript first steps overview
🔹 What is JavaScript?
🔹 A first splash into JavaScript
🔹 What went wrong? Troubleshooting JavaScript
🔹 Storing the information you need — Variables
🔹 Basic math in JavaScript — Numbers and operators
🔹 Handling text — Strings in JavaScript
🔹 Useful string methods
🔹 Arrays
🔹 Assessment: Silly story generator
*/

/*
🔹🔹🔹 What is JavaScript? 🔹🔹🔹
* A high-level definition
* So what can it really do?
        Browser APIs, Third party APIs
* What is JavaScript doing on your page?
    - Browser security
    - JavaScript running order
    - Interpreted versus compiled code
         just-in-time compiling
    - Server-side versus client-side code
    - Dynamic versus static code
* How do you add JavaScript to your page?
    - Internal JavaScript
        <script> // JavaScript goes here </script>
    - External JavaScript
        <script src="script.js" defer></script>
    - Inline JavaScript handlers
        <button onclick="createParagraph()">Click me!</button>
    - Script loading strategies
        async and defer
* Comments
        Single line, Multi-line


🔹🔹🔹 A first splash into JavaScript 🔹🔹🔹
* Thinking like a programmer
* Example — Guess the number game
    - Initial setup
    - Adding variables to store our data
    - Functions
    - Operators
    - Conditionals
    - Events
    - Finishing the game functionality
    - Loops
    - A small discussion on objects
    - Playing with browser objects
* Finished for now...


🔹🔹🔹 What went wrong? Troubleshooting JavaScript 🔹🔹🔹
* Types of error
        Syntax and Logic errors
* An erroneous example
* Fixing syntax errors
    - Syntax errors round two
    - Syntax errors round three
* A logic error
    - Working through the logic
* Other common errors
    - SyntaxError: missing ; before statement
    - The program always says you've won, regardless of the guess you enter
    - SyntaxError: missing ) after argument list
    - SyntaxError: missing : after property id
    - SyntaxError: missing } after function body
    - SyntaxError: expected expression, got 'string' or SyntaxError: unterminated string literal


🔹🔹🔹 Storing the information you need — Variables 🔹🔹🔹
* Tools you need
        console
* What is a variable?
* Declaring a variable
        let, const, var, myVar
* Initializing a variable
        myVar = 42
* The difference between var and let
        var is hoisted
* Updating a variable
    - An aside on variable naming rules
        camelCase
* Variable types
    - Numbers = 42
    - Strings = '42'
    - Booleans = true
    - Arrays = [42, 40]
    - Objects {name: 'User', age: '42' }
* Dynamic typing
        typeof myVar
* Constants in JavaScript


🔹🔹🔹 Basic math in JavaScript — Numbers and operators 🔹🔹🔹
* Everybody loves math
    - Types of numbers
        Numbers: Integers, Floats, Doubles; Number systems: Binary, Octal, Decimal, Hexadecimal;
    - It's all numbers to me
    - Useful Number methods
    - Converting to number data types
        let myNumber = '42'; Number(myNumber);
* Arithmetic operators
        + - * / % **
    - Operator precedence
        ()
* Increment and decrement operators
        num1++; --num1;
* Assignment operators
        += -= *= /=
* Active learning: sizing a canvas box
* Comparison operators
        === !== < > <= >=


🔹🔹🔹 Handling text — Strings in JavaScript 🔹🔹🔹
* The power of words
* Strings — the basics
    - Creating a string
        ' ', " "
    - Single quotes vs. double quotes
    - Escaping characters in a string
        \
* Concatenating strings
        +, 'string literal'
    - Concatenation in context
    - Numbers vs. strings
* Template literals
        ` `, ${ } - placeholder, complex expressions inside template literals:
        let test = ` Testing ${ xNum }/${ yNum } (${ Math.round((xNum/yNum*100)) }%). ${ xNum >= 42 ? 'Test good' : 'Test bad }`;


🔹🔹🔹 Useful string methods 🔹🔹🔹
* Strings as objects
    - Finding the length of a string
        myVar.length
    - Retrieving a specific string character
        myVar[0], myVar[myVar.length-1]
    - Finding a substring inside a string and extracting it
        myVar.indexOf('V'); if (myVar.indexOf('x') === -1) {} don't contain or contain (!== -1); myVar.slice(0,3)
    - Changing case
        myVar.toLowerCase().toUpperCase()
    - Updating parts of a string
        myVar.replace('Var', 'Num')
* Active learning examples
    - Filtering greeting messages
    - Fixing capitalization
    - Making new strings from old parts
    - Test your skills!


🔹🔹🔹 Arrays 🔹🔹🔹
* What is an array?
        list-like objects
    - Creating arrays
        let xArray = [0, 1, 2, [0, 1, 2], 4];
    - Accessing and modifying array items
        xArray[3][2];
    - Finding the length of an array
        xArray.length
* Some useful array methods
    - Converting between strings and arrays
        string to array split(','); array to string join(',') / toString()
    - Adding and removing array items
         push(), pop(), shift(), unshift()
* Active learning: Printing those products!
* Active learning: Top 5 searches


🔹🔹🔹 Assessment: Silly story generator 🔹🔹🔹

*/

// 🦊 Mozilla Developer Network Web Docs
// ⚡ JavaScript — Dynamic client-side scripting
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript


/*
    🔸🔸🔸 JavaScript building blocks 🔸🔸🔸
🔹 JavaScript building blocks overview
🔹 Making decisions in your code — Conditionals
🔹 Looping code
🔹 Functions — Reusable blocks of code
🔹 Build your own function
🔹 Function return values
🔹 Introduction to events
🔹 Assessment: Image gallery
*/

/*
🔹🔹🔹 Making decisions in your code — Conditionals 🔹🔹🔹
* You can have it on one condition..!
* if...else statements
    - Basic if ... else syntax
    - A real example
    - else if
    - A note on comparison operators
    - Nesting if ... else
    - Logical operators: AND, OR and NOT
        && ||
* switch statements
        switch (expression) { case choice1: run this code; break;
                              case choice2: run this code instead; break;
                              default: actually, just run this code;}
    - A switch example
* Ternary operator
        ( condition ) ? run this code : run this code instead
* Active learning: A simple calendar
* Active learning: More color choices!


🔹🔹🔹 Looping code 🔹🔹🔹
* Keep me in the loop
        counter, condition, iterator
    - Why bother?
* The standard for loop
        for (initializer; condition; final-expression) { // code to run }
* Exiting loops with break
* Skipping iterations with continue
* while and do ... while
        initializer             |   initializer
        while (condition) {     |   do {
            // code to run      |       // code to run
            final-expression    |       final-expression
        }                       |   } while (condition)
* Active learning: Launch countdown!
* Active learning: Filling in a guest list
* Which loop type should you use?


🔹🔹🔹 Functions — Reusable blocks of code 🔹🔹🔹
* Where do I find functions?
* Built-in browser functions
* Functions versus methods
* Invoking functions
        function declaration
        function myFunction() { //code to run }
        myFunction();
* Anonymous functions
        function() { //code to run }
* Function parameters
        sometimes called arguments, properties, or even attributes
* Function scope and conflicts
        global scope vs inner scope
    - Active learning: Playing with scope
    - Functions inside functions



🔹🔹🔹 Build your own function 🔹🔹🔹
* Active learning: Let's build a function
* The basic function
* Calling the function
        call the function immediately myfunction(); function invocation operator '()'
* Improving the function with parameters
    - A more complex parameter


🔹🔹🔹 Function return values 🔹🔹🔹
* What are return values?
    - Using return values in your own functions
* Active learning: our own return value function
* Now it's your turn!


🔹🔹🔹 Introduction to events 🔹🔹🔹
* A series of fortunate events
        Each available event has an "event handler", which is a block of code that runs when the event fires. When code is defined to run in response to an event, we say we are "registering an event handler". Event handlers are sometimes called "event listeners".
    - A simple example
        element.onclick = function() {}
    - It's not just web pages
        The Node.js event model relies on listeners to listen for events and emitters to emit events periodically. on(), once()
* Ways of using web events
    - Event handler properties
        myFunction() {}
        element.onclick = myFunction;
    - Inline event handlers — don't use these
        event handler HTML attributes
    - addEventListener() and removeEventListener()
        element.addEventListener('click', myFunction);
    - What mechanism should I use?
        addEventListener()
* Other event concepts
    - Event objects
        function myFunction(e) {}; event, evt, or simply e; e.target
    - Preventing default behavior
        preventDefault()
    - Event bubbling and capture
        Bubbling and capturing explained; Fixing the problem with stopPropagation(); Event delegation;


🔹🔹🔹 Assessment: Image gallery 🔹🔹🔹

*/

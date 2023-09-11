// 🦊 Mozilla Developer Network Web Docs
// ⚡ JavaScript — Dynamic client-side scripting
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript


/*
    🔸🔸🔸 Asynchronous JavaScript 🔸🔸🔸
🔹 Asynchronous JavaScript overview
🔹 General asynchronous programming concepts
🔹 Introducing asynchronous JavaScript
🔹 Cooperative asynchronous Java​Script: Timeouts and intervals
🔹 Graceful asynchronous programming with Promises
🔹 Making asynchronous programming easier with async and await
🔹 Choosing the right approach
*/

/*
🔹🔹🔹 General asynchronous programming concepts 🔹🔹🔹
* Asynchronous?
* Blocking code
* Threads
    - JavaScript is single-threaded
* Asynchronous code

🔹🔹🔹 Introducing asynchronous JavaScript 🔹🔹🔹
* Synchronous JavaScript
* Asynchronous JavaScript
* Async callbacks
        The callback function is not executed immediately.
* Promises
        fetch(); then(); catch()
    - The event queue
        Async operations like promises are put into an event queue, which runs after the main thread has finished processing so that they do not block subsequent JavaScript code from running.
    - Promises versus callbacks
* The nature of asynchronous code
* Active learning: make it all async!


🔹🔹🔹 Cooperative asynchronous Java​Script: Timeouts and intervals 🔹🔹🔹
* Introduction
* setTimeout()
        setTimeout(function sayHi() { alert('Hello, World!'); }, 1000)
    - Passing parameters to a setTimeout() function
        Any parameters that you want to pass to the function being run inside the setTimeout() must be passed to it as additional parameters at the end of the list.
    - Clearing timeouts
        clearTimeout(myFunction);
* setInterval()
    - Clearing intervals
        clearInterval(myInterval);
    - Active learning: Creating your own stopwatch!
* Things to keep in mind about setTimeout() and setInterval()
    - Recursive timeouts
    - How do recursive setTimeout() and setInterval() differ?
    - Immediate timeouts
    - Clearing with clearTimeout() or clearInterval()
* requestAnimationFrame()
    - How fast does your animation run?
    - How does requestAnimationFrame() differ from setInterval() and setTimeout()?
    - Including a timestamp
    - Browser support
    - A simple example
    - Clearing a requestAnimationFrame() call
    - Active learning: Starting and stopping our spinner
    - Throttling a requestAnimationFrame() animation
* Active learning: a reaction game


🔹🔹🔹 Graceful asynchronous programming with Promises 🔹🔹🔹
* What are promises?
        Promise is an object that represents an intermediate state of an operation.
* The trouble with callbacks
        "callback hell"
    - Improvements with promises
* Explaining basic promise syntax: A real example
        Storing the promise object inside variable - 'pending'. The callback inside the .then() block (referred to as the executor) runs only when the promise call completes successfully and returns the Response object — in promise-speak, when it has been fulfilled.
    - Responding to failure
        If promises fails  - 'rejects'. Error handling by running the .catch() method off the previous promise.
    - Chaining the blocks together
* Promise terminology recap
        1. When a promise is created, it is neither in a success or failure state. It is said to be pending.
        2. When a promise returns, it is said to be resolved.
            1) A successfully resolved promise is said to be fulfilled. It returns a value, which can be accessed by chaining a .then() block onto the end of the promise chain. The executor function inside the .then() block will contain the promise's return value.
            2) An unsuccessful resolved promise is said to be rejected. It returns a reason, an error message stating why the promise was rejected. This reason can be accessed by chaining a .catch() block onto the end of the promise chain.
* Running code in response to multiple promises fulfilling
        Promise.all([a, b, c]).then(values => { ... });
* Running some final code after a promise fulfills/rejects
        .finally()
* Building your own custom promises
    - Using the Promise() constructor
        Wrap a setTimeout() call with a promise
    - Rejecting a custom promise
    - A more real-world example


🔹🔹🔹 Making asynchronous programming easier with async and await 🔹🔹🔹
* The basics of async/await
    - The async keyword
        Put in front of a function declaration to turn it into an async function
    - The await keyword
        'await' only works inside async functions
* Rewriting promise code with async/await
    - But how does it work?
    - Adding error handling
* Awaiting a Promise.all()
* The downsides of async/await
        'await' keyword blocks execution of all the code that follows until the promise fulfills, exactly as it would with a synchronous operation
* Async/await class methods
* Browser support


🔹🔹🔹 Choosing the right approach 🔹🔹🔹
* Asynchronous callbacks
* setTimeout()
* setInterval()
* requestAnimationFrame()
* Promises
* Promise.all()
* Async/await

*/

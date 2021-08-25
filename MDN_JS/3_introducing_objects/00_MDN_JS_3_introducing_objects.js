// 🦊 Mozilla Developer Network Web Docs
// ⚡ JavaScript — Dynamic client-side scripting
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript


/*
    🔸🔸🔸 Introducing JavaScript objects 🔸🔸🔸
🔹 Introducing JavaScript objects overview
🔹 Object basics
🔹 Object-oriented JavaScript for beginners
🔹 Object prototypes
🔹 Inheritance in JavaScript
🔹 Working with JSON data
🔹 Object building practice
🔹 Assessment: Adding features to our bouncing balls demo
*/

/*
🔹🔹🔹 Object basics 🔹🔹🔹
* Object basics
        An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called 'properties' and 'methods' when they are inside objects.
        const person = {}
        'object literal' contrast to 'objects instantiated from classes'
* Dot notation
        person.name
        The object name (person) acts as the 'namespace' — it must be entered first to access anything 'encapsulated' inside the object.
    - Sub-namespaces
        object inside object 'const person = {name{first: ..., second: ...}, age: 42, ...}'
        person.name.first
    - Bracket notation
        person['name']['first']
* Setting object members
        person['name']['first'] = 'User'
        Can create new members
        person.newFunction = function() {}
* What is "this"?
        'this' keyword refers to the current object the code is being written inside
* You've been using objects all along
        Methods available on an instance of the 'Document', 'String', 'Array', 'Math'.
        Notifications API
        const myNotification = new Notification('Hello!');


🔹🔹🔹 Object-oriented JavaScript for beginners 🔹🔹🔹
* Object-oriented programming — the basics
        Object data 'encapsulated' inside object package - 'namespace'
    - Defining an object template
        'object class'
    - Creating actual objects
        'object instances'
        When an object instance is created from a class, the class's 'constructor function' is run to create it. This process of creating an object instance from a class is called 'instantiation' — the object instance is 'instantiated' from the class.
    - Specialist classes
        New 'child classes' can be made to 'inherit' 'parent class'.
        Polymorphism - the ability of multiple object types to implement the same functionality is.
* Constructors and object instances
        Special functions called 'constructor functions' defining and initializing objects and their features.
    - A simple example
        Вefine a person with a normal function; function createNewPerson(name) {...}; Create a new person by calling this function; const user =  createNewPerson('user');
        Same can be achived with 'constructor function' - is JavaScript's version of a class; function Person(name); let person1 = new Person('Bob');
    - Creating our finished constructor
    - Further exercises
* Other ways to create object instances
    - The Object() constructor
        let person1 = new Object();
    - Using the create() method
        let person2 = Object.create(person1);


🔹🔹🔹 Object prototypes 🔹🔹🔹
* A prototype-based language?
        To provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.
        'prototype chain'
* Understanding prototype objects
        'person1' -> inherits from prototype -> 'Person' -> inherits from prototype -> 'Object'
        Methods and properties are accessed by 'walking up the prototype chain'.
* The prototype property: Where inherited members are defined
* Revisiting create()
* The constructor property
* Modifying prototypes


🔹🔹🔹 Inheritance in JavaScript 🔹🔹🔹
* Prototypal inheritance
* Getting started
* Defining a Teacher() constructor function
    - Inheriting from a constructor with no parameters
* Setting Teacher()'s prototype and constructor reference
* Giving Teacher() a new greeting() function
* Trying the example out
* A further exercise
* Object member summary
        Four types of property/method:
            1. Defined inside a constructor function that are given to object instances. They are the members defined inside a constructor using the this.x = x type lines; in built in browser code, they are the members only available to object instances (usually created by calling a constructor using the new keyword, e.g. let myInstance = new myConstructor()).
            2. Defined directly on the constructor themselves, that are available only on the constructor. These are commonly only available on built-in browser objects, and are recognized by being chained directly onto a constructor, not an instance. For example, Object.keys(). These are also known as static properties/methods.
            3. Defined on a constructor's prototype, which are inherited by all instances and inheriting object classes. These include any member defined on a Constructor's prototype property, e.g. myConstructor.prototype.x().
            4. Available on an object instance, which can either be an object created when a constructor is instantiated (so for example let teacher1 = new Teacher( 'Chris' ); and then teacher1.name), or an object literal (let teacher1 = { name : 'Chris' } and then teacher1.name).
* ECMAScript 2015 Classes
        'class syntax'
    - Inheritance with class syntax
        class Teacher extends Person {
            constructor(subject, ...) {
            super(); // Now 'this' is initialized by calling the parent constructor.
            this.subject = subject;
        }}
* Getters and Setters
            get subject() { return this._subject; }
            set subject(newSubject) { this._subject = newSubject; }
* When would you use inheritance in JavaScript?
            The sharing of functionality between objects is often called delegation.
* Alternatives for extending the prototype chain


🔹🔹🔹 Working with JSON data 🔹🔹🔹
* No, really, what is JSON?
        JSON is a text-based data format following JavaScript object syntax.
        Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.
        '.json' a MIME type of 'application/json'.
    - JSON structure
        '{  "...": "...", "...": ..., "...": [ { "...": "...", "...": [ "...", "..." ] } ] }'
    - Arrays as JSON
    - Other notes
        - JSON is purely a string with a specified data format — it contains only properties, no methods.
        - JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.
        - Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You can validate JSON using an application like JSONLint.
        - JSON can actually take the form of any data type that is valid for inclusion inside JSON, not just arrays or objects. A single string or number would be valid JSON.
        - Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.
* Active learning: Working through a JSON example
    - Getting started
    - Obtaining the JSON
        let request = new XMLHttpRequest(); request.open('GET', requestURL); request.responseType = 'json'; request.send();
    - Populating the header
    - Creating the hero information cards
* Converting between objects and text
        parse(); stringify();


🔹🔹🔹 Object building practice 🔹🔹🔹
* Let's bounce some balls
* Getting started
* Modeling a ball in our program
    - Drawing the ball
    - Updating the ball's data
* Animating the ball
* Adding collision detection


🔹🔹🔹 Assessment: Adding features to our bouncing balls demo 🔹🔹🔹
*/

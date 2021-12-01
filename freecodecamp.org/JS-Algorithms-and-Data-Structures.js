////////////////////////////////////////////
////////////////////////////////////////////
//
// JavaScript Algorithms and Data Structures
//
/////////////////////////////////////////////
/////////////////////////////////////////////
//
// Basic JavaScript
//
////////////////////////////////////////////
//

//Golf game
//
// var names = ['Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!']
// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     console.log(names[0])
//   } else if (strokes <= par - 2) {
//     console.log(names[1])
//   } else if (strokes == par - 1) {
//     console.log(names[2])
//   } else if (strokes == par) {
//     console.log(names[3])
//   } else if (strokes == par + 1) {
//     console.log(names[4])
//   } else if (strokes == par + 2) {
//     console.log(names[5])
//   } else if (strokes >= par + 3) {
//     console.log(names[6])
//   } else {
//     console.log('Change Me')
//   }
// }
// golfScore(5, 9)

//Selecting from Many Options with Switch Statements
//
// function caseInSwitch(val) {
//   var answer = ''
//   // Only change code below this line
//   switch (val) {
//     case 1:
//       answer = 'alpha'
//       console.log(answer)
//       break
//     case 2:
//       answer = 'beta'
//       console.log(answer)
//       break
//     case 3:
//       answer = 'gamma'
//       console.log(answer)
//       break
//     case 4:
//       answer = 'delta'
//       console.log(answer)
//       break
//   }
//   // Only change code above this line
//   return answer
// }
// caseInSwitch(1)

//Counting Cards
//
// var count = 0
// function cc(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++
//       break
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//       count--
//       break
//   }
//   if (count > 0) {
//     console.log(count + ' Bet')
//     return count + ' Bet'
//   } else {
//     console.log(count + ' Hold')
//     return count + ' Hold'
//   }
// }
// cc(2)

// Using Objects for Lookups
//
// function phoneticLookup(val) {
//   var result = ''
//   var lookup = {
//     alpha: 'Adams',
//     bravo: 'Boston',
//     charlie: 'Chicago',
//     delta: 'Denver',
//     echo: 'Easy',
//     foxtrot: 'Frank',
//   }
//   result = lookup[val]
//   return result
// }
// phoneticLookup('charlie')

// Record Collection
//
// var recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette'],
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: [],
//   },
//   5439: {
//     albumTitle: 'ABBA Gold',
//   },
// }
// Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop]
//     console.log(' OO  K K\nO  O KK\n 00  K K') // Log 'OK' for debug
//   } else if (prop != 'tracks' && prop != '') {
//     records[id][prop] = value
//     console.log(' OO  K K\nO  O KK\n 00  K K') // Log 'OK' for debug
//   } else if (prop === 'tracks' && records[id][prop] == '') {
//     records[id][prop].push(value)
//     console.log(' OO  K K\nO  O KK\n 00  K K') // Log 'OK' for debug
//   } else if (prop === 'tracks' && !records[id].hasOwnProperty(prop)) {
//     records[id][prop] = []
//     records[id][prop].push(value)
//     console.log(' OO  K K\nO  O KK\n 00  K K') // Log 'OK' for debug
//   } else if (prop === 'tracks' && records[id][prop] != '') {
//     records[id][prop].push(value)
//     console.log(' OO  K K\nO  O KK\n 00  K K') // Log 'OK' for debug
//   }

//   return records
// }
// updateRecords(recordCollection, 5439, 'albumTitle', '');

//Nesting For Loops
//
// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ])
// function multiplyAll(arr) {
//   var product = 1
//   for (var i = 0; i < arr.length; i++) {
//     for (var result = 0; result < arr[i].length; result++) {
//       product *= arr[i][result]
//     }
//   }
//   console.log(product)
//   return product
// }

//Replace Loops using Recursion
//
// const xArr = [1, 2, 3, 4, 5]
// function sum(arr, n) {
//   if (n <= 0) {
//     return 0
//   } else {
//     return sum(arr, n - 1) + arr[n - 1]
//   }
// }
// console.log(sum(xArr, 5))
//
// function multiply(arr, n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return multiply(arr, n - 1) * arr[n - 1];
//   }
// }
// console.log(multiply(xArr, 5))

//Profile Lookup
//
// var contacts = [
//   {
//     firstName: 'Akira',
//     lastName: 'Laine',
//     number: '0543236543',
//     likes: ['Pizza', 'Coding', 'Brownie Points'],
//   },
//   {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     number: '0994372684',
//     likes: ['Hogwarts', 'Magic', 'Hagrid'],
//   },
//   {
//     firstName: 'Sherlock',
//     lastName: 'Holmes',
//     number: '0487345643',
//     likes: ['Intriguing Cases', 'Violin'],
//   },
//   {
//     firstName: 'Kristian',
//     lastName: 'Vos',
//     number: 'unknown',
//     likes: ['JavaScript', 'Gaming', 'Foxes'],
//   },
// ]
//
// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i]['firstName'] === name) {
//       if (contacts[i].hasOwnProperty(prop)) {
//         console.log(contacts[i][prop])
//         return contacts[i][prop]
//       } else if (!contacts[i].hasOwnProperty(prop)) {
//         console.log('No such property')
//         return 'No such property'
//       }
//     }
//   }
//   console.log('No such contact')
//   return 'No such contact'
//   // Only change code above this line
// }
// lookUpProfile('Akira', 'likes')

//Generate Random Whole Numbers within a RangePassed
//
// function randomRange(myMin, myMax) {
//   console.log(Math.floor(Math.random() * (myMax - myMin + 1)) + myMin)
// }
// randomRange(5, 8)

//Use the parseInt Function
//
// console.log(parseInt(11110000, 2))

//Use Recursion to Create a Countdown
//
// function countup(n) {
//   if (n < 1) {
//     return []
//   } else {
//     const countArray = countup(n - 1)
//     countArray.push(n)
//     return countArray
//   }
// }
// console.log(countup(5))
//
// function countdown(n) {
//   if (n < 1) {
//     return []
//   } else {
//     const countArray = countdown(n - 1)
//     countArray.unshift(n)
//     return countArray
//   }
// }
// console.log(countdown(5))

// Use recursion to create range of numbers
//
// function countFromTo(from, to) {
//   const xArr = []
//   for (let i = 0; i <= to; i++) {
//     xArr.push(i)
//   }
//   for (let i = 0; i < from; i++) {
//     xArr.shift()
//   }
//   console.log(xArr)
// }
// countFromTo(2, 5)
//
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < 1) {
//     return []
//   } else {
//     let xArr = rangeOfNumbers(startNum - 1, endNum - 1)
//     xArr.push(endNum)
//     if (startNum <= 1) {
//       return xArr
//     } else {
//       xArr.shift()
//     }
//     return xArr
//   }
// }
// console.log(rangeOfNumbers(15, 20))
//
// function rangeOfNumbers(startNum, endNum) {
//   if (endNum - startNum === 0) {
//     return [startNum];
//   } else {
//     var numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }
// console.log(rangeOfNumbers(15, 20))

//
/////////////////////////////////////////////
//
// ES6, ECMAScript 6, released in 2015
//
////////////////////////////////////////////
//

//Use Arrow Functions to Write Concise Anonymous Functions
//
// const myFunc = function () {
//   const myVar = 'value'
//   return myVar
// }
// const myFunc = () => {
//   const myVar = 'value'
//   return myVar
// }
// const myFunc = () => 'value'
// myFunc()
//
// const magic = () => new Date();

//Set Default Parameters for Your Functions
//
// const greeting = (name = 'Anonymous') => 'Hello ' + name
// console.log(greeting())

//Use the Rest Parameter with Function Parameters
//
// const sum = (...argsX) => {
//   const args = argsX
//   return args.reduce((a, b) => a + b, 0)
// }
// Squeeze to arrow function
// const sum = (...args) => (args.reduce((a, b) => a + b, 0))
// console.log(sum(1, 2, 3))

//Use the Spread Operator to Evaluate Arrays In-Place
//ES6 introduces the spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
// let arr2
// arr2 = [...arr1]
// const arr = [6, 89, 3, 45]
// const maximus = Math.max(...arr)

//Use Destructuring Assignment to Extract Values from Objects
//
// const user = { name: 'John Doe', age: 34 };
// const name = user.name;
// const age = user.age;
// const {name, age} = user

//Use Destructuring Assignment to Assign Variables from Nested Objects
// const user = {
//   johnDoe: {
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com',
//   },
// }
// const {
//   johnDoe: { age, email },
// } = user

//Use Destructuring Assignment to Assign Variables from Arrays
//
// let a = 8, b = 6;
// [a, b] = [b, a]
// console.log(a, b)

//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
//
// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a, b, ...arr] = list // Change this line
//   // Only change code above this line
//   return arr
// }
// const arr = removeFirstTwo(source)

//Create Strings using Template Literals
//
// const result = {
//   success: ['max-length', 'no-amd', 'prefer-arrow-functions'],
//   failure: ['no-var', 'var-on-top', 'linebreak'],
//   skipped: ['no-extra-semi', 'no-dup-keys'],
// }
// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [...arr]
//   for (let i = 0; i < arr.length; i++) {
//     failureItems[i] = `<li class="text-warning">${arr[i]}</li>`
//   }
//   // Only change code above this line
//   return failureItems
// }
// const failuresList = makeList(result.failure)
// console.log(failuresList)

//Write Concise Object Literal Declarations Using Object Property Shorthand
//
// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y,
// })
// const getMousePosition = (x, y) => ({ x, y })

//Use getters and setters to Control Access to an Object
//
// // Only change code below this line
// class Thermostat {
//   constructor(temperature) {
//     this._temperature = temperature
//   }
//   // getter
//   get temperature() {
//     return (this._temperature - 32) * (5 / 9)
//   }
//   // setter
//   set temperature(newTemp) {
//     this._temperature = (newTemp * 9.0) / 5 + 32
//   }
// }
// // Only change code above this line
// const thermos = new Thermostat(76) // Setting in Fahrenheit scale
// let temp = thermos.temperature // 24.44 in Celsius
// thermos.temperature = 26
// temp = thermos.temperature // 26 in Celsius
// thermos.temp = 15

//Import a Default Export
// export default function add(x, y) {
//   return x + y;
// }
// not surrounded by curly braces '{}'.
// import add from "./math_functions.js"

//Complete a Promise with resolve and reject
//
// const myPromise = new Promise((resolve, reject) => {
//   let responseFromServer
//   if (responseFromServer) {
//     resolve('Promise was fulfilled')
//   } else {
//     reject('Promise was rejected')
//   }
// })
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

//
/////////////////////////////////////////////
//
// Regular Expressions
//
////////////////////////////////////////////
//

//Match a Literal String with Different Possibilities
//
// let petString = 'James has a pet cat.'
// let petRegex = /dog|cat|bird|fish/
// let result = petRegex.test(petString)

//Find More Than the First Match
//
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi; // Change this line
// let result = twinkleStar.match(starRegex); // Change this line
// console.log(result)

//Match Single Characters Not SpecifiedPassed
//
// let quoteSample = 'The quick brown fox jumps over the lazy dog.'
// let alphabetRegex = /[^aeiou]/gi // Change this line
// let result = quoteSample.match(alphabetRegex) // Change this line
// console.log(result)

//Match Characters that Occur One or More TimesPassed
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // +, *
// let result = difficultSpelling.match(myRegex);
// console.log(result)

//Match Beginning String PatternsPassed
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; //  ^, $
// let result = calRegex.test(rickyAndCal);
// console.log(result)

//Find Characters with Lazy Matching
//
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?/; // Change this line
// let result = text.match(myRegex);
// console.log(result)

//Match All Letters and Numbers - shorthand character classes.
//
// let quoteSample = 'The five boxing wizards jump quickly.'
// let alphabetRegexV2 = /\w/gi // Same as [A-Za-z0-9_] alphanumerics characters and underscore
// let result = quoteSample.match(alphabetRegexV2).length
// console.log(result)

//Restrict Possible Usernames
//
// let username = 'JackOfAllTrades'
// let userCheck = /^[a-zA-Z][a-zA-Z]+$|^[a-zA-Z][a-zA-Z]+[0-9]+$|^[a-zA-Z][0-9][0-9]+$/
// // let result = userCheck.test(username);
// let result = username.match(userCheck)
// console.log(result)

//Specify Upper and Lower Number of Matches
//
// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6} no/; // Change this line
// let result = ohRegex.test(ohStr);

//Check for All or None
//
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

//Positive and Negative Lookahead
//
// let sampleWord = "a12345";
// let pwRegex = /(?=\w{5,})(?=\D*\d\d)(?!\d)/; // Change this line
// let result = pwRegex.test(sampleWord);
// let result = sampleWord.match(pwRegex);
// console.log(result)

//Check For Mixed Grouping of Characters
//
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin|Eleanor).+Roosevelt/; // Change this line
// let result = myRegex.test(myString);

// Reuse Patterns Using Capture Groups
//
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+) \1 \1$/; // Change this line
// let result = reRegex.test(repeatNum);

// Use Capture Groups to Search and Replace
//
// let str = "one two three";
// let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
// let replaceText = "$3 $2 $1"; // Change this line
// let result = str.replace(fixRegex, replaceText);

//Remove Whitespace from Start and End
//
// let hello = '   Hello, World!  '
// let wsRegex = /(\s+)(\s+)/g // Change this line
// let result = hello.replace(wsRegex, '') // Change this line
// console.log(result)

//
/////////////////////////////////////////////
//
// Debugging
//
////////////////////////////////////////////
//

// function loopy() {
//   while(true) {
//     console.log("Hello, world!");
//   }
// }
// loopy()

//
/////////////////////////////////////////////
//
// Basic Data Structures
//
////////////////////////////////////////////
//

//Remove Items Using splice()
//
// let array = ['I', 'am', 'feeling', 'really', 'happy']
// let newArray = array.splice(2, 3)
// console.log(newArray)

//Copy an Array with the Spread OperatorPassed
//
// function copyMachine(arr, num) {
//   let newArr = []
//   while (num >= 1) {
//     // Only change code below this line
//     newArr.push([...arr])
//     // Only change code above this line
//     num--
//   }
//   return newArr
// }
// console.log(copyMachine([true, false, true], 2))

//Iterate Through All an Array's Items Using For Loops
//
// function filteredArray(arr, elem) {
//   let newArr = []
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(elem) < 0) {
//       console.log(arr[i])
//       newArr.push(arr[i])
//     }
//   }
//   // Only change code above this line
//   return newArr
// }
// console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Check if an Object has a Property
//
// let users = {
//   Alan: {
//     age: 27,
//     online: true,
//   },
//   Jeff: {
//     age: 32,
//     online: false,
//   },
//   Sarah: {
//     age: 48,
//     online: true,
//   },
//   Ryan: {
//     age: 19,
//     online: false,
//   },
//   test: {
//     age: 19,
//     online: true,
//   },
// }
// function isEveryoneHere(userObj) {
//   // Only change code below this line
//   // Alan, Jeff, Sarah, Ryan
//   if ('Alan' in userObj && 'Jeff' in userObj && 'Ryan' in userObj && 'Sarah' in userObj) {
//     return true
//   } else {
//     return false
//   }
//   // Only change code above this line
// }
// console.log(isEveryoneHere(users))

//Iterate Through the Keys of an Object with a for...in Statement
//
// function countOnline(usersObj) {
//   // Only change code below this line
//   let count = 0
//   for (let i in usersObj) {
//     // console.log(i)
//     if (usersObj[i].online == true) {
//       count ++
//     }
//   }
//   return count
//   // Only change code above this line
// }
// console.log(countOnline(users))

//
/////////////////////////////////////////////
//
// Basic Algorithm Scripting
//
////////////////////////////////////////////
//

// Reverse a StringPassed
//
// function reverseString(str) {
//   return str.split('').reverse().join('')
// }
// console.log(reverseString('hello'))

//Factorialize a Number
//
// function factorialize(num) {
//   let result = 1
//   for (let i = 1; i <= num; i++) {
//     result = result * i
//   }
//   return result
// }
// console.log(factorialize(5))

//Find the Longest Word in a String
//
// function findLongestWordLength(str) {
//   const arr = str.split(' ')
//   const numArr = []
//   for (let i = 0; i < arr.length; i++) {
//     numArr.push(arr[i].length)
//   }
//   console.log(numArr)
//   let result = 0
//   for (let i = 0; i < numArr.length; i++) {
//     if (result < numArr[i]) {
//       result = numArr[i]
//     }
//   }
//   console.log(result)
//   return result
// }
// findLongestWordLength('The quick brown fox jumped over the lazy dog')

//Return Largest Numbers in Arrays
//
// function largestOfFour(arr) {
//   let result = []
//   for (let i = 0; i < arr.length; i++) {
//     // let largestNum = Number.MIN_SAFE_INTEGER
//     let largestNum = arr[i][0]
//     for (let j = 0; j < arr[i].length; j++) {
//       if (largestNum < arr[i][j]) {
//         largestNum = arr[i][j]
//       }
//     }
//     result.push(largestNum)
//   }
//   console.log(largestNum)
//   console.log(result)
//   return result
// }
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])

//Confirm the Ending
//
// function confirmEnding(str, target) {
//   let endingChar = str.length - target.length
//   let j = 0
//   for (let i = 0; i < target.length; i++) {
//     if (str.charAt(endingChar + i) == target[i]) {
//       j++
//     } else {
//       return false
//     }
//   }
//   if (j == target.length) {
//     return true
//   }
// }
// console.log(confirmEnding('Open sesame', 'sage'))

//Repeat a String Repeat a String
//
// function repeatStringNumTimes(str, num) {
//   let newStr = ''
//   if (num == 0) {
//     return ''
//   } else if (num > 0) {
//     for (let i = 0; i < num; i++) {
//       for (let i = 0; i < str.length; i++) {
//         console.log(str[i])
//         newStr += str[i]
//       }
//     }
//     return newStr
//   } else if (num < 0) {
//     return ''
//   }
// }
// repeatStringNumTimes('abc', 0)

//Truncate a String
//
// function truncateString(str, num) {
//   if (str.length <= num ) {
//     return str
//   } else {
//     str = str.slice(0, num) + '...'
//     console.log(str)
//     return str
//   }
// }
// truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length)

//Finders Keepers
//
// function findElement(arr, func) {
//   for (let i = 0; i < arr.length; i++) {
//     const num = arr[i]
//     if (func(num) === true) {
//       // console.log(num + ' OO  K K\nO  O KK\n 00  K K')
//       console.log(num)
//       return num
//     }
//   }
//   console.log(undefined)
//   return undefined
// }
// findElement([1, 2, 3, 4], (num) => num % 2 === 0)

//Boo who
//
// Check if a value is classified as a boolean primitive.
// function booWho(bool) {
//   if (typeof bool === 'boolean') {
//     return true
//   }
//   return false
// }
// booWho(null )

// Title Case a Sentence
//
// function titleCase(str) {
//   let arrX = str.toLowerCase().split(' ')
//   let arrY = []
//   // console.log(arrX)
//   for (let i = 0; i < arrX.length; i++) {
//     let el = arrX[i].replace(arrX[i][0], arrX[i][0].toUpperCase())
//     // console.log(el)
//     arrY.push(el)
//   }
//   // console.log(arrY)
//   str = arrY.join(' ')
//   // console.log(str)
//   return str
// }
// titleCase("I'm a little tea pot sHoRt AnD sToUt")

// Slice and Splice
//
// function frankenSplice(arr1, arr2, n) {
//   let arrBeforeIndex = []
//   let arrAfterIndex = []
//   let arrResult = []

//   if (n > 0) {
//     for (let i = 0; i < n; i++) {
//       arrBeforeIndex.push(arr2[i])
//     }
//   }
//   console.log(arrBeforeIndex)

//   for (let i = n; i < arr2.length; i++) {
//     arrAfterIndex.push(arr2[i])
//   }
//   console.log(arrAfterIndex)

//   arrResult = arrBeforeIndex.concat(arr1, arrAfterIndex)
//   console.log(arrResult)

//   return arrResult
// }
// frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2)
//should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
//freecodecamp solution
// let localArray = arr2.slice()
// for (let i = 0; i < arr1.length; i++) {
//   localArray.splice(n, 0, arr1[i])
//   n++
// }
// console.log(localArray)
// return localArray

// Falsy Bouncer
//
// function bouncer(arr) {
//   let arrX = []
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr[i] === false || null || 0 || '' || undefined || NaN) {
//       arrX.push(arr[i])
//     }
//   }
//   console.log(arrX)
//   return arrX
// }
// bouncer([7, 'ate', '', false, 9, NaN, undefined])

// Where do I Belong
//
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b) // compareFunction to sort numerically. By default sort() do alphabetical sorting.
//   console.log(arr)
//   if (arr.length === 0) {
//     console.log(0)
//     return 0
//   }
//   if (num > arr[arr.length - 1]) {
//     console.log(arr.length)
//     return arr.length
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (num <= arr[i]) {
//       console.log(arr.indexOf(arr[i]))
//       return arr.indexOf(arr[i])
//     }
//   }
// }
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b)
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return i
//   }
//   return arr.length
// }
// getIndexToIns([], 1) //should return 0.

// Mutations
//
// function mutation(arr) {
//   let regex = []
//   for (let i = 0; i < arr[1].length; i++) {
//     regex.push(new RegExp('[' + arr[1][i] + ']', 'i'))
//   }
//   console.log(regex)

//   let testStr = arr[0]
//   let test
//   for (let i = 0; i < regex.length; i++) {
//     test = regex[i].test(testStr)
//     if (test === false) {
//       console.log(test)
//       return test
//     }
//   }

//   console.log(test)
//   return test
// }
// mutation(['hello', 'hey'])

// Chunky Monkey
//
// function chunkArrayInGroups(arr, size) {
//   let splitArr = []
//   for (let i = 0; i < arr.length; i += size) {
//     splitArr.push(arr.slice(i, i + size))
// i += size - 1
//   }
//   console.log(splitArr)
//   return splitArr
// }
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) //should return [[0, 1, 2], [3, 4, 5]]

//
/////////////////////////////////////////////
//
// Object Oriented Programming
//
////////////////////////////////////////////
//

// function Bird(name, color) {
//   this.name = name
//   this.color = color
//   this.numLegs = 2
// }
// // Bird.name = "test"
// let newBird = new Bird()
// let newBird2 = new Bird()
// console.log(newBird2.numLegs)

// Iterate Over All Properties
//
// function Bird(name) {
//   this.name = name //own property
// }
// Bird.prototype.numLegs = 2 // prototype property
// let duck = new Bird('Donald')
// let ownProps = []
// let prototypeProps = []
// for (let property in duck) {
//   if (duck.hasOwnProperty(property)) {
//     ownProps.push(property)
//   } else {
//     prototypeProps.push(property)
//   }
// }
// console.log(ownProps)
// console.log(prototypeProps)
// Bird.prototype.numLegs = 2
// Bird.prototype.eat = function () {
//   console.log('nom nom nom')
// }
// let duck = new Bird('Donald')
// duck.eat()

// Understand the Prototype Chain
//
// function Dog(name) {
//   this.name = name
// }
// let beagle = new Dog('Snoopy')
// Dog.prototype.isPrototypeOf(beagle) // yields true
// Object.prototype.isPrototypeOf(Dog.prototype)

// Use Inheritance So You Don't Repeat Yourself
// function Animal() {}
// Animal.prototype = {
//   constructor: Animal,
//   describe: function () {
//     console.log('My name is ' + this.name)
//   },
// }
// Bird.prototype = {
//   constructor: Bird,
// }
// Dog.prototype = {
//   constructor: Dog,
// }

// Use a Mixin to Add Common Behavior Between Unrelated Objects
//
// let flyMixin = function (obj) {
//   obj.fly = function () {
//     console.log('Flying, wooosh!')
//   }
// }
// let bird = {
//   name: 'Donald',
//   numLegs: 2,
// }
// let plane = {
//   model: '777',
//   numPassengers: 524,
// }
// flyMixin(bird)
// flyMixin(plane)
// bird.fly()
// plane.fly()

//
/////////////////////////////////////////////
//
// Functional Programming
//
////////////////////////////////////////////
//

// Understand Functional Programming TerminologyPassed
//
// // Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea'
// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea'
// /*
// Given a function (representing the tea type) and number of cups needed, the following function returns an array of strings (each representing a cup of a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//   const teaCups = []
//   for (let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea()
//     teaCups.push(teaCup)
//   }
//   return teaCups
// }
// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27)
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13)
// // Only change code above this line
// console.log(tea4GreenTeamFCC, tea4BlackTeamFCC)

// Understand the Hazards of Using Imperative Code
//
// // tabs is an array of titles of each site open within the window
// const Window = function (tabs) {
//   this.tabs = tabs // We keep a record of the array inside the object
// }
// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs)
//   return this
// }
// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push('new tab') // Let's open a new tab for now
//   return this
// }
// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   // Only change code below this line
//   this.tabs.splice(index, 1) // Remove tab
//   // const tabsBeforeIndex = this.tabs.splice(index, 1) // Get the tabs before the tab
//   // const tabsAfterIndex = this.tabs.splice(index, 1) // Get the tabs after the tab
//   // this.tabs = tabsBeforeIndex.concat(tabsAfterIndex) // Join them together
//   // Only change code above this line
//   return this
// }
// // Let's create three browser windows
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']) // Your mailbox, drive, and other work sites
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']) // Social sites
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']) // Entertainment sites
// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//   .tabOpen() // Open a new tab for cat memes
//   .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//   .join(workWindow.tabClose(1).tabOpen())
// console.log(finalTabs.tabs)

// Pass Arguments to Avoid External Dependence in a Function
//
// // The global variable
// let fixedValue = 4
// // Only change code below this line
// function incrementer(value) {
//   let newValue
//   newValue = value + 1
//   return newValue
//   // Only change code above this line
// }

// Refactor Global Variables Out of Functions
//
// The global variable
// const bookList = [
//   'The Hound of the Baskervilles',
//   'On The Electrodynamics of Moving Bodies',
//   'Philosophiæ Naturalis Principia Mathematica',
//   'Disquisitiones Arithmeticae',
// ]
// // Change code below this line
// let addedBookList = []
// function add(bookArray, bookName) {
//   addedBookList = [...bookArray]
//   addedBookList.push(bookName)
//   return addedBookList

//   // Change code above this line
// }
// // Change code below this line
// let removedBookList = []
// function remove(bookList, bookName) {
//   removedBookList = [...bookList]
//   const book_index = removedBookList.indexOf(bookName)
//   if (book_index >= 0) {
//     removedBookList.splice(book_index, 1)
//     return removedBookList

//     // Change code above this line
//   }
// }
// const newBookList = add(bookList, 'A Brief History of Time')
// const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies')
// const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')
// console.log(bookList)
// console.log(newBookList)
// console.log(newerBookList)

// Use the map Method to Extract Data from an Array
//
// const watchList = [
//   { Title: 'Inception', Year: '2010' },
//   { Title: 'Interstellar', Year: '2014' },
//   { Title: 'The Dark Knight', Year: '2008' },
//   { Title: 'Batman Begins', Year: '2005' },
//   { Title: 'Avatar', Year: '2009' },
// ]
// const ratings = watchList.map((obj) => {
//   let newObj = {}
//   newObj['title'] = obj.Title
//   newObj['year'] = obj.Year
//   return newObj
// })
// console.log(ratings)

// Implement map on a Prototype
//
// // The global variable
// const s = [23, 65, 98, 5]
// Array.prototype.myMap = function (callback) {
//   const newArray = []
//   // Only change code below this line
//   for (let i = 0; i < this.length; i++) {
//     // newArray[i] = this[i]
//     // newArray[i] = newArray[i] * 2 // Wrong!
//     // newArray.push(this[i])
//     // newArray[i] = callback(this[i])
//     newArray.push(callback(this[i]))
//   }
//   // Only change code above this line
//   return newArray
// }
// const new_s = s.myMap(function (item) {
//   return item * 2
// })
// console.log(new_s)

// Use the filter Method to Extract Data from an Array
//
// The global variable
// const watchList = [
//   {
//     Title: 'Inception',
//     Year: '2010',
//     imdbRating: '8.8',
//   },
//   {
//     Title: 'Interstellar',
//     Year: '2014',
//     imdbRating: '8.6',
//   },
//   {
//     Title: 'The Dark Knight',
//     Year: '2008',
//     imdbRating: '9.0',
//   },
//   {
//     Title: 'Batman Begins',
//     Year: '2005',
//     imdbRating: '8.3',
//   },
//   {
//     Title: 'Avatar',
//     Year: '2009',
//     imdbRating: '7.9',
//   },
// ]
// With for loop
// Only change code below this line
// function myFunc(value) {
//   const tempArray = [...value]
//   const newArray = []
//   for (let i = 0; i < tempArray.length; i++) {
//     let obj = tempArray[i]
//     if (obj.imdbRating >= 8) {
//       newArray.push(obj)
//     }
//   }
//   return newArray
// }
// Without for loop
// const filteredList = watchList
//   .map((obj) => {
//     let newObj = {}
//     newObj['title'] = obj.Title
//     // newObj['rating'] = Number(obj.imdbRating)
//     newObj['rating'] = obj.imdbRating
//     return newObj
//   })
//   .filter((obj) => obj.rating >= 8)
// // Only change code above this line
// console.log(watchList)
// console.log(filteredList)

// Implement the filter Method on a Prototype
//
// // The global variable
// const s = [23, 65, 98, 5]
// Array.prototype.myFilter = function (callback) {
//   // Only change code below this line
//   const newArray = []
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       newArray.push(this[i])
//     }
//   }
//   // Only change code above this line
//   return newArray
// }
// const new_s = s.myFilter(function (item) {
//   return item % 2 === 1
// })
// console.log(new_s)

// Return Part of an Array Using the slice Method
//
// function sliceArray(anim, beginSlice, endSlice) {
//   // Only change code below this line
//   const newArr = anim.slice(beginSlice, endSlice)
//   return newArr
//   // Only change code above this line
// }
// const inputAnim = ['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant']
// sliceArray(inputAnim, 1, 3)

// Remove Elements from an Array Using slice Instead of splice
//
// function nonMutatingSplice(cities) {
//   return cities.slice(0, 3)
// }
// const inputCities = ['Chicago', 'Delhi', 'Islamabad', 'London', 'Berlin']
// nonMutatingSplice(inputCities)

// Combine Two Arrays Using the concat Method
//
// function nonMutatingConcat(original, attach) {
//   return original.concat(attach)
// }
// const first = [1, 2, 3]
// const second = [4, 5]
// nonMutatingConcat(first, second)

// Use the filter Method to Extract Data from an Array
//
// const watchList = [
//   {
//     Title: 'Inception',
//     Director: 'Christopher Nolan',
//     imdbRating: '8.8',
//   },
//   {
//     Title: 'Interstellar',
//     Director: 'Christopher Nolan',
//     imdbRating: '8.6',
//   },
//   {
//     Title: 'The Dark Knight',
//     Director: 'Christopher Nolan',
//     imdbRating: '9.0',
//   },
//   {
//     Title: 'Batman Begins',
//     Director: 'Christopher Nolan',
//     imdbRating: '8.3',
//   },
//   {
//     Title: 'Avatar',
//     Director: 'James Cameron',
//     imdbRating: '7.9',
//   },
// ]
// function getRating(watchList) {
//   let averageRating = watchList
//     .filter((obj) => obj.Director === 'Christopher Nolan')
//     .map((obj) => {
//       let newObj = {}
//       newObj['rating'] = Number(obj.imdbRating)
//       return newObj
//     })
//   averageRating =
//     averageRating.reduce((previous, current, index, array) => {
//       return previous + current.rating
//     }, 0) / averageRating.length

//   return averageRating
// }
// console.log(getRating(watchList))

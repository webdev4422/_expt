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
//     for (var j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j]
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
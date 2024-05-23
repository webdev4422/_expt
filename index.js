// # Snippet
// const obj = {
//   a: 1,
//   b: 2,
// }
// const obj2 = `{
//   "a": "1",
//   "b": 2
// }`
// const valid = JSON.stringify(obj)

// console.log(JSON.parse(obj2))

// # Snippet
//
// function sum(a) {
//   return (b) => a + b
// }
// console.log(sum(1)(2))

// let randomNum = Math.random() > 0.5 ? 'high' : 'low'
// console.log(randomNum)

// # Snippet
// let ladder = {
//   step: 0,
//   up() {
//     this.step++
//   },
//   down() {
//     this.step--
//   },
//   showStep: function () {
//     // alert(this.step)
//     return this.step
//   },
// }
// ladder.up()
// ladder.up()
// ladder.down()
// ladder.showStep() //?

// Chaining  https://javascript.info/object-methods#chaining
// let ladder = {
//   step: 0,
//   up() {
//     this.step++
//     return this
//   },
//   down() {
//     this.step--
//     return this
//   },
//   showStep: function () {
//     // alert(this.step)
//     console.log(this.step)
//     return this
//   },
// }
// ladder.up().up().down().showStep() //?

// # Snippet
// Using "this" in object literal
// function makeUser() {
//   return {
//     name: 'John',
//     ref: this,
//   }
// }

// let user = makeUser()
// console.log(user)

// alert(user.ref.name) // What's the result? // Error: Cannot read property 'name' of undefined
// console.log(user.ref.name)

// function makeUser() {
//   return {
//     name: 'John',
//     ref() {
//       return this
//     },
//   }
// }

// // let user = makeUser()
// // console.log(user)

// // alert( user.ref().name ); // John
// // console.log(user.ref().name)
// function sayHi() {
//   console.log(this.name)
// }
// sayHi()

// # Snippet

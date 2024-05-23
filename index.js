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
async function fetchX() {
  const urlString = 'https://api.github.com/users/'
  const user = 'webdev4422'
  const resource = urlString + user
  //prettier-ignore
  const token = 'GITHUB_TOKEN'
  const options = {
    headers: {
      Authorization: token,
    },
  }

  const response = await fetch(resource, options)
  const data = await response.json()
  console.log(data)
}
// fetchX()

const githubResponseObject = {
  login: 'webdev4422',
  id: 67459982,
  node_id: 'MDQ6VXNlcjY3NDU5OTgy',
  avatar_url: 'https://avatars.githubusercontent.com/u/67459982?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/webdev4422',
  html_url: 'https://github.com/webdev4422',
  followers_url: 'https://api.github.com/users/webdev4422/followers',
  following_url: 'https://api.github.com/users/webdev4422/following{/other_user}',
  gists_url: 'https://api.github.com/users/webdev4422/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/webdev4422/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/webdev4422/subscriptions',
  organizations_url: 'https://api.github.com/users/webdev4422/orgs',
  repos_url: 'https://api.github.com/users/webdev4422/repos',
  events_url: 'https://api.github.com/users/webdev4422/events{/privacy}',
  received_events_url: 'https://api.github.com/users/webdev4422/received_events',
  type: 'User',
  site_admin: false,
  name: 'webdev4422',
  company: null,
  blog: 'https://x-drive.ua',
  location: 'Ukraine',
  email: null,
  hireable: null,
  bio: '🚀',
  twitter_username: null,
  public_repos: 49,
  public_gists: 0,
  followers: 2,
  following: 0,
  created_at: '2020-06-26T08:43:51Z',
  updated_at: '2024-05-23T14:08:54Z',
}

// # Snippet
async function getGitHubUsers(names) {
  const users = []
  const URL = 'https://api.github.com/users/'
  //prettier-ignore
  const options = {headers: {Authorization:'GITHUB_TOKEN',},}

  for (const name of names) {
    const response = await fetch(URL + name, options)
    const data = await response.json()
    data.login ? users.push(data.login) : users.push(null)
  }
  // console.log(users)
  return users
}
// getUsers(['webdev4422', 'iliakan', 'remy', 'no.such.users'])

const obj = {
  a: 1,
  b: 2,
}
const obj2 = `{
  "a": "1",
  "b": 2
}`
const valid = JSON.stringify(obj)

console.log(JSON.parse(obj2))

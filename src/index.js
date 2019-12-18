class Person {
  constructor (name) {
    this.name = name
  }

  getName () {
    return this.name
  }
}

const sayHellow = () => {
  console.log('babel7')
}
const p = new Person('xiaoyanIT')
console(p.getName())
sayHellow()

var xixi = function () {
  console.log(111)
}
const a = 100
if (a) {
  console.log(true)
} else {
  console.log(false)
  console.log(xixi)
}

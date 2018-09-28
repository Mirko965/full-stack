const add = (a, b) => a + b
const square = (a) => a * a
const addAsync = (a,b,callback) => {
  setTimeout(() => {
    return callback(a + b)
  },1500)
}
const squareAsync = (x,callback) => {
  setTimeout(() => {
    return callback(x * x)
  },1000)
}

module.exports = {
  add,
  square,
  addAsync,
  squareAsync
}

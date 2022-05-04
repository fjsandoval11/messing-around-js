// let squaredNumber = Math.pow(5,2)
// let sanityCheck = 5 * 5
// console.log(squaredNumber)
// console.log(sanityCheck)

// let secondNumber = Math.pow(6,2)
// let sanityCheck2 = 6 * 6
// console.log(secondNumber)
// console.log(sanityCheck2)

// let cubeNumber = (Math.cbrt(8));
// let sanityCheck3 = 2 * 2 * 2
// console.log(cubeNumber)
// console.log(sanityCheck3)

// let powerNumber = Math.pow(5,5)
// let sanityCheck = 5 * 5 * 5 * 5 * 5
// console.log(powerNumber)
// console.log(sanityCheck)

// answer for code challenge: find the range
let array = [28, 43, -12, 30,4, 0,-36]

let smallest = [0]
let largest = [0]

for (let i = 0; i < array.length; i++) {
    if (smallest > array[i]) {
        smallest = array[i] 
    } else if (largest < array[i]) {
        largest = array[i]
    }
}

console.log(smallest, largest)
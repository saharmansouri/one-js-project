function fizzBuzz(a) {
    if (typeof (a) !== "number") return NaN;
    if (a % 3 === 0 && a % 5 === 0) return "FizzBuzz";
    else if (a % 3 === 0) return "Fizz";
    else if (a % 5 === 0) return "Buzz";
    else return a;
}

console.log(fizzBuzz(100))
console.log(fizzBuzz(30))
console.log(fizzBuzz(54))
console.log(fizzBuzz(7))
console.log(fizzBuzz("salam"))
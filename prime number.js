function isPrime(n){
    for (let i = 2; i < n; i++){
        if (n%i === 0){
            return false;
        }
    }
    if (n === 1) return false;
    else return true;
}
function numPrime(a,b){
    let n = a;
    let arr = [];
    while( n < b ){
        if (isPrime(n)){
            arr.push(n);

        }
        n++;
    }
    return arr;
}
console.log(numPrime(1,100))
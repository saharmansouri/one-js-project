function complete(n){
    let val = 0;
    for (let i = 1; i < n; i++){
        if (n%i === 0){
            val += i;
        }
    }
    return (val === n);
}
// console.log(complete(27))
// console.log(complete(6))

for (let i = 1; i < 3000; i++){
    if (complete(i)){
        console.log(i)
    }
}
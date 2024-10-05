function sumOffAll(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total = total + i;
    }
    return total;
}
const totalResult = sumOffAll(10)
console.log(totalResult)
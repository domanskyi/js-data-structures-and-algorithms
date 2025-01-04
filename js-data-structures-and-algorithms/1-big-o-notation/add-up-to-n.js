const { performance } = require("perf_hooks");

const addUpToSlow = (n) => {
    let total = 0;

    for (let i = 0; i <= n; i++) {
        total += i;        
    }
    
    return total;
}

const addUpToFast = (n) => 
    n * (n + 1) / 2;

const t1 = performance.now();
addUpToFast(1000000000);
const t2 = performance.now();

console.log(`Time: ${(t2 - t1) / 1000} seconds.`)

// -2^31 <= x <= 2^31 - 1
function reverse(x: number): number {
    if (x < 0) {
         return -1 * reverse(-x);
    }
    const num = parseInt(("" + x).split('').reverse().join(''));
    return num > 2**31 ? 0 : num;
};

// Expected output:- 321
console.log(reverse(123));

// Expected output:- -321
console.log(reverse(-123));

// Expected output:- 21
console.log(reverse(120));

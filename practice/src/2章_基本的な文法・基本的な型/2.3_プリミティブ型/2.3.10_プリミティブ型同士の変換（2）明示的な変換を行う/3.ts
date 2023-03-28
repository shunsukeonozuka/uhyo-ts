const bigint1 = BigInt("1234");
console.log(bigint1);
// >1234n

const bigint2 = BigInt(500);
console.log(bigint2);
// >500n

const bigint3 = BigInt(true);
console.log(bigint3);
// >1n

const bigint = BigInt("foooooo");
console.log("bigint is ", bigint);
// >SyntaxError: Cannot convert foooooo to a BigInt

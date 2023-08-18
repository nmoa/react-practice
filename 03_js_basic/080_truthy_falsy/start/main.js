// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0;
let result = a ? 10 : -10;
console.log(result);

const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy));
console.log(Boolean(falsy));

// 論理積 (&&) 
// 左から見て最初に見つかったfalsyな値を入れる
// 見つからなかったら一番右が格納される
const resultA = "" && "foo"; // -> ""
const resultB = 2 && 1 && 0 && 3; // -> 0
const resultC = "foo" && 4; // -> 4

console.log(`resultA = ${resultA}`);
console.log(`resultB = ${resultB}`);
console.log(`resultC = ${resultC}`);

// 論理和 (||) 
// 左から見て最初に見つかったtruthyな値を入れる
// 見つからなかったら一番右が格納される
const resultD = "" || "foo"; // -> foo
const resultE = 0 || 2 || 0; // -> 2
const resultF = "foo" || 4; // -> foo
const resultG = "" || 0; // -> 0

console.log(`resultD = ${resultD}`);
console.log(`resultE = ${resultE}`);
console.log(`resultF = ${resultF}`);
console.log(`resultG = ${resultG}`);

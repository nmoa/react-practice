const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums); // 配列を展開して渡す
console.log(result);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1]; // 配列をコピーして新しい配列を作る
console.log(newArr);
console.log(newArr === arr1); // -> 違う配列なのでfalse

let newArr1 = arr1; // Cで言うとポインタをコピーしている感じ
console.log(newArr1 === arr1); // -> 実体が同じなのでtrue;

let newArr2 = [...arr1, ...arr2]; // スプレッドによる配列の結合
console.log(newArr2);

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj }; // スプレッドによるオブジェクトの展開

console.log(newObj);

// 残余引数(rest parameter)。可変長引数のときによく使う
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

// 別の変数に分ける時はこう
const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)

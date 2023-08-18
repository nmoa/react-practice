const arry = [10, 20, 30, 40];
const newArry = [];

for (let i = 0; i < arry.length; i++) {
    const val = arry[i] * 2;
    if (val > 50) {
        newArry.push(val * 2);
    }
}
console.log(newArry);

// map, filterの引数にcallbackとしてアロー関数を渡す
// 配列の各要素に対する処理はこう書くとわかりやすい
const newArry2 = arry.map(val => val * 2);
const newArry3 = newArry2.filter(val => val > 50);
console.log(newArry3);

// 1行にまとめて書くこともできる
const newArry4 = arry.map(val => val * 2).filter(val => val > 60);
console.log(newArry4);

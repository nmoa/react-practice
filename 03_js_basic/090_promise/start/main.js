// 同期処理 : コードが呼ばれた順に処理が完了する
let a = 0;
console.log(a);

// 非同期処理 : コードがコールされた順番通りに処理が行われないもの
setTimeout(() => { a = 1; }, 2000); // 2000ms秒後にa=1が実施される

console.log(a); // 0 が表示される

// 非同期処理が終わったあとのオブジェクトを使いたい場合はPromiseを使う
new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 2;
        resolve(a); // thenに登録したコールバックが実行される
        // reject(a); // rejectを実行するとcatchに登録したコールバックが実行される。エラー処理用
    }, 2000);
}).then((b) => {
    console.log(b);
    return b; // 次のthenに渡したい値をreturnする
}).then((b1) => { // thenは繋げて書くことができる
    console.log(b1);
}).catch((c) => {
    console.log("Catchが実行", c);
})

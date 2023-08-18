const h1Element = document.querySelector('h1');
console.dir(h1Element);
// タグの中身をいじれる
h1Element.textContent = '変更後のタイトル'

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', (e) => { // 無名関数の引数でイベントのオブジェクト`e`を渡せる
    console.log(e);
    console.dir(e.target); // イベントに伴う情報を拾いたいときにtargetをよく使う この場合button要素が引っ張れる
    console.log(e.target.textContent);
    console.log('Hello');
});

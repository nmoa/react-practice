// 分割代入
// 配列から特定の要素を変数に代入する(いらないものは省略可)
const [a, , c] = ["配列1", "配列2", "配列3"];
console.log(a);
console.log(c);

// オブジェクトの場合はプロパティ名を指定する。順不同。
const { z, x } = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(x);
console.log(z);


const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// 関数の引数に対する配列の分割代入
const fnArr = ([country, state, city]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

// 関数の引数に対するオブジェクトの分割代入
const fnObj = ({ country, state, city }) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);

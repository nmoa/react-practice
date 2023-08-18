// 普通の関数
function fn(number) {
  return number * 2;
}

// ラムダ
const fn2 = function (number) {
  return number * 2;
}

// アロー関数
const fnArrow2 = (number) => {
  return number * 2;
}

// アロー関数の省略形.引数の括弧とブロックを省略できる
const fnArrow = number => number * 2;
console.log(fnArrow(3));

// 以下のように書くとオブジェクトリテラルを返すことができる
const fnArrowObj = number => ({ hoge: number * 2 });
console.log(fnArrowObj(3));

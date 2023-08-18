// 基本的なexportの記法
export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};
// 1つのファイルに1つだけdefaultでexportできる
export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}
// オブジェクトリテラルをexport
export { User }

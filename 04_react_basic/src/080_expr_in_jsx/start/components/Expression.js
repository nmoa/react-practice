import "./Expression.css"

const Expression = () => {
    const title = "Expression";
    const arr = ['item1', 'item2', 'item3']; // 配列は中身が結合されて表示される
    const hello = (arg) => `${arg} Function`; // ``で囲んだものをテンプレートリテラルという
    const jsx = <h3>This is JSX.</h3>;
    console.log(jsx);

    // {}の中にJSの式を埋め込むことができる
    return (
        <div className={title.toLowerCase()}>
            <h3>Hello {title}</h3>
            <h3>{arr}</h3>
            <h3>{hello('Hello')}</h3>
            <h3>{/* これはコメント。タグが空で表示される */}</h3>
            {<h3>Hello JSX</h3> /* JSXを直接埋め込むこともできる */}
            {jsx}
        </div>
    );
}

export default Expression;

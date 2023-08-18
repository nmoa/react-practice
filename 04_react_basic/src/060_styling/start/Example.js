import "./Example.css" // 相対パスにする必要がある。パスにしないとnode_modulesから読み込む

/**
 * [注意]レクチャーをプルダウンで選択すると、<head>タグにそのレクチャーでimport "Example.css"のように読み込んだスタイルが挿入されます。このスタイルはプルダウンを切り替えても残りつづけるため、まだcssを記述していないのにスタイルが適用されていると感じた場合にはブラウザを更新してください。
 */
const Example = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
    </div>
  );
};

export default Example;

import "./Child.css";
import React from "react";
// React.Fragmentだけ使うなら以下のようにしても良い
// import { Fragment } from "react";

const Child = () => {
  return (
    // 以下のように最上位に複数のJSX要素がいるとエラーになる
    // <div className="component">
    //   <h3>Hello Component</h3>
    // </div>
    // <h3>Hello Fragment</h3>
    // <p>Lorem ipsum</p>
    // この場合React.Fragmentで囲むと、html側に余計なタグが出力されない
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Obcaecati repellat dolor doloribus iure consequatur soluta?
        Optio corrupti ratione suscipit recusandae eius perspiciatis illo corporis?
        Aliquam nam repellendus quos expedita est?
      </p>
    </React.Fragment >
    // 以下のように空のタグで囲っても良い
    // <>
    //   <div className="component">
    //     <h3>Hello Component</h3>
    //   </div>
    //   <h3>Hello Fragment</h3>
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //     Obcaecati repellat dolor doloribus iure consequatur soluta?
    //     Optio corrupti ratione suscipit recusandae eius perspiciatis illo corporis?
    //     Aliquam nam repellendus quos expedita est?
    //   </p>
    // </>
  );
};

export default Child;

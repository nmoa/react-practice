import { useState } from "react";

const Example = () => {
    // useStateは関数コンポーネントのトップレベルでしか呼べない
    let [countA, setCountA] = useState(0);
    let [countB, setCountB] = useState(0);
    let [countC, setCountC] = useState(0);
    return (
        <>
            <div>ボタンAを{countA}回押しました</div>
            <button onClick={() => { setCountA(countA + 1); }}>ボタンA</button>
            <div>ボタンBを{countB}回押しました</div>
            <button onClick={() => { setCountB(countB + 1); }}>ボタンB</button>
            <div>ボタンCを{countC}回押しました</div>
            <button onClick={() => { setCountC(countC + 1); }}>ボタンC</button>
        </>
    )
};

export default Example;

// 非同期処理（Promise）
let a = 0;

init();

// awaitを使いたい場合はasyncで関数を定義する
async function init() {
    // エラー処理はtry-catchで囲む
    try {
        // await new Promiseするとresolveが実行されるまで次の処理を待つ
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                a = 1;
                resolve(a)
            }, 2000);
        })
        console.log(result);
    } catch (e) {
        console.log('catchが実行', e);
    }


}

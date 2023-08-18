import { hello } from "./module.js";
import { User } from "./module.js";
import functionB from "./module.js"; // default exportはオブジェクトで囲まない。funcBがimportされる

// 全部まとめて以下のようにも書ける
// import funcB { hello, User } from "./module.js";

hello();
const user = new User("John Doe");
user.hello();
functionB();

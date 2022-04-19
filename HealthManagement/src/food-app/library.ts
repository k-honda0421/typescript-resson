import axios from "axios";
// npm install --save-dev @types/lodashで型定義ファイルをinstallする(ググった結果あれば)
// import _ from "lodash";

axios.get("https://google.com");
// _.shuffle([1, 2, 3, 4]);

console.log(_.shuffle([1, 2, 3, 4]));
namespace myApp {
  const hello = "hello";
  export const name = "quill";
  interface nameable {
    name: string;
  }
}

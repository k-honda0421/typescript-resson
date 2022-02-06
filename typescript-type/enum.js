"use strict";
/**
 * Enum
 * 特定のまとまったグループのみを受け入れる列挙型
 */
var CoffeSize;
(function (CoffeSize) {
    CoffeSize["SHORT"] = "SHORT";
    CoffeSize["TALL"] = "TALL";
    CoffeSize["GRANDE"] = "GRANDE";
    CoffeSize["VENTI"] = "VENTI";
})(CoffeSize || (CoffeSize = {}));
const coffee = {
    hot: true,
    size: CoffeSize.TALL,
};

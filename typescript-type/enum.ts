/**
 * Enum
 * 特定のまとまったグループのみを受け入れる列挙型
 */
enum CoffeSize {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI",
}

const coffee = {
  hot: true,
  size: CoffeSize.TALL,
};

/**
 * 特定の値のみ
 */
const apple: "apple" = "apple";
let clothSize: "small" | "medium" | "large" = "large";
const cloth: {
  color: string;
  size: "small" | "medium" | "large";
} = {
  color: "white",
  size: clothSize,
};

cloth.size = "small";

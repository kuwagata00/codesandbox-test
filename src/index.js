/**
 * const.let
 */

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "valを上書き";

// //letは再宣言は不可
// let val2 = "letは再宣言不可";

const val3 = "const変数";
console.log(val3);

//constは上書きも再宣言も不可
// val3 = "const上書き";
// console.log("val3");

// const val3 = "const再宣言";
// console.log(val3);

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
// name: "俺",
// age: 26,
// };
// val4.name = "わし";
// val4.address = "chiba";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["cat", "dog"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/**
 * テンプレート文字列
 */

const name = "あああ";
const age = "26";
//「俺の名前はあああです。年齢は26歳です。」

//従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
console.log(message1);

//テンプレート文字列
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

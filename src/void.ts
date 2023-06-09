export {};

function returnNothing(): void {
  // function returnNothing(): undefined { でもエラーにならなかった
  console.log("I don't return anything");
  // return undefined;
}

console.log(returnNothing());

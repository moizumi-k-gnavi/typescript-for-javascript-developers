export {};

let name: any = 'Ham';

// let length = name.length;

// 型アサーション1(推奨)
let length = (name as string).length;

// 型アサーション2(非推奨)
// let length = (<string>name).length;

// length = 'foo';

console.log(length);

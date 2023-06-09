export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

// Type Guardを使用すると、条件ブロック内のオブジェクトの型を制限することができます。
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

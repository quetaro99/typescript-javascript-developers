export {};

const kansu = ():number => 43;

let numberany:any = kansu();
let numberunknown:unknown = kansu();

let sumany = numberany+10;
//  typegurd　という
//  ifで型を保証するコード
if(typeof numberunknown === 'number'){
  let sumunknown = numberunknown+10;
  console.log('true');
}


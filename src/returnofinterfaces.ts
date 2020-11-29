export {};

// クラスによるインタフェース実装のしかた

class Mahoutsukai{}
class Souryo{}

// JavaScriptでは複数クラスは継承できない
// class Taro extends Mahoutsukai,Souryo{
class Taro extends Mahoutsukai{}

// インタフェース定義する（シグネチャー）
interface Kenja{
  ionazun(): void;
}
interface Senshi{
  kougeki(): void;
}

// JavaScriptでは複数インタフェースは実装できる
// インタフェースで定義されているメソッドは駆らなず実装しないとダメ。
class Jiro implements Kenja, Senshi{
  ionazun(): void{
    console.log('ionazun!!')
  }
  kougeki(){
    console.log('kougeki!!')
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();

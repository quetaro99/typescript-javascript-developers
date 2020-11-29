export {};

// 抽象化に関して

// 抽象化クラスをつくる クラス名の前にabstructをつける
abstract class Animal{
  // 抽象化メソッドに関してもabstractをつける
  abstract cry(): string;

}

// 抽象化クラスを継承したライオンクラス
class Lion extends Animal{
  cry(){
    return 'がおー';
  }
}

// 抽象化クラスを継承したねこクラス
class Cat extends Animal{
  // 抽象化クラスを継承したクラスには、抽象化メソッドをかならず定義しないとダメ
}

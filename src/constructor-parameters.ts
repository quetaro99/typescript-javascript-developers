export {};

class Person{
  name: string;
  age:  number;

  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }
}

let taro = new Person ('Qtaro',41);

console.log(taro);

type PersonType = typeof Person;

//constructorparameterはクラスのコンストラクターの引数型を取得する
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['jiro',80];
const jiro = new Person(...profile);
console.log(jiro);




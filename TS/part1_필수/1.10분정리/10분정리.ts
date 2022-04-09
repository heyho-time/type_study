var 이름: string = "kim";
let 이름배열: string[] = ["kim", "park"];
let 이름오브젝트: { name: string } = { name: "kim" };

//다양한 타입이 들어올 수 있게 하려면 union type

let union: string | number = 123;

//타입은 변수에 담아 쓸 수 있음.
type Name = string | number; //보통 대문자로 지정해 일반변수와 구분한다.
let 네임: Name = 123;

function 함수(x: number): number {
  //변수에 타입지정도 가능, 어떤 타입이 리턴될지도 지정가능!(뒤에꺼)
  return x * 2;
}
//함수("123"); //문자열이 들어가면 에러가난다.

//array에 쓸 수 있는 tuple 타입.
type Member = [number, boolean];
let john: Member = [123, true];

//여기 들어갈 자료가 되게 많다면? age, sex 등등 100개 있다면?
type Member2 = {
  [key: string]: string; //문자로 들어오는 키들의 밸류가 문자여야한다. 이런식으로..
};

class User {
  //class도 타입지정 가능
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

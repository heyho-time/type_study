# narrowing

```jsx
function 내함수(x: number | string) {
  return x + 1; //x가 유니언타입이기 때문.
}

내함수(123);

function 내함수내로잉(x: number | string) {
  if (typeof x === "string") {
    return x + "1";
  } else {
    return x + 1;
  }
}

내함수내로잉(123);

function 내함수2(x: number | string) {
  let arr: number[] = [];

  arr[0] = x; //유니언타입이라 넘버로 구성된 배열에 들어갈 수 없다.
}

function 내함수내로잉2(x: number | string) {
  let arr: number[] = [];
  if (typeof x === "number") {
    arr[0] = x;
  } else {
    // else문 없으면 에러로 잡을때가 있으니 끝까지 쓰는게 좋다.
  }
}

//typeof 말고 in도 쓸 수 있다. instance도. (타입이 뭔지 특정지을수만 있다면 다 인정해줌.)

// 아니면 assertion 문법이 있다. (타입 덮어쓰기)

function 어설션(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number; //변수를 넘버로 덮어써주세요. 하는 문법..wow
}

어설션(123);
어설션("123");
//어설션 문법의 용도.
// 1. narrowing할때.
// let 이름 : string = 'kim';
// 이름 as number; 타입을 a에서 b로 변경 X 복잡한 유니언타입을 하나로 내로잉하기위할때만 쓰인다.
// 2. 무슨 타입이 들어올지 100% 확실할 때 쓰셈.

//그러나 위에보면 어설션('123')도 에러가 없다. 이런 버그 캐치를 못함..
// 걍 if narrowing이 낫다.
```

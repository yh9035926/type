// 타입 추론
// 타입스크립트가 결과값을 예측하여 타입을 추론해서 부여하는 것

{
  function sum(a: number, b: number) {
    return a + b;
  }
  sum(1, 2);
}

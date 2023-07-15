let hello: string = "hello";
console.log(hello);

let bool: boolean = true;

//타입스크립트만 가지고 있는 타입
// 1. unknown. any
// unknown => 알 수 없는(거의 안 씀), any => 아무나
// any 쓰는 경우 : 라이브러리와 같이 내가 타입을 알 수 없는 경우 사용

// 2. never, void(반환 값이 절대 없는 경우)
// never(무한루프, 에러 처리) 거의 안 씀

const errlor = (err: string): never => {
  throw new Error(err);
};

// void(반환(return값) 값이 없는 경우)

const printMessage = (message: string): void => {
  console.log(message);
};

// 3. object
// object 범위(객체, 배열, ...)가 광범위하기 때문에 좋지 않은 방법(거의 안 씀)
const obj = (obj: object): object => {
  return obj;
};

// 4.array
//  Array<type>
const numberArray: Array<number> = [1, 2, 3];
//  typep[]
const stringArray: string[] = ["1", "2", "3"];

// 5.tuple
// 배열인데 값이 정해져 있는 배열, 길이도 정해져 있음

let student: [string, number, string];
student = ["yy", 33, "수팔"];
const [nickname, age, hobby] = student;

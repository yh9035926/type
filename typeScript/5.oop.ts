interface CarDriving {
  drivingStart(): () => void;
  drivingStop(): () => void;
}
/*
접근제어자 

private---외부 접근이 불가능
static--- new 클래스명() 선언을 해줘야 하는데 생성자(새로운 객체)를 만들지 않아도 됨
protected--- 외부 접근이 불가능, 단 상속 받은 자식 클래스는 접근 가능
public --- 공공, 외부에서 접근 가능
*/

class Car implements CarDriving {
  private driver = "이용현"; //외부에서 사용 못함
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  drivingStart(): () => void {
    console.log("Car started driving.");
    return () => {
      this.drivingStop()();
    };
  }

  drivingStop(): () => void {
    console.log("Car stopped driving.");
    return () => {};
  }
  public Driver() {
    console.log(`${this.driver}`);
  }

  public printerName() {
    console.log(`동승자는 ${this.name}`);
  }
}

//let car = new Car();
//Car.drivingStop(); //static으로 선언하면 new Car()로 안 해도 됨

let car = new Car("표혜민"); //외부에서 내부의 결과값을 바꿀 수 있는 것 = 의존성 부여
let car2 = new Car("남기정");
let car3 = new Car("지성찬");

car.printerName();
car2.printerName();
car3.printerName();
const stopDriving = car.drivingStart();
stopDriving();
// oop
// 추상화 캡슐화 은닉화 프로그래밍 때 놓을 수 없는 cs지식

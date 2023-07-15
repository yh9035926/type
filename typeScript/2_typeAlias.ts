// typeAlias 어떠한 것에도 타입을 줄 수 있다.
{
  type Text = string;
  const name: Text = "yong";
  type TextString = "우자";
  //값이나 value도 tpye화 시킬 수 있다
  const nameString: TextString = "우자";

  //type, interface

  type UserInfo = {
    id?: number;
    name?: string;
    hobby?: string;
  };

  const User: UserInfo[] = [
    {
      id: 3,
      name: "yh",
      hobby: "축구",
    },
    {},
    {},
  ];

  //union type

  type store = "옷가게" | "신발가게" | "와인가게";
  type year = string | number | boolean;

  let storeKind: store = "와인가게";
  let year: year = "2022";
  year = 2022;
  year: true;

  //Intersection type : type 합병

  type Student = {
    name: string;
    score: number;
  };
  type WebUser = {
    nickname: string;
    posting?: () => void;
  };
  const internet = (person: Student & WebUser) => {
    console.log(person.name, person.score);
  };
  internet({
    name: "이용현",
    score: 32,
    nickname: "용",
  });
}

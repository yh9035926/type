// 설계도 이 안에 있는 것은 반드시 구현되어야만 하는 것

{
  type User = {
    id: number;
    name: string;
  };
  type reply = {
    User: User;
    content: string;
  };

  interface Post {
    id: number;
    content: string;
    User: User;
  }

  interface Post {
    Comments: reply[];
  }
  // type alias와 다르게 interface는 중복 선언이 가능
  // 다음에 선언한 interface와 이전에 선언한 interface 합쳐짐
  // interface는 class 적용할 수 있음

  const Post = {
    id: 3,
    content: "안녕하세요",
    User: {
      id: 2,
      name: "이용현",
    },
    Comments: [
      {
        User: {
          id: 2,
          name: "이용현",
        },
        content: "날씨가 흐림",
      },
    ],
  };
}

const checkNull = (arg: any | null): any => {
  if ((arg = null)) {
    throw new Error("값이 비어 있습니다");
  } else return arg;
};

//T,G,D 나온다
//상태에 따라서 타입 바뀐다
function checkNullG<G>(arg: G | null): G {
  if (arg === null) {
    throw new Error("값이 비어 있습니다");
  } else return arg;
}

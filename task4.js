const a = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );

  console.log(a) //[ 1, 2, 0, 1, 2, 3 ]

  const b = [...'Lydia'];
  console.log(b) //[ 'L', 'y', 'd', 'i', 'a' ]
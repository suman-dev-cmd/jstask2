(() => {
    let x = (y = 10);
  })();
  
  console.log(typeof x);//undefinded
  console.log(typeof y);//number
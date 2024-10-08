{
  //array loop
  const array = ["Alhie", "Fikri"];

  array.forEach(function (value, index) {
    console.info(`${index} : ${value}`);
  });

  array.forEach((value, index) => console.info(`${index} : ${value}`));

  array.forEach((value) => console.info(value));
}

console.info(" ");

{
  // Array Queue
  const queue = [];

  queue.push("Alhie");
  queue.push("Fikri");

  console.info(queue.shift());
  console.info(queue.shift());
  console.info(queue.shift());
}
console.info(" ");
{
  //Array Stack
  const stack = [];

  stack.push("Alhie");
  stack.push("Fikri");

  console.info(stack.pop());
  console.info(stack.pop());
  console.info(stack.pop());
}

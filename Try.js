

  const numbers = [1, 7, 13, 42, 73];
  const doSomething = (item, index, items) => item + index + items.length;

  console.log(numbers.map(doSomething));

  const map = (items, callback) => {
    const mappedItems = [];
    for (let i = 0; i < items.length; i++) {
      const mappedItem = callback(items[i], i, items)
      mappedItems.push(mappedItem)
    }
    return mappedItems;
  }
  console.log(map(numbers, doSomething));


  console.log(numbers.slice(1, 3));
  console.log(numbers.slice(2));
  console.log(numbers.slice());


  const slice = (items, start = 0, end = items.length) => {
    const slicedItems = [];
    for (let i = start; i < end; i++) {
      slicedItems.push(itemsp[i]);

    }
    return slicedItems;
  }

  console.log(slice(numbers, 1, 3));
  console.log(slice(numbers, 2));
  console.log(slice(numbers));

  let numbers = [2, 4, 7, 4, 7, 2];
  let number = 4;

  let lastIndex = numbers.lastIndexOf(number);

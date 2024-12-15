function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > value) {
        filteredNumbers.push(numbers[i]);
      }
    }
    return filteredNumbers;
  }
  
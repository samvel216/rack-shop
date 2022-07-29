export default idChoise = (splitStringMassive, sign) => {
    const lastEl =  splitStringMassive.pop();
    const lastNumber = Number(lastEl);
    if (sign === '-') {
      const newNumber = lastNumber - 1;
      splitStringMassive.push(newNumber);
      const newString = splitStringMassive.join("");
      return newString;
    }
    if (sign === '+') {
      const newNumber = lastNumber + 1;
      splitStringMassive.push(newNumber);
      const newString = splitStringMassive.join("");
      return newString;
    }
  }
function sum(numbers) {
  try {
    let numString = numbers.toString().replace('//;\n', ''); // replace \n with comma
    numString = numString.replace(';', ',');
    numString = numString.replace('\n', ',');
    const numArray = numString.split(',');
    let sum = 0;
    for(let i=0;i<numArray.length;i++) {
      let num = parseInt(numArray[i]);
      if(num < 0) {
        throw new Error(`negative numbers not allowed ${numArray[i]}`)
      }
      sum+=parseInt(numArray[i])
    }
    return isNaN(sum) ? 0 : sum
  } catch (error) {
    throw error
  }
}

module.exports = sum;

//console.log(sum('//;\n1;2'));
// console.log(sum(''));
console.log(sum('1\n2,3'));
  
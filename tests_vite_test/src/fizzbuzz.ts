export const fizzbuzz = (number: number): returnFizzBuzzFunction => {
  if (typeof number !== "number" || Number.isNaN(number)) {
    throw new Error("parameter provided its not a number");
  }
  const multiplies = { 3: "fizz", 5: "buzz" };

  let output: returnFizzBuzzFunction = "";
  Object.entries(multiplies).forEach(([multiplier, word]): void => {
    if (number % parseInt(multiplier) === 0) {
      output += word;
    }
  });

  return output === "" ? number : output;
};

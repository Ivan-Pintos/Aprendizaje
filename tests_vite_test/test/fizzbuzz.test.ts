import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", (): void => {
  it("should throw if not number is provided as parameter", (): void => {
    expect((): returnFizzBuzzFunction => fizzbuzz()).toThrow();
  });
  it("should throw a specific error message if not number is provided as parameter", (): void => {
    expect((): returnFizzBuzzFunction => fizzbuzz()).toThrow(
      "parameter provided its not a number"
    );
  });
  it("should throw a specific error message if not a number is provided", (): void => {
    expect((): returnFizzBuzzFunction => fizzbuzz(NaN)).toThrow(
      "parameter provided its not a number"
    );
  });
  it("should return fizz if number provided is multiple of 3", (): void => {
    expect(fizzbuzz(6)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
  });
  it("should return 'buzz' if number provided is  multiple of 5", (): void => {
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });
  it("should return 'fizzbuzz' if number provided is multiple of 5 and 3", (): void => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
    expect(fizzbuzz(30)).toBe("fizzbuzz");
  });
});

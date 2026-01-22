import { sayHello } from "../src/1-say-hello";

describe("Hello", function () {
  it("should return say hello", function () {
    expect(sayHello('Dimas')).toBe("Hello Dimas");
  });
});

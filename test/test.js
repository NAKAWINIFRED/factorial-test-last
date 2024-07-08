// Kalumba Isaac//
// Nakawunde Winifred//

import { expect } from "chai";
import { factorial } from "../factorial.js";

describe("Factorial:test last", () => {
  it("should return 1 for factorial of 0", () => {
    expect(factorial(0)).to.equal(1);
  });

  it("should return 1 for factorial of 1", () => {
    expect(factorial(1)).to.equal(1);
  });

  it("should return 120 for factorial of 3", () => {
    expect(factorial(3)).to.equal(6);
  });
  it("should return 120 for factorial of 4", () => {
    expect(factorial(4)).to.equal(24);
  });
});

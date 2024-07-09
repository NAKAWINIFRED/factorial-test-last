// --TEAM MEMBERS--
// Kalumba Isaac//
// Nakawunde Winifred//

import { assert } from "chai";
import { factorial } from "../factorial.js";
import { describe, it } from 'mocha';


describe("Factorial:test last", () => {
  it("should return 1 for factorial of 0", () => {
    assert.equal(factorial(0), 1);
  });
  
  it("should return 1 for factorial of 1", () => {
    assert.equal(factorial(1), 1);
  });
  
  it("should return 6 for factorial of 3", () => {
    assert.equal(factorial(3), 6);
  });
  it("should return 24 for factorial of 4", () => {
    assert.equal(factorial(4), 24);
  });
});

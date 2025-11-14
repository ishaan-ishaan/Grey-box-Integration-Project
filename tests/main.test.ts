import { describe, it, expect } from "vitest";
import { addNumbers } from "../src/node/add";

describe("addNumbers()", () => {
  it("adds numbers correctly", () => {
    expect(addNumbers(5, 7)).toBe(12);
  });

  it("handles negatives", () => {
    expect(addNumbers(-2, 4)).toBe(2);
  });
});

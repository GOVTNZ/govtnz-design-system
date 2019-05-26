import { cssUnitToPixels, safeMerge } from "./index";

describe("CSS Rules", () => {
  it("CSS Units", async () => {
    const breakpoints = [{ "max-width": "40em", "min-width": "300px" }];
    const breakpointPixels = breakpoints.map(breakpoint => {
      return Object.keys(breakpoint).reduce((acc, key) => {
        acc[key] = cssUnitToPixels(breakpoint[key]);
        return acc;
      }, {});
    });
    expect(breakpointPixels).toEqual([{ "max-width": 640, "min-width": 300 }]);
  });

  it("Safe merge: error case", async () => {
    // Using https://stackoverflow.com/a/49512933 because I want to check
    // error message
    let errorMessage;
    try {
      const result = safeMerge({ a: 1 }, { a: 2 });
      expect(false).toEqual(true); // shouldn't get this far
    } catch (e) {
      errorMessage = e.toString();
    }
    expect(errorMessage).toEqual(
      `Error: Duplicate keys with different values found. [0][a] !== [1][a].  because "1" !== "2"\n[1][a] !== [0][a].  because "2" !== "1"`
    );
  });

  it("Safe merge: success case", async () => {
    try {
      safeMerge({ a: 1 }, { a: 1 });
      expect(true).toEqual(true); // should get this far
    } catch (e) {
      expect(true).toEqual(false); // shouldn't get this far
    }
  });
});

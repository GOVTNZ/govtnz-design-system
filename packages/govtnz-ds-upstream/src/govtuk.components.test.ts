import { ensureKnownColours } from "./govuk.components";

describe("Govuk upstream colours", () => {
  it("Known colours", async () => {
    const result = ensureKnownColours(".someCss { color: #005ea5 } ");
    expect(result).toBeUndefined();
  });
  it("Unknown colours", async () => {
    let didThrow;
    try {
      ensureKnownColours(".someCss { color: #666666 } ");
      didThrow = false;
    } catch (e) {
      didThrow = true;
    }
    // FIXME: using .toThrowError wasn't working. Figure out why and refactor above.
    expect(didThrow).toBeTruthy();
  });
});

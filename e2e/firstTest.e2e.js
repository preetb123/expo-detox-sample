const { reloadApp } = require("detox-expo-helpers");

describe("Example", () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it("home screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });
});

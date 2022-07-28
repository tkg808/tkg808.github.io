const { Builder, By } = require("selenium-webdriver");
const should = require("chai").should();

describe("about page renders", function ()
{
  it("successfully renders about page", async function ()
  {
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://tkg808.github.io");

    const text = await driver
      .findElement(By.className("summary-text"))
      .getText()
      .then((value) => value.slice(0, 28));

    text.should.equal("Full stack software engineer");

    await driver.quit();
  });
});
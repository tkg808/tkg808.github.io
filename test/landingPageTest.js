const { Builder, By } = require("selenium-webdriver");
const should = require("chai").should();

describe("landing page renders", function ()
{
  it("successfully renders landing page", async function ()
  {
    const driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://tkg808.github.io");

    const landingName = await driver
      .findElement(By.className("landing-name"))
      .getText()
      .then((value) => value);

    landingName.should.equal("Tyson Gomes");

    const brand = await driver
      .findElement(By.className("brand"))
      .getText()
      .then((value) => value);

    brand.should.equal("Solution in hand, you in mind.");

    await driver.quit();
  });
});
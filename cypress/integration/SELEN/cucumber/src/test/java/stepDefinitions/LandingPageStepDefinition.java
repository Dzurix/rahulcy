package stepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import java.util.Iterator;
import java.util.Set;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import uTils.testContextSetup;

public class LandingPageStepDefinition {

  public WebDriver driver;
  public String landingPageProductName;
  public String offerPageProductName;
  testContextSetup testContextSetup;

  public LandingPageStepDefinition(testContextSetup testContextSetup) {
    this.testContextSetup = testContextSetup;
  }

  @Given("^User is on GreenCart Landing page$")
  public void user_is_on_greencart_landing_page() {
    System.setProperty(
      "webdriver.chrome.driver",
      "C:/Users/dst/Documents/chromedriver_win32"
    );
    testContextSetup.driver = new ChromeDriver();
    testContextSetup.driver.get(
      "https://rahulshettyacademy.com/seleniumPractise/#/"
    );
  }

  @When(
    "^User searched with Shortname {string} and extracted actual name of product$"
  )
  public void user_searched_with_shortname_something_and_extracted_actual_name_of_product(
    String shortName
  ) {
    testContextSetup.driver
      .findElement(By.xpath("//input[@type='search']"))
      .sendKeys(shortName);
    testContextSetup.landingPageProductName =
      testContextSetup.driver
        .findElement(By.cssSelector("h4.product-name"))
        .getText()
        .split("-")[0].trim();
    System.out.println(landingPageProductName + " is extracted from Home page");
  }
}

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

public class OfferPageStepDefinition {

  public WebDriver driver;
  public String landingPageProductName;
  public String offerPageProductName;
  testContextSetup testContextSetup;

  public OfferPageStepDefinition(testContextSetup testContextSetup) {
    this.testContextSetup = testContextSetup;
  } // Depencency injection format is PICOCONTAINTER

  @Then("^User searched for \"([^\"]*)\" shortname in offers page$")
  public void user_searched_for_something_shortname_in_offers_page(
    String shortName
  )
    throws InterruptedException {
    //offer page
    testContextSetup.driver.findElement(By.linkText("Top Deals")).click();
    Set<String> s1 = testContextSetup.driver.getWindowHandles();
    Iterator<String> i1 = s1.iterator();
    String parentWindow = i1.next();
    String childWindow = i1.next();
    testContextSetup.driver.switchTo().window(childWindow);
    testContextSetup.driver
      .findElement(By.xpath("//input[@type='search']"))
      .sendKeys(shortName);
    Thread.sleep(2000);

    offerPageProductName =
      driver.findElement(By.cssSelector("tr td:nth-child(1)")).getText();
  }

  @Then("^validate product name in offers page matches with Landing page$")
  public void validate_product_name_in_offers_page_matches_with_landing_page() {
    Assert.assertEquals(
      offerPageProductName,
      testContextSetup.landingPageProductName
    );
  }
}

package stepDefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepDefinition {

  @Given("^User is on NetBanking landing page$")
  public void user_is_on_netbanking_landing_page() {
    System.out.println("navigated to login url");
  }

  @When("^User login into application with username and password$")
  public void user_login_into_application_with_username_and_password()
    throws Throwable {
    System.out.println("Logged in success");
  }

  @Then("^Home page is populated$")
  public void home_page_is_populated() throws Throwable {
    System.out.println("Validated home page");
  }

  @And("^Cards are displayed$")
  public void cards_are_displayed() throws Throwable {
    System.out.println("Cards are validated");
  }
}

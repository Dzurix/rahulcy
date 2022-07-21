package stepDefinitions;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import java.util.List;

public class stepDefinition {

  @Given("^validate the browser$")
  public void validate_the_browser() throws Throwable {
    System.out.println("Choosing the browser");
  }

  @When("^Browser is trigered$")
  public void browser_is_trigered() throws Throwable {
    System.out.println("Browser is trigered");
  }

  @Then("^check if browser is started$")
  public void check_if_browser_is_started() throws Throwable {
    System.out.println("Browser is started");
  }

  @Given("User is on NetBanking landing page")
  public void user_is_on_net_banking_landing_page() {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("User is on NetBanking landing page");
  }

  @Then("Home page is populated")
  public void home_page_is_populated() {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Home page is populated");
  }

  @When(
    "^User login into application with \"([^\"]*)\" and password \"([^\"]*)\"$"
  )
  public void user_login_into_application_with_something_and_password_something(
    String strArg1,
    String strArg2
  )
    throws Throwable {
    System.out.println(strArg1);
    System.out.println(strArg2);
  }

  @And("^Cards displayed are \"([^\"]*)\"$")
  public void cards_displayed_are_something(String strArg1) throws Throwable {
    System.out.println(strArg1);
  }

  @When("^User sign up with following details$")
  public void user_sign_up_with_following_details(DataTable data)
    throws Throwable {
    //some code
    List<List<String>> obj = data.asLists(); // da povezemo
    System.out.println(obj.get(0).get(0)); //prvi get hvata red, a drugi kolonu
    System.out.println(obj.get(0).get(1)); //prvi get hvata red, a drugi kolonu
    System.out.println(obj.get(0).get(2)); //prvi get hvata red, a drugi kolonu
    System.out.println(obj.get(0).get(3)); //prvi get hvata red, a drugi kolonu
    System.out.println(obj.get(0).get(4)); //prvi get hvata red, a drugi kolonu
  }

  @When("^User login in to application with (.+) and password (.+)$")
  public void user_login_into_application_with_and_password(
    String username,
    String password
  )
    throws Throwable {
    System.out.println(username);
    System.out.println(password);
  }
}

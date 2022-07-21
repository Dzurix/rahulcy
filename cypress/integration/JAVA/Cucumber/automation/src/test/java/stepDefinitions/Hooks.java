package stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {

  @Before("@MobileTest") // ovo se izvrsava pre svakog scenarija i definisemo preduslov
  //   // gde god koristimo HOOKS, ne mozemo koristiti BACKGROUND, jer se potiru
  //   //
  public void beforevalidation() {
    System.out.println("BEFORE: Mobile before hook");
  }

  @After("@MobileTest") // ovo se izvrsava pre svakog scenarija i definisemo preduslov
  //   // gde god koristimo HOOKS, ne mozemo koristiti BACKGROUND, jer se potiru
  //   //
  public void Afterevalidation() {
    System.out.println("AFTER: Mobile after hook");
  }

  @Before("@WebTest")
  public void beforeWebvalidation() {
    System.out.println("BEFORE: WEB before hook");
  }

  @After("@WebTest")
  public void afterWebvalidation() {
    System.out.println("AFTER: WEB after hook");
  }
}

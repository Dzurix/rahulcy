package cucumberOptions;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
  features = "src/test/java/features", // gde su fajlovi od cucumbera
  glue = "stepDefinitions", // gde su step definicije
  monochrome = true // lepo sortiranje u konzoli
  // dryRun = true // ovako proveravamo da li je povezan feature fajl sa stepDefinitions
)
public class TestNGTestRunner extends AbstractTestNGCucumberTests {} // ovo je da mozemo koristiti TestNG

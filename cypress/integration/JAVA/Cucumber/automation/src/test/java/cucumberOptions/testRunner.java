package cucumberOptions;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

//feature file
@RunWith(Cucumber.class)
@CucumberOptions(
  features = "src/test/java/features/login.feature",
  glue = "stepDefinition"
)
public class testRunner {}

package cucumberOptions;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

//feature file

@RunWith(Cucumber.class)
@CucumberOptions(
  features = "src/test/java/features",
  glue = "stepDefinitions",
  stepNotifications = true // ovo je da vidim testove na levoj strani
  //tags = "@PortalTest"
  //tags = "@SmokeTest or @MobileTest" // ovako biram sta ce se pokrenuti i koliko (sa ovim 'or')
  //tags = "not @RegTest"  // ovo znaci pokreni sve testove osim ovog
  //tags = "@RegTest adn @MobileTest" // pokreni sve testove sa oba ova tag-a
)
public class testRunner {}

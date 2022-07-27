package cucumberOptions;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

//feature file

@RunWith(Cucumber.class)
@CucumberOptions(
  features = "src/test/java/features",
  glue = "stepDefinitions",
  stepNotifications = true, // ovo je da vidim testove na levoj strani
  monochrome = true, // da imamamo lepo formatiranu konzolu
  // dryRun = true, // proverava da li neki test case nije mapiran u stepDefinitions
  plugin = {
    "pretty", // "pretty" dodaje boje (crvena i zelena) u output report
    "html:target/testResult.html", //u kojoj verziji hocemo izvestaj i gde da se sacuva
    "json:target/testResult.json", //u kojoj verziji hocemo izvestaj i gde da se sacuva
    "junit:target/testResult.xml", //u kojoj verziji hocemo izvestaj i gde da se sacuva
  }
  //tags = "@PortalTest"
  //tags = "@SmokeTest or @MobileTest" // ovako biram sta ce se pokrenuti i koliko (sa ovim 'or')
  //tags = "not @RegTest"  // ovo znaci pokreni sve testove osim ovog
  //tags = "@RegTest and @MobileTest" // pokreni sve testove sa oba ova tag-a
)
public class testRunner {}

/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

import HomePage from "../../../integration/pageObjects/HomePage";
import ProductPage from "../../../integration/pageObjects/ProductPage";
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage();
const productPage = new ProductPage();

Given("I open EComerce Page", function () {
  cy.visit(Cypress.env("url") + "/angularpractice/");
});

When("I add items to Cart", function () {
  homePage.getShopTab().click();

  // this.data.productName.forEach(function (element) {
  //   cy.selectProduct(element);
  // });
  cy.get(":nth-child(3) > .card > .card-footer > .btn").click();
  cy.get(":nth-child(4) > .card > .card-footer > .btn").click();
  productPage.checkOutButton().click(); //checking the cart
});

//Validate the total prices

And("Validate the total prices", () => {
  var sum = 0;

  cy.get("tr td:nth-child(4) strong")
    .each(($el, index, $list) => {
      const amount = $el.text();
      var res = amount.split(" ");
      res = res[1].trim();
      sum = Number(sum) + Number(res);
    })
    .then(function () {
      cy.log(sum);
    });
  cy.get("h3 strong").then(function (element) {
    const amount = element.text();
    var res = amount.split(" ");
    var total = res[1].trim();

    expect(Number(total)).to.equal(sum);
  });
});

Then("Select the country sumbit and verify Thank you message", () => {
  cy.contains("Checkout").click();
  cy.get("#country").type("India");
  cy.wait(5000);
  cy.get(".suggestions > ul > li > a").click();
  cy.get("#checkbox2").click({ force: true });
  cy.get('input[type="submit"]').click({ force: true });
  //cy.get(".alert").should(
  //  "have.text",                                                                          must change asertation bc, alert have some aditional words
  //  "Success! Thank you! Your order will be delivered in next few weeks :-)."
  //);
  cy.get(".alert").then(function (element) {
    const actualText = element.text();
    expect(actualText.includes("Success")).to.be.true;

    // 2 TEST SCENARIO

    //When I fill the form details
    When("When I fill the form details", function (dataTable) {
      homePage.getEditBox().type(dataTable.rawTable[1][0]); //[1]this is what we call [bobz, male] -first row are name of column
      //[0] this is how we call 'bobz'
      homePage.getGender().select(dataTable.rawTable[1][1]);
    });

    //Then validate the forms behaviour LOLO

    Then("Validate the forms behaviour", function () {
      // homePage.getTwoWayDataBinding().should("have.value", this.data.name);
      homePage.getEditBox().should("have.attr", "minlength", "2");
      homePage.getEnterpreneur().should("be.disabled");

      homePage.getShopTab().click();
    });

    //And select the Shop Page

    And("Select the Shop Page", function () {
      homePage.getShopTab().click();
    });
  });
});

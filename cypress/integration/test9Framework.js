/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

import HomePage from "../integration/pageObjects/HomePage";
import ProductPage from "../integration/pageObjects/ProductPage";

describe("Nineth test with Rahul", () => {
  before(function () {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });
  it("Framework - Hooks", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEntrepreneaur().should("be.disabled");

    homePage.getShopTab.click();

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element);
    });

    productPage.checkOutButton().click(); //checking the cart
    cy.contains("Checkout").click();
    cy.get("#country").type("India");
    cy.wait(8000);
    cy.get(".suggestion > ul > li > a").click();
    cy.get("#checkbox2").click();
    cy.get('input[type="submit"]').click({ force: true });
    //cy.get(".alert").should(
    //  "have.text",                                                                          must change asertation - alert have some aditional words
    //  "Success! Thank you! Your order will be delivered in next few weeks :-)."
    //);
  });
});

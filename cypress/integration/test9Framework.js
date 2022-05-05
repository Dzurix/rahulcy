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

    cy.visit(Cypress.env("url") + "/angularpractice/");

    // homePage.getEditBox().type(this.data.name);
    //homePage.getGender().select(this.data.gender);
    //homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEnterpreneur().should("be.disabled");

    homePage.getShopTab().click();

    // this.data.productName.forEach(function (element) {
    //   cy.selectProduct(element);
    // });
    cy.get(":nth-child(3) > .card > .card-footer > .btn").click();
    cy.get(":nth-child(4) > .card > .card-footer > .btn").click();
    productPage.checkOutButton().click(); //checking the cart
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

    cy.contains("Checkout").click();
    cy.get("#country").type("India");
    cy.wait(5000);
    cy.get(".suggestions > ul > li > a").click();
    cy.get("#checkbox2").click({ force: true });
    cy.get('input[type="submit"]').click({ force: true });
    //cy.get(".alert").should(
    //  "have.text",                                                                          must change asertation - alert have some aditional words
    //  "Success! Thank you! Your order will be delivered in next few weeks :-)."
    //);
    cy.get(".alert").then(function (element) {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  });
});

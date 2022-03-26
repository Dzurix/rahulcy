/// <reference types="Cypress" />
//alsways first reference, then anytning else
"use strict";

describe("Security testing", () => {
  it("First test", () => {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      "GET",
      "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      (req) => {
        req.url =
          "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";

        req.continue((res) => {
          expect(res.statusCode).to.equal(403); //403 erorr
        });
      }
    ).as("dummyUrl");

    cy.get("button[class='btn btn-primary']").click();
    cy.wait("@dummyUrl");
  });
});

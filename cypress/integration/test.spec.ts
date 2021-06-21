/// <reference types="cypress" />

context("Cypres-UI Tests", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("currency-convertor")}`);
  });

  it("Convert Currency", () => {
    cy.get('[name="amount"]').type("100");

    cy.get(".MuiSelect-selectMenu").eq(0).click();

    cy.wait(1000);

    cy.get('[data-value="USD"]').click();

    cy.wait(1000);

    cy.get(".MuiSelect-selectMenu").eq(1).click();

    cy.get('[data-value="EUR"]').click();

    cy.get('[data-cy="button"]').click();

    cy.wait(2000).get('[data-cy="result"]').should("exist");

    expect(true).to.eq(true);
  });
});

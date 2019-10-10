describe("My First Test", function() {
  it("interacts with the page", function() {
    cy.visit("http://localhost:3000");
    cy.contains("Select Currency").click();
    cy.contains("Great British Pound").click();
    cy.contains("Select Currency").click();
    cy.get(".section-2")
      .contains("Great British Pound")
      .click();
    cy.get("input")
      .first()
      .type(20);

    cy.get("input")
      .eq(1)
      .should("be", "20");

    cy.get("input")
      .eq(1)
      .type(50);

    cy.get("input")
      .first()
      .should("be", "50");
  });
});

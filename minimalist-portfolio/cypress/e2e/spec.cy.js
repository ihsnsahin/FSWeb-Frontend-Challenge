describe("Minimalist Portfolio Projects", () => {
  describe('Language Tests', () => {
    beforeEach(function () {
      cy.visit('http://localhost:5173/');
    });
    it('Language should switch to Turkish', () => {
      //arrange
      //act
      cy.get('[data-cy="language-button"]').click()
      //assets
      cy.contains("Yaratıcı düşünen, minimalizm seven").should("be.visible");
    });
    it('Language should switch to English', () => {
      //arrange
      //act
      cy.get('[data-cy="language-button"]').click()
      cy.get('[data-cy="language-button"]').click()
      //assets
      cy.contains("Creative thinker Minimalism lover").should("be.visible");
    });
    it('Language should switch to Turkish', () => {
      //arrange
      //act
      cy.get('[data-cy="language-button"]').click()
      cy.get('[data-cy="language-button"]').click()
      cy.get('[data-cy="language-button"]').click()

      //assets
      cy.contains("Yaratıcı düşünen, minimalizm seven").should("be.visible");
    });
  })
  describe('Theme Tests', () => {
    beforeEach(function () {
      cy.visit('http://localhost:5173/');
    });
    it('Mode should switch to Dark', () => {
      //arrange
      //act
      cy.get('[data-cy="mode-button"]').click()
      //assets
      cy.get("html").should("have.class", "dark");
    });
    it('Mode should switch to Light', () => {
      //arrange
      //act
      cy.get('[data-cy="mode-button"]').click()
      cy.get('[data-cy="mode-button"]').click()
      //assets
      cy.get("html").should("not.have.class", "dark");
    });
  })
  describe('Data Tests', () => {
    it('Error Data Test 429', () => {
      cy.intercept("POST", "https://reqres.in/api/workintech", {
        statusCode: 429,
        body: { error: "Too many request" }
      }).as("error429")
      //act
      cy.visit('http://localhost:5173/');
      cy.wait("@error429")
      //assets
      cy.contains('An error occurred...').should("be.visible")
    });
    it('Error Data Test 500', () => {
      cy.intercept("POST", "https://reqres.in/api/workintech", {
        statusCode: 500,
        body: { error: "Sunucu Hatası" }
      }).as("error500")
      //act
      cy.visit('http://localhost:5173/');
      cy.wait("@error500")
      //assets
      cy.contains("An error occurred...").should("be.visible")
    });
  })
})

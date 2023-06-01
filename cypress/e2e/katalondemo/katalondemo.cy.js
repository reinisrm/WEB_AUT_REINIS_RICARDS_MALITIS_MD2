describe("Katalondemo", () => {

    context.only("Katalondemo", () => {
        beforeEach(() => {     
            cy.visit("https://katalon-demo-cura.herokuapp.com/")
        });
        it("Scenario 1", () => {
          //Click appointment
          cy.get("#btn-make-appointment").click();
          //Input username
          cy.get("#txt-username").type("John Doe");
          //Input password
          cy.get("#txt-password").type("ThisIsNotAPassword");
          //Click login button
          cy.get("button#btn-login").click();
          // Select Seoul
          cy.get("#combo_facility").select('Seoul CURA Healthcare Center');
          //Click readmission
          cy.get("#chk_hospotal_readmission").click();
          //Click medicaid
          cy.get("#radio_program_medicaid").click();
          //Choose date (30)
          cy.get('#txt_visit_date').type('30/06/2023');
          //Set Comment
          cy.get("#txt_comment").type("CURA Healthcare Service", {force: true} );
          //Book appointment
          cy.get("#btn-book-appointment").click();

          //Validation
          cy.get("#facility").contains("Seoul CURA Healthcare Center");
          cy.get("#hospital_readmission").contains("Yes");
          cy.get("#program").contains("Medicaid");
          cy.get("#visit_date").contains("30/06/2023");
          cy.get("#comment").contains("CURA Healthcare Service");

        });
        it("Scenario 2", () => { 
          //Click appointment
          cy.get("#btn-make-appointment").click();
          //Input username
          cy.get("#txt-username").type("John Doe");
          //Input password
          cy.get("#txt-password").type("ThisIsNotAPassword");
          //Click login button
          cy.get("button#btn-login").click();
          //Open menu
          cy.get("#menu-toggle").click();
          //Validate sidebar active
          cy.get('#sidebar-wrapper').should('have.class', 'active');
          //Click history
          cy.get('#sidebar-wrapper a[href="history.php#history"]').click();
          //Validate that "No appointment." is visible
          cy.get('div.col-sm-12.text-center p').should('have.text', 'No appointment.');



        });
    });
});

  
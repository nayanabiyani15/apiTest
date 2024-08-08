// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
Cypress.Commands.add('createUser', (requestBody) => {
  cy.request({
      method: "POST", 
      url: "users",
      headers: {
        Authorization : "Bearer " + Cypress.config("token")
      },
      body: requestBody
  }).then((response) => {
      expect (response.status).to.eq(201);
      return response;
    });
});

Cypress.Commands.add('getUserDetails', (userID) => { 
  cy.request({
      method: "GET", 
      url: "users/"+userID,
      headers: {
      Authorization : "Bearer " + Cypress.config("token")
      }
    }).then((response) => {
    expect(response.status).to.eq(200);
  });
})
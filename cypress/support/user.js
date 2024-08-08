Cypress.Commands.add('createUser', (requestBody, status=true) => {
  cy.request({
      method: "POST", 
      url: "users",
      headers: {
        Authorization : "Bearer " + Cypress.config("token")
      },
      body: requestBody,
      failOnStatusCode: status
    }).then((response) => {
      return response;
    });
});

Cypress.Commands.add('getUserDetails', (userID) => { 
  cy.request({
      method: "GET", 
      url: "users/" + userID,
      headers: {
        Authorization : "Bearer " + Cypress.config("token")
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      return response;
    });
})

Cypress.Commands.add('deleteUser', (userID) => {
  cy.request({
    method: "DELETE", 
    url: "users/" + userID,
    headers: {
      Authorization : "Bearer " + Cypress.config("token")
    }
    }).then((response) => {
    expect(response.status).to.eq(204);
    return response;
  });
});
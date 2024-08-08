Cypress.Commands.add('createPost', (userID, requestBody , status=true) => {
    cy.request({
        method: "POST", 
        url: "users/"+ userID + "/posts",
        headers: {
          Authorization : "Bearer " + Cypress.config("token")
        },
        body: requestBody,
        failOnStatusCode: status
      }).then((response) => {
        return response;
      });
});

Cypress.Commands.add('getAllPosts', (userID) => { 
    cy.request({
        method: "GET", 
        url: "users/" + userID +"/posts",
        headers: {
          Authorization : "Bearer " + Cypress.config("token")
        }
      }).then((response) => {
        return response;
    });
});
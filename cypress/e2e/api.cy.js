describe('template spec', () => {
  it("GET API testing Using Cypress API Plugin", () => {
    const requestBody = {
      name: Math.random().toString(5).substring(2),
      email: Math.random().toString(5).substring(2)+"@dubuque.test",
      gender: "male",
      status: "active"
    }
    var userID;
    cy.createUser(requestBody).then((reponse) => {
      userID =reponse.body.id;
      cy.log("userID created " + userID);
      cy.getUserDetails(userID);
    });

  });
})
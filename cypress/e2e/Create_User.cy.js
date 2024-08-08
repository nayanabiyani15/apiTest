describe('Verify user creation flow with valid json', () => {
  let userID = null;
  const requestBody = {
    name: Math.random().toString(5).substring(2),
    email: Math.random().toString(5).substring(2)+"@dubuque.test",
    gender: "male", 
    status: "active"
  };

  before("create user", () => {
    cy.createUser(requestBody).then((response) => {
      expect (response.status).to.eq(201);
      expect(response.body.id).to.exist;
      userID =response.body.id;
    });
  })

  it("Get user details of the created user", () => {
    cy.log("userID created " + userID);
    cy.getUserDetails(userID).then((response) => {
      expect(response.body).has.property("name", requestBody.name);
      expect(response.body).has.property("email", requestBody.email );
      expect(response.body).has.property("gender", requestBody.gender );
      expect(response.body).has.property("status", requestBody.status );
    });
  });

  afterEach(() => {
    cy.deleteUser(userID);
  })
})

describe('Verify user creation flow with invalid json', () => {
  const requestBody = {
    name: Math.random().toString(5).substring(2),
    email: Math.random().toString(5).substring(2)+"@dubuque.test",
    status: "active"
  };

  it("Create user with invalid json", () => {
    cy.createUser(requestBody, false).then((response) => {
      expect (response.status).to.eq(422);
    });
  });

});
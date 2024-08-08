describe('User creation flow', () => {
  let userID = null;
  const requestBody = {
    name: Math.random().toString(5).substring(2),
    email: Math.random().toString(5).substring(2)+"@dubuque.test",
    gender: "male", 
    status: "active"
  };

  before("create user", () => {
    cy.createUser(requestBody).then((response) => {
      userID =response.body.id;
    });
  })

  it("Create user and get user details", () => {
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
describe('Verify create user posts ', () => {
    let userID = null;
    const userDetail = {
      name: Math.random().toString(5).substring(2),
      email: Math.random().toString(5).substring(2)+"@dubuque.test",
      gender: "male", 
      status: "active"
    };
    
    const postContent = {
        title: "Test the first post of the user",
       body:  "Test  post body is looking good " + Math.random().toString(5).substring(2),
    };


    before("create user", () => {
      cy.createUser(userDetail).then((response) => {
        userID =response.body.id;
      });
    });

    it("Create the post for the user with valid data", () => {
        cy.createPost(userID, postContent).then((response) => {
            expect (response.status).to.eq(201);
            expect(response.body.id).to.exist;
            expect(response.body).has.property("title", postContent.title);
            expect(response.body).has.property("body", postContent.body );
            expect(response.body).has.property("user_id", userID);
          
          cy.log("post created " + response.body.id);
        });
    });

    it("Create the post for the user with invalid data", () => {        
        cy.createPost(userID, postContent).then((response) => {
            expect (response.status).to.eq(201);

        });
    });
});


describe('Verify existing posts for the user', () => {
    let userID = null;
    let postID = null;

    const userDetail = {
      name: Math.random().toString(5).substring(2),
      email: Math.random().toString(5).substring(2)+"@dubuque.test",
      gender: "male", 
      status: "active"
    };
  
    const postContent = {
        title: Math.random().toString(10).substring(2),
        body: Math.random().toString(20).substring(2) 
    };

    before("create user", () => {
      cy.createUser(userDetail).then((response) => {
        expect (response.status).to.eq(201);
        userID =response.body.id;
      });
    });

    before("create post", () => {
        cy.createPost(userID, postContent).then((response) => {
            expect (response.status).to.eq(201);
            postID = response.body.id;
        })
    });

    it("Create user and get user details", () => {
        cy.log("userID created " + userID);
        cy.getAllPosts(userID).then((response) => {
          expect(response.status).to.eq(200);
        });
    });
});
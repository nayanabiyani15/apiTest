/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * This function creates a new user with specified details in test
       * @author Nayana
       * @param requestBody
       * @example cy.createUser(requestBody);
       **/
       createUser(requestBody: object): Chainable<any>;

       /**
       * This function gets all the user details of the specified userID
       * @author Nayana
       * @param userID
       * @example cy.getUserDetails(userID);
       **/
       getUserDetails(userID: number): Chainable<any>;

      /**
       * This function deletes the specified user 
       * @author Nayana
       * @param userID
       * @example cy.deleteUser(userID);
       **/
      deleteUser(userID: number): Chainable<any>;

    }  
}
import loginData from '../test-data/login.data.json';
import loginPage from '../pages/loginPage';
import pulpitPage from '../pages/pulpitPage';
/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions');
  });

  it('check state in response of request', {}, () => {
    // Remember, that API request cant be visible in DevTool in Cypress (its the internal Cypress TestRunner)
    cy.request('https://jsonplaceholder.typicode.com/comments').then(
      (response) => {
        expect(response.status).to.eq(200);
      },
    );
  });

  it('click on canvas', {}, () => {
    cy.get('#action-canvas')
      .click(50, 50)
      .click(60, 60)
      .click(70, 70)
      .click(1, 70)
      .click(3, 80)
      .click(250, 70);
  });

  it('closure - kind of alias of found objects', {}, () => {
    cy.get('button[data-content="This popover shows up on click"]').then(
      ($btn) => {
        const txt = $btn.text();
        cy.log(txt);
      },
    );

  });

  it('check if there is only one child', {}, () => {
   cy.get('input[id="email1"]')
   cy.wrap({ placeholder: 'Email' }).its('placeholder').should('eq', 'Email')
   cy.wrap({id: 'email1'}).its('id').should('eq', 'email1')
   .children().should('have.lenght', 1)
  });

  it('check if there is 16 children under given div', {}, () => {
    cy.get('div[class="form-group"]').children().should('have.length', 16)
    
  });
  
  it('test', {}, () => {

  });
  
  // it.only('check', {}, () => {
  // });
});

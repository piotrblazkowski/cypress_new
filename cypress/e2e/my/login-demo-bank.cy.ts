import { holdReady } from 'cypress/types/jquery';

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://demo-bank.vercel.app/');
  });

  it('proper login', () => {
    const userLogin = 'login123';
    const loginLocator = 'input[data-testid="login-input"]';
    const userPassword = 'password123';
    const passwordLocator = 'input[data-testid="password-input"]';
    const loginButtonLocator = 'button[data-testid="login-button"]';
    const nextPage = 'https://demo-bank.vercel.app/pulpit.html';
    const userNameLabelLocator = 'a[data-testid="user-name"]';
    const userName = 'Jan Demobankowy';

    cy.get(loginLocator)
      .should('have.value', '')
      .type(userLogin)
      .should('have.value', userLogin)
      .click()
      .blur();

    cy.get(passwordLocator)
      .should('have.value', '')
      .wait(2000)
      .type(userPassword)
      .blur();

    cy.get(loginButtonLocator).click();

    cy.url().should('eq', nextPage);

    cy.get(userNameLabelLocator).should('have.text', userName);
  });
});

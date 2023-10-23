describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://demo-bank.vercel.app/');
  });

  it('check login input', () => {
    const user_login = 'test';
    const inputErrorMessage = 'identyfikator ma min. 8 znaków';
    const loginLocator = 'input[data-testid="login-input"]';
    const inputMessageLocator = 'div[data-testid="error-login-id"]';

    cy.get(loginLocator)
      .should('have.value', '')
      .wait(2000)
      .type(user_login)
      .wait(2000)
      .should('have.value', 'test')
      .wait(2000)
      .click()
      .blur()
      .wait(2000);
    cy.get(inputMessageLocator).should('have.text', inputErrorMessage);
  });
  // it('check password input', () => {
  //   cy.get('input[data-testid="password-input"]')
  //   .should('have.value', '')
  //   .wait(2000)
  //   .type('test')
  // })
});


class loginPage{
  elements = {
    loginLocator : () => cy.get('input[data-testid="login-input"]'),
    passwordLocator : () => cy.get('input[data-testid="password-input"]'),
    loginButtonLocator : () => cy.get('button[data-testid="login-button"]'),
    loginButtonLocator2 : () => cy.getBySelLike('login-button'),
  }

  enterUsername(username)
  {
      this.elements.loginLocator().clear();
      this.elements.loginLocator().type(username);
  }

  enteruserPassword(userPassword)
  {
      this.elements.passwordLocator()
      .should('have.value', '')
      .clear()
      .type(userPassword)
      .blur();
  }
  clickLoginButton ()
  {
      this.elements.loginButtonLocator().click();
  }
  clickLoginButton2 ()
  {
      this.elements.loginButtonLocator2().click();
  }
  
}
export default loginPage;

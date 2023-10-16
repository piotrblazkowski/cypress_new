import loginData from '../test-data/login.data.json';
import loginPage from '../pages/loginPage';
import pulpitPage from '../pages/pulpitPage';

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://demo-bank.vercel.app/');
    cy.get('input[data-testid="login-input"]').as('cyk');
  });

  it('alias', {}, () => {
    const loginObj = new loginPage();

    cy.get('@cyk').type('11114444');
    loginObj.enteruserPassword(loginData.userPassword);

    loginObj.clickLoginButton();
  });

  it('check forcing to click on Zaloguj', {}, () => {
    const newpulpit = new pulpitPage();
    cy.contains('zaloguj się')
    .click({force: true})
    
    cy.log('This tests should FAIL !!!')
    newpulpit.checkPageUrl('https://demo-bank.vercel.app/')
    });

    // it.only('check', {}, () => {
       // });
});

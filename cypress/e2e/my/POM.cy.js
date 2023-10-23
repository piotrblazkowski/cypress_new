import loginData from '../test-data/login.data.json';
import pulpitData from '../test-data/pulpit.data.json';
import loginPage from '../pages/loginPage';
import pulpitPage from '../pages/pulpitPage';

describe('POM Test', () => {
  beforeEach(function () {
    cy.visit('https://demo-bank.vercel.app/');
  });

  it('Verify Login successful', 
  {
    // retries: {
    //   runMode: 2,
    //   openMode: 1,
    // },
  },() => {
    //Arrange
    const loginObj = new loginPage();
    const PulpitObj = new pulpitPage();

    //Act
    loginObj.enterUsername(loginData.userLogin)
    loginObj.enteruserPassword(loginData.userPassword)
    //cy.pause()
    loginObj.clickLoginButton()
    
    //Assert
    PulpitObj.checkPageUrl(pulpitData.pulpitPageUrl)
    PulpitObj.checkNameLabel(loginData.userName)
    PulpitObj.checkValuesInTransferDDList(pulpitData.DDListElement)
  });

  it('Check if user is logged properly', 
  {
  },() => {
    const loginObj = new loginPage();

    loginObj.enterUsername(loginData.userLogin)
    loginObj.enteruserPassword(loginData.userPassword)
    
    loginObj.clickLoginButton()
  })

});

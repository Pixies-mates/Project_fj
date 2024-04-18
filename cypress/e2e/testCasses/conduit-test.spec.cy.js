/// <reference types ="cypress" />
import SettingPage from "../pages/settingPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import LandingPage from "../pages/landingPage"
const settingPage = new SettingPage();
const loginPage = new LoginPage();
const homePage = new HomePage();
const landingPage = new LandingPage();


describe('Testing Conduit', () => {
   let userData;

   beforeEach(() => {
      cy.visit('https://react-redux.realworld.io/')
      cy.fixture('conduitData').then((data) => {
         userData = data;
      })
   })
   it('Signup into Conduit', () => {

      landingPage.signUpButton().click()
      cy.get('h1[class="text-xs-center"]').should('contain.text', 'Sign Up')
      cy.xpath('//a[normalize-space()="Have an account?"]').should('contain.text', 'Have an account?')
      //entering valid credential to sign up into conduit by calling different methods from the pages 
      loginPage.enterUserName().type(userData.validUserName)
      loginPage.enterEmail().type(userData.validEmail)
      loginPage.enterPassword().type(userData.validPassword)

      // then click on the submit botton 
      loginPage.submitButton().click()

   })
   it('signUp to conduit with an already used credential', () => {


      landingPage.signUpButton().click()
      cy.get('h1[class="text-xs-center"]').should('contain.text', 'Sign Up')
      cy.xpath('//a[normalize-space()="Have an account?"]').should('contain.text', 'Have an account?')
      //entering valid credential to sign up into conduit by calling different methods from the pages 
      loginPage.enterUserName().type(userData.validUserName)
      loginPage.enterEmail().type(userData.validEmail)
      loginPage.enterPassword().type(userData.validPassword)

      // then click on the submit botton 
      loginPage.submitButton().click()

      // output of the above action
      loginPage.dislplayEmailAlert().should('be.visible')
   })
   it('singin to conduit with valid credentials', () => {

      landingPage.signInButton().click()
      cy.xpath('//h1[normalize-space()="Sign In"]').should('contain.text', 'Sign In')
      cy.xpath('//a[normalize-space()="Need an account?"]').should('contain.text', 'Need an account?')
      //enterin valid credentials in the different fields 
      loginPage.enterEmail().type(userData.validEmail)
      loginPage.enterPassword().type(userData.validPassword)
      //submit button
      loginPage.submitButton().click()
      //
      cy.xpath('//a[normalize-space()="pixiesf"]').should('be.visible')


   })
      



})
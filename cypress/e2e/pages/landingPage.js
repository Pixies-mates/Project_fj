class LandingPage{
    signUpButton(){
        return cy.xpath('//a[normalize-space()="Sign up"]').click()
    }
    signInButton(){
        return cy.xpath('//a[normalize-space()="Sign in"]').click()
    }
} export default LandingPage
class LoginPage {
    enterEmail(){
        return cy.get ('input[placeholder="Email"]')
    }
    enterPassword(){
        return cy.get ('input[placeholder="Password"]')
    }
    enterUserName(){
        return cy.get('input[placeholder="Username"]')
    }
    dislplayEmailAlert(value){
        return cy.xpath('//li[normalize-space()="email has already been taken"]', value)
    }
    
    submitButton(){
        return cy.xpath ('//button[contains(text(),"Sign in")]')
    }  
    



}



export default LoginPage 
class HomePage{
    checkGlobalFeed(){
        return cy.xpath('//a[contains(text(),"Global Feed")]')
    }
    checkYourFeed(){
        return cy.xpath ('//a[contains(text(),"Your Feed")]')
    }
    settingButton(){
        return cy.get('a[href="#settings"]').click()
    }
    home(){
        return cy.xpath('//a[normalize-space()="Home"]')
    }




}
 export default HomePage
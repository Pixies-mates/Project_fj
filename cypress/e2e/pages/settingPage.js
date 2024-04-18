class SettingPage{
    logOutButton(){
        return cy.xpath('//button[normalize-space()="Or click here to logout."]').click()
    }
}export default SettingPage 
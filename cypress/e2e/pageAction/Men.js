const IMG_Luma = '(//span[@class="not-logged-in"])[1]'
const Signup = '(//a[text() = "Create an Account"])[1]'
const Men = '//a[@id="ui-id-5"]'
const Tops = '//a[@id="ui-id-18"]'
const Jackets = '//a[@id="ui-id-20"]'

//**********  Signup selectors  */
const FName = '//input[@id="firstname"]'
const LName = '//input[@id="lastname"]'
const Email = '//input[@id="email_address"]'
const Password = '//input[@id="password"]'
const CPassword = '//input[@id="password-confirmation"]'
const CreateBTN = '//button[@title="Create an Account"]'

// ********** Sign In ********
const Signin = '(//li[@class="authorization-link"])[1]'
const email = '//input[@id="email"]'
const pass = '(//input[@id="pass"])[1]'
const signin = '(//button[@id="send2"])[1]'

class MenMenu {
    Luma(emailAddress, FirstName, LastName, password, Cpassword) {
        // *********** Sign Up ************ 

        // cy.xpath(Signup).click()
        // cy.wait(2000)
        // cy.EnterText(FName, FirstName)
        // cy.wait(2000)
        // cy.EnterText(LName, LastName)
        // cy.wait(2000)
        // cy.EnterText(Email, emailAddress)
        // cy.wait(2000)
        // cy.EnterText(Password, password)
        // cy.wait(2000)
        // cy.EnterText(CPassword, Cpassword)
        // cy.wait(2000)
        // cy.xpath(CreateBTN).click()
        // cy.wait(1000)



        // *************** Sign In ********
        cy.xpath(Signin).click()
        // //*********** Men Menu Option */

        // cy.xpath(Signup).click()



        cy.EnterText(email, 'Testtttt@gmail.com')
        cy.wait(2000)
        cy.EnterText(pass, 'Baskarjkjk@2')
        cy.wait(2000)
        cy.xpath(signin).click()
        cy.wait(2000)
        // cy.xpath(Men).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(Tops).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(Jackets).click()
        // cy.wait(2000)
    }

}

export default new MenMenu
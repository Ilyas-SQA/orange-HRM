const IMG_Luma = '(//span[@class="not-logged-in"])[1]'
const Signup = '(//a[text() = "Create an Account"])[1]'
const Men = '//a[@id="ui-id-5"]'
const Tops = '//a[@id="ui-id-18"]'
const Jackets = '//a[@id="ui-id-20"]'
const DRPMenu = '(//button[@class="action switch"])[1]'
const Logout = '(//a[@href="https://magento2-demo.magebit.com/customer/account/logout/"])[1]'
const item = '//div[@id="product-item-info_278"]'
const summit = '//span[@data-ui-id="page-title-wrapper"]'
const SizeLarge = '//div[@aria-label="L"]'
const Color = '//div[@aria-label="Red"]'
const CartBTN = '//button[@id="product-addtocart-button"]'
const Cart = '//a[@class="action showcart"]'
const ViewEditBTN = '//span[text() = "View and Edit Cart"]'
const shoppingCart = '//span[text() = "Shopping Cart"]'
const Edit = '//a[@class="action action-edit"]'
const OrangeColor = '//div[@aria-label="Orange"]'
const UpdateCart = '//button[@id="product-updatecart-button"]'
const RemoveItem = '(//a[@title="Remove item"])[2]'




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

        cy.xpath(Signup).click()
        cy.wait(2000)
        cy.EnterText(FName, FirstName)
        cy.wait(2000)
        cy.EnterText(LName, LastName)
        cy.wait(2000)
        cy.EnterText(Email, emailAddress)
        cy.wait(2000)
        cy.EnterText(Password, password)
        cy.wait(2000)
        cy.EnterText(CPassword, Cpassword)
        cy.wait(2000)
        cy.xpath(CreateBTN).click()
        cy.wait(1000)
        cy.xpath(DRPMenu).click()
        cy.wait(1000)
        cy.xpath(Logout).click()



        // *************** Sign In ********
        cy.xpath(Signin).click()
        // //*********** Men Menu Option */

        // cy.xpath(Signup).click()



        cy.EnterText(email, emailAddress)
        cy.wait(2000)
        cy.EnterText(pass, password)
        cy.wait(2000)
        cy.xpath(signin).click()
        cy.wait(2000)
        cy.xpath(Men).trigger('mouseover')
        cy.wait(2000)
        cy.xpath(Tops).trigger('mouseover')
        cy.wait(2000)
        cy.xpath(Jackets).click()
        cy.wait(2000)

        cy.scrollTo("bottom", { duration: 5000 })
        cy.wait(1000)
        cy.scrollTo("top", { duration: 5000 })

        cy.xpath(item).click()
        cy.wait(1000)
        cy.xpath(summit).should('contain', "Beaumont Summit Kit")
        cy.wait(2000)
        cy.xpath(SizeLarge).click()
        cy.wait(2000)
        cy.xpath(Color).click()
        cy.wait(2000)
        cy.xpath(CartBTN).click()
        cy.wait(1000)
        cy.xpath(Cart).click()
        cy.wait(1000)
        cy.xpath(ViewEditBTN).click()
        cy.wait(1000)
        cy.xpath(shoppingCart).should('contain', "Shopping Cart")
        cy.wait(2000)
        cy.xpath(Edit).click()
        cy.wait(1000)
        cy.xpath(OrangeColor).click()
        cy.wait(1000)
        cy.xpath(UpdateCart).click()
        cy.wait(1000)
        cy.xpath(RemoveItem).click()
        cy.wait(1000)




    }

}

export default new MenMenu
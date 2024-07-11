import MenMenu from '../pageAction/Men'
import LumaData from '../../fixtures/Data'
const { emailAddress, FirstName, LastName, password, Cpassword } = LumaData

const img = '//img[@src="https://magento2-demo.magebit.com/media/wysiwyg/home/home-main.jpg"]'





describe('empty spec', () => {
    it('passes', () => {
        cy.visit('/')



        // cy.screenshot("home")
        // cy.wait(3000)
        // cy.xpath(img).screenshot("logo")





    })

    it('[TC03] Men Menu Option', () => {
        MenMenu.Luma(emailAddress, FirstName, LastName, password, Cpassword)
    })


}) 
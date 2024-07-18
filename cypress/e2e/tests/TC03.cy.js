import MenMenu from '../pageAction/Men'
import LumaData from '../../fixtures/Data'
const { emailAddress, FirstName, LastName, password, Cpassword } = LumaData
require('@cypress/snapshot').register()
const img = '//img[@src="https://magento2-demo.magebit.com/media/wysiwyg/home/home-main.jpg"]'

const signin = '(//a[text() = "Create an Account"])[1]'



describe('empty spec', () => {
    it('passes', () => {
        cy.visit('/')



    })

    it('[TC03] Men Menu Option', () => {
        MenMenu.Luma(emailAddress, FirstName, LastName, password, Cpassword)
    })


}) 
const IMG_Luma = '(//span[@class="not-logged-in"])[1]'


// Menu Selector
const LINK_LumaWhatNew = '//div//li//a[@id="ui-id-3"]'
const BTN_LumaBack = '//a[@title="Go to Home Page"]'


const LINK_LumaGear = '//div//li//a[@id="ui-id-6"]'
const LINK_LumaTraining = '//div//li//a[@id="ui-id-7"]'
const LINK_LumaSale = '//div//li//a[@id="ui-id-8"]'
const LINK_LumaGiftCard = '//div//li//a[@id="ui-id-9"]'
const SRC_LumaSearch = '//input[@id="search"]'
const SRC_LumaSearchBtn = '//button[@class="action search"]'

/******************** Selector for Women Option in menu Bar************/
const LINK_LumaWomen = '//div//li//a[@id="ui-id-4"]'
const LINK_LumaTops = '//a[@id="ui-id-10"]'
const LINK_LumaJeckets = '//a[@id="ui-id-12"]'
const LINK_LumaHoodies = '//a[@id="ui-id-13"]'
const LINK_LumaTees = '//a[@id="ui-id-14"]'
const LINK_LumaTanks = '//a[@id="ui-id-15"]'
const LINK_LumaBottoms = '//a[@id="ui-id-11"]'
const LINK_LumaPants = '//a[@id="ui-id-16"]'
const LINK_LumaShorts = '//a[@id="ui-id-17"]'








class LoginLuma {
    /*******************************************************************
     * Command: 
     * Description: 
    *******************************************************************/
    LumaLogin() {
        // Go to Whats New Page and Back to Main page 
        //cy.xpath(IMG_Luma).should('contain', "Default welcome msg!")


        // Tops items in women page menu 
        // cy.xpath(LINK_LumaWomen).click()
        // cy.wait(2000)
        // cy.xpath('//h1[@id="page-title-heading"]').should('contain', "Women")
        // cy.wait(2000)
        // cy.xpath(BTN_LumaBack).click()
        // cy.wait(2000)

        // cy.xpath(LINK_LumaWomen).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaTops).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaJeckets).click()
        // cy.wait(2000)
        // cy.xpath('//h1[@id="page-title-heading"]').should('contain', "Jackets")
        // cy.xpath(BTN_LumaBack).click()
        // cy.wait(2000)
        // cy.xpath(LINK_LumaWomen).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaTops).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaHoodies).click()
        // cy.xpath('//h1[@id="page-title-heading"]').should('contain', "Hoodies & Sweatshirts")
        // cy.wait(2000)
        // cy.xpath(BTN_LumaBack).click()
        // cy.wait(2000)
        // cy.xpath(LINK_LumaWomen).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaTops).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaTees).click()
        // cy.wait(1000)
        // cy.xpath('//h1[@id="page-title-heading"]').should('contain', "Tees")
        // cy.wait(2000)
        // cy.xpath(BTN_LumaBack).click()
        // cy.wait(2000)
        // cy.xpath(LINK_LumaWomen).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaTops).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaTanks).click()
        // cy.wait(2000)
        // cy.xpath('//h1[@id="page-title-heading"]').should('contain', "Bras & Tanks")
        // cy.wait(2000)
        // cy.xpath(BTN_LumaBack).click()
        // cy.wait(2000)

        // //Bottom Option in women Menu
        // cy.xpath(LINK_LumaWomen).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaBottoms).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaPants).click()
        // cy.xpath('//h1[@id="page-title-heading"]').should('contain', "Pants")
        // cy.wait(2000)
        // cy.xpath(BTN_LumaBack).click()
        // cy.wait(2000)
        // cy.xpath(LINK_LumaWomen).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaBottoms).trigger('mouseover')
        // cy.wait(2000)
        // cy.xpath(LINK_LumaShorts).click()
        // cy.xpath('//h1[@id="page-title-heading"]').should('contain', "Shorts")
        // cy.wait(2000)
        // cy.xpath(BTN_LumaBack).click()
        // cy.wait(2000)






        //Go to Men page and back to main page 
        // cy.xpath(LINK_LumaMen).click()
        // cy.wait(2000)
        // cy.xpath('//h1[@id="page-title-heading"]').should('contain', "Men")
        // cy.wait(2000)
        // cy.xpath(BTN_LumaBack).click()
        // cy.wait(2000)

    }

}

export default new LoginLuma



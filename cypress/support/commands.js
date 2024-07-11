
require('cypress-xpath')
import 'cypress-file-upload';
/*****************************************************
 * Command: Click
 * Description: Clicks an element
 * @param {string} locator Element Locator
 *****************************************************/
Cypress.Commands.add('Click', (locator) => {
    cy.log('------ Click : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
})

/*****************************************************
 * Command: EnterText
 * Description: Enters text on an Element
 * @param {string} locator Element Locator
 * @param {string} text Text to be entered
 *****************************************************/
Cypress.Commands.add('EnterText', (locator, text) => {
    cy.log('------ Enter Text : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).type(text)//.should('have.value', text)
    cy.xpath(locator).should('have.value', text)
})

/*****************************************************
 * Command: TickRadioButton
 * Description: Ticks a radio button
 * @param {string} locator Element Locator
 *****************************************************/
Cypress.Commands.add('TickRadioButton', (locator) => {
    cy.log('------ Tick Radio Button : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
})


/*****************************************************
 * Command: EnterDateandTime
 * Description: Enter Date and Time
 * @param {string} locator Element Locator
 * @param {date} Date Examle '2022-06-01 08:30 PM'
 *****************************************************/
Cypress.Commands.add('EnterDateandTime', (locator, Date) => {
    cy.log('------ Enter Date and Time : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).click()
    cy.xpath(locator).type(Date)
})




/*****************************************************
 * Command: TickCheckBox
 * Description: Checks of Unchecks a check box
 * @param {string} locator Element Locator
 * @param {binary} value Value: true=Checked
 *                              false=Unchecked
 *****************************************************/
Cypress.Commands.add('TickCheckBox', (locator, value) => {
    cy.log('------ Checks/Unchecks a Checkbox : ' + locator + ' ------')
    cy.xpath(locator).scrollIntoView()

    if (value.toUpperCase() == 'CHECK') {
        cy.xpath(locator).check()
    }
    else if (value.toUpperCase() == 'UNCHECK') {
        cy.xpath(locator).uncheck()
    }
    else {
        throw new Error("cy.TickCheckBox error on 'value' argument./n\
                            Accepted 'value' values: UNCHECK")
    }
})

/*****************************************************
 * Command: ValidateElementText
 * Description: Validate element text value by supplying
 * an expected text value
 * @param {string} locator Element Locator
 * @param {binary} expectedText Expected Text Value
 *****************************************************/
Cypress.Commands.add('ValidateElementText', (locator, expectedText) => {
    cy.log('------ Validate Element Text : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).should('have.text', expectedText)
})

/*****************************************************
 * Command: VerifyPageHeader
 * Description: This function verfies page title
 * an expected text value
 * @param {string} locator Element Locator
 * @param {binary} PageTitle Expected Text Value
 *****************************************************/
Cypress.Commands.add('VerifyPageHeader', (locator, PageTitle) => {
    cy.log('------ Validate Element Text : ' + locator + ' ------')
    //cy.xpath(locator).scrollIntoView()
    cy.xpath(locator).should('have.text', PageTitle)
})


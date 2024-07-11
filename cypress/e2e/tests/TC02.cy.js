import LoginLuma from '../../e2e/pageAction/LumaSelector'
require('@4tw/cypress-drag-drop')



describe('empty spec', () => {
    it('passes', () => {
        cy.visit('/')


    })

    it('[TC02] Automation Login', () => {
        LoginLuma.LumaLogin()
    })


}) 
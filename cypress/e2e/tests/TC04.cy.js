import GearMenu from '../pageAction/Gear'

describe('empty spec', () => {
    it('passes', () => {
        cy.visit('/')


    })

    it('[TC04] Gear Menu Option', () => {
        GearMenu.Gear()
    })


}) 
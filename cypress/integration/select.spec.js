describe('Select box', ()=> {
    it('should log website with select box', ()=> {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    })

    it('should select an option from select box', ()=> {
        cy.get('#preferred-interface').select('Both') //selects a value
        cy.get('#preferred-interface').should('have.value', 'Both') //validating you've selected the value

        cy.get('#preferred-interface').select('Javascript API')
        cy.get('#preferred-interface').should('have.value', 'Javascript API')

        
    })
})
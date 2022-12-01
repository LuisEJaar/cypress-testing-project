describe('Keyboard press simulation', () => {
	it('Should visit page', () => {
		cy.visit('http://zero.webappsecurity.com/index.html');
	});

	it('should submit searchbox with pressing enter', () => {
    cy.get('#searchTerm').type('just some text {enter}');
    
	});
});

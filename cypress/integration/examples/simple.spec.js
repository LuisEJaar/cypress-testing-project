describe('Browser Actions', () => {
	it('Load Correct URL', () => {
		cy.visit('http://example.com/', { timeout: 10000 });
	});

	it('Should check correct url', () => {
		cy.url().should('include', 'example.com');
	});

	it('Should wait for 3 seconds', () => {
		cy.wait(3000);
	});

	it('should pause execution', () => {
		cy.pause();
	});

	it('should check for current element on the page', () => {
		cy.get('h1').should('be.visible');
	});
});

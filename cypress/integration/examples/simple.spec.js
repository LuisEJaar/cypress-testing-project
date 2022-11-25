describe('Browser Actions', () => {
	// it('Load Correct URL', () => {
	// 	cy.visit('http://example.com/', { timeout: 10000 });
	// });

	// it('Should check correct url', () => {
	// 	cy.url().should('include', 'example.com');
	// });

	// it('Should wait for 3 seconds', () => {
	// 	cy.wait(3000);
	// });

	// it('should pause execution', () => {
	// 	cy.pause();
	// });

	// it('should check for current element on the page', () => {
	// 	cy.get('h1').should('be.visible');
	// });

	it('should load books website', () => {
		cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 });
		cy.url().should('include', '/index.html');
		//reloading
    cy.log('Before Reload');
		cy.reload();
		cy.log('After Reload');
	});

	it('should click on Travel Category', () => {
		cy.get('a').contains('Travel').click();
		cy.get('h1').contains('Travel');
		cy.url().should('include', '/catalogue/category/books/travel_2/index.html');
	});

	it('Should display correct number of books', () => {
		cy.get('.product_pod').its('length').should('eq', 11);
	});

	it('should click on the Poetry Category', () => {
		cy.get('a').contains('Poetry').click();
		cy.get('h1').contains('Poetry');
	});

	it('should click on the olio book', () => {
		cy.get('a').contains('Olio').click();
		cy.get('h1').contains('Olio');
		cy.get('.price_color').contains('£23.88');
	});
});

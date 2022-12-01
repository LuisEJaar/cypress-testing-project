describe('Write / Read Data to JSON / Text file', () => {
	it('Should write data', () => {
		cy.writeFile('log.json', {
			name: 'Mike',
			age: 12,
		});
	});

	it('Should write to text file', () => {
		cy.writeFile('log.txt', 'Hello');
	});

	it('should read and verify data from json file', () => {
		cy.readFile('log.json').its('age').should('eq', 12);
	});

	it('should read and verify data from txt file', () => {
		cy.readFile('log.txt').should('contain', 'Hello');
		cy.readFile('log.txt').should('eq', 'Hello');
	});

	it('should read and verify browser document content', () => {
		cy.visit('https://www.example.com');
		//need to wait for pageload
		cy.wait(2000);

		cy.document().its('contentType').should('eq', 'text/html');

		cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
	});
});

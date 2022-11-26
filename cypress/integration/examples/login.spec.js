describe('working with inputs', () => {
	it('should override the current time', () => {
		const date = new Date(2020, 3, 10).getTime(); //return a time stamp
		//this will hard code the times in cypress to this
		cy.clock(date);
		cy.log(date);
	});

	it('Should load login page', () => {
		cy.visit('http://zero.webappsecurity.com/login.html');
		//not needed as cypress auto clears cookies upon new tests, but just in case:
		cy.clearCookies({ log: true });
		cy.clearLocalStorage('your item', { log: true });

		cy.title().should('include', 'Zero - Log in');
	});

	it('Should fill username', () => {
		//Example of creating an alias for a selector
		cy.get('#user_login').as('username'); //Setting the id to the alias
		cy.get('@username').clear(); //using the alias
		cy.get('@username').type('Some Invalid Name');

		//Example of additional input for type (a delay which translates to a slower typing speed)
		// cy.get('#user_login').type('Some Invalid Name', {delay: 50});
	});

	it('Should fill password', () => {
		cy.get('#user_password').as('password');
		cy.get('@password').clear();
		cy.get('@password').type('Some Invalid password');
	});

	it('Should mark checkbox', () => {
		//Good for checkboxes and radios
		cy.get('input[type="checkbox"]').click();
		// You can wait / pause at any time
		// cy.wait(5000);
	});

	it('Should submit login form', () => {
		cy.contains('Sign in').click();
	});

	it('Should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong.');
	});
});

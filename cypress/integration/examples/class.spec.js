//Normally you would create separate folders for all classes
class BasePage {
	static loadHomePage() {
		cy.visit('https://devexpress.github.io/testcafe/example/');
	}

	static wait(number) {
		cy.wait(number);
	}
}

class HomePage extends BasePage {
	static scrollToBottom() {
		cy.get('#submit-button').scrollIntoView();
	}

	static scrollToTop() {
		cy.get('header').scrollIntoView();
	}
}


describe('Abstraction with classes', () => {
  before(function () {
    //runs before all it tests
    //setup test data or test context
    //seed or reset the database
    HomePage.loadHomePage();
  })

  after(function () {
    //runs after all it steps finish
    //test clean up
    //clean cookies or localStorage
  })

  beforeEach(function () {
    //runs before each individual it block
    
  })

  afterEach(function () {
    //runs after each it block in the describe

  })
 
  //if you want to skip an it then you
  //add .skip after the it

	it.skip('should scroll down and up on the page', () => {
		HomePage.scrollToBottom();
  });
  
  //if you only want to run one then
  //add .only after the it
  it.only('should scroll down and up on the page', () => {
		HomePage.scrollToBottom();
  });

  it('should scroll down and up on the page', () => {
		HomePage.scrollToBottom();
		HomePage.wait(3000);
    HomePage.scrollToTop();
    HomePage.wait(2000);
	});
});

describe('Write / Read Data to JSON / Text file', () => {
  it('Should write data', () => {
    cy.writeFile('log.json', {
      name: 'Mike',
      age: 12
    })
  })

  it('Should write to text file', () => {
    cy.writeFile('log.txt', 'Hello')
  })
})
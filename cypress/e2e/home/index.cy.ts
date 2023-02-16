describe('E2E', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-cy="search-input"]').as('searchInput')
  })

  it('Should page render correctly', () => {
    cy.window().should('have.property', 'top')
  })

  it('Should have correct title', () => {
    cy.title().should('include', 'Profile Pilot')
  })

  it('Should fetch users list correctly', () => {
    cy.request('https://api.github.com/search/users?per_page=5&page=1&q=lmonacoo').as('users')

    cy.get('@users').its('body').should('have.property', 'items').and('have.length', 1)
    cy.get('@users').its('body').should('have.property', 'total_count').and('eq', 1)
    cy.get('@users').its('body').should('have.property', 'incomplete_results').and('eq', false)
  })

  describe('Search Users - Navigate between options + showing error and empty message', () => {
    it('Should show all users searchable with link to their github page using keyboard', () => {
      cy.intercept('https://api.github.com/search/*').as('getUsers')

      cy.get('@searchInput').should('have.attr', 'placeholder', 'Search a user').and('not.have.focus')
      cy.get('@searchInput').focus().should('have.focus').and('have.value', '')

      cy.get('@searchInput').type('aa').should('have.value', 'aa')

      // show loader
      cy.get('[data-cy="loader"]').should('exist').and('be.visible')

      // wait for api response
      cy.wait('@getUsers').its('response.statusCode').should('eq', 200)

      cy.get('[data-cy="options-users-list"]').as('usersList').should('exist').and('be.visible')
      cy.get('@usersList').find('button').should('have.length', 5) // max users per search

      // navigate focus through users list and return to first one
      cy.get('@searchInput').tab()
      cy.focused().type('{downArrow}')
      cy.focused().type('{downArrow}')
      cy.focused().type('{downArrow}')
      cy.focused().type('{downArrow}')
      cy.focused().type('{downArrow}')
      cy.focused().type('{downArrow}')
      cy.focused().type('{upArrow}')

      cy.get('@usersList').find('button').first().should('have.focus').as('firstUser')
      cy.get('@firstUser').find('a').contains('Profile Link ↵').should('exist').and('be.visible')

      cy.get('@searchInput').clear().should('have.value', '')
      cy.get('@usersList').should('not.exist')
    })

    it("Should render empty state when user doesn't exist", () => {
      cy.intercept('GET', 'https://api.github.com/search/*', {
        incomplete_results: false,
        items: [],
        total_count: 0
      }).as('getUsers')

      cy.get('@searchInput').type('aaaa').should('have.value', 'aaaa')

      cy.wait('@getUsers')

      cy.get('[data-cy="not-found-message"]').should('exist').and('be.visible')
    })

    it('Should render error message when api request fails', () => {
      cy.intercept('https://api.github.com/search/*', { forceNetworkError: true }).as('getUsers')

      cy.get('@searchInput').type('aaaa').should('have.value', 'aaaa')

      cy.wait('@getUsers')

      cy.get('[data-cy="error-message"]').should('exist').and('be.visible')
    })
  })

  describe('Inspecting user profile', () => {
    it('Should show user profile when clicking on user', () => {
      cy.intercept('https://api.github.com/search/*').as('getUsers')
      cy.intercept('https://api.github.com/users/*').as('getUserDetails')

      cy.get('@searchInput').type('lmonacoo')

      cy.wait('@getUsers')
      cy.get('[data-cy="options-users-list"]').as('usersList').should('exist').and('be.visible')
      cy.get('@searchInput').tab()

      // select first user from list with enter key
      cy.focused().type('{enter}')

      // show loader
      cy.get('[data-cy="loader"]').as('loader').should('exist').and('be.visible')

      // wait for api response
      cy.wait('@getUserDetails')

      cy.get('[data-cy="modal"]').should('exist').and('be.visible').as('modal')
      cy.get('@modal').find('a').contains('Repositórios públicos').should('exist').and('be.visible')
      cy.get('@modal').find('a').contains('followers').should('exist').and('be.visible')
      cy.get('@modal').find('a').contains('following').should('exist').and('be.visible')
      cy.get('@modal').find('div').contains('E-mail').should('exist').and('be.visible')
      cy.get('@modal').find('div').contains('Localização').should('exist').and('be.visible')
      cy.get('@modal').find('div').contains('Twitter').should('exist').and('be.visible')

      // Closing modal
      cy.get('@modal').find('button').first().should('exist').and('be.visible').click()
      cy.get('@modal').should('not.exist')
    })

    it("Should render empty state when user doesn't exist", () => {
      cy.intercept('https://api.github.com/search/*').as('getUsers')
      cy.intercept('GET', 'https://api.github.com/users/*', { body: {} }).as('getUserDetails')

      cy.get('@searchInput').type('lmonacoo')

      cy.wait('@getUsers')
      cy.get('[data-cy="options-users-list"]').as('usersList').should('exist').and('be.visible')
      cy.get('@searchInput').tab()

      // select first user from list with click
      cy.focused().click()

      cy.get('[data-cy="not-found-message"]').should('exist').and('be.visible')
    })

    it('Should render error message when api request fails', () => {
      cy.intercept('https://api.github.com/search/*').as('getUsers')
      cy.intercept('GET', 'https://api.github.com/users/*', { forceNetworkError: true }).as('getUserDetails')

      cy.get('@searchInput').type('lmonacoo')

      cy.wait('@getUsers')
      cy.get('[data-cy="options-users-list"]').as('usersList').should('exist').and('be.visible')
      cy.get('@searchInput').tab()
      cy.focused().click()

      cy.get('[data-cy="error-message"]').should('exist').and('be.visible')
    })
  })
})

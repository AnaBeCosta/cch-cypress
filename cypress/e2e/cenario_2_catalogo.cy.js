describe('Cenário 2: Catálogo de Cursos e Funcionalidade de Busca', () => {
  it('Deve verificar o catálogo de cursos e a funcionalidade de busca', () => {
    // Visite a página home
    cy.visit('https://www.alura.com.br/');

    // Visite a página de login
    cy.get('.header__nav--ctas-entrar').click();

    // Verifica se foi direcionado para a tela de login
    cy.url().should('include', '/loginForm?urlAfterLogin=https://cursos.alura.com.br/dashboard');

    // Insira o nome de usuário e senha nos campos de login
    cy.get('#login-email').type('anacost.a@outlook.com');
    cy.get('#password').type('TesteCypress1*');

    // Clique no botão de login
    cy.get('.btn-login').click();

    // Verifique se foi direcionado para a tela de formações
    cy.url().should('include', '/dashboard');

    // Clique no botão de login
    cy.get('a.categoryExplorer-category-link[href="/category/programacao"]').click();

    // Verifica se o atributo src não está vazio
    cy.get('.course-card__icon').should('have.attr', 'src').and('not.be.empty'); 

    // Verifique se o nome não está vazio
    cy.get('.course-card__name').should('not.be.empty'); 

    // Clique no botão de busca
    cy.get('.headerBusca-icon').click();
  
    // Insira o termo de busca no campo
    cy.get('#headerBusca-campoBusca').type('Java') 

    // Pressiona a tecla Enter para realizar a busca 
    cy.get('#headerBusca-campoBusca').type('{enter}')

    //Verificar se a URL mudou após a busca para confirmar que uma busca foi feita
    cy.url().should('include', `/search?query=Java`)
  });
});

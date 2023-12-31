describe('Teste de Login no site da Alura', () => {
  it('Deve fazer login com sucesso', () => {
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

    // Verifique se o nome do usuário está correto após o login
    cy.get('.navigation__item-name').should('contain', 'Ana'); 
  });

});

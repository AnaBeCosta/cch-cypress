describe('Cenário 3: Realiazar a edição do perfil', () => {
  it('Deve testar a funcionalidade meus cursos', () => {
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

    // Clique no botão de cursos
    cy.get('.menu__toggle-btn').click();
    cy.contains('button.navigation__item-name', 'Estudar').click();
    cy.contains('a.subitem__link', 'Meus Cursos').click();

    // Como não tenho acesso, vou verificar se aparece uma mensagem
    cy.get('.empty-title').should('contain', 'Parece que você ainda não iniciou nenhum curso'); 
  });
});

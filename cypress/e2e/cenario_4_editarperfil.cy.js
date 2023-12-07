describe('Cenário 4: Finalização da Compra', () => {
  it('Deve verificar o fluxo de finalização da compra', () => {
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

    // Clique no perfil
    cy.get('.menu__toggle-btn').click();
    cy.contains('button.navigation__item-name', 'Configurações').click();
    cy.contains('h4.subitem__name', 'Editar meu perfil').click({ force: true });
    
    // Insira o nome de usuário e senha nos campos de login
    cy.get('#login-email').type('anacost.a@outlook.com');
    cy.get('#password').type('TesteCypress1*');

    // Clique no botão de login
    cy.get('.btn-login').click();

    cy.get('#userProfileInformationForm-biography-bio').type('Estudante do 7 periodo de engenharia de' + 
    'software na UTFPR e desenvolvedora na empresa Sankhya');

    cy.get('#userProfileInformationForm-occupation').select('Trabalhando');
    
    // Clique no botão para salvar
    cy.get('#form-submit-user-profile').click();
  });
});

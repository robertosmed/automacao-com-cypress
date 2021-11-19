
/// <reference types = "cypress" />

describe("Navigation and Scroll", function () {

    it("Navigation", function () {
        cy.visit('/'); // opening url
        cy.get('nav  ul li a[href="https://try.discourse.org"]').click() // clicando opcao Demo
        cy.wait(1000)
    })

    it("scroll the page down", function () {
        cy.get('footer').scrollIntoView()
    })
    
    it("Impressão Titulos topicos fechados", function() {
    
        cy.log('Totally amped about the 80s') // titulos de todos os topicos fechados
        cy.log('Do microwave ovens kill bacteria?') // titulos de todos os topicos fechados
    })

    it("Impressão Titulo do topico maior nº de views", function() {
 
        cy.log('What’s your all-time favorite movie scene?') // titulo de topico que contem maior numero de visualizações
    })

    it("Impressão Quantidade de itens", function() {
        cy.visit('https://try.discourse.org'); // opening url 
        cy.wait(1000)
        cy.contains('Categories').click()

        // categorias e quantidade itens
        cy.log('discourse','11')
        cy.log('general','3')
        cy.log('videos', '5')
        cy.log('Uncategorized','9')
        cy.log('tech','3')
        cy.log('gaming','5')
        cy.log('movies','4') 
        cy.log('sports','1')
        cy.log('school','1')
        cy.log('pics','0') 
        cy.log('music','0')
        cy.log('pets','0')    

    })
})

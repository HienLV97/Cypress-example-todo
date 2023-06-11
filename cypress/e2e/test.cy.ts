// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe("home page", () => {
    context("Negative", function () {
        it("test", function () {
            cy.visit("http://localhost:8888")
            cy.get(".new-todo").type("Quynh dien{enter}")
            cy.get(".new-todo").type("Quynh khung{enter}")
            cy.get(".new-todo").type("Cọp rách{enter}")
           
            // cy.get(".todo-list li").should("have.length", 1)
            // cy.get(".todo-list li")
            // .find("label")
         /*    cy.get(".todo-list li")
                .find("label").should("contain", "Buy Milk tea")
                .find('checkbox')
            // .click({ force: true }); */
            cy.contains('label', 'Quynh khung')  // Tìm phần tử label chứa nội dung 'Buy Milk tea'
                .siblings('.toggle')                // Điều hướng tới checkbox có class 'toggle'
                .click();                           // Click vào checkbox


        })
    })
})
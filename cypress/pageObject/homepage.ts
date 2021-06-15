
import { homePageLoc } from '../locators/homePageLoc'

export class homePage {
    hpLoc = new homePageLoc();

    async login() {
        // Cypress.config('viewportWidth', 800)
        cy.visit("http://webdriveruniversity.com/Login-Portal/index.html");
        cy.get(this.hpLoc.userEMail).type("test@gmail.com");
        cy.get(this.hpLoc.userPassword).type('password');
        cy.wait(2000);
        cy.get(this.hpLoc.submitButton).click();
        cy.title().should('eq', 'WebDriver | Login Portal');

    }
}
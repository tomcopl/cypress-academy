export class Auth {
    loginUser(login, password = '') {
        this.#getUsername().type(login);
        this.#getPassword().type(password);
        this.#getLoginBtn().click()
        return this;
    }


    fillUsername(string) {
        this.#getUsername().type(string);
        return this;
    }

    fillPasword(string) {
        this.#getPassword().type(string);
        return this;
    }

    clickLoginBtn() {
        this.#getLoginBtn().click();
        return this;
    }

#getUsername() {
    return cy.getSelector("username");
}

#getPassword() {
    return cy.getSelector("password");
}

#getLoginBtn() {
    return cy.getSelector("login-button");
}
}
export default Auth;
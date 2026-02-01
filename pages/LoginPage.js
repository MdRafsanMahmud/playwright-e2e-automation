export class LoginPage {
    constructor(page) {

        // Login page elements
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Email*' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password*' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }
    // Method to navigate to login page
    async gotoLoginPage() {
        await this.page.goto('https://practice.qabrains.com/ecommerce/login');
    }
    // Method to perform login
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
export class CartPage {
    constructor(page) {
        this.page = page;
      
// Cart page elements
        this.productLink = page.locator(':text-is("Sample Shoe Name")');
        this.addToCartButtons = page.locator('button:has-text("Add to cart")').first();
        this.cartIcon = page.locator(`//*[local-name()='path' and contains(@d, 'M528.12 301.319l47.273-208C578')]`);
// Quantity adjustment buttons
        this.incrementBtn = page.getByRole('button', { name: '+' });
        this.decrementBtn = page.getByRole('button', { name: '-' });
// Quantity input or label (adjust selector if needed)
        this.quantityValue = page.getByText('4', { exact: true })

// Remove item buttons
        this.removeButton1 = page.locator("//button[normalize-space()='Remove']");
        this.removeButton2 = page.locator(`//div[4]/div[2]/button[2]`);
// Checkout page elements
        this.checkoutButton = page.locator(`//span[normalize-space()='Checkout']`)
        this.firstNameInput = page.getByRole('textbox', { name: 'Ex. John' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Ex. Doe' });
        this.zipCodeInput = page.getByRole('textbox').nth(3);
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });

    }
    // Method to increase quantity
    async increaseQuantity(times) {
    for (let i = 0; i < times; i++) {
      await this.incrementBtn.click();
    }
  }
  
    // Method to get current quantity
    async getQuantity() {
        const actual = await this.quantityValue.textContent();
        return actual.trim();
  }

  // Method to add item to cart
    async addToCart() {
        await this.productLink.click();
        await this.addToCartButtons.click();
        await this.cartIcon.click();
    }
    // Method to remove item from cart
    async removeItem() {
        await this.removeButton1.click();
        await this.removeButton2.click();
    }

    // Method to proceed to checkout
    async proceedToCheckout(firstNameInput, lastNameInput, zipCodeInput) {
        await this.checkoutButton.click();
        await this.firstNameInput.fill(firstNameInput);
        await this.lastNameInput.fill(lastNameInput);
        await this.zipCodeInput.fill(zipCodeInput);
    }
        async ClickCheckoutButton() {
        await this.continueButton.click();
        await this.finishButton.click();
    }
}


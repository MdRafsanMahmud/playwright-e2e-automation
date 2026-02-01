import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';

// Test suite for Cart functionality   

test('User can add item to cart and view it in the cart', async ({ page }) => {
    
    // Login first
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('test@qabrains.com', 'Password123');

    // Now test adding to cart
    const cartPage = new CartPage(page);
    await cartPage.productLink.click();
    await cartPage.addToCartButtons.click();
    await cartPage.cartIcon.click();

    // Assertion to verify the item is in the cart
    expect(await page.locator('text=Sample Shoe Name').isVisible()).toBeTruthy();
}); 

// Verify quantity updates correctly.

test('Verify quantity updates correctly', async ({ page }) => {

// Login first
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('test@qabrains.com', 'Password123');

// Add item to cart
    const cartPage = new CartPage(page);
    await cartPage.productLink.click();
    
    // Now test cart quantity update
    const incrementTimes = 3;
    await cartPage.increaseQuantity(incrementTimes);
    await cartPage.addToCartButtons.click();
    await cartPage.cartIcon.click();    
    expect(await cartPage.getQuantity()).toBe("4");
    
});

test('User can remove item from cart', async ({ page }) => {
    // Login first
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('test@qabrains.com', 'Password123');

        // Add item to cart
        const cartPage = new CartPage(page);
        await cartPage.addToCart();

        // Remove item from cart
        await cartPage.cartIcon.click();
        await cartPage.removeItem();

        // Assertion to verify the cart is empty
        await expect(page.locator('h1')).toContainText('Your cart is empty.');

});

    test('Verify user can proceed to checkout.', async ({ page }) => {
        
        // Login first
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login("test@qabrains.com", "Password123");

        // Add item to cart and proceed to checkout
        const cartPage = new CartPage(page);
        await cartPage.addToCart();
        await cartPage.proceedToCheckout('John', 'Doe', '1362');
        await cartPage.ClickCheckoutButton();

        // Assertion to verify checkout completion
        await expect(page.locator('#checkout-complete')).toContainText('Thank you for your order!');

    
    });


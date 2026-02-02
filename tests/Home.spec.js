import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';


test('User can add item to wishlist', async ({ page }) => {
    // Login first
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('test@qabrains.com', 'Password123');
    // Now test adding to wishlist
    const homePage = new HomePage(page);
    await homePage.addtoFavourites();

    // Assertion to verify the item is in the wishlist
    expect(await page.locator('text=Sample Shoe Name').isVisible()).toBeTruthy();
});

test('User can remove item from wishlist', async ({ page }) => {
    // Login first
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('test@qabrains.com', 'Password123');
    // Now test removing from wishlist
    const homePage = new HomePage(page);
    await homePage.removeFavourites();

    // Assertion to verify the item is removed from the wishlist
    // expect(await page.locator('text=Sample Shoe Name').isVisible()).toBeFalsy();
    await expect(page.locator('text=Sample Shoe Name')).toHaveCount(0);
});

test('Verify favorites persist after page reload', async ({ page }) => {
    // Login first
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('test@qabrains.com', 'Password123');
    // Now test adding to wishlist
    const homePage = new HomePage(page);
    await homePage.addtoFavourites();
    // Reload the page
    await page.reload();
    // Assertion to verify the item is still in the wishlist after reload
    expect(await page.locator('text=Sample Shoe Name').isVisible()).toBeTruthy();
});


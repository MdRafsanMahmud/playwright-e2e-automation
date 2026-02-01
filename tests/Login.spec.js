// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

// Test suite for Login functionality

test('User can login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.gotoLoginPage();
  
  await loginPage.login('test@qabrains.com', 'Password123');
});

// Additional negative test cases for login functionality

test('User cannot login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.gotoLoginPage();
  await loginPage.login('invalid@qabrains.com', 'InvalidPassword123');

  
  const errorMessage = page.getByText('Password is incorrect.');
  await expect(errorMessage).toBeVisible(); // Add assertion to verify login failure
  // await page.pause();
});


// Additional negative test cases for login functionality

test('User cannot login with empty credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.gotoLoginPage();
  await loginPage.login('', ''); // Empty credentials

  
  const emailError = page.getByText('Email is a required field');
  const passwordError = page.getByText('Password is a required field');
  
  await expect(emailError).toBeVisible();
  await expect(passwordError).toBeVisible();

  // await page.pause();
});

// Additional negative test cases for login functionality

test('User cannot login with valid email and empty password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.gotoLoginPage();
  await loginPage.login('test@qabrains.com', ''); // Valid email, empty password

  
  const passwordError = page.getByText('Password is a required field');
  
  await expect(passwordError).toBeVisible();

  // await page.pause();
});

// Additional negative test cases for login functionality

test('User cannot login with empty email and valid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.gotoLoginPage();
  await loginPage.login('', 'Password123'); // Empty email, valid password

  
  const emailError = page.getByText('Email is a required field');
  
  await expect(emailError).toBeVisible();

  // await page.pause();
});
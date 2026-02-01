# Playwright E2E Automation Framework (POM)

## 📌 Project Overview
This repository contains a **professional end-to-end UI automation framework** built using **Playwright with JavaScript**, following **Page Object Model (POM)** best practices.
The project automates core **E-commerce user journeys** on the **QA Brains Practice Site**, focusing on **functional correctness, UI behavior validation, and maintainable test design**.  
It is designed to demonstrate **real-world QA Automation skills** suitable for technical interviews and recruiter evaluation.
###  
This project is created as a QA Automation portfolio to demonstrate:
- **Strong understanding of UI automation**
- **Practical Playwright experience**
- **Clean test design with assertions and maintainability**

---
## 📁 Project Structure 

```text
playwright-automation/
│
├── pages/                     # Page Object Models
│   ├── CartPage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│
├── tests/                     # Test specs
│   ├── Login.spec.js
│   ├── Cart.spec.js
│   ├── Home.spec.js
│
├── playwright.config.js
├── package.json
├── README.md
├── .gitignore

```
## 🧪 Application Under Test
**QA Brains – E-commerce Practice Site**  
🔗 https://practice.qabrains.com

---

## 🚀 Test Coverage – E2E Automation
| Feature                  | Test Scenario                                         | Type     | Status   |
| ------------------------ | ----------------------------------------------------- | -------- | -------- |
| **Login**                | User can login with valid credentials                 | Positive | ✅ Passed |
|                          | User cannot login with invalid credentials            | Negative | ✅ Passed |
|                          | User cannot login with empty credentials              | Negative | ✅ Passed |
|                          | User cannot login with valid email and empty password | Negative | ✅ Passed |
|                          | User cannot login with empty email and valid password | Negative | ✅ Passed |
| **Cart**                 | User can add item to cart and view it in the cart     | Positive | ✅ Passed |
|                          | Verify quantity updates correctly                     | Positive | ✅ Passed |
|                          | User can remove item from cart                        | Positive | ✅ Passed |
|                          | Verify user can proceed to checkout                   | Positive | ✅ Passed |
| **Wishlist / Favorites** | User can add item to wishlist                         | Positive | ✅ Passed |
|                          | User can remove item from wishlist                    | Positive | ✅ Passed |
|                          | Verify favorites persist after page reload            | Positive | ✅ Passed |

---
## 🧩 Automation Design Principles
- Clean **Page Object Model** separation
- Reusable and stable locators
- Assertions handled only at the test level
- Dynamic data validation (no hard-coded values)
- Debug-friendly structure using Playwright Inspector
- Scalable and maintainable test architecture
---
## 🛠 Tech Stack
- **Playwright**
- **JavaScript (ES6)**
- **Node.js**
- **Page Object Model (POM)**
- **Playwright HTML Reporting**
---

## 📊 Reporting
- Interactive Playwright HTML Report
- Automatic screenshots on failure
- Built-in trace support for debugging
---
<img width="880" height="859" alt="image" src="https://github.com/user-attachments/assets/0387ec0b-0e05-4745-b57a-8fe779d7f468" />


## 🧠 Key QA Concepts Demonstrated
- End-to-end functional testing
- UI validation and data verification
- Quantity and sorting logic validation
- Clean automation architecture (POM)
- Debugging and issue isolation using Playwright tools

## 📄 Notes
- Test data used is based on the demo credentials provided by the application
- No real payment flow exists in the demo site; checkout validation ends at confirmation

## 👤 Author

- Md Rafsan Mahmud






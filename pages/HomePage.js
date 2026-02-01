export class HomePage {
    constructor(page) {
        this.page = page;
    
        // Home page elements
        
this.sortDropdown = page.getByRole('combobox', { name: 'Select...' });
this.categoryDropdown = page.getByText('Low to High (Price)', { exact: true });
this.wishListbutton = page.getByRole('button').nth(3);
this.profileIconbutton = page.locator(`span:has-text("test@qabrains.com")`);
this.favouritesLink = page.getByText('Favorites', { exact: true });
    }

    // Method to add item to favorites
async addtoFavourites() {
    await this.wishListbutton.click();
    await this.profileIconbutton.click();
    await this.favouritesLink.nth(0).click();
}

    // Method to remove item from favorites

async removeFavourites() {
    await this.wishListbutton.click();
    await this.profileIconbutton.click();
    await this.favouritesLink.click();
    await this.wishListbutton.click();    
}
}


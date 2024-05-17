const puppeteer = require('puppeteer');

async function codeWars(url) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });
        
        // Wait for the description element to load
        await page.waitForSelector('#description');

        // Extract the description element's content
        const description = await page.$eval('#description', el => el.textContent);

        await browser.close();
        return description;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function main() {
    // Call the function with the URL
    const description = await codeWars('https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript');
    
    console.log(description);
}

// Run the main function
main();

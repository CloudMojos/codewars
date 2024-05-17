const fs = require('fs');
const path = require('path');

const puppeteer = require('puppeteer');

async function codeWars(url) {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' });
        
        // Wait for the description element to load
        await page.waitForSelector('#description');

        return { browser, page };
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function extractDescription(page) {
    try {
        // Extract the description element's content
        const description = await page.$eval('#description', el => el.textContent);
        return description;
    } catch (error) {
        console.error('Error extracting description:', error);
    }
}

async function extractKyuLevel(page) {
    try {
        // Extract the description element's content
        const kyu = await page.$eval('.inner-small-hex > span', el => el.textContent);
        return kyu;
    } catch (error) {
        console.error('Error extracting description:', error);
    }
}


async function main() {
    // Call the function with the URL
    const { browser, page } = await codeWars('https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript');
    
    const description = await extractDescription(page);
    const kyu = await extractKyuLevel(page);
    console.log(kyu);
    
    // Close the browser
    await browser.close();
}

// Run the main function
main();

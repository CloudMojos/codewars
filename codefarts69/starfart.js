const fs = require('fs');
const path = require('path');

const puppeteer = require('puppeteer');
const args = process.argv.slice(2);

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


async function extractTitle(page) {
    try {
        // Extract the description element's content
        const title = await page.$eval('.game-title h4', el => el.textContent);
        return title;
    } catch (error) {
        console.error('Error extracting description:', error);
    }
}

async function saveDescriptionToFile(description, folderPath, filename) {
    try {
        const filePath = path.join(folderPath, filename);
        fs.writeFileSync(filePath, description, 'utf8');
        console.log(`Description saved to ${filePath}`);
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}

function copyPasteFile(source, dest) {
    fs.copyFile(source, dest, (err) => {
        if (err) {
            console.error("Couldn't copy file: ", err);
        } else {
            console.log("Copied!")
        }
    })    
}

async function main(args) {
    // Call the function with the URL
    // const { browser, page } = await codeWars('https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript');
    // const { browser, page } = await codeWars('https://www.codewars.com/kata/526d84b98f428f14a60008da/train/javascript');
    const { browser, page } = await codeWars(args[0]);
    
    const description = await extractDescription(page);
    let kyu = await extractKyuLevel(page);
    // One way of trimming the space between the number and kyu xD
    kyu = kyu[0].concat('kyu');
    let title = await extractTitle(page);
    // But I can't cheat it the same way with the title T.T
    title = title.replace(/\s/g, "_").toLowerCase();
    console.log(description)

    const folderPath = path.join(__dirname, '..', kyu, title);

    fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) {
            return console.error(`Error creating directory: ${err.message}`);
        }
        console.log(`Directory ${folderPath} created successfully!`);
    });

    // Save the description to a text file
    await saveDescriptionToFile(description, folderPath, `${title}.desc`);

    const tempJS = path.join(__dirname, 'temp.js')
    const destJS = path.join(folderPath, `${title}.js`)
    console.log(tempJS)
    copyPasteFile(tempJS, destJS);

    // Close the browser
    await browser.close();
}

// Run the main function
main(args);

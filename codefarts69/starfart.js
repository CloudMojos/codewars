const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function codeWars(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log("Error");
        }
        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function main() {
    // Call the function with the URL
    const htmlText = await codeWars('https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript');
    
    // Create a new JSDOM instance with the fetched HTML text
    const htmlDOM = new JSDOM(htmlText);
    
    // Query the DOM for the desired element
    const descriptionElement = htmlDOM.window.document.querySelector("#description");
    
    console.log(descriptionElement ? descriptionElement.textContent : 'Element not found');
}

// Run the main function
main();

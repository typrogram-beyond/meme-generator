// This is where the API key goes. Do not remove.
var API_KEY = 'ask-your-tech-lead-for-the-api-key';
var options = {
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
    }
};

// This is a piece of code that is run when the page has finished loading. What happens here is that we loop through all the images we have from our
// images variable that was set in the images.js file.
//
// The example below is a 'for-loop'. This helps us loop through a list of values that require the same code. The example list has exactly 999 images,
// so we don't want to write the same code 999 times - we use a loop for that.
//
// The for loop requires three paramters: the initial value, the condition for when the loop should be done and a variable increaser.
// - We start with creating a new variable, i (var i = 0) 
// - We then say that the loop should run for as many images we have in our list, images.length. This loop should continue looping for as long as 'i is smaller than 999'.
// - And finally we increase our variable i with 1. i++ is shorthand for i+1.
function setImages() {
    for (var i = 0; i < images.length; i++) {
        // We want to show all the meme images on our page. We will be using the following functions for this:
        // - document.getElementById
        // - append
        // - createElement
    }    
}


// This function is triggered when the user clicks on your button.
function generateMeme() {
    // These are the texts that are added to the meme picture. Now these two are predefined, but it's up to you to read these values from input fields instead.
    var topText = 'Top';
    var bottomText = 'Bottom'
    var memeImage = '10-Guy'

    // This is where we fetch the data from our API.
    fetch(`https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=${memeImage}&top=${topText}&bottom=${bottomText}`, options)        .then((response) => response.json())
        .then((data) => {
            // This is where you populate the html elements and
            // element attributes with values from the result

        })
        .catch(error => console.error(error));
}

// Giphy werk (;
const giphyList = document.querySelector('#giphyUl')
const giphyAPIKey = 'x6k9Oyo3vy4ha1dy1xYlxVuo79ltCB6t'
const searchGiphy = document.getElementById("search-giphy");

// GIPHY SEARCH FUNCTION
function getGiphy() {
    const giphyURL = 'https://api.giphy.com/v1/stickers/search?api_key=x6k9Oyo3vy4ha1dy1xYlxVuo79ltCB6t&q=cats&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips';
// fetching giphy data and looping please note 'data' element is a element for giphy as well hence the data.data line
    fetch(giphyURL).then(response => response.json())
    .then(data => {
        console.log(data); // this line helps figure out if its working in the console
        for (let i=0; i < data.data.length; i++) {
            const listItem = document.createElement('li'); // this line creates a new list item in the HTML
            const giphyImg = document.createElement('img'); // this line creates a new image element in the HTML
            giphyImg.src = data.data[i].images.original.url; // this line will use the giphy url to display the giphs
            listItem.appendChild(giphyImg) // this line enters the new img element as a child of the 'li' element
            giphyList.appendChild(listItem); // this line adds the 'li' element to the 'ul' element in html 
        }
    });

}
searchGiphy.addEventListener('click', getGiphy); // this is the holy grail and makes the button activate

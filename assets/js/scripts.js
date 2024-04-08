const giphyList = document.querySelector('#giphyUl')
const giphyAPIKey = 'x6k9Oyo3vy4ha1dy1xYlxVuo79ltCB6t'
const searchGiphy = document.getElementById("search-giphy");

// GIPHY SEARCH FUNCTION
function getGiphy() {
    const giphyURL = 'https://api.giphy.com/v1/stickers/search?api_key=x6k9Oyo3vy4ha1dy1xYlxVuo79ltCB6t&q=cats&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips';

    fetch(giphyURL).then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        for (let i=0; i < data.data.length; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = data.data[i].url;
            giphyList.appendChild(listItem);
        }
    });

}


searchGiphy.addEventListener('click', getGiphy);

const modal =  
document.querySelector('.modal'); 
const btn =  
document.querySelector('#btn') 
const close =  
document.querySelector('.modal-close') 

btn.addEventListener('click', 
               function () { 
modal.style.display = 'block' 
}) 

close.addEventListener('click', 
                 function () { 
modal.style.display = 'none' 
}) 

window.addEventListener('click', 
                  function (event) { 
if (event.target.className ===  
'modal-background') { 
modal.style.display = 'none' 
} 
}) 
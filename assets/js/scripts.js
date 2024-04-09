//one Function to generate a modal
function newModal() {
    //creates a base div to start from
    const modal = document.createElement("div");
    //gives the first div the modal and is active class from BULMA
    modal.classList.add("modal", "is-active");
  //adds the structure bones and guts for the modal 
  //sets a background, box, and form for user inputs using BULMA 
    modal.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-content">
          <div class="box has-text-centered">
              <h1 class="title" id="textT">What's the Vibe</h1>
          </div>
          <form class="is-family-monospace">
              <div class="box">
                  <div class="field">
                      <label class="label" for="gif">Tasty GIF?</label>
                      <div class="control">
                          <input class="input" type="text" id="gif"/>
                      </div>
                      <!-- giphy button -->
                    <button class="move" id="search-giphy">Search</button>
                    <!-- here is where the giphy is displayed with the 'li' and 'img' elements -->
                    <div id="giphyDiv"></div>
                  </div>
                  <div class="field">
                      <label class="label" for="date">Date</label>
                      <div class="control">
                          <input class="input" type="text" id="date"/>
                      </div>
                  </div>
                  <div class="field">
                      <label class="label" for="title">Title</label>
                      <div class="control">
                          <input class="input" type="text" id="title"/>
                      </div>
                  </div>
                  <div class="field">
                      <label class="label" for="content">Content</label>
                      <div class="control">
                          <textarea class="textarea" id="content" rows="12"></textarea>
                      </div>
                  </div>
              </div>
              <button type="submit">Send It</button>
          </form>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>`;
  //adds the modal to the body of the html for user display 
    document.body.appendChild(modal);
//   sets the close button on the modal and
    modal.querySelector('.modal-close').addEventListener('click', function() {
      modal.classList.remove('is-active');
    });

// G's work --> #sorry alic
// Giphy werk (;
const giphyDiv = document.getElementById('giphyDiv')
const giphyAPIKey = 'x6k9Oyo3vy4ha1dy1xYlxVuo79ltCB6t'

// GIPHY SEARCH FUNCTION
function getGiphy(topic) {
    const giphyURL = `https://api.giphy.com/v1/stickers/search?api_key=x6k9Oyo3vy4ha1dy1xYlxVuo79ltCB6t&q=${topic}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
// fetching giphy data and looping please note 'data' element is a element for giphy as well hence the data.data line
fetch(giphyURL).then(response => response.json())
    .then(data => {
        console.log(data); // this line helps figure out if its working in the console
        giphyDiv.innerHTML = ''; // this line
        data.data.forEach(giphy => {
        const giphyImg = document.createElement('img'); // this line creates a new image element in the HTML
        giphyImg.src = giphy.images.original.url; // this line will use the giphy url to display the giphs
        giphyDiv.appendChild(giphyImg);  

    });

})}

    modal.querySelector("#search-giphy").addEventListener("click", function(event){
    // Function to get giphy to work in modal    
    event.preventDefault()   
   const topic = modal.querySelector("#gif").value
   console.log(topic)
    getGiphy(topic)

    })
  }
  
  document.getElementById('addBtn').addEventListener('click', newModal);

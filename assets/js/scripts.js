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
                    <label class="label" for="dictionaryLookup">Look Up a Word</label>
                    <div class="control">
                        <input class="input" type="text" id="dictionaryLookup" placeholder="Enter word"/>
                    </div>
                    <button class="button is-info is-small" id="lookupWord">Meaning</button>
                    <button class="button is-info is-small" id="findMore">Get Fancy</button>
                    <div id="dictionaryResults" class="content"></div>
                    </div>
                  <div class="field">
                      <label class="label has-text-centered" for="content">Write Some Thing</label>
                      <div class="control">
                          <textarea class="textarea" id="content" rows="8"></textarea>
                      </div>
                  </div>
              </div>
              <button type="submit" id="sendIt">Send It</button>
          </form>
      </div>
      <button class="modal-close is-large" aria-label="close"></button>`;
  //adds the modal to the body of the html for user display
  document.body.appendChild(modal);
  const button = modal.querySelector("#sendIt");
  button.addEventListener("click", submitBlogEntry);

  // logic for clicking buttons 
  modal.querySelector('#lookupWord').addEventListener('click', test2);
  modal.querySelector("#findMore").addEventListener('click', test2)
  //   sets the close button on the modal and
  modal.querySelector(".modal-close").addEventListener("click", function () {
    modal.classList.remove("is-active");
  });

  

  modal
    .querySelector("#search-giphy")
    .addEventListener("click", async function (event) {
      // Function to get giphy to work in modal
      event.preventDefault();
      const topic = modal.querySelector("#gif").value;
      console.log(topic);
      await getGiphy(topic);
      
        modal.querySelector("#giphyDiv").addEventListener("click", function(event){
          console.log(event.target);
          console.log(modal.querySelectorAll("img"))
          modal.querySelectorAll("img").forEach((Element)=>{
            console.log(Element.style)
            Element.removeAttribute("id")
          })
          console.log(event.target.nodeName)
          if(event.target.nodeName.toLowerCase() === "img"){
          event.target.setAttribute("id", "select")
          console.log(event.target.getAttribute("src"))
          localStorage.setItem("gif", event.target.getAttribute("src"))
        }
        })

    });
}


// GIPHY SEARCH FUNCTION
async function getGiphy(topic) {
    // G's work --> #sorry alic
    // Giphy werk (;
    const giphyDiv = document.getElementById("giphyDiv");
    const giphyAPIKey = "x6k9Oyo3vy4ha1dy1xYlxVuo79ltCB6t";

    const giphyURL = `https://api.giphy.com/v1/stickers/search?api_key=${giphyAPIKey}&q=${topic}&limit=5&offset=0&lang=en`;
    // fetching giphy data and looping please note 'data' element is a element for giphy as well hence the data.data line
    fetch(giphyURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // this line helps figure out if its working in the console
        giphyDiv.innerHTML = ""; // this line
        data.data.forEach((giphy) => {
          const giphyImg = document.createElement("img"); // this line creates a new image element in the HTML
          giphyImg.setAttribute("id", "gifSize");
          giphyImg.setAttribute("style", "width: 100px")
          giphyImg.src = giphy.images.original.url; // this line will use the giphy url to display the gif
          giphyDiv.appendChild(giphyImg);
        });
      });
  }

document.getElementById("addBtn").addEventListener("click", newModal);


// redirect to our previous posts page
const toArchivedPosts = function () {
  location.href = "./posts.html";
};

function submitBlogEntry(event) {
  event.preventDefault();

  let blogs = localStorage.getItem("blogEntries") ? localStorage.getItem("blogEntries"): [];
  // const gif = document.querySelector("#gif").value.trim(); // FIGURE OUT LOGIC ON HOW YOU WANT TO SAVE GIFS 
  const date = document.querySelector("#date").value.trim();
  const title = document.querySelector("#title").value.trim();
  const content = document.querySelector("#content").value.trim();

  const completedEntry = {
    date: date,
    title: title,
    content: content,
  };
  blogs.push(completedEntry);

  localStorage.setItem("blogEntries", JSON.stringify(blogs));

  // logs gif, date, title, content entry to console
  // stores gif, date, title, content entry
  // redirect to previous posts page
  toArchivedPosts();
}

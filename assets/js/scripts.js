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
                      <div>
                      <div class="gif-results" style= "margin-top: 20px;"></div>
                      </div>
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
                    <button class="button is-info" id="lookupWord">Look Up</button>
                    <button class="button is-info" id="findMore">Better Words</div>
                    <div id="dictionaryResults" class="content"></div>
                    </div>
                  <div class="field">
                      <label class="label has-text-centered" for="content">Write Some Thing</label>
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

    
    modal.querySelector('#lookupWord').addEventListener('click', test2);
    modal.querySelector("#findMore").addEventListener('click', test2)
//   sets the close button on the modal and
    modal.querySelector('.modal-close').addEventListener('click', function() {
      modal.classList.remove('is-active');

    });
  }




  
  document.getElementById('addBtn').addEventListener('click', newModal);
  


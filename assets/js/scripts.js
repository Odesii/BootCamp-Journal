

const modal =  
document.querySelector('.modal'); 
const btn =  
document.querySelector('#btn'); 
const close =  
document.querySelector('.modal-close'); 

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



function newModal() {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.classList.add("is-active");

  modal.innerHTML = `<div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <h1 class="title" id="textT">Share Some Words</h1>
                <form class="is-family-monospace">
                <label for="gif">How you feeling?</label>
                <input type="text" id="gif"/>
                <label  for="date">Date</lable>
                <input type"text" id="date"/>
                <label for="title"></label>
                <input type"text" id="title/>
                <label for="content">Content</label>
                <textarea id="content" rows="12"></textarea>
                </form>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>`;

        document.body.appendChild(modal);

        modal.querySelector('.modal-close').addEventListener('click', function(){
            modal.classList.remove('is-active');
        })
}

document.getElementById('addBtn').addEventListener('click', newModal);

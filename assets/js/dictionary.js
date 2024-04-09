// DICTIONARY Werk (; these are some of the global variables
const dictionaryList = document.querySelector('#dictionaryUl')
const searchDictionary = document.getElementById("search-dictionary");
const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/java`

// Dictionary function
function test() {
// fetching dictionary data 
  fetch(dictionaryUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data) // this line helps figure out if its working in the console
        for (let i=0; i < data.length; i++) {
            const dictionaryListItem = document.createElement('li'); // this line creates a new list item in the HTML
            dictionaryListItem.textContent = data[i].word; //this line loops through the array to grab the specific element needed in this case 'word'
            const definition = document.createElement('p') // this line creates a new paragraph item in the HTML
            definition.textContent = data[i].meanings[0].definitions[0].definition; //this line loops through the array to grab the specific element needed in this case 'definition' (the actual one we want)
            dictionaryList.appendChild(dictionaryListItem); // this line adds the 'li' element to the 'ul' element in html to confirm its final findings
            dictionaryList.appendChild(definition); // this line adds the 'p' element to the 'ul' element in html to confirm its final findings for definition
        }
    });
        
}
searchDictionary.addEventListener("click", test); // application logic 
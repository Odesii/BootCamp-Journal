function test2(event) {
  event.preventDefault(); // This will prevent the default action (form submission in this case)
  const option = event.target.id;
  const dictionaryResults = document.getElementById("dictionaryResults");
  const wordInput = document.getElementById("dictionaryLookup");
  const dictionaryWord = wordInput.value;
  const dictionaryUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionaryWord}`;
  const wordElement = document.createElement("div");
  const datamuse = `https://api.datamuse.com/words?ml=${dictionaryWord}`;

  if (option === "lookupWord") {
    fetch(dictionaryUrl)
      .then((response) => response.json()) // Make sure this is .json() in lowercase
      .then((data) => {
        console.log(data);
        dictionaryResults.innerHTML = "";
        data.forEach((entry) => {
          wordElement.textContent = `${entry.word}: ${entry.meanings[0].definitions[0].definition}`;
          dictionaryResults.appendChild(wordElement);
        });
      });
  } else if (option === "findMore") {
    console.log("second fetch");
    fetch(datamuse)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Clear previous entries
        dictionaryResults.innerHTML = "";
        // Limit the loop to the first 7 entries or the total number of entries if less than 7
        const limit = Math.min(data.length, 7);
        for (let i = 0; i < limit; i++) {
          const entry = data[i];
          // Create a new element for each word
          const wordElement = document.createElement("div");
          wordElement.textContent = entry.word; // Directly access the word property
          dictionaryResults.appendChild(wordElement);
        }
      });
  }
}

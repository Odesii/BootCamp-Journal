const mainElement = document.querySelector(".container");

// retrieving data from submitted entries
const readBlogDataFromLocalStorage = function () {
  const stringData = localStorage.getItem("blogEntries");
  const data = JSON.parse(stringData);

  console.log(data);
  return data;
};

//
const renderBlogList = function () {
  const blogEntries = readBlogDataFromLocalStorage();

  const article = document.createElement("article");

  for (let index = 0; index < blogEntries.length; index++) {
    const date = document.createElement("div");
    const title = document.createElement("h3");
    const content = document.createElement("p");
    const gif = document.createElement("img");

    date.textContent = blogEntries[index].date;
    article.appendChild(date);

    title.textContent = blogEntries[index].title;
    article.appendChild(title);

    content.textContent = blogEntries[index].content;
    article.appendChild(content);

    gif.setAttribute("src", blogEntries[index].gif);
    article.appendChild(gif);
    
    // article.classList.add("card");

    mainElement.appendChild(article);
  }
  
};

renderBlogList();

// posts page storing form data to local storage
document.getElementById("posts-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const dateInput = document.getElementById("dateInput").value.trim();
  const titleInput = document.getElementById("titleInput").value.trim();
  const contentInput = document.getElementById("contentInput").value.trim();

  const blogFormInputData = {
    dateInput: dateInput,
    titleInput: titleInput,
    contentInput: contentInput,
  };
  storeBlogFormInputData(blogFormInputData);
});

function storeBlogFormInputData(blogFormInputData) {
  const storedBlogFormInputData = JSON.parse(localStorage.getItem("blogFormInputData")) || [];

  storedBlogFormInputData.push(blogFormInputData);

  localStorage.setItem("blogFormInputData", JSON.stringify(storeBlogFormInputData));
  renderBlogList();
}

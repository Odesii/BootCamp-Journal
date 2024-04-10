const mainElement = document.querySelector(".postContainer");

// retrieving data from submitted entries
const readBlogDataFromLocalStorage = function () {
  const stringData = localStorage.getItem("blogEntries");
  const data = JSON.parse(stringData);

  console.log(data);
  return data;
};

// placing content in h2 elements
const renderBlogList = function () {
  const blogEntries = readBlogDataFromLocalStorage();

  const article = document.createElement("article");
  article.classList.add("posts");

  for (let index = 0; index < blogEntries.length; index++) {
    const cardContainer = document.createElement("div");
    const title = document.createElement("h3");
    const date = document.createElement("div");
    const content = document.createElement("p");
    const gif = document.createElement("img");
    const article = document.createElement("article");
    cardContainer.classList.add("posts");
    article.classList.add("mainCard");

    title.classList.add("titleCard")
    title.textContent = blogEntries[index].title;
    // article.appendChild(title);

    date.setAttribute("id", "date");
    date.textContent = blogEntries[index].date;
    // article.appendChild(date);

    content.textContent = blogEntries[index].content;
    // article.appendChild(content);

    gif.setAttribute("src", blogEntries[index].gif);
    // article.appendChild(gif);

    cardContainer.append(date, content, gif);

    // article.classList.add("card");
    article.append(title, cardContainer);
    mainElement.appendChild(article);
  }
};

renderBlogList();


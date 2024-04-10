const mainElement = document.querySelector(".container");

// retrieving data from submitted entries
const readBlogDataFromLocalStorage = function () {
    const stringData = localStorage.getItem("blogEntries");
    const data = JSON.parse(stringData);

    console.log(data);
    return data;
}

// placing content in h2 elements
const renderBlogList = function () {
    const blogEntries = readBlogDataFromLocalStorage();
    const gifData = localStorage.getItem("gif") 
    const article = document.createElement("article");
    
    for(let index = 0; index < blogEntries.length; index++) {
        const date = document.createElement("div");
        const title = document.createElement("h3");
        const content = document.createElement("p");
        

        date.textContent = blogEntries[index].date;
        article.appendChild(date);

        title.textContent = blogEntries[index].title;
        article.appendChild(title);

        content.textContent = blogEntries[index].content;
        article.appendChild(content);

        article.classList.add("card");

        mainElement.appendChild(article);
    }
    const gif = document.createElement("img");
    gif.setAttribute("src", gifData);
    article.appendChild(gif);


}

renderBlogList();
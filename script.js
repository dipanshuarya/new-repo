const apiKey = "12c553a1d208463ca6effa857adcfc94";
const url = "https://newsapi.org/v2/everything?q=";
const div = document.querySelector(".top-container")

window.addEventListener("load" , () => {
    fetchNews("India")
})

const fetchNews = async (query) => {
   const response = await fetch(`${url}${query}&apikey=${apiKey}`)
   const data = await response.json()
  
   bindData(data.articles)
}




const bindData = (data) => {

   data.forEach((items) => {
    //  console.log(items);
    if (!items.urlToImage) return;
     div.innerHTML += `<div class="cards-container container flex ">
    <div class="card">
      <div class="card-header">
      <a href="${items.url}">
         <img src="${items.urlToImage}" alt="">
         </a>
      </div>
      <div class="card-content">
        <h4 id="news-title">${items.content}</h4>
        <h6 class="news-source">${items.author}</h6>
        <p class="new-desc" id="news-desc">${items.title}.</p>
      </div>
    </div>
  </div>`;


   })
}



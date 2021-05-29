console.log("Welcome!")

let getNews=document.getElementById('getNews');
getNews.addEventListener('click',getNewsHandler);


function getNewsHandler(){
    console.log('You have clicked the btn');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `your link`, true);
    xhr.onload = function () {
        if(this.status === 200){
            let json=JSON.parse(this.responseText);
            let articles=json.articles;
            console.log(articles);
            let html="";
            articles.forEach(element => {
                html+=`
                <div class="card my-3 mx-3" style="width: 18rem;">
            <img src=${element.image}  class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description}</p>
              <a href=${element.url} class="btn btn-primary">Full News Article</a>
            </div>
          </div>`
            });
            let cardNews=document.getElementById('cardNews');
            cardNews.innerHTML=html;
        }
        else{
            console.log("Some error occured")
        }
    }
 
    xhr.send();

    console.log("We are done!");


}
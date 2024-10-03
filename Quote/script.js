const btnEl =document.getElementById("btn");
const quoteEl =document.getElementById("quote");
const authorEl =document.getElementById("author");
const apiURL ="https://api.quotable.io/random"

async function getQuote(){
    try {
        btnEl.innerText ="Loading..."
        btnEl.disabled = true;
        quoteContant.innerText ="Loading...";
        authorEl.innerText ="Loading...";
        quoteContant.disabled =true;
        quoteAuthor.disabled =true;
        const response = await fetch(apiURL)
        constdata =response.jason();
        const quoteContant =data.content;
        const quoteAuthor =data.author;
       quoteEl.innerText = quoteContant;
       authorEl.innerText = "~" + quoteAuthor;
       btnEl.innerText="Get quote";
       btnE1.disabled = false;
       
       console.log(data);
        
    } catch (error) {
        
        console.log(error);
        quoteEl.innerText = "Error happen please try agin later";
        authorEl.innerText = "Error Happened";   
        btnE1.disabled = false;
    }


}
getQuote();

btnEl.addEventListener("click",getQuote)
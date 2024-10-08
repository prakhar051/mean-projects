const inputEl = document.getElementById("input");
const infoTextEl =document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const audioEl = document.getElementById("audio");
async function fetchAPI(word){
    try{
        infoTextEl.style.display ="block" ;
        meaningContainerEl.style.display ="none";
      infoTextEl.innerText =`search the meaning odf word"${word}"`
    const url =`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const result = await fetch(url).then((res)=> res.json)();
 if(result.title){
    infoTextEl.style.display ="none";
    meaningContainerEl.style.display ="none";
    titleEl.innerText =word
    meaningContainerEl.innerText = "N/A"
    audioEl.style.display ="none"  
 }
 else{
infoTextEl.style.display ="none"
meaningContainerEl.style.display ="block";
audioEl.style.display ="inline-flex";
titleEl.innerText = result[0].word
meaningContainerEl.innerText = result[0].meanings[0].defination[0].defination[0]
audioEl.src = result[0].phonetics[0].audio;
 }
}catch(error)
{
console.log(error);
}
}
inputEl.addEventListener("keyup", (e)=>{
   if(e.target.value && e.key == "Enter"){
    fetchAPI(e.target.value)
   }
})
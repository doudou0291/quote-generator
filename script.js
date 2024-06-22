const api_url="https://api.quotable.io/random"
const qouteBox=document.querySelector("blockquote")
const authorBox=document.querySelector("span")
async function getQoute(url){
    const response=await fetch(url)
    var data =await response.json()
    qouteBox.innerHTML=data.content
    authorBox.innerHTML=data.author

}
getQoute(api_url)
function newQoute(){
    window.location.reload();
}
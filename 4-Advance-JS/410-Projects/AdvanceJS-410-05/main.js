let quote=document.getElementById("quote");
let author=document.getElementById("author");
fetch("https://api.quotable.io/random").then(function(res){
    return res.json();
},function(err){
    console.log("Error in fetching Api!");
}).then(function(actualData){
    author.innerHTML=actualData.author;
    quote.innerHTML=`"${actualData.content}"`;
},function(failure){
    console.log("Error in iterate in Data");
});
function pageRefresh(){
    location.reload();
}
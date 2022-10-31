
fetch("www.themealdb.com/api/json/v1/1/random.php").then(function(res){
    return res.json();
},function(err){
    console.log("Error in fetching Api!");
}).then(function(actualData){
    console.log(actualData);
},function(fail){
    console.log("Error in iterate Data");
})
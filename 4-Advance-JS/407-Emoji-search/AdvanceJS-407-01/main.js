var tbody=document.getElementById("tbody");
for (let i = 0; i < emojiList.length; i++) {
  tbody.innerHTML+=`
  <tr>
    <td style="font-size:50px;">${emojiList[i].emoji}</td>
    <td>${emojiList[i].aliases}</td>
    <td>${emojiList[i].description}</td>
  </tr>
  `;
}

function emojeeSearch(e){
    let inputText=document.getElementById("inputText").value.toUpperCase();
    let trRef=tbody.getElementsByTagName("tr");
    for (let i = 0; i < trRef.length; i++) {
        let tdRef1=trRef[i].getElementsByTagName("td")[1];
        let tdRef2=trRef[i].getElementsByTagName("td")[2];
        if(tdRef1 && tdRef2){
            let tdValue1=tdRef1.textContent || tdRef1.innerHTML;
            let tdValue2=tdRef2.textContent || tdRef2.innerHTML;
            if((tdValue1.toUpperCase().indexOf(inputText) > -1) || (tdValue2.toUpperCase().indexOf(inputText) > -1)){
                trRef[i].style.display="";  //show
            }
            else{
                trRef[i].style.display="none";  //hide
            }
        }
    }
}

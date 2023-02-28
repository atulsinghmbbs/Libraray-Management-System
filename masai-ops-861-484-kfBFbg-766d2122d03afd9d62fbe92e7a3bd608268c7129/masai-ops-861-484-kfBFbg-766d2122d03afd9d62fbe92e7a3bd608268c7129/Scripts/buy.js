// you can write your js code here
let donecomplete = JSON.parse(localStorage.getItem("buy-list")) || [];
let final = JSON.parse(localStorage.getItem("bookmark") )|| [];
// console.log(donecomplete)

displayTable(donecomplete)

// let  total = document.getElementById("task-count")

function displayTable (donecomplete){

document.querySelector("tbody").innerHTML ="";
   
donecomplete.forEach( function (elem,index) {
  

    let row = document.createElement("tr")

    let col1 = document.createElement("td")
    col1.innerText = elem.taskname

    let col2 = document.createElement("td")
     col2.innerText =  elem.author
    let col3 = document.createElement("td")
    col3.innerText = elem.descrip
    let col4 = document.createElement("td")
    col4.innerText = elem.date
    let col5 = document.createElement("td")
    col5.innerText = elem.category

    let col6 = document.createElement("td")
    col6.innerText = "Add"
    col6.addEventListener("click",function (){
        done (elem, index)
    })

    let col7 = document.createElement("td")
        col7.innerText="Delete";
        col7.addEventListener("click",function(event){
            event.target.parentNode.remove();
        });
    row.append(col1,col2,col3,col4,col5,col6,col7)
     
    document.querySelector("tbody").append(row)
});
     
}

 function done (elem ,index) {
    final.push(elem)
    localStorage.setItem("bookmark",JSON.stringify(final))
 }
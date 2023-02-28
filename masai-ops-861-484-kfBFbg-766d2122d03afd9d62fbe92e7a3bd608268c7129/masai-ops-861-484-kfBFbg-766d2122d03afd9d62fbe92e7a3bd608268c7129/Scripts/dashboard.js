// you can write your js code here
// Write code related to dashboard page here


let databoard = JSON.parse(localStorage.getItem("book-list")) 
let finish = JSON.parse(localStorage.getItem("buy-list")) || []
let bookmark = JSON.parse(localStorage.getItem("Bookmark")) || []
// console.log(databoard)
displayTable(databoard)

// let  total = document.getElementById("task-count")

function displayTable (databoard){

document.querySelector("tbody").innerHTML ="";
   
databoard.forEach( function (elem,index) {
  

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
    col6.innerText = "Buy"


    col6.addEventListener("click",function (){
        priorities (elem, index)
    })

    let col7 = document.createElement("td")
    col7.innerText = "ADd to Bookmark"


    col7.addEventListener("click",function (){
        bookmarks (elem, index)
    })

    let col8 = document.createElement("td")
     col8.innerHTML = elem.price
    row.append(col1,col2,col3,col4,col5,col6,col7,col8)
     
    document.querySelector("tbody").append(row)
});
     
}


filter.addEventListener("change", function(){
    if (filter.value==="") {
      displayTable(databoard);
    } else {
      let filtered = databoard.filter(function (ele){
        return ele.prior === filter.value;
      });
      displayTable(filtered)
    }
   });


function priorities (elem,index) {
    // finish.push(elem)
    finish.splice(index,1)
   localStorage.setItem("buy-list",JSON.stringify(finish))
  displayTable(finish)
}

function bookmarks (elem,index){
    // bookmark.push(elem)
     bookmark.splice(index,1)
    localStorage.setItem("Bookmark",JSON.stringify(bookmark))
   displayTable(bookmark)
}
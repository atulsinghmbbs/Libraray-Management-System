// you can write your js code here
document.querySelector("form").addEventListener("submit",masaiTask);
 
let masai = JSON.parse(localStorage.getItem("book-list")) || [];

function masaiTask (event){
    event.preventDefault()

    let data = {
        taskname:document.querySelector("#name").value,
        author:document.querySelector("#author").value,
        descrip:document.querySelector("#desc").value,
        date:document.querySelector("#added").value,

        category:document.querySelector("#category").value,
        price:document.querySelector("#price").value,
       
    }

    masai.push(data);
    localStorage.setItem("book-list",JSON.stringify(masai))
   
}
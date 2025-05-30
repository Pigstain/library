const myLibrary = [];
const body = document.querySelector("body");
function Book(title,author,pages,read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read  = read;
  let id = crypto.randomUUID();

}
function addBookToLibrary(title,author,pages,read) {
  // take params, create a book then store it in the array
  book = new Book(title,author,pages,read);
  myLibrary.push(book);
}
const newbutton = document.querySelector(".new");
newbutton.addEventListener("click",()=>{
    let popup = document.createElement("div");
    popup.classList.add("popup");
    

    let submitbutton=document.createElement("button");
    submitbutton.classList.add("submitbutton");
    submitbutton.textContent="submit";
    popup.appendChild(submitbutton);
    body.appendChild(popup);

});
const myLibrary = [];
const body = document.querySelector(".container");
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

    let titleText= document.createElement("div");
    titleText.textContent="Title";
    let titleField= document.createElement("INPUT");
    titleField.setAttribute("type","text");
    let authorText = document.createElement("Author");
    authorText.textContent="Author";
    let authorField=document.createElement("INPUT");
    authorField.setAttribute("type","text");
    let pagesText = document.createElement("div");
    pagesText.textContent="Pages";
    let pagesField = document.createElement("INPUT");
    pagesField.setAttribute("type","text");
    let readText = document.createElement("div");
    readText.textContent = "Read (Yes/No)";
    let readRadio = document.createElement("INPUT");
    readRadio.setAttribute("type","checkbox");
    readRadio.setAttribute("name","yes");
    
    
    popup.appendChild(titleText);
    popup.appendChild(titleField);

    popup.appendChild(authorText);
    popup.appendChild(authorField);

    popup.appendChild(pagesText);
    popup.appendChild(pagesField);

    popup.appendChild(readText);
    popup.appendChild(readRadio);
  
    let submitbutton=document.createElement("button");
    submitbutton.classList.add("submitbutton");
    submitbutton.textContent="submit";
    let buffer = document.createElement("div");
    
    popup.appendChild(buffer);
    popup.appendChild(submitbutton);
    submitbutton.addEventListener("click",()=>{
      addBookToLibrary(titleField.value,authorField.value,pagesField.value,readRadio.value);
      popup.remove();
      console.log(myLibrary);
    })
    body.appendChild(popup);

});
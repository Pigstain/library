const myLibrary = [];
let body = document.querySelector("#container");
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
  if(book.read === "on"){
    book.read="yes";
  }
  else{
    book.read="no";
  }
  myLibrary.push(book);
}
function showLibrary(){
  
  for(let i=0;i<myLibrary.length;i++){
    let card = document.createElement("div");
    card.id="card";
    let buffer = document.createElement("div");
    let removeButton= document.createElement("button");
    removeButton.addEventListener("click",()=>{
      myLibrary.splice(i,1);
      console.log(myLibrary);
      const myNode = document.getElementById("container");
      while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
      }
      showLibrary();
    })
   
    card.appendChild(removeButton);
     card.appendChild(buffer);
    let titleText = document.createElement("div");
    titleText.textContent = "Title :";
    card.appendChild(titleText);
    let titleLibrary = document.createElement("div");
    titleLibrary.textContent=myLibrary[i].title;
    card.appendChild(titleLibrary);
    let authorText = document.createElement("div");
    authorText.textContent = "Author :";
    card.appendChild(authorText);
    let authorLibrary = document.createElement("div");
    authorLibrary.textContent = myLibrary[i].author;
    card.appendChild(authorLibrary);
    let pagesText = document.createElement("div");
    pagesText.textContent="Pages :";
    card.appendChild(pagesText);
    let pagesLibrary = document.createElement("div");
    pagesLibrary.textContent=myLibrary[i].pages;
    card.appendChild(pagesLibrary);
    let readText = document.createElement("div");
    readText.textContent="Read :";
    card.appendChild(readText);
    let readLibrary = document.createElement("div");
    readLibrary.textContent=myLibrary[i].read;
    card.appendChild(readLibrary);

    body.appendChild(card);
  }
}
const newbutton = document.querySelector(".new");
newbutton.addEventListener("click",()=>{
    
    let popup = document.createElement("div");
    popup.classList.add("popup");
    const myNode = document.getElementById("container");
      while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
      }
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
    pagesField.setAttribute("type","number");
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
      const myNode = document.getElementById("container");
      while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
      }
      console.log(myLibrary);
      showLibrary();
    })
    body.appendChild(popup);

});
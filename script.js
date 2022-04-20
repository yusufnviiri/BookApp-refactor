/* eslint-disable no-unused-vars */
// books class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    
  }
}

// UI class :handle UI

const mainContainer = document.querySelector('.book-list');

class UI {
  static displayBooks() {
    const storedBooks = [{
      title: 'Book One',
      auther: 'John Doe',
    },
    {title: 'Book Two',
    author: 'Jane Doe',}];
    const bookstored = storedBooks;
    bookstored.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(bookstored) {
    const list = document.querySelector('.book-list');
    const bookRac = document.createElement('div');
    bookRac.classList.add('book-two');
    bookRac.innerHTML = `
    <p>"${bookstored.title}" by <span>${bookstored.author}</span></p>
    <button type="button" class="remove-btn">Remove</button>
    `;
    list.appendChild(bookRac);
  }
static removeBook(e) {
  if (e.classList.contains('remove-btn')){
e.parentElement.remove();
  }}
  static delMain=()=>{if(storedBooks.length===0){
    mainContainer.innerHTML=`<p>No books to display</p>`;}}



  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
// store class
// Event  to display
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Event to display nothing
document.addEventListener('DOMContentLoaded', UI.delMain);
// Event to add book to UI

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  // instantiate book
  const book = new Book(title, author);
 
// add book to UI
UI.addBookToList(book);
// clear fields
UI.clearFields();

});
// Event to remove book from UI

document.querySelector('.book-list').addEventListener('click', (e) => {

UI.removeBook(e.target);

})
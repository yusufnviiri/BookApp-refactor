/* eslint-disable no-unused-vars */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

if (localStorage.getItem('list of Books') === null) {
  localStorage.setItem('list of Books', JSON.stringify([]));
}

const booksInLS = JSON.parse(localStorage.getItem('list of Books'));

function updateLocalStorage() {
  localStorage.setItem('list of Books', JSON.stringify(booksInLS));
}

function generateListOfBooks(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i += 1) {
    items += `
      <div class="book-one">
        <li>${arr[i].title} by ${arr[i].author}</li> <br />
        <li><button class="remove-btn" onclick="removeBook(${i})">Remove</button></li>
      </div>
    `;
  }
  return items;
}

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
}

function showBooks() {
  const bookList = document.querySelector('.book-list');

  bookList.innerHTML = `    
      ${generateListOfBooks(booksInLS)}
    `;

  clearFields();
}

function addBook(bookTitle, bookAuthor) {
  const book = new Book(bookTitle, bookAuthor);
  booksInLS.push(book);
  updateLocalStorage();
  showBooks();
}

function removeBook(i) {
  booksInLS.splice(i, 1);
  updateLocalStorage();
  showBooks();
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');

  addBook(title.value, author.value);
});

window.onload = showBooks();

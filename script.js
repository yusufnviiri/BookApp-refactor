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
const bookItems = document.querySelector('#book-list');
const sectionTitle = document.querySelector('#section-title');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  addBook(title.value, author.value);
  sectionTitle.style.display = 'block';
  bookItems.style.display = 'flex';
});

window.onload = showBooks();

const displayBooks = document.querySelector('#display-list');
const displayForm = document.querySelector('#display-form');
const contact = document.querySelector('#contact');
const container = document.querySelector('.container');
const addBookList = document.querySelector('#form');
const formSubmit = document.querySelector('#add-book');

function displayFormonly() {
  container.style.backgroundColor = '#ffcf33';
  addBookList.style.display = 'flex';
  sectionTitle.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'none';
}
function displayBookListonly() {
  container.style.backgroundColor = '#ffa833';
  addBookList.style.display = 'none';
  contact.style.display = 'none';
}
displayBooks.addEventListener('click', displayBookListonly);

displayForm.addEventListener('click', displayFormonly);

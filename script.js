/* eslint-disable no-unused-vars */

const displayBooks = document.querySelector('#display-list');
const displayForm = document.querySelector('#display-form');
const contact = document.querySelector('#contact');
const displayContact = document.querySelector('#display-contact');
const container = document.querySelector('.container');
const addBookList = document.querySelector('#form');
const formSubmit = document.querySelector('#add-book');
const separator = document.querySelector('.separator');

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
  contact.style.display = 'none';
  addBookList.style.display = 'none';
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

// creating date section
const displayDate = document.querySelector('.date');
const date = new Date();
const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
displayDate.innerHTML = `${today.toString()} ${time}`;

function displayFormonly() {
  addBookList.style.display = 'flex';
  sectionTitle.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'none';
  separator.style.display = 'none';
}
function displayBookListonly() {
  addBookList.style.display = 'none';
  contact.style.display = 'none';
  sectionTitle.style.display = 'block';
  bookItems.style.display = 'flex';
}
function displayContactonly() {
  container.style.backgroundColor = '#ffa833';
  addBookList.style.display = 'none';
  sectionTitle.style.display = 'none';
  bookItems.style.display = 'none';
  contact.style.display = 'flex';
  separator.style.display = 'none';
}

contact.innerHTML = `<h2>
Contact information
</h2>
<p> Do you have any questions or you just want to say "Hello"
  <br>You can reach out to us!
  </p>
<ul>
  <li>Our email:mail@mail.com</li>
  <li>Our Phone number:004386534422</li>
  <li>Our address:Streetname 22,88273 Islamabad,Pakistan </li>
</ul>`;

displayBooks.addEventListener('click', displayBookListonly);

displayForm.addEventListener('click', displayFormonly);

displayContact.addEventListener('click', displayContactonly);
window.onload = showBooks();
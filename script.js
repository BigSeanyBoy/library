let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
  myLibrary.push(new Book(title, author, pages, readStatus));
}

addBookToLibrary('Gates of Fire', 'Steven Pressfield', 400, 'read');
addBookToLibrary('The 48 Laws of Power', 'Robet Greene', 484, 'read');
addBookToLibrary('Return of the King', 'J. R. R. Tolkien', 416, 'not read');

const bookCards = document.querySelector('.book-cards');

for (let book of myLibrary) {
  const bookCard = document.createElement('div');
  bookCard.classList.add('card');

  const title = document.createElement('p');
  title.classList.add('title');
  title.textContent = book.title;
  bookCard.appendChild(title);

  const bookInfo = document.createElement('div');
  bookInfo.classList.add('info');
  bookInfo.textContent = `${book.author}, ${book.pages} pages`;
  bookCard.appendChild(bookInfo);

  const readStatus = document.createElement('div');
  readStatus.classList.add('status');
  readStatus.textContent = book.readStatus.toUpperCase();
  bookCard.appendChild(readStatus);

  bookCards.appendChild(bookCard);
}

const newBookButton = document.querySelector('.new-book')
newBookButton.addEventListener('click', () => {
  const form = document.createElement('form');
  form.classList.add('book-form');

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.textContent = 'Title: ';
  form.appendChild(titleLabel);

  const titleInput = document.createElement('input');
  titleInput.setAttribute('id', 'title');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('type', 'text')
  form.appendChild(titleInput);

  document.body.appendChild(form);
});
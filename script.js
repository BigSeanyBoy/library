const myLibrary = [];

class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  toggleReadStatus() {
    this.readStatus = this.readStatus == 'not read' ? 'read' : 'not read';
    displayBooks();
  }
}

// function Book(title, author, pages, readStatus) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readStatus = readStatus;
// }

// Book.prototype.toggleReadStatus = function() {
//   this.readStatus = this.readStatus == 'not read' ? 'read' : 'not read';
//   displayBooks();
// }

function displayBooks() {
  const bookCards = document.querySelector('.book-cards');
  while (bookCards.firstChild) {
    bookCards.removeChild(bookCards.firstChild);
  }

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
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

    const statusButton = document.createElement('button');
    statusButton.classList.add('status-button');
    statusButton.textContent = 'Toggle Status';
    statusButton.addEventListener('click', () => {
      book.toggleReadStatus();
      displayBooks();
    });
    bookCard.appendChild(statusButton);

    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = 'Remove';
    remove.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      displayBooks();
    });
    bookCard.appendChild(remove);

    bookCards.appendChild(bookCard);
  }
}

function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus)
  myLibrary.push(book);
  displayBooks();
}

const newBookButton = document.querySelector('.new-book')
newBookButton.addEventListener('click', () => {
  const form = document.createElement('form');
  form.classList.add('book-form');

  const fieldArray = ['title', 'author', 'pages', 'read'];

  for (let field of fieldArray) {
    const label = document.createElement('label');
    label.setAttribute('for', field);
    label.textContent = field.charAt(0).toUpperCase() + field.slice(1) + ' ';
    form.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('id', field);
    input.setAttribute('name', field);
    switch (field) {
      case 'pages':
        input.setAttribute('type', 'number');
        break;
      case 'read':
        input.setAttribute('type', 'checkbox');
        break;
      default:
        input.setAttribute('type', 'text');
        break;
    }
    form.appendChild(input);
  }

  const submit = document.createElement('input');
  submit.setAttribute('value', 'Submit');
  submit.setAttribute('type', 'button');
  submit.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked ? 'read' : 'not read';

    addBookToLibrary(title, author, pages, read);
    document.body.removeChild(form);
  });
  form.appendChild(submit);

  document.body.appendChild(form);
});

function main() {
  addBookToLibrary('Gates of Fire', 'Steven Pressfield', 400, 'read');
  addBookToLibrary('The 48 Laws of Power', 'Robet Greene', 484, 'read');
  addBookToLibrary('Return of the King', 'J. R. R. Tolkien', 416, 'not read');
}

main();
const library = [new Book('The Lord of the Rings', 'J.R.R. Tolkien',
        'A lot', false),
        new Book('A Horse and His Boy', 'C.S. Lweis', 'A lot', true),
        new Book('The Adventures of Tom Sawyer', 'Mark Twain',
        'A lot', true)];

const bookDisplay = document.querySelector('#bookDisplay');

const addButton = document.querySelector('#newBook');

addButton.addEventListener('click', () => {
    let newBook = new Book;

    newBook.title = prompt('please enter the book title');
    newBook.author = prompt('Please enter the book author');
    newBook.pages = prompt('Please enter the number of pages');
    newBook.haveRead = prompt('Have you read the book? (True/False)');
    newBook.haveRead = newBook.haveRead.toLowerCase();

    addBookToLibrary(newBook);
    displayBooks(library);
});

let bookIndex = 0;

function Book(title, author, pages, haveRead) {
    this.title    = title;
    this.author   = author;
    this.pages    = pages;
    this.haveRead = haveRead;
}

Book.prototype.info = function() {
    console.log(this.name + 'by ' + this.author + ',' + this.pages + 'pages, ' +
            this.haveRead);
}

Book.prototype.toggle = function() {
    if (this.haveRead) {
        this.haveRead = false;
    }
    else {
        this.haveRead = true;
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

function removeBook(book) {
    library.splice(parseInt(book.style.dataIndex), 1);
    displayBooks(library);
}


function createBookCard(book) {
    let bookCard = document.createElement('div');

    bookCard.classList.add('book');

    let title    = document.createElement('p');
    let author   = document.createElement('p');
    let pages    = document.createElement('p');
    let haveRead = document.createElement('p');

    let removeButton = document.createElement('button');
    removeButton.classList.add('delete');
    removeButton.textContent = 'Delete';
    removeButton.addEventListener('click', () => {
        removeBook(removeButton.parentNode);
    });

    let toggleButton = document.createElement('button');
    toggleButton.textContent = 'Change read status';
    toggleButton.addEventListener('click', () => {
        book.toggle();
        haveRead.textContent = 'Read: ' + book.haveRead;
    });

    title.textContent    = 'Title: ' + book.title;
    author.textContent   = 'Author: ' + book.author;
    pages.textContent    = 'Pages: ' + book.pages;
    haveRead.textContent = 'Read: ' + book.haveRead;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(haveRead);
    bookCard.appendChild(removeButton);
    bookCard.appendChild(toggleButton);

    return bookCard;
}

function displayBooks(arr) {
    if (bookDisplay.hasChildNodes()) {
        bookDisplay.innerHTML = '';
    }

    for (e in arr) {
        let bookCard = createBookCard(arr[e]);
        bookCard.setAttribute('data-index', e);
        bookDisplay.appendChild(bookCard);
    }
}

displayBooks(library);
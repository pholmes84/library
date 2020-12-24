const library = [new Book('The Lord of the Rings', 'J.R.R. Tolkien',
        'A lot', 'No'),
        new Book('A Horse and His Boy', 'C.S. Lweis', 'A lot', 'Yes'),
        new Book('The Adventures of Tom Sawyer', 'Mark Twain',
        'A lot', 'Yes')];

const bookDisplay = document.querySelector('#bookDisplay');


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

function addBookToLibrary(book) {
    library.push(book);
}

function createBookCard(book) {
    let bookCard = document.createElement('div');

    bookCard.classList.add('book');

    let title    = document.createElement('p');
    let author   = document.createElement('p');
    let pages    = document.createElement('p');
    let haveRead = document.createElement('p');

    title.textContent    = 'Title: ' + book.title;
    author.textContent   = 'Author: ' + book.author;
    pages.textContent    = 'Pages: ' + book.pages;
    haveRead.textContent = 'Read: ' + book.haveRead;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(haveRead);

    return bookCard;
}

function displayBooks(arr) {
    for (e in arr) {
        let bookCard = createBookCard(arr[e]);
        bookDisplay.appendChild(bookCard);
    }
}

displayBooks(library);
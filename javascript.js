const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
};

function addToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
};

addToLibrary('A Tale of Two Cities', 'Charles Dickens', '380', 'Yes');
addToLibrary('The Alchemist', 'Paulo Coelho', '163', 'No');

function displayBook() {
    const display = document.querySelector('.book-card');

    display.textContent = '';

    myLibrary.forEach(book => {
        const bookTitle = document.createElement('h2');
        bookTitle.classList.add('title');
        bookTitle.textContent = `Title: ${book.title}`;

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = `Author: ${book.author}`;

        const bookPages = document.createElement('p');
        bookPages.classList.add('pages');
        bookPages.textContent = `Pages: ${book.pages}`;

        const bookStatus = document.createElement('p');
        bookStatus.classList.add('read');
        bookStatus.textContent = `Read: ${book.read}`;

        display.appendChild(bookTitle);
        display.appendChild(bookAuthor);
        display.appendChild(bookPages);
        display.appendChild(bookStatus);
    });
};

displayBook();
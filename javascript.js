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

addToLibrary('harry', 'potter', '300', 'yes');
addToLibrary('wizard', 'macbeth', '500', 'no');

function displayBook() {
    const display = document.querySelector('.book-list');

    display.textContent = '';

    myLibrary.forEach(book => {
        const books = document.createElement('div');
        books.classList.add('book-card');

        books.textContent = `
        Title: ${book.title} 
        Author: ${book.author} 
        Pages: ${book.pages} 
        Read: ${book.read}`;

        display.appendChild(books);
    });
};

displayBook();
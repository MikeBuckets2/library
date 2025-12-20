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

function displayBook(books) {
    const display = document.querySelector('.container');

    for (let book of books) {
        display.textContent += `${book}`
    };
};

displayBook(myLibrary);
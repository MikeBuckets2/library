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
    const display = document.querySelector('.book-container');

    display.textContent = '';

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.id = book.id;

        const bookTitle = document.createElement('h2');
        bookTitle.classList.add('title');
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = `Author: ${book.author}`;

        const bookPages = document.createElement('p');
        bookPages.classList.add('pages');
        bookPages.textContent = `Pages: ${book.pages}`;

        const bookStatus = document.createElement('p');
        bookStatus.classList.add('read');
        bookStatus.textContent = `Read: ${book.read}`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            removeBook(book.id);
        });

        display.appendChild(bookCard);

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookStatus);
        bookCard.appendChild(removeButton);
    });
};

displayBook();

function removeBook(id) {
    const bookIndex = myLibrary.findIndex(book => book.id === id);
    myLibrary.splice(bookIndex, 1);
    displayBook();
}

const form = document.querySelector('#new-book-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const newTitle = document.querySelector('#title');
    const currentTitle = newTitle.value;
    const newAuthor = document.querySelector('#author');
    const currentAuthor = newAuthor.value;
    const newPages = document.querySelector('#pages');
    const currentPages = newPages.value;
    const newRead = document.querySelector('#read');
    const currentRead = newRead.value;

    addToLibrary(currentTitle, currentAuthor, currentPages, currentRead);
    displayBook();
});
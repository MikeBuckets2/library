const myLibrary = [];

function Book() {
    this.id = crypto.randomUUID();
};

function addToLibrary() {

};

let harry = new Book();

console.log(harry.id);
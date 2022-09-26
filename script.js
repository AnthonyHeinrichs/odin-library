const newBook = document.getElementById('new')
const form = document.getElementById('form')

newBook.addEventListener('click', () => {
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden')
  } else {
    form.classList.add('hidden')
  }
})

let reading = [];
let read = [];

function Book(title, author, pages, complete) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.complete = complete;
}

function addBookToLibrary() {
}
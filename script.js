const newBook = document.getElementById('new')
const noBook = document.getElementById('noBook')
const form = document.getElementById('form')

function hideForm(prop) {
  if (prop.classList.contains('hiddenForm')) {
    prop.classList.remove('hiddenForm')
  } else {
    prop.classList.add('hiddenForm')
  }
}

newBook.addEventListener('click', () => {
  hideForm(form)
  }
) 

noBook.addEventListener('click', () => {
  hideForm(form)
  }
) 

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
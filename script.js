const newBook = document.getElementById('new')
const newBookTwo = document.getElementById('newBook')
const form = document.getElementById('form')
const noBook = document.getElementById('noBook')

let reading = [1];
let read = [];

function Book(title, author, pages, complete) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.complete = complete;
}

function addBookToLibrary() {
}

(() => {
  if (reading.length !== 0 || read.length !== 0) {
    noBook.classList.add('hidden')
  }
})()

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

newBookTwo.addEventListener('click', () => {
  hideForm(form)
  }
) 
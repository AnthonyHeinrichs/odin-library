const newBook = document.getElementById('new')
const newBookTwo = document.getElementById('newBook')
const form = document.getElementById('form')
const noBook = document.getElementById('noBook')
const cancel = document.getElementById('cancel')
const formContent = document.getElementById('formContent')

const formButtons = [newBook, newBookTwo, cancel]

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

function hideForm() {
  if (form.classList.contains('hiddenForm')) {
    form.classList.remove('hiddenForm')
    formContent.classList.remove('hiddenFormContent')
  } else {
    form.classList.add('hiddenForm')
    formContent.classList.add('hiddenFormContent')
  }
}

for (let i = 0; i < formButtons.length; i++) {
  formButtons[i].addEventListener('click', () => {
    hideForm()
  })
}
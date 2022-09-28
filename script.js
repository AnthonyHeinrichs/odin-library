const newBook = document.getElementById('new')
const newBookTwo = document.getElementById('newBook')
const formHtml = document.getElementById('formAll')
const noBook = document.getElementById('noBook')
const cancel = document.getElementById('cancel')
const formContent = document.getElementById('formContent')

const formSubmit = document.getElementById('submit')
formSubmit.addEventListener('click', () => {
  addBookToLibrary()
  document.getElementById('form').reset()
}) 
  

const formButtons = [newBook, newBookTwo, cancel, formSubmit]
for (let i = 0; i < formButtons.length; i++) {
  formButtons[i].addEventListener('click', () => {
    hideForm()
  })
}

let reading = [1];
let read = [];

function Book(title, author, imgUrl, read) {
  this.title = title;
  this.author = author;
  this.imgUrl = imgUrl;
  this.read = read;
}

function addBookToLibrary() {
  let bookData = Array.from(document.querySelectorAll('#form input[type="text"]'))
  let pairData = bookData.reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {})
  let readState = document.querySelector('#form input[type="checkbox"]').checked
  let title = pairData.title
  let author = pairData.author
  let imgUrl = pairData.imgUrl
  const newBook = new Book(title, author, imgUrl, readState)
  if (readState) {
    read.push(newBook)
  } else {
    reading.push(newBook)
  }
}

(() => {
  if (reading.length !== 0 || read.length !== 0) {
    noBook.classList.add('hidden')
  }
})()

function hideForm() {
  if (formHtml.classList.contains('hiddenForm')) {
    formHtml.classList.remove('hiddenForm')
    formContent.classList.remove('hiddenFormContent')
  } else {
    formHtml.classList.add('hiddenForm')
    formContent.classList.add('hiddenFormContent')
  }
}


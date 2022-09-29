// Getting the html elements support a dynamic webpage
const newBook = document.getElementById('new')
const newBookTwo = document.getElementById('newBook')
const formHtml = document.getElementById('formAll')
const cancel = document.getElementById('cancel')
const formContent = document.getElementById('formContent')

// Listening for submit on new book form and running new function
// to create book and then clearing the form
const formSubmit = document.getElementById('submit')
formSubmit.addEventListener('click', () => {
  addBookToLibrary()
  document.getElementById('form').reset()
}) 
  
// Iterating over the form buttons and showing/hiding the form
// depending on if the form is open or not
const formButtons = [newBook, newBookTwo, cancel, formSubmit]
for (let i = 0; i < formButtons.length; i++) {
  formButtons[i].addEventListener('click', () => {
    hideForm()
  })
}

// Initializing the array that holds our books
const library = [1];

// Constructor for creating new book instances 
function Book(title, author, imgUrl, read) {
  this.title = title;
  this.author = author;
  this.imgUrl = imgUrl;
  this.read = read;
}

// Temporary instances of new books for testing the dynamic html
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
library.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))

// Takes data from the form and then creates a new book instance 
// with the help of the book constructor
function addBookToLibrary() {
  let bookData = Array.from(document.querySelectorAll('#form input[type="text"]'))
  let pairData = bookData.reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {})
  let readState = document.querySelector('#form input[type="checkbox"]').checked
  const newBook = new Book(pairData.title, pairData.author, pairData.imgUrl, readState)
  library.push(newBook)
  saveData()
}

// Runs on page load to determine if there are any books, and
// if not, shows a card asking user to add a new book to the library
(() => {
  const noBook = document.getElementById('noBook')
  const readingBooks = document.getElementById('readingBooks')
  const readBooks = document.getElementById('readBooks')
  if (library.length !== 0 ) {
    noBook.classList.add('hidden')
    readingBooks.classList.remove('hidden')
    readBooks.classList.remove('hidden')
  }
})()

// Hides the form or opens the form depending on the forms state
function hideForm() {
  if (formHtml.classList.contains('hiddenForm')) {
    formHtml.classList.remove('hiddenForm')
    formContent.classList.remove('hiddenFormContent')
  } else {
    formHtml.classList.add('hiddenForm')
    formContent.classList.add('hiddenFormContent')
  }
}

// Renders new books depending on a books read state
function showBooks() {
  for (let i = 0; i < library.length ; i++) {
    if (library[i].read) {
      createReadCard(library[i])
    } else {
      createReadingCard(library[i])
    }
  }
}

// Creates and appends the html elements to show the book instances
function createReadCard() {

}

function createReadingCard() {

}

// Save data to local storage to be pulled from later
function saveData() {
  localStorage.setItem(`library`, JSON.stringify(library));
}
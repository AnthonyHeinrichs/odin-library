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

// Initializing the array that holds our books and creating 
// a card for each book
const library = [];

// Constructor for creating new book instances 
class Book {
  constructor(id, title, author, imgUrl, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.imgUrl = imgUrl;
    this.read = read;
  }
}

// Takes data from the form and then creates a new book instance 
// with the help of the book constructor
function addBookToLibrary() {
  let bookId = 0
  let bookData = Array.from(document.querySelectorAll('#form input[type="text"]'))
  let pairData = bookData.reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {})
  let readState = document.querySelector('#form input[type="checkbox"]').checked

  if (pairData.imgUrl.length === 0) {
    pairData.imgUrl = 'https://images.unsplash.com/photo-1548191194-b3d4f051fd7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }

  if (library.length >= 1) {
    bookId = library[library.length - 1].id + 1
  }

  const newBook = new Book(bookId, pairData.title, pairData.author, pairData.imgUrl, readState)
  library.push(newBook)
  createCard(newBook)
}

// Runs on page load to determine if there are any books, and
// if not, shows a card asking user to add a new book to the library
const checkForBooks = () => {
  const noBook = document.getElementById('noBook')
  const readingBooks = document.getElementById('readingBooks')
  const readBooks = document.getElementById('readBooks')
  if (library.length !== 0 ) {
    noBook.classList.add('hidden')
    readingBooks.classList.remove('hidden')
    readBooks.classList.remove('hidden')
  } else {
    noBook.classList.remove('hidden')
    readingBooks.classList.add('hidden')
    readBooks.classList.add('hidden')
  }
}

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

// Renders all books in library array depending on a books read state
function showBooks() {
  for (let i = 0; i < library.length ; i++) {
    createCard(library[i])
  }
}

// Creates and appends the html elements to show the book instances
function createCard(book) {
  const readingWrapper = document.querySelector('#reading')
  const readWrapper = document.querySelector('#readBook')

  const cardType = document.createElement('div')
  cardType.classList.add('book')
  cardType.id = book.id
  if (book.read) {
    readWrapper.appendChild(cardType)
  } else {
    readingWrapper.appendChild(cardType)
  }
  
  const cardImg = document.createElement('img')
  cardImg.classList.add('bookImg')
  cardImg.src = book.imgUrl
  cardImg.alt = book.title
  cardType.appendChild(cardImg)

  const cardTitle = document.createElement('p')
  cardTitle.classList.add('bookTitle')
  cardTitle.textContent = book.title
  cardType.appendChild(cardTitle)

  const cardAuthor = document.createElement('p')
  cardAuthor.classList.add('author')
  cardAuthor.textContent = book.author
  cardType.appendChild(cardAuthor)

  const cardStats = document.createElement('div')
  cardStats.classList.add('stats')
  cardType.appendChild(cardStats)
  
  const cardComplete = document.createElement('button')
  if (book.read) {
    cardComplete.classList.add('complete')
  } else {
    cardComplete.classList.add('notComplete')
  }
  cardStats.appendChild(cardComplete)

  const cardRemove = document.createElement('button')
  cardRemove.classList.add('removeBtn')
  cardRemove.id = 'remove'
  cardRemove.textContent = 'Remove'
  cardStats.appendChild(cardRemove)

  // Removes the parent dive and recreates the book depending
  // on the read status
  cardComplete.addEventListener('click', () => {
    const parentOne = event.target.parentElement
    const id = parseInt(parentOne.parentElement.id)
    library[id].read = !library[id].read
    parentOne.parentElement.remove()
    createCard(library[id])
  })

  // Removes the parent div of the book and removes the book
  // from the library array
  cardRemove.addEventListener('click', () => {
    const parentOne = event.target.parentElement
    const id = parseInt(parentOne.parentElement.id)
    library.splice(id, 1)
    parentOne.parentElement.remove()
    checkForBooks()
  })
  checkForBooks()
}

// Save data to local storage to be pulled from later
function saveData() {
  localStorage.setItem(`library`, JSON.stringify(library));
}

checkForBooks()
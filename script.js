const newBook = document.getElementById('new')
const newBookTwo = document.getElementById('newBook')
const formHtml = document.getElementById('formAll')
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

const reading = [];
const read = [];

function Book(title, author, imgUrl, read) {
  this.title = title;
  this.author = author;
  this.imgUrl = imgUrl;
  this.read = read;
}

read.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
read.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
read.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
read.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
read.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
reading.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
reading.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
reading.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
reading.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))
reading.push(new Book('To kill a mockingbird', 'Harper Lee', 'https://www.sequelbooks.com/assets/full/9780099419785.jpg?20210318035335', true))

function addBookToLibrary() {
  let bookData = Array.from(document.querySelectorAll('#form input[type="text"]'))
  let pairData = bookData.reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {})
  let readState = document.querySelector('#form input[type="checkbox"]').checked
  const newBook = new Book(pairData.title, pairData.author, pairData.imgUrl, readState)
  if (readState) {
    read.push(newBook)
  } else {
    reading.push(newBook)
  }
  saveData()
}

(() => {
  const noBook = document.getElementById('noBook')
  const readingBooks = document.getElementById('readingBooks')
  const readBooks = document.getElementById('readBooks')
  if (reading.length !== 0 || read.length !== 0) {
    noBook.classList.add('hidden')
    readingBooks.classList.remove('hidden')
    readBooks.classList.remove('hidden')
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

function showBooks() {
  for (let i = 0; i < read.length ; i++) {
    createReadCard(read[i])
  }
  
  for (let i = 0; i < reading.length ; i++) {
    createReadingCard(read[i])
  }
}

function createReadCard() {

}

function createReadingCard() {

}



function saveData() {
  localStorage.setItem(`reading`, JSON.stringify(reading));
  localStorage.setItem(`read`, JSON.stringify(read));
}
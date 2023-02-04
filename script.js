let bookArray = [];
let bookDisplay = document.querySelector('.bookDisplay');

const form = document.querySelector('form');

form.addEventListener('submit', addBookButton);

function addBookButton(e){
    e.preventDefault();

    const fdObj = {};
    const myFormData = new FormData(e.target);
    myFormData.forEach((value, key) => (fdObj[key]=value))
    const newBook = new Book(fdObj.author, fdObj.title,
                             fdObj.pages, fdObj.read); 
    //----------------------------------------------------Takes form data and makes new book
    
    bookDisplay.innerHTML = ""; //------------------------Clears the book display
    bookArray.unshift(newBook); //------------------------Adds new Book to front of book array
    refreshBookDisplay(); 
    form.reset();    
}

function Book(author, title, pages, read){ //-------------Book object constructor
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}
function makeABookCardHTML(){ //--------------------------Maker of the Book Card HTML, returns the div
    /* Making the Book Card */
const bookCard = document.createElement('div');
    bookCard.classList.add('bookCard');
    /* Making Book Card > Author Section */
    const authorSection = document.createElement('div');
        authorSection.classList.add('authorSection');
        bookCard.appendChild(authorSection);
        /* Making Book Card > Author Section > lblAuthor */
        const lblAuthor = document.createElement('div');
            lblAuthor.classList.add('lblAuthor');
            lblAuthor.textContent = "Author:";
            authorSection.appendChild(lblAuthor);
        /* Making Book Card > Author Section > fldAuthor */
        const fldAuthor = document.createElement('div');
            fldAuthor.classList.add('fldAuthor');
            authorSection.appendChild(fldAuthor);
    /* Making Book Card > Title Section */
    const titleSection = document.createElement('div');
        titleSection.classList.add('titleSection');
        bookCard.appendChild(titleSection);
        /* Making Book Card > Title Section > lblTitle */
        const lblTitle = document.createElement('div');
            lblTitle.classList.add('lblTitle');
            lblTitle.textContent = "Title:";
            titleSection.appendChild(lblTitle);
        /* Making Book Card > Title Section > fldTitle */
        const fldTitle = document.createElement('div');
            fldTitle.classList.add('fldTitle');
            titleSection.appendChild(fldTitle);
    /* Making Book Card > Pages Section */
    const pagesSection = document.createElement('div');
        pagesSection.classList.add('pagesSection');
        bookCard.appendChild(pagesSection);
        /* Making Book Card > Pages Section > lblPages */
        const lblPages = document.createElement('div');
            lblPages.classList.add('lblPages');
            lblPages.textContent = "Pages:";
            pagesSection.appendChild(lblPages);
        /* Making Book Card > Pages Section > fldPages */
        const fldPages = document.createElement('div');
            fldPages.classList.add('fldPages');
            pagesSection.appendChild(fldPages);
    /* Making Book Card > Read Section */
    const readSection = document.createElement('div');
        readSection.classList.add('readSection');
        bookCard.appendChild(readSection);
        /* Making Book Card > Read Section > lblRead */
        const lblRead = document.createElement('div');
            lblRead.classList.add('lblRead');
            lblRead.textContent = "Read:";
            readSection.appendChild(lblRead);
        /* Making Book Card > Read Section > fldRead */
        const fldRead = document.createElement('div');
            fldRead.classList.add('fldRead');
            readSection.appendChild(fldRead);
    /* Making Book Card > Control Section */
    const controlSection = document.createElement('div');
        controlSection.classList.add('controlSection');
        bookCard.appendChild(controlSection);
        /* Making Book Card > Control Section > btnRead */
        const btnRead = document.createElement('button');
            btnRead.classList.add('btnRead');
            btnRead.textContent = "READ";
            controlSection.appendChild(btnRead);
        /* Making Book Card > Control Section > btnUnread */
        const btnUnread = document.createElement('button');
            btnUnread.classList.add('btnUnread');
            btnUnread.textContent = "UNREAD";
            controlSection.appendChild(btnUnread);
        /* Making Book Card > Control Section > btnRemove */
        const btnRemove = document.createElement('button');
            btnRemove.classList.add('btnRemove');
            btnRemove.textContent = "REMOVE";
            controlSection.appendChild(btnRemove);

return bookCard;
}
function refreshBookDisplay(){
    for (let i = 0; i < bookArray.length; i++){
        const iBookCard = makeABookCardHTML();
        let iBookObj = bookArray[i];
                                //----------Div targetors
        let fldAuthor = iBookCard.querySelector('.fldAuthor');
        let fldTitle = iBookCard.querySelector('.fldTitle');
        let fldPages = iBookCard.querySelector('.fldPages');
        let fldRead = iBookCard.querySelector('.fldRead');

        fldAuthor.textContent = iBookObj.author;  //------Text appendors   
        fldTitle.textContent = iBookObj.title;
        fldPages.textContent = iBookObj.pages;
        if (iBookObj.read.toString() === "true"){
            fldRead.textContent = "Yes";
        } else {
            fldRead.textContent = "No";
        }

        bookDisplay.appendChild(iBookCard);
    }
}
function buttonRemoveBook(){

}
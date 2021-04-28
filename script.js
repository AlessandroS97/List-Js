let addBtn = document.querySelector("#addBookButton");

addBtn.addEventListener("click" , () => {
    let bookLi = document.createElement("li");

    bookLi.innerText = document.querySelector("#bookInput").value;
    bookLi.classList.add("list-group-item");
    bookLi.classList.add("fs-2");

    bookLi.addEventListener('mouseenter', () => {
        bookLi.classList.add("bg-warning")
    })

    bookLi.addEventListener('mouseleave', () => {
        bookLi.classList.remove("bg-warning")
    })

    bookLi.addEventListener("click", () => {
        let readedBookList = document.querySelector("#readedBookList");
        readedBookList.appendChild(bookLi);
    })

    let bookList = document.querySelector("#bookList");
    bookList.appendChild(bookLi);
    
});

let addReadedBtn = document.querySelector("#addReadedBookButton");

addReadedBtn.addEventListener("click" , () => {
    let readedBookLi = document.createElement("li");

    readedBookLi.innerText = document.querySelector("#readedInput").value;
    readedBookLi.classList.add("list-group-item");
    readedBookLi.classList.add("fs-2");

    readedBookLi.addEventListener('mouseenter', () => {
        readedBookLi.classList.add("bg-warning")
    })

    readedBookLi.addEventListener('mouseleave', () => {
        readedBookLi.classList.remove("bg-warning")
    })

    readedBookLi.addEventListener("click", () => {
        let bookLi = document.querySelector("#bookList");
        bookLi.appendChild(readedBookLi);
    })

    let readedBookList = document.querySelector("#readedBookList");
    readedBookList.appendChild(readedBookLi);
});
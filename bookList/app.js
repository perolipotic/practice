function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor

function UI() {}

UI.prototype.showAlert = function(msg, className) {
  //
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(msg));
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");
  container.insertBefore(div, form);

  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
};

UI.prototype.addBookToList = function(book) {
  const list = document.getElementById("book-list");
  //create tr element
  const row = document.createElement("tr");

  //insert cols
  row.innerHTML = `<td>${book.title}</td>
  <td>${book.author}</td>
 <td>${book.isbn}</td>
 <td><a href= "#" class="delete">X</a></td>`;

  list.appendChild(row);
};
UI.prototype.deleteBook = function(target) {
  if (target.className === "delete") {
    target.parentElement.parentElement.remove();
  }
};
//event listen
UI.prototype.clearFileds = function() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};
document.getElementById("book-form").addEventListener("submit", function(e) {
  //get form values

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);

  const ui = new UI();
  //validtate
  if (title === "" || author === "" || isbn === "") {
    //error
    ui.showAlert("please fill in all fields", "error");
  } else {
    ui.addBookToList(book);

    ui.showAlert("Book addded", "success");
    //clearr fields
    ui.clearFileds();
  }
  e.preventDefault();
});

//Event Listener for delete

document.getElementById("book-list").addEventListener("click", function(e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert("book removed", "success");
  e.preventDefault();
});

console.log("this is my new app");
// make  the constructar
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
// display constructar
function Display() {

}
// adding the diplay prototype
Display.prototype.add = function (book) {
    let tablebody = document.getElementById('tablebody');
    let tabtemp = `<tr>
    <th scope="row">1</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
</tr>`;
    tablebody.innerHTML += tabtemp;


}

Display.prototype.clear = function () {
    let formlibary = document.getElementById('formlibary');
    formlibary.reset();

};

Display.prototype.validate = function (book) {
    if(book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else{
        return true;
    }

}

Display.prototype.show = function(type, givenmessage) {
    let message = document.getElementById('messagebody');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Holy guacamole!</strong>${givenmessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>` 
}








// adding the event of the submit button to
let formlibary = document.getElementById('formlibary');
formlibary.addEventListener('submit', libarySubmit);

function libarySubmit(e) {
    console.log("this form are the submited");
    let name = document.getElementById("bookname").value;
    let author = document.getElementById("authorname").value;
    let type;
    let frictions = document.getElementById("frictions");
    let computer = document.getElementById("computer");
    let Sports = document.getElementById("Sports");
    if (frictions.checked) {
        type = frictions.value;

    } else if (computer.checked) {
        type = computer.value;
    } else if (Sports.checked) {
        type = Sports.value;
    }
    // let make the object 
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show("success"," your information are sumbit");
    }
    else{
        display.show("danger", " please fill the form");
    }
    
    
    e.preventDefault();

}
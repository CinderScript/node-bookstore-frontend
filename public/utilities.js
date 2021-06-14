
/// URL OF THE REST API ///
const url = "https://obscure-shore-43768.herokuapp.com/api/books/";

function displayAddedBook(elementID, book, msg){
    let table =
        '<table class="table table-bordered table-hover my-0"> \n' +
        '   <thead>\n' +
        '       <tr>\n' +
        '           <th scope="col">Title       </th> \n'+
        '           <th scope="col">Description </th> \n'+
        '           <th scope="col">Year        </th> \n'+
        '           <th scope="col">Author      </th> \n'+
        '           <th scope="col">Hardcover   </th> \n'+
        '           <th scope="col">Price       </th> \n'+
        '       </tr>\n' +
        '   </thead>\n' +
        '   <tbody>\n' +

        '       <tr>\n' +
        '           <td>' + book["title"]+         '</td>\n' +
        '           <td>' + book["description"]+   '</td>\n' +
        '           <td>' + book["year"]+          '</td>\n' +
        '           <td>' + book["author"]+        '</td>\n' +
        '           <td>' + book["hardCover"]+     '</td>\n' +
        '           <td>' + book["price"]+         '</td>\n' +
        '       </tr>\n';

    table +=
        '   </tbody>\n' +
        '</table>\n';

    document.getElementById(elementID).innerHTML =
        "<h3>"+ msg + "</h3>" +
        "<h5>Id: " + book["_id"] + "</h5>" +
        table;
}


/* * * * * * * * * * * * * * * * * * * FORM OPERATIONS * * * * * * * * * * * * * * * * * * * * * * * * */

function ValidateForm(formID){
    var form = document.getElementById(formID);
    var inputs = form.querySelectorAll('input, select, textarea');
    form.classList.add("was-validated")
    let isValid = true;
    inputs.forEach(function (input) {
        if (!input.checkValidity()){
            isValid = false;
        }
    });
    return isValid;
}

function ClearForm(formID){
    var form = document.getElementById(formID);
    var inputs = form.querySelectorAll('input, select, textarea');
    form.classList.remove("was-validated")
    let isValid = true;
    inputs.forEach(function (input) {
        input.value = "";
    });
    return isValid;
}

function FormInhibitSubmit(formID) {

// stop the form's button from submitting
    let form = document.getElementById(formID);
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        event.stopPropagation()

    });
}
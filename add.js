let array = [
    book1 = {
        id: 1,
        name: "Кавказский пленник",
        author: "А. Н. Толстой"
    },
    book2 = {
        id: 2,
        name: "Евгений Онегин",
        author: "А. C. Пушкин"
    }
];
function getForm() {
    let form = document.createElement('form');
    let htmlForm = `<form action="add.js">
    Название: <input type="text" id="name"> 
    Автор: <input type="text" id="author"> 
    Год выпуска: <input type="text" id="year"> 
    <input type="submit" value="Добавить" onclick="addElem()"></input>
    </form>`;
    let button = document.body.childNodes[1];
    form.className = "get";
    form.innerHTML = htmlForm;
    document.body.replaceChild(form, button);
};

function addElem() {
    let book = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
        year: document.getElementById("year").value
    };
    array.push(book);
    let id = array.length;
    let name = array[array.length - 1].name;
    let author = array[array.length - 1].author;
    let year = array[array.length - 1].year;
    let newElem = document.createElement('form');
    newElem.className = "td";
    htmlElem = `
    <tr>
    <td class="identificator">${id}</td>
    <td>${name}</td>
    <td>${author}</td>
    <td>${year}</td>
    <td></td>
    <td></td>
    </tr>`;
    newElem.innerHTML = htmlElem;
    document.body.append(newElem);
};

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
    let htmlForm = `
    Название: <input type="text" id="name"> 
    Автор: <input type="text" id="author"> 
    Год выпуска: <input type="text" id="year"> 
    <input type="button" value="Добавить" onclick="addElem()"></input>`;
    let button = document.body.childNodes[1];
    form.className = "get";
    form.innerHTML = htmlForm;
    document.body.replaceChild(form, button);
};

function addElem() {
    let now = new Date();
    let fullYear = now.getFullYear();
    let month = now.getMonth();
    let date = now.getDate();
    let book = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
        year: document.getElementById("year").value,
        addDate: now,
        editDate: null
    };
    array.push(book);
    let id = array.length;
    let name = array[array.length - 1].name;
    let author = array[array.length - 1].author;
    let year = array[array.length - 1].year;
    let edit = array[array.length - 1].editDate;
    let newElem = document.createElement('tr');
    htmlElem = `
    <td class="identificator">${id}</td>
    <td>${name}</td>
    <td>${author}</td>
    <td>${year}</td>
    <td>${date}.${month + 1}.${fullYear}</td>
    <td>${edit}</td>
    <td class="last"><button class="btnDelete" onclick="deleteElem(this.parentNode.parentNode)">&#x2613;</button></td>
    <td class="last"><button class="btnChange">&#x270E;</button></td>`;
    newElem.innerHTML = htmlElem;
    document.getElementById("tbody").append(newElem);
    let button = document.createElement('div');
    button.innerHTML = '<button id="btn" onclick="getForm()" >&#x2630;</button>';
    let form = document.body.childNodes[1];
    document.body.replaceChild(button, form);
};

function deleteElem(toDelete) {
    /*let index = Number(toDelete.cells[0].innerHTML);
    toDelete.remove();
    array.filter((item) => {
        if (Number(item.id) !== (index - 1)) return item; 
    });
    alert('Книга "' + String(array[index - 1].name) + '" удалена');
    //alert(String(array[0].name));*/
};

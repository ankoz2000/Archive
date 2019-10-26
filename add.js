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
    let name = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let newElem = document.createElement('form');
    newElem.className = "td";
    htmlElem = `
    <tr>
    <td class="identificator">2</td>
    <td>${name}</td>
    <td>${author}</td>
    <td>${year}</td>
    <td></td>
    <td></td>
    </tr>`;
    newElem.innerHTML = htmlElem;
    document.body.append(newElem);
};

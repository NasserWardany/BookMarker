var bookmarkName = document.getElementById("bookmarkName");
var bookmarkURL = document.getElementById("bookmarkURL");

var websites = [];

if (localStorage.getItem("websites") !== null) {
    websites = JSON.parse(localStorage.getItem("websites"));
    displayWebsite();
}

function addWebsite() {
    var Website = {
        name: bookmarkName.value,
        url: bookmarkURL.value
    };

    websites.push(Website);
    displayWebsite();
    clear();
    localStorage.setItem("websites", JSON.stringify(websites));
}

function displayWebsite() {
    var container = "";
    for (var i = 0; i < websites.length; i++) {
        container += `
    <tr>
    <td>${i + 1}</td>
    <td>${websites[i].name}</td>
    <td>
        <a href="${websites[i].url}" target="_blank" class="btn btn-success">
            <i class="fa-solid fa-eye pe-2"></i>Visit
        </a>
    </td>
    <td>
        <button onclick="deleteWebsite(${i})" class="btn btn-danger">
            <i class="fa-solid fa-trash-can"></i>Delete
        </button>
    </td>
    </tr>
    `;
    }
    document.getElementById("tableContent").innerHTML = container;
}

function clear() {
    bookmarkName.value = "";
    bookmarkURL.value = "";
}

function deleteWebsite(index) {
    websites.splice(index, 1);
    displayWebsite();
    localStorage.setItem("websites", JSON.stringify(websites));
}

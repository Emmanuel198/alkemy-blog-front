
var jsonResponse;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/posts');
xhr.send();

xhr.onload = function () {
    if (xhr.status == 200) {
        jsonResponse = JSON.parse(xhr.response);
        console.log(jsonResponse);
        createListItems(jsonResponse);
    } else {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
    }
};

xhr.onerror = function () {
    alert("Request failed");
};

function createListItems(jsonResponse) {
    let htmlString = "";
    for (let i = 0; i < jsonResponse.elements.length; i++) {
        htmlString = htmlString + "<h3> Id: " + jsonResponse.elements[i].id + " </h3>"
        htmlString = htmlString + "<h3> Title: " + jsonResponse.elements[i].title + " </h3>";
        htmlString = htmlString + "<h3> Category: " + jsonResponse.elements[i].category + " </h3>";
        htmlString = htmlString + "<h3> Date: " + jsonResponse.elements[i].date + " </h3>";
        htmlString = htmlString + "<img src='" + jsonResponse.elements[i].image + "' class='image-class margin-botton-class'/>";

    }
    document.getElementById("main_div").innerHTML = htmlString;
}
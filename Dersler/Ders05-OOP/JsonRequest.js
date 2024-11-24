document.getElementById("getButton").addEventListener("click",getAllData)

function getAllData () { 
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "users.json",true);
    
}
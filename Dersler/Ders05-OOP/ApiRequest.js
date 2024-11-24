document.getElementById('veri').addEventListener('click',function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
    xhr.onload = function () {
        const output = documnet.getElementById("output");
        if (this.status ==2000) {
           let data = JSON.parse(xhr.responseText);
           data.forEach(function(item)) {
            output.innerHTML +=
            <div>
                Başlık: ${item.title}
                <br></br>
                içerik: ${item.}
            </div>
        }
    }
}
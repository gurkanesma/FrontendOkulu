function getData(data){
    return new Promise((resolve,reject) => {
setTimeout() => {
    if (typeof data == 'number'){
        let result = 'Sonuç: ${data *2}'); 
        resolve(result);

    } else { 
        reject("Lütfen bir sayı giriniz");
    }
}, 2000);

    }

}
"use strict";
const ps = require("prompt-sync")
const readline = require('readline');
const prompt = ps();
var islem
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});//girilenin okunmasını sağlıyor
function getNumber(prompt, callback) {
    rl.question(prompt, (input) => {
        const number = parseFloat(input);
        if (isNaN(number)) {
            console.log('Geçersiz sayı. Lütfen tekrar girin.');
            getNumber(prompt, callback);
        } else {
            callback(number);
        }
    });
}//girilen karakterin sayı olup olmadığını kontrol ediyor
function hesap() {
    getNumber('Birinci sayıyı girin: ', (s1) => {
        getNumber('İkinci sayıyı girin: ', (s2) => {
            islem = prompt("Bu sayıları ne yapmak istersiniz (topla,cikar,carp,bol): ")
            if (islem === "topla") {
                console.log(`Toplama: ${s1 + s2}`);
            } else if (islem === "cikar") {
                console.log(`Çıkarma: ${s1 - s2}`);
            } else if (islem === "carp") {
                console.log(`Çarpma: ${s1 * s2}`);
            } else if (islem === "bol") {
                console.log(`Bölme: ${s1 / s2}`);
            } else {
                console.log("Girdiğiniz işlemde bir sıkıntı var, tekrar deneyiniz")
            };
            rl.close();
        });
    });

}
hesap();

"use strict";
const ps = require("prompt-sync")
const prompt = ps();
var sonuc
var s1 = prompt("Lütfen ilk sayınızı giriniz: ")
var s2 = prompt("Lütfen ikinci sayınızı sayi giriniz: ")
var islem = prompt("Ben bu sayıları napiyim(ı,ç,ö yerine sırasıyla i,c,o yazınız): ")
var s1 = parseInt(s1)
var s2 = parseInt(s2)
if (islem === "topla") {
    sonuc = s1 + s2
} else if (islem === "cikar") {
    sonuc = s1 - s2
} else if (islem === "carp") {
    sonuc = s1 * s2
} else if (islem === "bol") {
    sonuc = s1 / s2
} else {
    /* Yaratıcılık Başarılı */
    sonuc = "Doğru düzgün işlem giriniz"
};


console.log("Çıkan sonuç " + sonuc)

/* Fork ile düzeltmeleri görüyorsan bana whatsapp tan şu kodu gönder: 9854456 */

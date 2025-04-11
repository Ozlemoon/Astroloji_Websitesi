/* BEGIN EXTERNAL SOURCE */
function name0() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name1() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name2() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name3() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name4() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name5() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name6() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name7() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name8() {
w3_open()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name9() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name10() {
this.style.display='none'
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name11() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name12() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name13() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name14() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name15() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name16() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name17() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name18() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name19() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name20() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name21() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name22() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name23() {
hesapla()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */

                function hesapla() {
                    var dob = new Date(document.getElementById("dob").value);
                    var month = dob.getMonth() + 1;
                    var day = dob.getDate();

                    var burc;
                    if ((month == 1 && day <= 21) || (month == 12 && day >= 22)) {
                        burc = "Oðlak";
                    } else if ((month == 1 && day >= 22) || (month == 2 && day <= 19)) {
                        burc = "Kova";
                    } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
                        burc = "Balýk";
                    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
                        burc = "Koç";
                    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 21)) {
                        burc = "Boða";
                    } else if ((month == 5 && day >= 22) || (month == 6 && day <= 21)) {
                        burc = "Ýkizler";
                    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
                        burc = "Yengeç";
                    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
                        burc = "Aslan";
                    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
                        burc = "Baþak";
                    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
                        burc = "Terazi";
                    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
                        burc = "Akrep";
                    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
                        burc = "Yay";
                    }

                    var gender = document.querySelector('input[name="gender"]:checked').value;
                    var yorum;

                    if (gender === "erkek") {
                        switch (burc) {
                            case "Koç":
                                yorum = "BURCUNUZ KOÇ!  (21 Mart – 19 Nisan) <br> Element: Ateþ <br> Yönetici Gezegen: Mars <br> Nitelik: Öncü <br> Þanslý Sayýnýz:9 <br> Uðurlu Taþýnýz: Yakut, Demir <br> Þanslý Gününüz: Salý <br> Renginiz: Nar Çiçeði <br> Çiçekler: Pars Zambaðý, Hanýmeli, Verona <br> Tarot kartý: Ýmparator <br> Mottonuz: Yeter ki hevesim kýrýlmasýn! <br>Bir Þarký Olsaydýnýz? : Candan Erçetin- Sevdim Sevilmedim <br> YORUM: Tenkitçidir, sert bir dille eleþtirebilir. Ev hayatýna ve ailesine oldukça düþkündür, fakat dýþarýdaki hayatýný da fazlasýyla sever. Bu onun yerinde duramayan hareketli yapýsýndan kaynaklanmaktadýr. Daima kendini evinde huzurlu ve rahat hissetmek ister.";
                                break;
                            case "Boða":
                                yorum = "BURCUNUZ BOÐA! .";
                                break;
                            case "Ýkizler":
                                yorum = "BURCUNUZ ÝKÝZLER! ";
                                break;
                            case "Yengeç":
                                yorum = "BURCUNUZ YENGEÇ!";
                                break;
                            case "Aslan":
                                yorum = "BURCUNUZ ASLAN!";
                                break;
                            case "Baþak":
                                yorum = "BURCUNUZ BAÞAK!";
                                break;
                            case "Terazi":
                                yorum = "BURCUNUZ TERAZÝ! ";
                                break;
                            case "Akrep":
                                yorum = "BURCUNUZ AKREP! ";
                                break;
                            case "Yay":
                                yorum = "BURCUNUZ YAY! ";
                                break;
                            case "Oðlak":
                                yorum = "BURCUNUZ OÐLAK! ";
                                break;
                            case "Kova":
                                yorum = "BURCUNUZ KOVA! ";
                                break;
                            case "Balýk":
                                yorum = "BURCUNUZ BALIK! ";
                                break;
                        }
                    } else if (gender === "kadýn") {
                        switch (burc) {
                            case "Koç":
                                yorum = "BURCUNUZ KOÇ!  (21 Mart – 19 Nisan) <br> Element: Ateþ <br> Yönetici Gezegen: Mars <br> Nitelik: Öncü <br> Þanslý Sayýnýz:9 <br> Uðurlu Taþýnýz: Yakut, Demir <br> Þanslý Gününüz: Salý <br> Renginiz: Nar Çiçeði <br> Çiçekler: Pars Zambaðý, Hanýmeli, Verona <br> Tarot kartý: Ýmparator <br> Mottonuz: Yeter ki hevesim kýrýlmasýn! <br>Bir Þarký Olsaydýnýz? : Candan Erçetin- Sevdim Sevilmedim <br> YORUM: Sürekli hareketli olmayý seven koç burcu kadýný boþ zamanlarýnda da sosyal aktivitelerde bulunmak, spor yapmak ve dostlarýyla vakit geçirmekten çok keyif alýr.";
                                break;
                            case "Boða":
                                yorum = "BURCUNUZ BOÐA! ";
                                break;
                            case "Ýkizler":
                                yorum = "BURCUNUZ ÝKÝZLER! ";
                                break;
                            case "Yengeç":
                                yorum = "BURCUNUZ YENGEÇ!";
                                break;
                            case "Aslan":
                                yorum = "BURCUNUZ ASLAN!";
                                break;
                            case "Baþak":
                                yorum = "BURCUNUZ BAÞAK!";
                                break;
                            case "Terazi":
                                yorum = "BURCUNUZ TERAZÝ! ";
                                break;
                            case "Akrep":
                                yorum = "BURCUNUZ AKREP! ";
                                break;
                            case "Yay":
                                yorum = "BURCUNUZ YAY! ";
                                break;
                            case "Oðlak":
                                yorum = "BURCUNUZ OÐLAK! ";
                                break;
                            case "Kova":
                                yorum = "BURCUNUZ KOVA! ";
                                break;
                            case "Balýk":
                                yorum = "BURCUNUZ BALIK! ";
                                break;
                        }
                    }

                    document.getElementById("burc-yorumu").innerHTML = yorum;
                }
            
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name24() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name25() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name26() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name27() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name28() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name29() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name30() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name31() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name32() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name33() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name34() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name35() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */

                // Script to open and close sidebar
                function w3_open() {
                    document.getElementById("mySidebar").style.display = "block";
                    document.getElementById("myOverlay").style.display = "block";
                }

                function w3_close() {
                    document.getElementById("mySidebar").style.display = "none";
                    document.getElementById("myOverlay").style.display = "none";
                }

                // Modal Image Gallery
                function onClick(element) {
                    document.getElementById("img01").src = element.src;
                    document.getElementById("modal01").style.display = "block";
                    var captionText = document.getElementById("caption");
                    captionText.innerHTML = element.alt;
                }
            
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name0() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name1() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name2() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name3() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name4() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name5() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name6() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name7() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name8() {
w3_open()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name9() {
w3_close()
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name10() {
this.style.display='none'
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name11() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name12() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name13() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name14() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name15() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name16() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name17() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name18() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name19() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name20() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name21() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name22() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name23() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name24() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name25() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name26() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name27() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name28() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name29() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name30() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name31() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name32() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name33() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */
function name34() {
onClick(this)
}
/* END EXTERNAL SOURCE */
/* BEGIN EXTERNAL SOURCE */

                    // Script to open and close sidebar
                    function w3_open() {
                        document.getElementById("mySidebar").style.display = "block";
                        document.getElementById("myOverlay").style.display = "block";
                    }

                    function w3_close() {
                        document.getElementById("mySidebar").style.display = "none";
                        document.getElementById("myOverlay").style.display = "none";
                    }

                    // Modal Image Gallery
                    function onClick(element) {
                        document.getElementById("img01").src = element.src;
                        document.getElementById("modal01").style.display = "block";
                        var captionText = document.getElementById("caption");
                        captionText.innerHTML = element.alt;
                    }
                
/* END EXTERNAL SOURCE */

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
                        burc = "O�lak";
                    } else if ((month == 1 && day >= 22) || (month == 2 && day <= 19)) {
                        burc = "Kova";
                    } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
                        burc = "Bal�k";
                    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
                        burc = "Ko�";
                    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 21)) {
                        burc = "Bo�a";
                    } else if ((month == 5 && day >= 22) || (month == 6 && day <= 21)) {
                        burc = "�kizler";
                    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
                        burc = "Yenge�";
                    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
                        burc = "Aslan";
                    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
                        burc = "Ba�ak";
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
                            case "Ko�":
                                yorum = "BURCUNUZ KO�!  (21 Mart � 19 Nisan) <br> Element: Ate� <br> Y�netici Gezegen: Mars <br> Nitelik: �nc� <br> �ansl� Say�n�z:9 <br> U�urlu Ta��n�z: Yakut, Demir <br> �ansl� G�n�n�z: Sal� <br> Renginiz: Nar �i�e�i <br> �i�ekler: Pars Zamba��, Han�meli, Verona <br> Tarot kart�: �mparator <br> Mottonuz: Yeter ki hevesim k�r�lmas�n! <br>Bir �ark� Olsayd�n�z? : Candan Er�etin- Sevdim Sevilmedim <br> YORUM: Tenkit�idir, sert bir dille ele�tirebilir. Ev hayat�na ve ailesine olduk�a d��k�nd�r, fakat d��ar�daki hayat�n� da fazlas�yla sever. Bu onun yerinde duramayan hareketli yap�s�ndan kaynaklanmaktad�r. Daima kendini evinde huzurlu ve rahat hissetmek ister.";
                                break;
                            case "Bo�a":
                                yorum = "BURCUNUZ BO�A! .";
                                break;
                            case "�kizler":
                                yorum = "BURCUNUZ �K�ZLER! ";
                                break;
                            case "Yenge�":
                                yorum = "BURCUNUZ YENGE�!";
                                break;
                            case "Aslan":
                                yorum = "BURCUNUZ ASLAN!";
                                break;
                            case "Ba�ak":
                                yorum = "BURCUNUZ BA�AK!";
                                break;
                            case "Terazi":
                                yorum = "BURCUNUZ TERAZ�! ";
                                break;
                            case "Akrep":
                                yorum = "BURCUNUZ AKREP! ";
                                break;
                            case "Yay":
                                yorum = "BURCUNUZ YAY! ";
                                break;
                            case "O�lak":
                                yorum = "BURCUNUZ O�LAK! ";
                                break;
                            case "Kova":
                                yorum = "BURCUNUZ KOVA! ";
                                break;
                            case "Bal�k":
                                yorum = "BURCUNUZ BALIK! ";
                                break;
                        }
                    } else if (gender === "kad�n") {
                        switch (burc) {
                            case "Ko�":
                                yorum = "BURCUNUZ KO�!  (21 Mart � 19 Nisan) <br> Element: Ate� <br> Y�netici Gezegen: Mars <br> Nitelik: �nc� <br> �ansl� Say�n�z:9 <br> U�urlu Ta��n�z: Yakut, Demir <br> �ansl� G�n�n�z: Sal� <br> Renginiz: Nar �i�e�i <br> �i�ekler: Pars Zamba��, Han�meli, Verona <br> Tarot kart�: �mparator <br> Mottonuz: Yeter ki hevesim k�r�lmas�n! <br>Bir �ark� Olsayd�n�z? : Candan Er�etin- Sevdim Sevilmedim <br> YORUM: S�rekli hareketli olmay� seven ko� burcu kad�n� bo� zamanlar�nda da sosyal aktivitelerde bulunmak, spor yapmak ve dostlar�yla vakit ge�irmekten �ok keyif al�r.";
                                break;
                            case "Bo�a":
                                yorum = "BURCUNUZ BO�A! ";
                                break;
                            case "�kizler":
                                yorum = "BURCUNUZ �K�ZLER! ";
                                break;
                            case "Yenge�":
                                yorum = "BURCUNUZ YENGE�!";
                                break;
                            case "Aslan":
                                yorum = "BURCUNUZ ASLAN!";
                                break;
                            case "Ba�ak":
                                yorum = "BURCUNUZ BA�AK!";
                                break;
                            case "Terazi":
                                yorum = "BURCUNUZ TERAZ�! ";
                                break;
                            case "Akrep":
                                yorum = "BURCUNUZ AKREP! ";
                                break;
                            case "Yay":
                                yorum = "BURCUNUZ YAY! ";
                                break;
                            case "O�lak":
                                yorum = "BURCUNUZ O�LAK! ";
                                break;
                            case "Kova":
                                yorum = "BURCUNUZ KOVA! ";
                                break;
                            case "Bal�k":
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

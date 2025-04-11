

function hesapla() {
    var dob = new Date(document.getElementById("dob").value);
    var month = dob.getMonth() + 1;
    var day = dob.getDate();

    var burc;
    if ((month == 1 && day <= 21) || (month == 12 && day >= 22)) {
        burc = "Oğlak";
    } else if ((month == 1 && day >= 22) || (month == 2 && day <= 19)) {
        burc = "Kova";
    } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
        burc = "Balık";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        burc = "Koç";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 21)) {
        burc = "Boğa";
    } else if ((month == 5 && day >= 22) || (month == 6 && day <= 21)) {
        burc = "İkizler";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        burc = "Yengeç";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        burc = "Aslan";
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        burc = "Başak";
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
                yorum = "<h4><strong> BURCUNUZ KOÇ!  (21 Mart – 19 Nisan)</strong>   </h4><br>   Element: Ateş <br> Yönetici Gezegen: Mars <br> Nitelik: Öncü <br> Şanslı Sayınız:9 <br> Uğurlu Taşınız: Yakut, Demir <br> Şanslı Gününüz: Salı <br> Renginiz: Nar Çiçeği <br> Çiçekler: Pars Zambağı, Hanımeli, Verona <br> Tarot kartı: İmparator <br> Mottonuz: Yeter ki hevesim kırılmasın! <br> YORUM: Tenkitçidir, sert bir dille eleştirebilir. Ev hayatına ve ailesine oldukça düşkündür, fakat dışarıdaki hayatını da fazlasıyla sever. Bu onun yerinde duramayan hareketli yapısından kaynaklanmaktadır. Daima kendini evinde huzurlu ve rahat hissetmek ister. <br>Bir Şarkı Olsaydınız? : <a href=https://youtu.be/mtLwmoYxD34 target=_blank>  Candan Erçetin- Sevdim Sevilmedim  ";
                break;
            case "Boğa":
                yorum = "<h4><strong> BURCUNUZ BOĞA!  (20 Nisan – 20 Mayıs)</strong>   </h4><br> Element: Toprak  Yönetici <br> Gezegen: Venüs <br> Nitelik: Sabit <br> Şanslı Sayınız: 6  <br> Uğurlu Taşınız: Zümrüt <br>   Şanslı Gününüz: Cuma <br>  Renginiz: Lila <br>  Çiçekler: Gelincik, Menekşe <br>  Tarot kartı: İmparatoriçe <br>  Mottonuz: Huzurun olmadığı yerde iyi bir hayat mümkün değildir.<br> YORUM: Boğa burcu erkeği karşı cins tarafından oldukça beğenilir. İlişkilerinde sadıktır ve her anlamda fedakardır. Lüksten ve konfordan fazlasıyla keyif alır. Cömerttir, fakat savurgan değildir. En sadık dostlar boğa burcu erkeklerinden çıkar.  <br>  Bir Şarkı Olsaydınız? : <a href= https://youtu.be/mDM__YHIeWo target=_blank> Levent Yüksel- Yeter ki Onursuz Olmasın Aşk ";
                break;
            case "İkizler":
                yorum = "<h4><strong> BURCUNUZ İKİZLER! (21 Mayıs – 21 Haziran) </strong>  </h4><br> Element: Hava <br> Yönetici Gezegen: Merkür <br> Nitelik: Değişken <br> Şanslı Sayınız: 5 <br> Uğurlu Taşınız: Akik <br> Şanslı Gününüz: Çarşamba <br> Renginiz: Sarı <br> Çiçekler: İnci Çiçeği, Lavanta <br> Tarot kartı: Aşıklar <br> Mottonuz: Arkadaşlarım benim için her zaman önceliklidir!  <br> YORUM İkizler erkeği savurganlığı sever ve para konularında fazla başarılı değildir. Duygusal anlamda fazla hassas değildir ve olabildiğince işin mantıklı tarafından bakmayı sever. İkizler erkeği çok disiplinli bir ev hayatından hoşlanmaz, fakat çok severse evlenip bu evliliği devam ettirmek için çaba harcayabilir. <br> Bir Şarkı Olsaydınız ? : <a href= https://youtu.be/352QSI4nsQk  target=_blank>  Sezen Aksu - Kaçın Kurası";
                break;
            case "Yengeç":
                yorum = "<h4><strong> BURCUNUZ YENGEÇ! (22 Haziran – 22 Temmuz)</strong>  </h4> <br>  Element: Su <br> Yönetici Gezegen: Ay <br> Nitelik: Öncü <br> Şanslı Sayınız: 3 <br> Uğurlu Taşınız: İnci <br> Şanslı Gününüz: Pazartesi <br> Renginiz: Beyaz <br> Çiçekler: Nilüfer, Hezaren Çiçeği <br> Tarot kartı: Ay <br>  Mottonuz: Merhametsiz insanları hayatım boyunca haklı bulmayacağım! <br> YORUM:Yengeç burcu erkeği dürüsttür ve kendisine karşı dürüst olunmasından hoşlanır. Yalandan hoşlanmaz ve güvenmediği kişilerle bir arada bulunmaz. Aile ve ev yaşantısına fazlasıyla düşkündür ve en iyi babalar yengeç burcu erkeklerinden çıkar.  <br> Bir Şarkı Olsaydınız ? : <a href= https://youtu.be/RTpyeclPZuU target=_blank> Barış Manço – Can Bedenden Çıkmayınca  ";
                break;
            case "Aslan":
                yorum = "<h4><strong> BURCUNUZ ASLAN! (23 Temmuz – 22 Ağustos) </strong>  </h4><br>Element: Ateş<br> Yönetici Gezegen: Güneş <br> Nitelik: Sabit <br> Şanslı Sayınız: 5 <br> Uğurlu Taşınız: Elmas, Sarı safir <br> Şanslı Gününüz: Pazar <br> Renginiz: Turuncu <br> Çiçekler: Ayçiçeği, Krizantem, Orkide <br> Tarot kartı: Kader Çarkı <br> Mottonuz: Benim dediklerim sonunda her zaman doğru çıkar. <br> YORUM: Aslan burcu erkeği dostane tavırları ve girişken yapısıyla çok fazla dost edinir. Romantiktir. Birini sevdiği zaman iyi bir aşık olur. Sadıktır. Evlilikten hoşlanır ve evine bağlıdır. Çocuklarına düşkün ve sevecen bir baba olur. Tasarrufu sever.<br> Bir Şarkı Olsaydınız? : <a href= https://youtu.be/bdso4qwyul0  target=_blank> Demet Sağıroğlu- Arnavut Kaldırımı";
                break;
            case "Başak":
                yorum = "<h4><strong> BURCUNUZ BAŞAK! (23 Ağustos – 22 Eylül)</strong>  </h4> <br> Element: Toprak <br> Yönetici Gezegen: Merkür <br> Nitelik: Değişken <br> Şanslı Sayınız: 6 <br> Uğurlu Taşınız: Meryem Taşı <br> Şanslı Gününüz: Çarşamba <br> Renginiz: Yeşil <br> Çiçekler: Nergis <br> Tarot kartı: Ermiş <br> Mottonuz: Planları uyguladığım müddetçe başarılıyımdır. <br> YORUM: Başak burcu erkeği karşı cinste nezaket ve kibarlığa en az temizlik kadar önem verir. Aşık olmaktan korkar, fakat sevdiği zaman da sadık bir erkek olur. Sevdiği kişiyle dost olabilmeyi ister. Evlilikte düşünceli ve saygılı bir eş olur. Çocuklara çok düşkün olmamakla beraber iyi ve sorumluluk sahibi bir baba olacaktır. <br> Bir Şarkı Olsaydınız? : <a href= https://youtu.be/CMVtuabMeGc  target=_blank> Sezen Aksu – Kaçak";
                break;
            case "Terazi":
                yorum = "<h4><strong> BURCUNUZ TERAZİ! (23 Eylül – 22 Ekim)</strong>  </h4> <br> Element: Hava <br> Yönetici Gezegen: Venüs <br> Nitelik: Öncü <br> Şanslı Sayınız: 9 <br> Uğurlu Taşınız: Opal <br> Şanslı Gününüz: Çarşamba <br> Renginiz: Mavi <br> Çiçekler: Gül, Dişbudak <br> Tarot kartı: Aşıklar <br> Mottonuz: Dengemin bozulmasına müsaade edemem. <br> YORUM: Terazi burcu erkeği ikili ilişkilerde karşı cinste özellikle zarafet, akıl, mantık ve güzellik arar. Sert mizaçlı kadınlar ona hitap etmez. Terazi burcu erkeği aşık olduğu zaman ateşli ve sadık bir partner olacaktır. Sadakat onun için çok önemlidir. Terazi burcu erkeğinin ilişkileri uzun ömürlü olur. <br> Bir Şarkı Olsaydınız? : <a href= https://youtu.be/Wuk-PoBRW2E  target=_blank>Sezen Aksu- Karşıyım";
                break;
            case "Akrep":
                yorum = "<h4><strong> BURCUNUZ AKREP! (23 Ekim – 21 Kasım)</strong>  </h4> <br> Element: Su <br> Yönetici Gezegen: Plüton <br> Nitelik: Sabit <br> Şanslı Sayınız: 2 <br> Uğurlu Taşınız: Topaz <br> Şanslı Gününüz: Çarşamba <br> Renginiz: Patlıcan moru <br> Çiçekler: Açelya, Krizantem <br> Tarot kartı: Ölüm <br> Mottonuz: Herkes bu dünyaya yalnız gelir, yalnız gider! <br> YORUM: Akrep burcu erkeğinin bakışları çok etkilidir.Bakışlarıyla karşı tarafa duygu ve düşüncelerini kolaylıkla ifade edebilir. Çevresindeki insanların kişiliklerine dair tüm detayları anlayabilir ve yorumlayabilir. Analiz yeteneği gelişmiştir. İkili ilişkilerinde oldukça kıskandır ve eşini aşırı derecede sahiplenir. Eşiyle gurur duymak ister. <br> Bir Şarkı Olsaydınız? : <a href=https://youtu.be/cpp69ghR1IM target=_blank>Tarkan- Şımarık "
                break;
            case "Yay":
                yorum = "<h4><strong> BURCUNUZ YAY! (22 Kasım – 21 Aralık)</strong>  </h4> <br>Element: Ateş <br> Yönetici Gezegen: Jüpiter <br> Nitelik: Değişken <br> Şanslı Sayınız: 7 <br> Uğurlu Taşınız: Firuze <br> Şanslı Gününüz: Perşembe <br> Renginiz: Mor <br> Çiçekler: Nergis, Huş <br> Tarot kartı: Denge <br> Mottonuz: Hayata iyi bakarsan iyi görürsün. <br> YORUM: Özgürlüğüne aşırı derecede düşkün olan yay burcu erkeği yalnızlıktan keyif alır, ilişkilerinde kolay kolay bağlanamaz ve evlilikten korkar.Onlar için karşı cinste aradıkları en önemli özellik güzelliğin yanı sıra kafa yapısıdır. Bilgili ve kültürlü kadınlarla sohbet etmekten keyif alır.  <br> Bir Şarkı Olsaydınız? : <a href=https://youtu.be/UXK9s54VmxQ target=_blank> Yaşar- Kumralım ";
                break;
            case "Oğlak":
                yorum = "<h4><strong> BURCUNUZ OĞLAK! (22 Aralık – 19 Ocak)</strong>  </h4>  <br> Element: Toprak <br> Yönetici Gezegen: Satürn <br> Nitelik: Öncü <br> Şanslı Sayınız: 8 <br> Uğurlu Taşınız: Grena <br> Şanslı Gününüz: Cumartesi <br> Renginiz: Kahverengi <br> Çiçekler: Karanfil, Sarmaşık <br> Tarot kartı: Şeytan <br> Mottonuz: Emek olmadan yemek olmaz. <br>  YORUM: Olayları kendi doğrusuna göre değerlendirir ve yorumlar.Duygularını hemen belli etmez. Soğuk kanlı bir görünümü vardır.Oğlak burcu erkeği dostluğa çok önem verir ve dost edindiği kişileri iyi inceler ve seçer. Katı kuralları vardır ve bu kuralların dışına kolay kolay çıkmak istemez. <br>  Bir Şarkı Olsaydınız? : <a href=https://youtu.be/69VJnj9k3N4  target=_blank> Levent Yüksel- Medcezir ";
                break;
            case "Kova":
                yorum = " <h4><strong> BURCUNUZ KOVA! (20 Ocak – 18 Şubat)</strong> </h4> <br> Element: Hava <br> Yönetici Gezegen: Uranüs <br> Nitelik: Sabit <br> Şanslı Sayınız: 1 <br> Uğurlu Taşınız: Ametist <br> Şanslı Gününüz: Pazar <br> Renginiz: Gece mavisi <br> Çiçekler: Kardelen Çiçeği <br> Tarot kartı: Yıldız <br> Mottonuz: Özgür olmayı biliyorum. <br>  YORUM: Kova burcu erkeği dürüstlüğü ve güvenilirliği ile çevresinde hayranlık uyandırır. Sürekli aynı şeyle uğraşmaktan sıkılır ve kolayca yön değiştirebilir. Kova burcu erkeği ikili ilişkilerinde iyi bir arkadaş ve tutkulu bir aşıktır. Akıllı ve kişilikli kadınlardan hoşlanır. Duygusal ve düşünsel yoğunluğunu paylaşabilecek birini ister. Sevdiği zaman düşünceli ve eğlenceli bir partner olur. Evliliğe yatkındır ve onun gösterdiği farklılığa ayak uydurabilecek biriyle mutlu bir evliliği olur. <br> Bir Şarkı Olsaydınız? : Emel Müftüoğlu- Hovarda <a href=https://youtu.be/LvKhLG4df3Q target=_blank> ";
                break;
            case "Balık":
                yorum = "<h4><strong> BURCUNUZ BALIK! (19 Şubat – 20 Mart) </strong>  </h4><br>  Element: Su <br> Yönetici Gezegen: Neptün <br> Nitelik: Değişken <br> Şanslı Sayınız: 2 <br> Uğurlu Taşınız: Akuamarin <br> Şanslı Gününüz: Cuma <br> Renginiz: Nil yeşili <br> Çiçekler: Nilüfer, Fulya <br> Tarot kartı: Ay <br> Mottonuz: İnanmak yaşamın en anlamlı noktasıdır. <br> YORUM: Balık burcu erkeği kişiliğini ve derin duygularını anlayan biriyle evlenip ömrünün sonuna kadar mutlu olur. Eşine ve çocuklarına düşkün, sadık ve düşünceli olacaktır.  <br> Bir Şarkı Olsaydınız ? : <a href= https://youtu.be/zFM9Jq31UEY  target=_blank> Aşkın Nur Yengi - Ay İnanmıyorum";
                break;
        }
    } else if (gender === "kadın") {
        switch (burc) {
            case "Koç":
                yorum = "<h4><strong>BURCUNUZ KOÇ!  (21 Mart – 19 Nisan)  </strong> </h4><br>Element: Ateş <br> Yönetici Gezegen: Mars <br> Nitelik: Öncü <br> Şanslı Sayınız:9 <br> Uğurlu Taşınız: Yakut, Demir <br> Şanslı Gününüz: Salı <br> Renginiz: Nar Çiçeği <br> Çiçekler: Pars Zambağı, Hanımeli, Verona <br> Tarot kartı: İmparator <br> Mottonuz: Yeter ki hevesim kırılmasın! <br> YORUM: Sürekli hareketli olmayı seven koç burcu kadını boş zamanlarında da sosyal aktivitelerde bulunmak, spor yapmak ve dostlarıyla vakit geçirmekten çok keyif alır.  <br>Bir Şarkı Olsaydınız? : <a href=https://youtu.be/mtLwmoYxD34 target=_blank>  Candan Erçetin- Sevdim Sevilmedim";
                break;
            case "Boğa":
                yorum = "<h4><strong>BURCUNUZ BOĞA!  (20 Nisan – 20 Mayıs)  </strong>  </h4><br>Element: Toprak  Yönetici <br> Gezegen: Venüs <br> Nitelik: Sabit <br> Şanslı Sayınız: 6  <br> Uğurlu Taşınız: Zümrüt <br>   Şanslı Gününüz: Cuma <br>  Renginiz: Lila <br>  Çiçekler: Gelincik, Menekşe <br>  Tarot kartı: İmparatoriçe <br>  Mottonuz: Huzurun olmadığı yerde iyi bir hayat mümkün değildir.<br> YORUM:Boğa burcu kadın sessiz, sakin ve mağrur duruşuyla dikkat çeker. Gerçekçi ve otoriter bir tavrı vardır. Girdiği ortamlarda hal ve tavırlarıyla dikkati çeker. Hırslıdır ve düşlediği bir şeye ulaşmak için elinden geleni yapar.  <br>  Bir Şarkı Olsaydınız? : <a href= https://youtu.be/mDM__YHIeWo target=_blank>Levent Yüksel- Yeter ki Onursuz Olmasın Aşk ";
                break;
            case "İkizler":
                yorum = "<h4><strong>BURCUNUZ İKİZLER! (21 Mayıs – 21 Haziran)  </strong> </h4><br> Element: Hava <br> Yönetici Gezegen: Merkür <br> Nitelik: Değişken <br> Şanslı Sayınız: 5 <br> Uğurlu Taşınız: Akik <br> Şanslı Gününüz: Çarşamba <br> Renginiz: Sarı <br> Çiçekler: İnci Çiçeği, Lavanta <br> Tarot kartı: Aşıklar <br> Mottonuz: Arkadaşlarım benim için her zaman önceliklidir!  <br> YORUM: Hayal kurmayı çok sever ve daima iyi şartlarda yaşamak için uğraşırlar. İkizler kadını akıcı ve etkili konuşması ve ikna kabiliyetiyle fazlasıyla dikkat çeker ve iyi bir dosttur. İkili ilişkilerde oldukça fedakar ve iyi bir partnerdirler. <br> Bir Şarkı Olsaydınız ? : <a href= https://youtu.be/352QSI4nsQk  target=_blank> Sezen Aksu - Kaçın Kurası ";
                break;
            case "Yengeç":
                yorum = "<h4><strong>BURCUNUZ YENGEÇ! (22 Haziran – 22 Temmuz) </strong>  </h4><br> Element: Su <br> Yönetici Gezegen: Ay <br> Nitelik: Öncü <br> Şanslı Sayınız: 3 <br> Uğurlu Taşınız: İnci <br> Şanslı Gününüz: Pazartesi <br> Renginiz: Beyaz <br> Çiçekler: Nilüfer, Hezaren Çiçeği <br> Tarot kartı: Ay <br>  Mottonuz: Merhametsiz insanları hayatım boyunca haklı bulmayacağım! <br> YORUM: Yengeç burcu kadını eleştirilmeyi sevmez ve olumsuz yönlerini kabul etmekte zorlanır. İkili ilişkilerde partnerine fazlasıyla sadık, fakat bir o kadar da kıskançtır. Onun için asıl olan sevgidir.  <br> Bir Şarkı Olsaydınız ? : <a href= https://youtu.be/RTpyeclPZuU target=_blank>  Barış Manço – Can Bedenden Çıkmayınca ";
                break;
            case "Aslan":
                yorum = "<h4><strong>BURCUNUZ ASLAN! (23 Temmuz – 22 Ağustos)  </strong> </h4><br> Element: Ateş<br> Yönetici Gezegen: Güneş <br> Nitelik: Sabit <br> Şanslı Sayınız: 5 <br> Uğurlu Taşınız: Elmas, Sarı safir <br> Şanslı Gününüz: Pazar <br> Renginiz: Turuncu <br> Çiçekler: Ayçiçeği, Krizantem, Orkide <br> Tarot kartı: Kader Çarkı <br> Mottonuz: Benim dediklerim sonunda her zaman doğru çıkar. <br> YORUM: Aslan burcu kadını bağımsızlığına düşkündür ve kısıtlanmaktan hoşlanmaz. Kendine fazlasıyla güvenir ve gururludur. Çalışmaktan büyük keyif alır ve iş konusunda oldukça başarılıdır. Aslan burcu kadını cömert ve bir o kadar da savruktur. Kolay kolay para biriktiremez, çünkü süsüne ve giyimine fazlasıyla para harcar. Her şeyin en iyisini sever.  <br> Bir Şarkı Olsaydınız? : <a href= https://youtu.be/bdso4qwyul0  target=_blank> Demet Sağıroğlu- Arnavut Kaldırımı";
                break;
            case "Başak":
                yorum = "<h4><strong>BURCUNUZ BAŞAK! (23 Ağustos – 22 Eylül)  </strong> </h4><br> Element: Toprak <br> Yönetici Gezegen: Merkür <br> Nitelik: Değişken <br> Şanslı Sayınız: 6 <br> Uğurlu Taşınız: Meryem Taşı <br> Şanslı Gününüz: Çarşamba <br> Renginiz: Yeşil <br> Çiçekler: Nergis <br> Tarot kartı: Ermiş <br> Mottonuz: Planları uyguladığım müddetçe başarılıyımdır. <br> YORUM: Mükemmeliyetçidir ve ilişkisine sahip çıkar. Kendisine hayatı hoş bir biçimde sunan şefkatli ve sevecen bir erkekle ömrünün sonuna kadar mutlu olabilir. Çocukları sever ve en iyi biçimde eğitir. Hayatı kontrol edebilmek ona güven verir. <br> Bir Şarkı Olsaydınız? : <a href= https://youtu.be/CMVtuabMeGc  target=_blank> Sezen Aksu – Kaçak";
                break;
            case "Terazi":
                yorum = "<h4><strong>BURCUNUZ TERAZİ! (23 Eylül – 22 Ekim) </strong> </h4> <br> Element: Hava <br> Yönetici Gezegen: Venüs <br> Nitelik: Öncü <br> Şanslı Sayınız: 9 <br> Uğurlu Taşınız: Opal <br> Şanslı Gününüz: Çarşamba <br> Renginiz: Mavi <br> Çiçekler: Gül, Dişbudak <br> Tarot kartı: Aşıklar <br> Mottonuz: Dengemin bozulmasına müsaade edemem. <br> YORUM: Terazi burcu kadını neşeli, hassas ve duygusaldır. Olayları kendi duygularına göre yorumlar. Önemli olan kendisinin ne hissettiğidir. Bu nedenle doğru bildiğini uygulamaktan çekinmez. Özgürlüğüne düşkün olan terazi kadını kısıtlanmaktan hoşlanmaz. <br> Bir Şarkı Olsaydınız? : <a href= https://youtu.be/Wuk-PoBRW2E  target=_blank>Sezen Aksu- Karşıyım";
                break;
            case "Akrep":
                yorum = "<h4><strong>BURCUNUZ AKREP! (23 Ekim – 21 Kasım)  </strong> </h4><br> Element: Su <br> Yönetici Gezegen: Plüton <br> Nitelik: Sabit <br> Şanslı Sayınız: 2 <br> Uğurlu Taşınız: Topaz <br> Şanslı Gününüz: Çarşamba <br> Renginiz: Patlıcan moru <br> Çiçekler: Açelya, Krizantem <br> Tarot kartı: Ölüm <br> Mottonuz: Herkes bu dünyaya yalnız gelir, yalnız gider! <br> YORUM: Akrep burcu kadını yapılan iyiliği de kötülüğü de unutmaz. İntikam duygusu çok gelişmiştir. Çevresindeki kötü niyetli insanlara karşı suskun kalmayı pek tercih etmez. Akrep burcu kadını doğal cazibesiyle karşı cinsi fazlasıyla çeker. Bir ilişkide öncelikle sevgi ve saygıya önem verir. Fazlasıyla kıskançtır ve eşini aşırı derecede sahiplenir. <br> Bir Şarkı Olsaydınız? : <a href=https://youtu.be/cpp69ghR1IM target=_blank>Tarkan- Şımarık ";
                break;
            case "Yay":
                yorum = "<h4><strong>BURCUNUZ YAY! (22 Kasım – 21 Aralık)  </strong> </h4><br> Element: Ateş <br> Yönetici Gezegen: Jüpiter <br> Nitelik: Değişken <br> Şanslı Sayınız: 7 <br> Uğurlu Taşınız: Firuze <br> Şanslı Gününüz: Perşembe <br> Renginiz: Mor <br> Çiçekler: Nergis, Huş <br> Tarot kartı: Denge <br> Mottonuz: Hayata iyi bakarsan iyi görürsün. <br> YORUM: Dostlarına çok önem verir ve fedakardır.Yay burcu kadını eğlenceye ve gezmeye meraklıdır. Seyahat etmeyi, yeni yerler görmeyi ve yeni insanlarla tanışmayı sever. Maddi anlamda güçlü olmak ister. Para onun için araçtır.Cömert hatta biraz savurgandır. <br> Bir Şarkı Olsaydınız? : <a href=https://youtu.be/UXK9s54VmxQ target=_blank> Yaşar- Kumralım ";
                break;
            case "Oğlak":
                yorum = "<h4><strong>BURCUNUZ OĞLAK! (22 Aralık – 19 Ocak)  </strong>  </h4><br> Element: Toprak <br> Yönetici Gezegen: Satürn <br> Nitelik: Öncü <br> Şanslı Sayınız: 8 <br> Uğurlu Taşınız: Grena <br> Şanslı Gününüz: Cumartesi <br> Renginiz: Kahverengi <br> Çiçekler: Karanfil, Sarmaşık <br> Tarot kartı: Şeytan <br> Mottonuz: Emek olmadan yemek olmaz. <br>  YORUM:  Ellerini attıkları tüm işlerde başarılı olabilecek kapasitededirler.Oğlak burcu kadını oldukça mantıklı ve gerçekçidir.Böylece olaylar karşısında daha çabuk karar geliştirebilmektedir.Oğlak burcu kadını sevdiği erkeği fazlasıyla sahiplenir ve kendi istediği gibi olmasını ister. Özellikle karşı cinste nezaket ve dürüstlük çok önemlidir.  <br>  Bir Şarkı Olsaydınız? : <a href=https://youtu.be/69VJnj9k3N4  target=_blank> Levent Yüksel- Medcezir ";
                break;
            case "Kova":
                yorum = "<h4><strong>BURCUNUZ KOVA! (20 Ocak – 18 Şubat)  </strong> </h4><br> Element: Hava <br> Yönetici Gezegen: Uranüs <br> Nitelik: Sabit <br> Şanslı Sayınız: 1 <br> Uğurlu Taşınız: Ametist <br> Şanslı Gününüz: Pazar <br> Renginiz: Gece mavisi <br> Çiçekler: Kardelen Çiçeği <br> Tarot kartı: Yıldız <br> Mottonuz: Özgür olmayı biliyorum. <br>  YORUM: Kova burcu kadını akılcı ve sorunlara pratik çözümler bulan yapısıyla güçlü bir karakter çizer. Çalışkandır ve giriştiği her işte başarılı olur.Maddi konularda savurgandır ve düşüncesizce para harcamayı sever.Kova burcu kadını kendisini kısıtlayan beraberliklerden uzak durmayı tercih eder.Kişilik olarak zordur. İyi niyetli, kafaca uyuştuğu ve kendisini anlayan bir erkekle mutlu olabilir.  <br> Bir Şarkı Olsaydınız? : Emel Müftüoğlu- Hovarda <a href=https://youtu.be/LvKhLG4df3Q target=_blank> ";
                break;
            case "Balık":
                yorum = "<h4><strong>BURCUNUZ BALIK! (19 Şubat – 20 Mart)  </strong> </h4> <br>Element: Su <br> Yönetici Gezegen: Neptün <br> Nitelik: Değişken <br> Şanslı Sayınız: 2 <br> Uğurlu Taşınız: Akuamarin <br> Şanslı Gününüz: Cuma <br> Renginiz: Nil yeşili <br> Çiçekler: Nilüfer, Fulya <br> Tarot kartı: Ay <br> Mottonuz: İnanmak yaşamın en anlamlı noktasıdır. <br> YORUM: Balık burcu kadını çekici ve hoş mizacıyla beğenilen bir kadın tipi çizer. Güzel ve zariftir. Aşka önem verir ve duygusal anlamda derin hislere sahiptir. Daima hayalindeki aşka ulaşmak ister. Sevip, sevildiğine inandığı taktirde sadık ve tutkulu bir aşık olacaktır. Aşk onun için her şeydir. İlişkisinde fazlasıyla fedakardır.  <br> Bir Şarkı Olsaydınız ? : <a href= https://youtu.be/zFM9Jq31UEY  target=_blank> Aşkın Nur Yengi - Ay İnanmıyorum";
                break;
        }
    }

    document.getElementById("burc-yorumu").innerHTML = yorum;
}
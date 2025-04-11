function hesapla2() {
    var date = new Date(document.getElementById("date").value);
    var month = date.getMonth() + 1;
    var day = date.getDate();

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



    var dt = (document.getElementById("dt").value);
    var time = dt.split(":")[0];
    console.log("burc: " + burc);
    console.log("time: " + time);
    var sonuc;
    if (time == 6 || time == 7) {
        switch (burc) {
            case "Koç":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
        }
    }
    else if (time == 8 || time == 9) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Balık":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
        }
    }
    else if (time == 10 || time == 11) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Kova":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
        }
    }
    else if (time > 11 && time <= 13) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Oğlak":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
        }
    }
    else if (time > 13 && time <= 15) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Yay":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
        }
    }
    else if (time > 15 && time <= 17) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Akrep":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
        }
    }
    else if (time > 17 && time <= 19) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Terazi":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
        }
    }
    else if (time > 19 && time <= 21) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Başak":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
        }
    }
    else if (time > 21 && time <= 23) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Aslan":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
        }
    }
    else if (time > 23 && time <= 1) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Yengeç":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
        }
    }
    else if (time > 1 && time <= 3) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
            case "Boğa":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "İkizler":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
        }
    }
    else if (time > 3 && time <= 5) {
        switch (burc) {
            case "Koç":
                sonuc = "<h4><strong> Yükseleniniz Balık ! </strong></h4><h5><br>Yükselen burcu Balık olanlar duygularının sesine kulak verirler.<br>Topluma, insanlara karşı duyarlıdırlar.<br>Hassaslardır.<br>Onlar için hayatın keyifli tarafı önemlidir. <br>Kargaşalar, kötülüklerle savaşmak onlara göre değildir. </h5>";
                break;
            case "Boğa":
                sonuc = " <h4> <strong> Yükseleniniz Koç ! </strong> </h4><h5><br>Yükselen burcu Koç olanlar savaşçı karakterleriyle hayatta her zorluğun üstesinden gelebilirler. <br>Baskın karakterleriyle ön plana çıkabilirler. <br>Doğru bildiklerinden şaşmazlar.<br> Rekabetçidirler.<br> Cesaretleri en büyük avantajlarıdır. </h5>";
                break;
            case "İkizler":
                sonuc = "<h4><strong> Yükseleniniz Boğa ! </strong></h4><h5><br>Yükselen burcu Boğa olanlar hayatlarında genel olarak sakin bir yapıya sahiptir.  <br>Ağır kanlıdırlar. <br> Aceleci işleri sevmezler.<br> Sabrederek doğruyu bulacaklarını düşünürler. <br>Eğer sabırları zorlanmazsa kolay kolay sinirlenmezler. </h5>";
                break;
            case "Yengeç":
                sonuc = "<h4><strong> Yükseleniniz İkizler ! </strong></h4><h5><br>Yükselen İkizler burcu olanlar kendi enerjilerine bile ayak uydurmada zorlanabilirler. <br>İkizler’in yüksek zekası ve hareketli yapısı yükselen burç olduğunda daha da öne çıkar. <br>Dostluklara önem verirler. <br>Sosyalleşmek, yakınlarıyla paylaşımlar yapmak önemlidir. <br>İçine kapanmak veya yalnız bir hayat sürmek onlara göre değildir. </h5>";
                break;
            case "Aslan":
                sonuc = "<h4><strong> Yükseleniniz Yengeç ! </strong></h4><h5><br>Yükselen burcu Yengeç olanlar için hayattaki öncelikleri sevdikleridir. <br>Onların güvende olmaları her şeyden önemlidir. <br>Koruma iç güdüleri oldukça fazladır.<br> Herkesin her şeyinin tam olmasını isterler. <br>Kendilerine gelince önemsemedikleri şeyleri, başkalarının başına geldiğinde önemserler. </h5>";
                break;
            case "Başak":
                sonuc = "<h4><strong> Yükseleniniz Aslan! </strong></h4><h5><br>Yükselen burcu Aslan olanların toplumdaki itibarı ve gururu her şeyden önce gelir.<br> Kendini öne atmaktan hoşlanan kişilerdir.<br> Her konuda üstün olmaları gerektiğine inanırlar.<br>Kendilerini gerektiği zaman övmeyi, yüceltmeyi severler.  <br>Hırslı yapıları sayesinde kısa sürede diğer insanlar arasından sıyrılabilirler. </h5>";
                break;
            case "Terazi":
                sonuc = "<h4><strong> Yükseleniniz Başak ! </strong></h4><h5><br>Yükselen Başak burcu her zaman yaptığı işin en ince ayrıntılara dikkat eder.<br> Bu sebeple de başarılı kişilerin bu burçtan çıkması tesadüf olmaz.<br>Giyimine, saçına, stiline önem gösterir.<br>Her zaman temiz ve bakımlıdır.<br>Konuşma yetenekleri sayesinde bulundukları ortamda sevilirler. </h5> ";
                break;
            case "Akrep":
                sonuc = "<h4><strong> Yükseleniniz Terazi ! </strong></h4><h5><br>Yükselen Terazi burcu olanlar ilk bakışta zarafetleriyle, güzellikleriyle dikkat çekerler.<br>Erkekleri ve kadınları çekicidirler.<br>Ortamda değişik bir elektrik yayarlar.<br>Bakımlıdırlar.<br>Sempatik tavırlarıyla tanıştıkları ilk anda kolayca iletişim kurabilirler. </h5>";
                break;
            case "Yay":
                sonuc = "<h4><strong> Yükseleniniz Akrep ! </strong></h4><h5><br>Yükselen Akrep burcu olanların duygusal yönleri daha ön planda olur.<br>Sürekli bir güven arayışındadırlar.<br>Kuşkulu olmaları hayatta çok az insana güvenmelerine neden olur.<br> Hep yapılan işlerin arkasından bir art niyet ararlar.<br> Bu şüpheci tavrı da güven duymakta işleri zorlaştırır. </h5>";
                break;
            case "Oğlak":
                sonuc = "<h4><strong> Yükseleniniz Yay ! </strong></h4><h5><br>Yükselen Yay burcu olanlar neşeleriyle ışık saçarlar. <br>Her zaman pozitif olan bu karakter girdiği ortama pozitif enerji verir.<br>Dostluklara önem verir. <br>Konuşmayı severler.<br>İnsanların paylaştıkça güçleneceğini düşünürler. </h5>";
                break;
            case "Kova":
                sonuc = "<h4><strong> Yükseleniniz Oğlak ! </strong></h4><h5><br>Yükselen burcu Oğlak olanlar her zaman mantıklarının sesine güvenirler. <br>Duyguların pek yer almadığı bu karakterde, hayatındaki hedeflere ulaşmak öncelik taşır. <br>Detaycı ve analitik düşünebilen yapılarıyla büyük sorumluluk isteyen işler için aranılan kişilerdir.<br> Aldıkları sorumlulukları kusursuz yerine getirirler.<br> Hatta bir adım daha da iyisini yaparak işi bitirirler. </h5>";
                break;
            case "Balık":
                sonuc = "<h4><strong> Yükseleniniz Kova ! </strong></h4><h5><br>Yükselen Kova burcu olanlar direkt farklılıklarıyla kendilerini belli ederler.<br>Topluma göre marjinal bir çizgileri vardır. <br>Bu illa ki dış görünüşleriyle olmak zorunda değildir. <br>Yaptıkları meslekler, hayat görüşleri veya yaşam biçimleri genel kabul görmüş kriterlere göre farklıdır.<br> Özgür ruh olmaları kolay kolay başkalarının yönetimi altına giremeyeceklerini gösterir. </h5>";
                break;
        }

    }
    else {
        sonuc = "Yükselen hesaplanamadı.";
    }
    document.getElementById("yukselen-sonuc").innerHTML = sonuc;
}
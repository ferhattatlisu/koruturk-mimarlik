/* =====================================================================
   SİTE İÇERİĞİ — KORUTÜRK MİMARLIK & MÜHENDİSLİK
   =====================================================================
   Bu dosya sitenin tek içerik kaynağıdır (şablon: mono-mimarlik).
   Metinler, görseller ve iletişim bilgisi firmanın kendi Instagram
   paylaşımlarından (@koruturk_mimarlik_muhendislik) derlenmiştir.
   Görsellerin kaynağı ve firmayla teyit edilecekler: ARASTIRMA.md
   Galeri: { src, wide: true } tam genişlik, { src, wide: false } yarım genişlik.
   ===================================================================== */

(function () {
  window.SITE = {

    brand: {
      name: "KORUTÜRK",
      suffix: "Mimarlık",
      description: "Korutürk Mimarlık & Mühendislik; 1996'dan beri Burhaniye / Balıkesir merkezli mimari proje, mühendislik ve uygulama hizmeti veren bir ofistir.",
      founded: 1996
    },

    nav: [
      { label: "Projeler", href: "projeler.html" },
      { label: "Stüdyo",   href: "studyo.html" },
      { label: "İletişim", href: "studyo.html#iletisim" }
    ],

    headlines: [
      ["1996'DAN BERİ",  "YAŞAM ALANLARI"],
      ["FİKİRDEN",       "YAPIYA"],
      ["HER ÇİZGİDE",    "BİR DÜŞÜNCE"],
      ["MİMARİ,",        "MÜHENDİSLİK"],
      ["HER DETAYDA",    "SORUMLULUK"]
    ],
    heroVideo: "",
    heroVideoCaption: "",
    heroSlides: [
      { image: "images/asgard-otel-13.jpg",       caption: "Asgard Otel — Burhaniye" },
      { image: "images/cunda-villa-2016-02.jpg",  caption: "Cunda Villa — Ayvalık, 2016" },
      { image: "images/burcu-gida-02.jpg",        caption: "Burcu Gıda Yönetim Binası — ince inşaat" },
      { image: "images/ida-gold-01.jpg",          caption: "Ida Gold Resort — Ören" },
      { image: "images/oren-villa-01.jpg",        caption: "Ören Villa — Burhaniye" }
    ],

    manifesto: "1996'da başlayan yolculuğumuzda [mimarlığı] estetikle, [mühendisliği] güvenle ve deneyimi geleceğin yapılarıyla buluşturuyoruz. Her projede aynı [özen], her detayda aynı [sorumluluk].",
    manifestoNote: "Burhaniye'den Cunda'ya, Ören ve İskele'ye; villa, konut, otel ve ticari yapılarda 30 yıldır fikirden yapıya.",

    split: [
      {
        label: "Yaklaşım",
        title: "Fikirden yapıya.",
        text: "Mimari, mühendislik ve uygulama süreçlerinde estetiği, işlevselliği ve deneyimi bir araya getiriyoruz. Yaşam alanlarını yalnızca tasarlamıyor, deneyime dönüştürüyoruz.",
        linkLabel: "Stüdyoyu tanıyın",
        linkHref: "studyo.html",
        images: ["images/asgard-otel-04.jpg", "images/burcu-gida-03.jpg", "images/cunda-villa-2016-03.jpg"]
      },
      {
        label: "Malzeme",
        title: "Taş, form ve oran.",
        text: "Doğal taş cepheler, ahşap ve ışık; hepsi bir bütünün parçası. Her projede sadece yapı değil, karakter inşa etmeyi hedefliyoruz.",
        linkLabel: "Projeleri inceleyin",
        linkHref: "projeler.html",
        images: ["images/asgard-otel-06.jpg", "images/burcu-gida-06.jpg", "images/cunda-villa-2016-04.jpg"]
      }
    ],

    projects: [
      {
        slug: "asgard-otel",
        title: "Asgard Otel",
        tagline: "Doğal taş cepheli, klasik detayları modern yapı anlayışıyla buluşturan butik otel.",
        location: "Taylıeli, Burhaniye",
        year: 2025,
        area: "",
        category: "Konaklama",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: true,
        cover: "images/asgard-otel-01.jpg",
        text: [
          "Asgard Otel, Burhaniye Taylıeli'nde körfezin butik otellerinden biri olmak üzere 2023'te TKDK hibe programıyla başlayan bir projedir. Korutürk Mimarlık & Mühendislik tarafından tasarlanan yapıda klasik mimari detaylar modern yapı anlayışıyla buluşuyor.",
          "Doğal taş cepheler, güçlü kolon yapısı ve ince işçilik detayları yapının karakterini belirliyor. Odalar, sauna, hamam ve restoran ile otelin tamamlandığı Temmuz 2025'te duyuruldu; gece aydınlatmasıyla taş ve form ön plana çıkıyor."
        ],
        gallery: [
          { src: "images/asgard-otel-02.jpg", wide: false },
          { src: "images/asgard-otel-03.jpg", wide: false },
          { src: "images/asgard-otel-04.jpg", wide: false },
          { src: "images/asgard-otel-05.jpg", wide: false },
          { src: "images/asgard-otel-06.jpg", wide: false },
          { src: "images/asgard-otel-07.jpg", wide: false },
          { src: "images/asgard-otel-08.jpg", wide: false },
          { src: "images/asgard-otel-09.jpg", wide: false },
          { src: "images/asgard-otel-10.jpg", wide: false },
          { src: "images/asgard-otel-11.jpg", wide: false },
          { src: "images/asgard-otel-12.jpg", wide: false },
          { src: "images/asgard-otel-13.jpg", wide: false },
          { src: "images/asgard-otel-14.jpg", wide: false },
          { src: "images/asgard-otel-15.jpg", wide: false },
          { src: "images/asgard-otel-16.jpg", wide: false },
          { src: "images/asgard-otel-17.jpg", wide: false },
          { src: "images/asgard-otel-18.jpg", wide: false },
          { src: "images/asgard-otel-19.jpg", wide: false }
        ]
      },
      {
        slug: "burcu-gida",
        title: "Burcu Gıda Yönetim Binası",
        tagline: "Çok katlı ışıklıklı bir yönetim binasında ince inşaat uygulamaları.",
        location: "",
        year: "",
        area: "",
        category: "Ofis",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: true,
        cover: "images/burcu-gida-01.jpg",
        text: [
          "Burcu Gıda Yönetim Binası projesinde ince inşaat uygulamalarını Korutürk Mimarlık & Mühendislik olarak üstlendik.",
          "Cam korkuluklu merdiven, ahşap lamelli bölmeler ve bitkili ara bahçe, toplantı odaları, mermer görünümlü karşılama bankosu ve çalışma ofisleri; yapının her katında aynı özen. “Özel projelerde farklı detaylar, aynı güven.”"
        ],
        gallery: [
          { src: "images/burcu-gida-02.jpg", wide: false },
          { src: "images/burcu-gida-03.jpg", wide: false },
          { src: "images/burcu-gida-04.jpg", wide: false },
          { src: "images/burcu-gida-05.jpg", wide: false },
          { src: "images/burcu-gida-06.jpg", wide: false },
          { src: "images/burcu-gida-07.jpg", wide: false },
          { src: "images/burcu-gida-08.jpg", wide: false },
          { src: "images/burcu-gida-09.jpg", wide: false },
          { src: "images/burcu-gida-10.jpg", wide: false },
          { src: "images/burcu-gida-11.jpg", wide: false },
          { src: "images/burcu-gida-12.jpg", wide: false },
          { src: "images/burcu-gida-13.jpg", wide: false },
          { src: "images/burcu-gida-14.jpg", wide: false },
          { src: "images/burcu-gida-15.jpg", wide: false },
          { src: "images/burcu-gida-16.jpg", wide: false },
          { src: "images/burcu-gida-17.jpg", wide: false }
        ]
      },
      {
        slug: "ida-gold",
        title: "Ida Gold Resort",
        tagline: "Ören'in doğasına, denizine ve silüetine yeni bir iz bırakan otel projesi.",
        location: "Ören, Burhaniye",
        year: "",
        area: "",
        category: "Konaklama",
        status: "Yapım aşamasında",
        client: "",
        featured: true,
        showcase: true,
        cover: "images/ida-gold-01.jpg",
        text: [
          "Ida Gold Resort, Korutürk Mimarlık & Mühendislik imzasını taşıyan bir otel projesi. Yapı Ören'de, denize yakın bir konumda yükseliyor.",
          "Fotoğraflar yapının şantiye aşamasını gösteriyor: açık balkonlu beyaz cephe ve kolon düzeni belirgin."
        ],
        gallery: [
          { src: "images/ida-gold-02.jpg", wide: false },
          { src: "images/ida-gold-03.jpg", wide: false },
          { src: "images/ida-gold-04.jpg", wide: false },
          { src: "images/ida-gold-05.jpg", wide: false },
          { src: "images/ida-gold-06.jpg", wide: false }
        ]
      },
      {
        slug: "cunda-villa-2016",
        title: "Cunda Villa",
        tagline: "Zamansız mimari: yıllar geçtikçe değerini daha iyi gösteren bir villa.",
        location: "Cunda, Ayvalık",
        year: 2016,
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: true,
        cover: "images/cunda-villa-2016-02.jpg",
        text: [
          "2016 yılında Cunda'da hayata geçirdiğimiz villa projesi. Mimari çizgisi, açık yaşam alanları, peyzajı ve Ege'nin karakteriyle bütünleşen detaylarıyla, üzerinden 10 yıl geçmesine rağmen hâlâ ilk günkü duruşunu koruyor."
        ],
        gallery: [
          { src: "images/cunda-villa-2016-01.jpg", wide: false },
          { src: "images/cunda-villa-2016-03.jpg", wide: false },
          { src: "images/cunda-villa-2016-04.jpg", wide: false }
        ]
      },
      {
        slug: "oren-villa",
        title: "Ören Villa",
        tagline: "Sade çizgiler, güçlü duruş, zamansız bir mimari.",
        location: "Ören, Burhaniye",
        year: "",
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: false,
        cover: "images/oren-villa-01.jpg",
        text: [
          "Ören'de bir yaşam fikrinin gerçeğe dönüştüğü villa. Doğal ışıkla bütünleşen sade ve güçlü mimari dili, projeye karakter kazandırıyor.",
          "Mavi çerçeveli cam cephe, ahşap kaplamalı giriş ve geniş bahçeyle kurulan kütle; estetik, konfor ve sürdürülebilirliği bir araya getiriyor."
        ],
        gallery: [
          { src: "images/oren-villa-02.jpg", wide: false },
          { src: "images/oren-villa-03.jpg", wide: false },
          { src: "images/oren-villa-04.jpg", wide: false },
          { src: "images/oren-villa-05.jpg", wide: false },
          { src: "images/oren-villa-06.jpg", wide: false },
          { src: "images/oren-villa-07.jpg", wide: false },
          { src: "images/oren-villa-08.jpg", wide: false },
          { src: "images/oren-villa-09.jpg", wide: false },
          { src: "images/oren-villa-10.jpg", wide: false }
        ]
      },
      {
        slug: "iskele-villa",
        title: "İskele Villa",
        tagline: "Modern çizgi, doğal dokunuş, zamansız bir yaşam.",
        location: "İskele, Burhaniye",
        year: "",
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "",
        featured: true,
        showcase: false,
        cover: "images/iskele-villa-01.jpg",
        text: [
          "İskele'de, Burhaniye'de tasarladığımız bu villa; estetik ile fonksiyonun dengesini kuruyor.",
          "Koyu gri ve beyaz hacimler, ahşap kaplamalı balkon altları ve palmiyeli bahçe ile geniş yaşam alanlarını doğal malzeme dokularıyla buluşturuyor."
        ],
        gallery: [
          { src: "images/iskele-villa-02.jpg", wide: false },
          { src: "images/iskele-villa-03.jpg", wide: false },
          { src: "images/iskele-villa-04.jpg", wide: false },
          { src: "images/iskele-villa-05.jpg", wide: false },
          { src: "images/iskele-villa-06.jpg", wide: false },
          { src: "images/iskele-villa-07.jpg", wide: false },
          { src: "images/iskele-villa-08.jpg", wide: false },
          { src: "images/iskele-villa-09.jpg", wide: false },
          { src: "images/iskele-villa-10.jpg", wide: false },
          { src: "images/iskele-villa-11.jpg", wide: false },
          { src: "images/iskele-villa-12.jpg", wide: false },
          { src: "images/iskele-villa-tasarim-01.jpg", wide: false },
          { src: "images/iskele-villa-tasarim-02.jpg", wide: false }
        ]
      },
      {
        slug: "cunda-villa",
        title: "Cunda Havuzlu Villa",
        tagline: "Modern mimari ve fonksiyonelliği bir araya getiren, taş kaplamalı havuzlu villa.",
        location: "Cunda, Ayvalık",
        year: "",
        area: "",
        category: "Villa",
        status: "Tamamlandı",
        client: "",
        featured: false,
        showcase: false,
        cover: "images/cunda-villa-01.jpg",
        text: [
          "Ayvalık / Cunda'da hayata geçirdiğimiz villa projesinde modern mimari ve fonksiyonelliği bir araya getirdik. Denize birkaç adım mesafedeki bu yapı, Korutürk dokunuşuyla sadece bir yapı değil, bir yaşam hissi.",
          "Taş kaplamalı cephe, ahşap detaylar, havuz ve bahçe; yerleşimin kuşbakışı görüntüsünde de villanın çevresiyle ilişkisi görülüyor."
        ],
        gallery: [
          { src: "images/cunda-villa-02.jpg", wide: false },
          { src: "images/cunda-villa-03.jpg", wide: false },
          { src: "images/cunda-villa-04.jpg", wide: false },
          { src: "images/cunda-villa-05.jpg", wide: false },
          { src: "images/cunda-villa-06.jpg", wide: false },
          { src: "images/cunda-villa-07.jpg", wide: false },
          { src: "images/cunda-villa-08.jpg", wide: false },
          { src: "images/cunda-villa-09.jpg", wide: false },
          { src: "images/cunda-villa-10.jpg", wide: false },
          { src: "images/cunda-villa-2016-01.jpg", wide: false },
          { src: "images/cunda-villa-2016-02.jpg", wide: false },
          { src: "images/cunda-villa-2016-03.jpg", wide: false },
          { src: "images/cunda-villa-2016-04.jpg", wide: false }
        ]
      },
      {
        slug: "cunda-1-1",
        title: "Cunda 1+1 Konut",
        tagline: "Cunda'nın dokusuyla uyumlu, 38 m² kapalı alanlı 1+1.",
        location: "Cunda, Ayvalık",
        year: "",
        area: "38 m² kapalı",
        category: "Konut",
        status: "Tamamlandı",
        client: "",
        featured: false,
        showcase: false,
        cover: "images/cunda-1-1-01.jpg",
        text: [
          "Cunda'nın benzersiz atmosferinde hayata geçirilen, 38 m² kapalı kullanım alanına sahip 1+1 konut projesi. Modern mimari anlayışı, fonksiyonel yaşam alanları ve özenle seçilen malzemelerle tasarlandı.",
          "Doğal ışığı verimli kullanan cepheler, havuz ve bahçe; iç mekânda mutfak, oturma alanı, yatak odası ve banyo."
        ],
        gallery: [
          { src: "images/cunda-1-1-02.jpg", wide: false },
          { src: "images/cunda-1-1-03.jpg", wide: false },
          { src: "images/cunda-1-1-04.jpg", wide: false },
          { src: "images/cunda-1-1-05.jpg", wide: false },
          { src: "images/cunda-1-1-06.jpg", wide: false },
          { src: "images/cunda-1-1-07.jpg", wide: false },
          { src: "images/cunda-1-1-08.jpg", wide: false },
          { src: "images/cunda-1-1-09.jpg", wide: false },
          { src: "images/cunda-1-1-10.jpg", wide: false },
          { src: "images/cunda-1-1-11.jpg", wide: false },
          { src: "images/cunda-1-1-12.jpg", wide: false }
        ]
      },
      {
        slug: "bahadinli-villa",
        title: "Bahadınlı Villa",
        tagline: "Doğayla uyumlu, estetik ve fonksiyonel bir villa; yapımı sürüyor.",
        location: "Bahadınlı, Burhaniye",
        year: "",
        area: "",
        category: "Villa",
        status: "Yapım aşamasında",
        client: "",
        featured: false,
        showcase: false,
        cover: "images/bahadinli-villa-01.jpg",
        text: [
          "Burhaniye / Bahadınlı'nın doğal dokusu içinde, modern çizgilerle şekillenen villa projesinde çalışmalar devam ediyor.",
          "Fotoğraflarda kiremit çatılı kütle ve ince işçilik aşamasındaki iç mekânlar görülüyor: açık planlı salon, yeşil dolaplı ve ahşap şeritli mutfak adası, ferah koridorlar."
        ],
        gallery: [
          { src: "images/bahadinli-villa-02.jpg", wide: false },
          { src: "images/bahadinli-villa-03.jpg", wide: false },
          { src: "images/bahadinli-villa-04.jpg", wide: false },
          { src: "images/bahadinli-villa-05.jpg", wide: false },
          { src: "images/bahadinli-villa-06.jpg", wide: false },
          { src: "images/bahadinli-villa-07.jpg", wide: false },
          { src: "images/bahadinli-villa-08.jpg", wide: false },
          { src: "images/bahadinli-villa-09.jpg", wide: false }
        ]
      },
      {
        slug: "asgard-ic-mekan",
        title: "Asgard Deluxe Otel — İç Mekân",
        tagline: "Doğal doku, modern çizgi ve ışığın dengesiyle kurulan otel iç mekânı.",
        location: "Burhaniye",
        year: "",
        area: "",
        category: "Konaklama",
        status: "Tasarım",
        client: "",
        featured: false,
        showcase: false,
        cover: "images/asgard-ic-mekan-01.jpg",
        text: [
          "Asgard Deluxe Otel'e bir de Korutürk Mimarlık & Mühendislik'in gözünden bakış: mekânın yalnızca dışını değil, iç mimarisini de en yalın ve etkileyici haliyle yansıtan bir yaklaşım.",
          "Bu sayfadaki görseller üç boyutlu iç mekân çalışmasıdır; işlenmiş ahşap kirişler, hasır dokulu mobilyalar ve açık tonlar öne çıkıyor."
        ],
        gallery: [
          { src: "images/asgard-ic-mekan-02.jpg", wide: false },
          { src: "images/asgard-ic-mekan-03.jpg", wide: false },
          { src: "images/asgard-ic-mekan-04.jpg", wide: false },
          { src: "images/asgard-ic-mekan-05.jpg", wide: false },
          { src: "images/asgard-ic-mekan-06.jpg", wide: false },
          { src: "images/asgard-ic-mekan-07.jpg", wide: false },
          { src: "images/asgard-ic-mekan-08.jpg", wide: false }
        ]
      },
      {
        slug: "iskele-villa-tasarim",
        title: "İskele Villa — Tasarım",
        tagline: "Geniş yaşam alanları ve doğal malzeme dokuları bir arada.",
        location: "İskele, Burhaniye",
        year: "",
        area: "",
        category: "Villa",
        status: "Tasarım",
        client: "",
        featured: false,
        showcase: false,
        cover: "images/iskele-villa-tasarim-01.jpg",
        text: [
          "İskele, Burhaniye'de bir villa projesi için hazırlanan üç boyutlu görseller: modern mimari çizgiler, geniş yaşam alanları ve doğal malzeme dokuları.",
          "Gündüz ve gece görünümü birlikte gösteriliyor."
        ],
        gallery: [
          { src: "images/iskele-villa-tasarim-02.jpg", wide: false }
        ]
      },
      {
        slug: "parla-suits",
        title: "Parla Suits",
        titleLang: "en",
        tagline: "Havuzlu 1+0, 1+1 ve 2+1 dairelerden oluşan, minimalist mimariyle tasarlanan yaşam projesi.",
        location: "Ören, Burhaniye",
        year: "",
        area: "",
        category: "Konut",
        status: "Tanıtım aşamasında",
        client: "",
        featured: false,
        showcase: false,
        cover: "images/parla-suits-01.jpg",
        text: [
          "Korutürk İnşaat'ın 30 yıllık tecrübesiyle tasarlanan Parla Suits, minimalist mimariyle şekilleniyor. Projede havuzlu 1+0, 1+1 ve 2+1 daireler, açık yüzme havuzu, açık otopark, sosyal teras ve 7/24 güvenlik yer alıyor.",
          "Aşağıdaki görseller proje tanıtım afişleridir; tamamlanmış yapı fotoğrafı henüz yoktur."
        ],
        gallery: [
          { src: "images/parla-suits-02.jpg", wide: false }
        ]
      }
    ],

    services: [
      { title: "Mimari Proje", short: "Konut, villa, otel ve ticari yapılar.", text: "Konsept tasarımdan yapıya uzanan mimari çalışma. Çizgiyi, malzemeyi ve oranı yapının bulunduğu çevreyle birlikte düşünüyoruz." },
      { title: "Mühendislik", short: "Güvenle ayakta duran yapılar.", text: "Mimari fikrin güvenle hayata geçmesini sağlayan mühendislik hizmetleri; 1996'dan beri 1000'den fazla konut ve sanayi yapısında edinilen deneyim." },
      { title: "İnşaat ve Uygulama", short: "Şantiyeden teslime.", text: "Yapının kaba inşaatından ince inşaat uygulamalarına kadar şantiye süreci; Burcu Gıda Yönetim Binası'nda olduğu gibi yalnızca ince inşaat da üstlenilebilir." },
      { title: "İç Mimari", short: "Yapıyla bütünleşen iç mekânlar.", text: "Malzeme, renk ve formun uyumuyla yaşam alanlarına estetik ve işlevsellik katan iç mekân çalışmaları; Asgard Deluxe Otel iç mimari tasarımı buna örnektir." }
    ],

    news: [
      { tag: "30. yıl",  date: "Ekim 2026",    title: "30 yıl. Binlerce çizgi, yüzlerce fikir, sayısız detay.", image: "images/genel-01.jpg", link: "" },
      { tag: "Proje",    date: "Mayıs 2026",   title: "Ida Gold Resort, Ören'de yükseliyor",                   image: "images/ida-gold-02.jpg", link: "proje.html?id=ida-gold" },
      { tag: "Proje",    date: "Haziran 2026", title: "Parla Suits çok yakında",                               image: "images/parla-suits-01.jpg", link: "proje.html?id=parla-suits" },
      { tag: "Teslim",   date: "Temmuz 2025",  title: "Asgard Otel, Burhaniye turizmine alternatif bir sunumla tamamlandı", image: "images/asgard-otel-16.jpg", link: "proje.html?id=asgard-otel" }
    ],

    studio: {
      headline: "1996'dan beri Burhaniye'de mimari, mühendislik ve uygulama.",
      image: "images/oren-villa-02.jpg",
      text: [
        "Korutürk Mimarlık & Mühendislik, 1996'dan bu yana Körfez Bölgesi'nde konut, villa, otel ve ticari yapılar tasarlayıp hayata geçiriyor. Merkezimiz Burhaniye, Balıkesir.",
        "Cunda'daki özel villalardan Ören ve İskele'deki konutlara, otel projelerinden yönetim binalarına kadar işlerde aynı özeni ve aynı sorumluluğu taşımaya çalışıyoruz.",
        "Mimariyi estetikle, mühendisliği güvenle, deneyimi geleceğin yapılarıyla buluşturuyoruz."
      ],
      stats: [
        { value: "1996",  label: "Kuruluş" },
        { value: "30",    label: "Yıllık deneyim" },
        { value: "1000+", label: "Konut ve sanayi yapısı" }
      ]
    },

    team: [
      { name: "Erhan Korutürk", role: "Kurucu, İnşaat Mühendisi", image: "" }
    ],

    offices: [
      { city: "Burhaniye", code: "BRH", timeZone: "Europe/Istanbul", address: "Burhaniye, Balıkesir", phone: "+90 532 422 56 85" }
    ],

    labels: {
      featured: "Öne Çıkan Projeler",
      showcaseLabel: "Seçilmiş işler",
      showcaseTitle: "Projeler",
      allProjects: "Tüm projeleri gör",
      services: "Hizmetler",
      servicesTitle: "Fikirden yapıya.",
      news: "Haberler",
      newsTitle: "Korutürk'ten",
      offices: "Ofisimiz",
      team: "Kurucu",
      teamTitle: "Ofisin kurucusu.",
      studio: "Stüdyo",
      contact: "İletişim",
      view: "İNCELE",
      next: "SONRAKİ",
      nextProject: "Sonraki proje",
      more: "İncele"
    },

    contact: {
      headline: "Birlikte bir yapı tasarlayalım.",
      email: "koruturkerhan@gmail.com",
      phone: "+90 532 422 56 85",
      social: [
        { label: "Instagram", href: "https://www.instagram.com/koruturk_mimarlik_muhendislik/" }
      ]
    }
  };
})();

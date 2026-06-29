/* =========================================================
   UMERVION — interactions + i18n (TR / EN / DE)
   ========================================================= */
(function () {
  "use strict";

  /* =========================================================
     I18N DICTIONARY
     ========================================================= */
  const I18N = {
    tr: {
      "meta.title": "Umervion · Global Trade Partners | Uluslararası Ticaret, E-Ticaret & Gastronomi",

      "nav.about": "Hakkımızda",
      "nav.restaurants": "Restoranlarımız",
      "nav.services": "Hizmetler",
      "nav.sectors": "Faaliyet Alanları",
      "nav.why": "Neden Umervion",
      "nav.contact": "İletişim",

      "hero.eyebrow": "Uluslararası Ticaret · E-Ticaret · Gastronomi",
      "hero.title": 'Sınırların Ötesinde<br /><span class="gold-text">Bağlantılar Kuruyoruz</span>',
      "hero.sub": "Güven, deneyim ve uzun vadeli iş ortaklıklarıyla Avrupa ve Türkiye arasında ticaret, e-ticaret, gastronomi ve iş geliştirme alanlarında sürdürülebilir fırsatlar oluşturuyoruz.",
      "hero.btnServices": "Hizmetlerimiz",
      "hero.btnContact": "Bize Ulaşın",

      "tag.trade": "Uluslararası Ticaret",
      "tag.ecom": "E-Ticaret",
      "tag.food": "Gıda",
      "tag.gastro": "Gastronomi",
      "tag.bizdev": "İş Geliştirme",

      "about.badgeNum": 'Türkiye<span class="amp">&</span>Avrupa',
      "about.badgeLabel": "İki kıtayı buluşturan iş anlayışı",
      "about.eyebrow": "Hakkımızda",
      "about.lead": 'Avrupa ve Türkiye arasında ticaret, e-ticaret, gıda &amp; gastronomi ve iş geliştirme alanlarında köprü kuran, <strong>güvene dayalı</strong> uluslararası bir iş ortağıyız.',
      "about.p1": "Kökleri Türkiye'nin gastronomi kültürüne uzanan Umervion, masa başında değil sahada kazanılan gerçek işletme deneyiminden güç alır. Kurucularımız; <strong>İstanbul, Ankara ve Mersin'de yıllardır misafirlerini ağırlayan restoranlarıyla</strong> kaliteyi, istikrarı ve güveni bir işletme kültürü hâline getirmiştir.",
      "about.p2": "Bu köklü deneyimi uluslararası ticaretle birleştirerek; Avrupa ve Türkiye pazarları arasında şeffaf, sürdürülebilir ve uzun vadeli iş birlikleri kuruyoruz. Her ortaklığı tek seferlik bir işlem olarak değil, karşılıklı güvene dayanan kalıcı bir ilişki olarak görüyoruz.",
      "about.p3": "Yerel uzmanlığı uluslararası bir vizyonla buluşturuyor; başarıyı yalnızca ticari sonuçlarla değil, kurduğumuz güçlü ve güvenilir iş birlikleriyle tanımlıyoruz.",
      "about.pill1": "Güven",
      "about.pill2": "Sahada Deneyim",
      "about.pill3": "Şeffaflık",
      "about.pill4": "Sürdürülebilirlik",
      "about.pill5": "Uzun Vadeli Ortaklık",

      "heritage.eyebrow": "Köklerimiz · Türkiye",
      "heritage.title": "Güvenin Temeli: Restoranlarımız",
      "heritage.desc": "Umervion'un arkasında, Türkiye'nin önde gelen lokasyonlarında yıllardır başarıyla işletilen <strong>Çınaraltı Mangalbaşı</strong> ve <strong>Shangai 520</strong> restoranları yer alır. Avrupa'ya taşıdığımız güven, sahada kanıtlanmış bu işletme deneyiminden doğar.",
      "heritage.note": "Türkiye'de kazandığımız bu güveni, aynı titizlik ve kalite anlayışıyla Avrupa pazarına taşıyoruz.",
      "heritage.bannerEyebrow": "Çınaraltı Mangalbaşı",
      "heritage.bannerText": "Bakır işçiliği, mangal kültürü ve sofra geleneğini bir araya getiren imza mekânlarımız.",

      "branch.ankaraName": "Çınaraltı · İncek",
      "branch.mersinName": "Çınaraltı · Marina",
      "branch.istanbulName": "Çınaraltı · Maltepe",
      "branch.open": "24 Saat Açık",
      "branch.istanbulHours": "24 Saat Açık (Open 24 Hours)",
      "branch.shangaiCuisine": "Uzak Doğu &amp; Asya Mutfağı",

      "stat.countries": "Ülke · Türkiye &amp; Almanya",
      "stat.cities": "Şehir · İstanbul, Ankara, Mersin, Köln",
      "stat.areas": "Faaliyet Alanı",
      "stat.solutions": "Hizmet Çözümü",

      "services.eyebrow": "Hizmetler",
      "services.title": "Uçtan Uca Ticaret Çözümleri",
      "services.desc": "Tedarikten dijital satışa, gastronomiden stratejik ortaklıklara; uluslararası pazarlarda değer yaratan kapsamlı hizmetler sunuyoruz.",

      "card1.title": "Uluslararası Ticaret",
      "card1.text": "Avrupa, Türkiye ve uluslararası pazarlarda güvenilir ticari bağlantılar kuruyoruz. Ürün tedariği, tedarikçi geliştirme ve ticari iş birlikleriyle sürdürülebilir ticaret fırsatları oluşturuyoruz.",
      "card2.title": "İthalat ve İhracat",
      "card2.text": "Farklı sektörlerdeki ürünlerin uluslararası pazarlarda değerlendirilmesine yönelik ithalat ve ihracat faaliyetleri geliştiriyor; iş ortaklarımız arasında uzun vadeli ticari ilişkiler kurulmasına katkı sağlıyoruz.",
      "card3.title": "E-Ticaret &amp; Dijital Ticaret",
      "card3.text": "Ürünlerin çevrimiçi satış kanalları aracılığıyla uluslararası pazarlara ulaştırılması; pazar yeri platformları, marka geliştirme ve sürdürülebilir büyüme stratejileriyle dijital ticaret çözümleri.",
      "card4.title": "Gıda &amp; Gastronomi Ürünleri",
      "card4.text": "Kurucularımızın gastronomi sektöründeki deneyiminden güç alarak gıda ürünleri, gastronomi ekipmanları ve profesyonel mutfak çözümleri alanlarında ticari faaliyetler geliştiriyoruz.",
      "card5.title": "Tedarik &amp; Satın Alma",
      "card5.text": "İşletmelerin ihtiyaç duyduğu ürün ve hizmetlerin doğru kaynaklardan temin edilmesine yönelik tedarik ve satın alma süreçlerinin geliştirilmesine katkı sağlıyoruz.",
      "card6.title": "İş Geliştirme &amp; Ortaklıklar",
      "card6.text": "Yeni pazarlara erişim, uluslararası iş bağlantılarının kurulması ve sürdürülebilir ticari ilişkilerin geliştirilmesi amacıyla stratejik iş birlikleri oluşturuyoruz.",

      "featured.eyebrow": "Gelecek Vizyonu",
      "featured.title": "Gastronomi &amp; Restoran Yatırımları",
      "featured.text": "Umervion, gastronomi sektöründeki deneyimini Avrupa pazarına taşımayı ve gelecekte restoran işletmeciliği, gastronomi yatırımları ve yenilikçi yeme-içme konseptleri geliştirmeyi amaçlamaktadır. Bu vizyon doğrultusunda, gastronomi alanında uzun vadeli ve sürdürülebilir projeler hayata geçirmeyi hedefliyoruz.",
      "featured.btn": "İş Birliği Kuralım",

      "sectors.eyebrow": "Faaliyet Alanları",
      "sectors.title": "Beş Alanda Tek Çatı",
      "sector1.title": "Uluslararası Ticaret",
      "sector1.text": "Güvenilir ticari bağlantılar ve sürdürülebilir tedarik ağları.",
      "sector2.title": "E-Ticaret",
      "sector2.text": "Dijital satış kanalları ve sınır ötesi pazar yeri çözümleri.",
      "sector3.title": "Gıda",
      "sector3.text": "Gıda ürünleri ve profesyonel mutfak tedarik çözümleri.",
      "sector4.title": "Gastronomi",
      "sector4.text": "Restoran işletmeciliği ve yenilikçi yeme-içme konseptleri.",
      "sector5.title": "İş Geliştirme",
      "sector5.text": "Stratejik ortaklıklar ve yeni pazarlara erişim.",

      "why.eyebrow": "Neden Umervion",
      "why.title": "Yerel Uzmanlık, Uluslararası Vizyon",
      "why.p": "Yıllara dayanan ticari ve gastronomi deneyiminden güç alan Umervion, Avrupa ve Türkiye arasında sürdürülebilir iş bağlantıları kurmayı amaçlar. Güvenilir iş ortaklıkları, stratejik fırsatlar ve uzun vadeli değer yaratma anlayışıyla uluslararası pazarlarda kalıcı ilişkiler geliştirir.",
      "why.item1.t": "Güvene Dayalı Ortaklık",
      "why.item1.s": "Şeffaf, uzun vadeli ve karşılıklı değer üreten iş birlikleri.",
      "why.item2.t": "Sektörel Deneyim",
      "why.item2.s": "Ticaret ve gastronomide yıllara dayanan saha bilgisi.",
      "why.item3.t": "İki Pazar, Tek Köprü",
      "why.item3.s": "Türkiye ve Avrupa arasında kesintisiz ticari erişim.",
      "why.item4.t": "Sürdürülebilir Büyüme",
      "why.item4.s": "Kısa vadeli kazanç değil, kalıcı değer odaklı yaklaşım.",
      "why.capTR": "İstanbul · Türkiye",
      "why.capDE": "Köln · Almanya",

      "contact.eyebrow": "İletişim",
      "contact.title": "Birlikte Değer Üretelim",
      "contact.lead": "Yeni iş birlikleri, ticari fırsatlar ve ortaklıklar için bizimle iletişime geçin.",
      "contact.labelAddr": "Adres",
      "contact.addr": "Hugo-Eckener-Str. 31<br />50829 Köln, Almanya",
      "contact.labelEmail": "E-Posta",
      "contact.labelPhone": "Telefon",

      "form.name": "Ad Soyad",
      "form.namePh": "Adınız Soyadınız",
      "form.email": "E-Posta",
      "form.emailPh": "ornek@firma.com",
      "form.subject": "Konu",
      "form.subjectPh": "İş birliği / Teklif / Bilgi",
      "form.message": "Mesajınız",
      "form.messagePh": "Bize kısaca projenizden bahsedin...",
      "form.submit": "Mesajı Gönder",
      "form.errMsg": "Lütfen ad, geçerli bir e-posta ve mesaj alanlarını doldurun.",
      "form.successMsg": "E-posta uygulamanız açılıyor. Teşekkürler!",
      "form.mailName": "Ad Soyad",
      "form.mailEmail": "E-Posta",
      "form.mailSubject": "Umervion · iletişim",

      "footer.about": "Sınırların ötesinde bağlantılar kuruyoruz. Avrupa ve Türkiye arasında güvenilir, sürdürülebilir iş ortaklıkları.",
      "footer.explore": "Keşfet",
      "footer.trTitle": "Restoranlar · Türkiye",
      "footer.hqTitle": "Merkez · Almanya",
      "footer.rights": "Tüm hakları saklıdır."
    },

    en: {
      "meta.title": "Umervion · Global Trade Partners | International Trade, E-Commerce & Gastronomy",

      "nav.about": "About Us",
      "nav.restaurants": "Our Restaurants",
      "nav.services": "Services",
      "nav.sectors": "Our Sectors",
      "nav.why": "Why Umervion",
      "nav.contact": "Contact",

      "hero.eyebrow": "International Trade · E-Commerce · Gastronomy",
      "hero.title": 'Building Connections<br /><span class="gold-text">Beyond Borders</span>',
      "hero.sub": "Through trust, experience and long-term partnerships, we create sustainable opportunities between Europe and Türkiye in trade, e-commerce, gastronomy and business development.",
      "hero.btnServices": "Our Services",
      "hero.btnContact": "Get in Touch",

      "tag.trade": "International Trade",
      "tag.ecom": "E-Commerce",
      "tag.food": "Food",
      "tag.gastro": "Gastronomy",
      "tag.bizdev": "Business Development",

      "about.badgeNum": 'Türkiye<span class="amp">&</span>Europe',
      "about.badgeLabel": "A business vision uniting two continents",
      "about.eyebrow": "About Us",
      "about.lead": 'We are a <strong>trust-based</strong> international business partner, bridging Europe and Türkiye in trade, e-commerce, food &amp; gastronomy and business development.',
      "about.p1": "With roots in Türkiye's gastronomy culture, Umervion draws its strength from real, hands-on business experience earned in the field rather than behind a desk. Through <strong>their restaurants that have welcomed guests for years in İstanbul, Ankara and Mersin</strong>, our founders have turned quality, consistency and trust into a way of doing business.",
      "about.p2": "By combining this deep-rooted experience with international trade, we build transparent, sustainable and long-term partnerships between the European and Turkish markets. We see every partnership not as a one-off transaction, but as a lasting relationship built on mutual trust.",
      "about.p3": "We bring local expertise together with an international vision, defining success not only by commercial results, but by the strong and trustworthy partnerships we build.",
      "about.pill1": "Trust",
      "about.pill2": "Hands-on Experience",
      "about.pill3": "Transparency",
      "about.pill4": "Sustainability",
      "about.pill5": "Long-Term Partnership",

      "heritage.eyebrow": "Our Roots · Türkiye",
      "heritage.title": "The Foundation of Trust: Our Restaurants",
      "heritage.desc": "Behind Umervion stand our <strong>Çınaraltı Mangalbaşı</strong> and <strong>Shangai 520</strong> restaurants, successfully operated for years in prime locations across Türkiye. The trust we carry to Europe is born from this proven, hands-on experience.",
      "heritage.note": "We carry the trust we have earned in Türkiye to the European market — with the same care and commitment to quality.",
      "heritage.bannerEyebrow": "Çınaraltı Mangalbaşı",
      "heritage.bannerText": "Our signature venues bringing together copper craftsmanship, grill culture and the tradition of the table.",

      "branch.ankaraName": "Çınaraltı · İncek",
      "branch.mersinName": "Çınaraltı · Marina",
      "branch.istanbulName": "Çınaraltı · Maltepe",
      "branch.open": "Open 24/7",
      "branch.istanbulHours": "Open 24 Hours",
      "branch.shangaiCuisine": "Far Eastern &amp; Asian Cuisine",

      "stat.countries": "Countries · Türkiye &amp; Germany",
      "stat.cities": "Cities · İstanbul, Ankara, Mersin, Cologne",
      "stat.areas": "Business Areas",
      "stat.solutions": "Service Solutions",

      "services.eyebrow": "Services",
      "services.title": "End-to-End Trade Solutions",
      "services.desc": "From sourcing to digital sales, from gastronomy to strategic partnerships — we offer comprehensive services that create value in international markets.",

      "card1.title": "International Trade",
      "card1.text": "We build reliable commercial connections across European, Turkish and international markets. Through product sourcing, supplier development and trade partnerships, we create sustainable trade opportunities.",
      "card2.title": "Import & Export",
      "card2.text": "We develop import and export activities to bring products from various sectors to international markets, helping to establish long-term commercial relationships between our partners.",
      "card3.title": "E-Commerce &amp; Digital Trade",
      "card3.text": "Bringing products to international markets through online sales channels — digital trade solutions powered by marketplace platforms, brand development and sustainable growth strategies.",
      "card4.title": "Food &amp; Gastronomy Products",
      "card4.text": "Drawing on our founders' experience in the gastronomy sector, we develop commercial activities in food products, gastronomy equipment and professional kitchen solutions.",
      "card5.title": "Sourcing &amp; Procurement",
      "card5.text": "We help develop sourcing and procurement processes so that businesses obtain the products and services they need from the right sources.",
      "card6.title": "Business Development &amp; Partnerships",
      "card6.text": "We form strategic collaborations to access new markets, establish international business connections and develop sustainable commercial relationships.",

      "featured.eyebrow": "Future Vision",
      "featured.title": "Gastronomy &amp; Restaurant Investments",
      "featured.text": "Umervion aims to bring its experience in the gastronomy sector to the European market and, in the future, to develop restaurant operations, gastronomy investments and innovative dining concepts. In line with this vision, we aim to realise long-term and sustainable projects in the field of gastronomy.",
      "featured.btn": "Let's Collaborate",

      "sectors.eyebrow": "Our Sectors",
      "sectors.title": "Five Areas Under One Roof",
      "sector1.title": "International Trade",
      "sector1.text": "Reliable trade connections and sustainable supply networks.",
      "sector2.title": "E-Commerce",
      "sector2.text": "Digital sales channels and cross-border marketplace solutions.",
      "sector3.title": "Food",
      "sector3.text": "Food products and professional kitchen supply solutions.",
      "sector4.title": "Gastronomy",
      "sector4.text": "Restaurant operations and innovative dining concepts.",
      "sector5.title": "Business Development",
      "sector5.text": "Strategic partnerships and access to new markets.",

      "why.eyebrow": "Why Umervion",
      "why.title": "Local Expertise, International Vision",
      "why.p": "Drawing strength from years of experience in trade and gastronomy, Umervion aims to build sustainable business connections between Europe and Türkiye. With a focus on reliable partnerships, strategic opportunities and long-term value creation, it develops lasting relationships in international markets.",
      "why.item1.t": "Trust-Based Partnership",
      "why.item1.s": "Transparent, long-term collaborations that create mutual value.",
      "why.item2.t": "Industry Experience",
      "why.item2.s": "Years of hands-on knowledge in trade and gastronomy.",
      "why.item3.t": "Two Markets, One Bridge",
      "why.item3.s": "Seamless commercial access between Türkiye and Europe.",
      "why.item4.t": "Sustainable Growth",
      "why.item4.s": "An approach focused on lasting value, not short-term gain.",
      "why.capTR": "İstanbul · Türkiye",
      "why.capDE": "Cologne · Germany",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's Create Value Together",
      "contact.lead": "Get in touch with us for new collaborations, commercial opportunities and partnerships.",
      "contact.labelAddr": "Address",
      "contact.addr": "Hugo-Eckener-Str. 31<br />50829 Cologne, Germany",
      "contact.labelEmail": "E-Mail",
      "contact.labelPhone": "Phone",

      "form.name": "Full Name",
      "form.namePh": "Your full name",
      "form.email": "E-Mail",
      "form.emailPh": "name@company.com",
      "form.subject": "Subject",
      "form.subjectPh": "Collaboration / Quote / Info",
      "form.message": "Your Message",
      "form.messagePh": "Tell us briefly about your project...",
      "form.submit": "Send Message",
      "form.errMsg": "Please fill in your name, a valid e-mail and a message.",
      "form.successMsg": "Your e-mail app is opening. Thank you!",
      "form.mailName": "Full Name",
      "form.mailEmail": "E-Mail",
      "form.mailSubject": "Umervion · contact",

      "footer.about": "Building connections beyond borders. Reliable, sustainable partnerships between Europe and Türkiye.",
      "footer.explore": "Explore",
      "footer.trTitle": "Restaurants · Türkiye",
      "footer.hqTitle": "Headquarters · Germany",
      "footer.rights": "All rights reserved."
    },

    de: {
      "meta.title": "Umervion · Global Trade Partners | Internationaler Handel, E-Commerce & Gastronomie",

      "nav.about": "Über uns",
      "nav.restaurants": "Unsere Restaurants",
      "nav.services": "Leistungen",
      "nav.sectors": "Geschäftsfelder",
      "nav.why": "Warum Umervion",
      "nav.contact": "Kontakt",

      "hero.eyebrow": "Internationaler Handel · E-Commerce · Gastronomie",
      "hero.title": 'Wir schaffen Verbindungen<br /><span class="gold-text">über Grenzen hinweg</span>',
      "hero.sub": "Mit Vertrauen, Erfahrung und langfristigen Partnerschaften schaffen wir nachhaltige Chancen zwischen Europa und der Türkei in den Bereichen Handel, E-Commerce, Gastronomie und Geschäftsentwicklung.",
      "hero.btnServices": "Unsere Leistungen",
      "hero.btnContact": "Kontakt aufnehmen",

      "tag.trade": "Internationaler Handel",
      "tag.ecom": "E-Commerce",
      "tag.food": "Lebensmittel",
      "tag.gastro": "Gastronomie",
      "tag.bizdev": "Geschäftsentwicklung",

      "about.badgeNum": 'Türkei<span class="amp">&</span>Europa',
      "about.badgeLabel": "Eine Geschäftsphilosophie, die zwei Kontinente verbindet",
      "about.eyebrow": "Über uns",
      "about.lead": 'Wir sind ein <strong>auf Vertrauen basierender</strong> internationaler Geschäftspartner und verbinden Europa und die Türkei in den Bereichen Handel, E-Commerce, Lebensmittel &amp; Gastronomie und Geschäftsentwicklung.',
      "about.p1": "Mit Wurzeln in der Gastronomiekultur der Türkei schöpft Umervion seine Stärke aus echter, praktischer Unternehmenserfahrung – erworben vor Ort und nicht am Schreibtisch. Mit <strong>ihren Restaurants, die seit Jahren Gäste in Istanbul, Ankara und Mersin bewirten</strong>, haben unsere Gründer Qualität, Beständigkeit und Vertrauen zu einer Unternehmenskultur gemacht.",
      "about.p2": "Indem wir diese tief verwurzelte Erfahrung mit internationalem Handel verbinden, bauen wir transparente, nachhaltige und langfristige Partnerschaften zwischen dem europäischen und dem türkischen Markt auf. Jede Partnerschaft verstehen wir nicht als einmaliges Geschäft, sondern als dauerhafte, auf gegenseitigem Vertrauen beruhende Beziehung.",
      "about.p3": "Wir verbinden lokale Expertise mit einer internationalen Vision und definieren Erfolg nicht nur über kommerzielle Ergebnisse, sondern über die starken und vertrauensvollen Partnerschaften, die wir aufbauen.",
      "about.pill1": "Vertrauen",
      "about.pill2": "Praxiserfahrung",
      "about.pill3": "Transparenz",
      "about.pill4": "Nachhaltigkeit",
      "about.pill5": "Langfristige Partnerschaft",

      "heritage.eyebrow": "Unsere Wurzeln · Türkei",
      "heritage.title": "Das Fundament des Vertrauens: Unsere Restaurants",
      "heritage.desc": "Hinter Umervion stehen unsere Restaurants <strong>Çınaraltı Mangalbaşı</strong> und <strong>Shangai 520</strong>, die seit Jahren erfolgreich an erstklassigen Standorten in der ganzen Türkei betrieben werden. Das Vertrauen, das wir nach Europa tragen, entsteht aus dieser bewährten, praktischen Erfahrung.",
      "heritage.note": "Das in der Türkei gewonnene Vertrauen tragen wir mit derselben Sorgfalt und demselben Qualitätsanspruch auf den europäischen Markt.",
      "heritage.bannerEyebrow": "Çınaraltı Mangalbaşı",
      "heritage.bannerText": "Unsere besonderen Orte, die Kupferhandwerk, Grillkultur und Tafeltradition vereinen.",

      "branch.ankaraName": "Çınaraltı · İncek",
      "branch.mersinName": "Çınaraltı · Marina",
      "branch.istanbulName": "Çınaraltı · Maltepe",
      "branch.open": "24 Std. geöffnet",
      "branch.istanbulHours": "24 Stunden geöffnet (Open 24 Hours)",
      "branch.shangaiCuisine": "Fernöstliche &amp; Asiatische Küche",

      "stat.countries": "Länder · Türkei &amp; Deutschland",
      "stat.cities": "Städte · Istanbul, Ankara, Mersin, Köln",
      "stat.areas": "Geschäftsfelder",
      "stat.solutions": "Servicelösungen",

      "services.eyebrow": "Leistungen",
      "services.title": "Durchgängige Handelslösungen",
      "services.desc": "Von der Beschaffung bis zum digitalen Vertrieb, von der Gastronomie bis zu strategischen Partnerschaften – wir bieten umfassende Leistungen, die auf internationalen Märkten Wert schaffen.",

      "card1.title": "Internationaler Handel",
      "card1.text": "Wir knüpfen verlässliche Handelsbeziehungen auf europäischen, türkischen und internationalen Märkten. Durch Produktbeschaffung, Lieferantenentwicklung und Handelspartnerschaften schaffen wir nachhaltige Handelschancen.",
      "card2.title": "Import & Export",
      "card2.text": "Wir entwickeln Import- und Exportaktivitäten, um Produkte aus verschiedenen Branchen auf internationale Märkte zu bringen, und fördern langfristige Geschäftsbeziehungen zwischen unseren Partnern.",
      "card3.title": "E-Commerce &amp; Digitaler Handel",
      "card3.text": "Wir bringen Produkte über Online-Vertriebskanäle auf internationale Märkte – digitale Handelslösungen mit Marktplatzplattformen, Markenentwicklung und nachhaltigen Wachstumsstrategien.",
      "card4.title": "Lebensmittel- &amp; Gastronomieprodukte",
      "card4.text": "Gestützt auf die Erfahrung unserer Gründer im Gastronomiesektor entwickeln wir Geschäftsaktivitäten in den Bereichen Lebensmittel, Gastronomieausstattung und professionelle Küchenlösungen.",
      "card5.title": "Beschaffung &amp; Einkauf",
      "card5.text": "Wir unterstützen die Entwicklung von Beschaffungs- und Einkaufsprozessen, damit Unternehmen die benötigten Produkte und Dienstleistungen aus den richtigen Quellen beziehen.",
      "card6.title": "Geschäftsentwicklung &amp; Partnerschaften",
      "card6.text": "Wir bilden strategische Kooperationen, um neue Märkte zu erschließen, internationale Geschäftskontakte aufzubauen und nachhaltige Handelsbeziehungen zu entwickeln.",

      "featured.eyebrow": "Zukunftsvision",
      "featured.title": "Gastronomie- &amp; Restaurantinvestitionen",
      "featured.text": "Umervion möchte seine Erfahrung im Gastronomiesektor auf den europäischen Markt bringen und künftig Restaurantbetriebe, Gastronomieinvestitionen und innovative Gastronomiekonzepte entwickeln. Im Sinne dieser Vision wollen wir langfristige und nachhaltige Projekte im Bereich der Gastronomie umsetzen.",
      "featured.btn": "Lassen Sie uns zusammenarbeiten",

      "sectors.eyebrow": "Geschäftsfelder",
      "sectors.title": "Fünf Bereiche unter einem Dach",
      "sector1.title": "Internationaler Handel",
      "sector1.text": "Verlässliche Handelsbeziehungen und nachhaltige Liefernetzwerke.",
      "sector2.title": "E-Commerce",
      "sector2.text": "Digitale Vertriebskanäle und grenzüberschreitende Marktplatzlösungen.",
      "sector3.title": "Lebensmittel",
      "sector3.text": "Lebensmittel und professionelle Küchenbeschaffungslösungen.",
      "sector4.title": "Gastronomie",
      "sector4.text": "Restaurantbetrieb und innovative Gastronomiekonzepte.",
      "sector5.title": "Geschäftsentwicklung",
      "sector5.text": "Strategische Partnerschaften und Zugang zu neuen Märkten.",

      "why.eyebrow": "Warum Umervion",
      "why.title": "Lokale Expertise, internationale Vision",
      "why.p": "Aus jahrelanger Erfahrung in Handel und Gastronomie schöpfend, möchte Umervion nachhaltige Geschäftsbeziehungen zwischen Europa und der Türkei aufbauen. Mit dem Fokus auf verlässliche Partnerschaften, strategische Chancen und langfristige Wertschöpfung entwickelt das Unternehmen dauerhafte Beziehungen auf internationalen Märkten.",
      "why.item1.t": "Partnerschaft auf Vertrauensbasis",
      "why.item1.s": "Transparente, langfristige Kooperationen, die gegenseitigen Wert schaffen.",
      "why.item2.t": "Branchenerfahrung",
      "why.item2.s": "Jahrelanges Praxiswissen in Handel und Gastronomie.",
      "why.item3.t": "Zwei Märkte, eine Brücke",
      "why.item3.s": "Nahtloser Handelszugang zwischen der Türkei und Europa.",
      "why.item4.t": "Nachhaltiges Wachstum",
      "why.item4.s": "Ein Ansatz, der auf dauerhaften Wert statt auf kurzfristigen Gewinn setzt.",
      "why.capTR": "Istanbul · Türkei",
      "why.capDE": "Köln · Deutschland",

      "contact.eyebrow": "Kontakt",
      "contact.title": "Lassen Sie uns gemeinsam Werte schaffen",
      "contact.lead": "Kontaktieren Sie uns für neue Kooperationen, Geschäftschancen und Partnerschaften.",
      "contact.labelAddr": "Adresse",
      "contact.addr": "Hugo-Eckener-Str. 31<br />50829 Köln, Deutschland",
      "contact.labelEmail": "E-Mail",
      "contact.labelPhone": "Telefon",

      "form.name": "Vollständiger Name",
      "form.namePh": "Ihr vollständiger Name",
      "form.email": "E-Mail",
      "form.emailPh": "name@firma.com",
      "form.subject": "Betreff",
      "form.subjectPh": "Kooperation / Angebot / Info",
      "form.message": "Ihre Nachricht",
      "form.messagePh": "Erzählen Sie uns kurz von Ihrem Projekt...",
      "form.submit": "Nachricht senden",
      "form.errMsg": "Bitte geben Sie Ihren Namen, eine gültige E-Mail und eine Nachricht ein.",
      "form.successMsg": "Ihre E-Mail-Anwendung wird geöffnet. Vielen Dank!",
      "form.mailName": "Name",
      "form.mailEmail": "E-Mail",
      "form.mailSubject": "Umervion · Kontakt",

      "footer.about": "Wir schaffen Verbindungen über Grenzen hinweg. Verlässliche, nachhaltige Partnerschaften zwischen Europa und der Türkei.",
      "footer.explore": "Entdecken",
      "footer.trTitle": "Restaurants · Türkei",
      "footer.hqTitle": "Zentrale · Deutschland",
      "footer.rights": "Alle Rechte vorbehalten."
    }
  };

  const SUPPORTED = ["tr", "en", "de"];
  let currentLang = "tr";

  function dict() {
    return I18N[currentLang] || I18N.tr;
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "tr";
    currentLang = lang;
    const d = dict();

    document.documentElement.lang = lang;
    if (d["meta.title"]) document.title = d["meta.title"];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const val = d[el.getAttribute("data-i18n")];
      if (typeof val === "string") el.innerHTML = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const val = d[el.getAttribute("data-i18n-ph")];
      if (typeof val === "string") el.setAttribute("placeholder", val);
    });

    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("umervion-lang", lang); } catch (e) {}
  }

  function initLang() {
    let lang = null;
    try { lang = localStorage.getItem("umervion-lang"); } catch (e) {}
    if (!lang) {
      const nav = (navigator.language || "tr").slice(0, 2).toLowerCase();
      lang = SUPPORTED.indexOf(nav) !== -1 ? nav : "tr";
    }
    applyLang(lang);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });
  initLang();

  /* =========================================================
     INTERACTIONS
     ========================================================= */
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  const progress = document.getElementById("scrollProgress");

  /* ---------- Header state + scroll progress ---------- */
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    header.classList.toggle("scrolled", y > 40);

    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (y / docH) * 100 : 0;
    if (progress) progress.style.width = pct + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  function closeNav() {
    nav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  navToggle.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || (i % 6) * 70;
            setTimeout(() => entry.target.classList.add("in"), delay);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll(".stat-num[data-count]");
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window) {
    const co = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            co.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach((c) => (c.textContent = c.dataset.count));
  }

  /* ---------- Contact form (mailto) ---------- */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const d = dict();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const subject = form.subject.value.trim();
      const message = form.message.value.trim();

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !emailOk || !message) {
        note.textContent = d["form.errMsg"];
        note.className = "form-note error";
        return;
      }

      const subj = encodeURIComponent(subject || (d["form.mailSubject"] + " · " + name));
      const body = encodeURIComponent(
        d["form.mailName"] + ": " + name + "\n" +
        d["form.mailEmail"] + ": " + email + "\n\n" +
        message
      );
      window.location.href = "mailto:info@umervion.com?subject=" + subj + "&body=" + body;

      note.textContent = d["form.successMsg"];
      note.className = "form-note success";
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     RESTAURANT BRANCHES — cards + gallery modal
     ========================================================= */
  const IMG = "assets/images/restaurants/";
  const SVG = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 21s-7-5.686-7-11a7 7 0 1 1 14 0c0 5.314-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1.5 4a2 2 0 0 1-2 1.4A16 16 0 0 1 4.6 7.5 2 2 0 0 1 5 4Z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    cuisine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 11h16a8 8 0 0 1-16 0Z"/><path d="M12 4c1.6 1.2 1.6 2.8 0 4"/><path d="M9 5.5c.8.6.8 1.4 0 2"/><path d="M3 21h18"/></svg>',
    images: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };
  const L = {
    photos: { tr: "fotoğraf", en: "photos", de: "Fotos" },
    detail: { tr: "Galeri & Detaylar", en: "Gallery & Details", de: "Galerie & Details" },
    open24: { tr: "24 Saat Açık", en: "Open 24/7", de: "24 Std. geöffnet" },
    address: { tr: "Adres", en: "Address", de: "Adresse" },
    phone: { tr: "Telefon", en: "Phone", de: "Telefon" },
    hours: { tr: "Çalışma Saatleri", en: "Opening Hours", de: "Öffnungszeiten" },
    cuisine: { tr: "Mutfak", en: "Cuisine", de: "Küche" },
    instagram: { tr: "Instagram", en: "Instagram", de: "Instagram" },
    directions: { tr: "Yol Tarifi Al", en: "Get Directions", de: "Route planen" }
  };

  const BRANCHES = [
    {
      id: "incek", city: "Ankara",
      name: "Çınaraltı · İncek",
      images: ["cinaralti-incek/1.jpeg", "cinaralti-incek/2.jpeg", "cinaralti-incek/3.jpeg", "cinaralti-incek/4.jpeg"],
      desc: {
        tr: "Ankara İncek'te, geniş bahçesi ve mangal kültürünün eşsiz lezzetleriyle misafirlerini ağırlayan Çınaraltı Mangalbaşı.",
        en: "In İncek, Ankara — Çınaraltı Mangalbaşı welcomes guests with a spacious garden and the unique flavours of Turkish grill culture.",
        de: "In İncek, Ankara — Çınaraltı Mangalbaşı empfängt seine Gäste mit großzügigem Garten und den Aromen türkischer Grillkultur."
      },
      address: "Alacaatlı Mah. Kanuni Sultan Süleyman Bulvarı No:141 A, İncek, Çankaya / Ankara",
      phone: "0540 390 06 06", tel: "+905403900606", hours: "09:00 – 00:00",
      instagram: "Cinaraltimangalbasiincek"
    },
    {
      id: "cayyolu", city: "Ankara",
      name: "Çınaraltı · Çayyolu",
      images: ["cinaralti-cayyolu/1.jpeg", "cinaralti-cayyolu/2.jpeg"],
      desc: {
        tr: "Ankara Çayyolu'ndaki yeni şubemiz; aynı kalite ve lezzet anlayışını modern bir atmosferle buluşturuyor.",
        en: "Our new branch in Çayyolu, Ankara — bringing the same quality and flavour together with a modern atmosphere.",
        de: "Unsere neue Filiale in Çayyolu, Ankara — gleiche Qualität und Geschmack in modernem Ambiente."
      },
      address: "Çayyolu, Çankaya / Ankara", hours: "09:00 – 00:00",
      instagram: "Cinaraltimangalbasicayyolu"
    },
    {
      id: "marina", city: "Mersin",
      name: "Çınaraltı · Marina",
      images: ["cinaralti-mersin/1.jpeg"],
      desc: {
        tr: "Mersin Marina'da deniz havası eşliğinde, mangal lezzetlerini sahil keyfiyle sunan Çınaraltı şubesi.",
        en: "At Mersin Marina — Çınaraltı serves its signature grill flavours with a relaxed seaside atmosphere.",
        de: "An der Marina von Mersin serviert Çınaraltı seine Grillspezialitäten mit entspanntem Meeresflair."
      },
      address: "Eğriçam Mah. Adnan Menderes Bulvarı, Yalın Apartman No:180/3A, Yenişehir / Mersin",
      phone: "0539 774 04 41", tel: "+905397740441", hours: "09:00 – 01:00",
      instagram: "Cinaraltimangalbasimersin"
    },
    {
      id: "maltepe", city: "İstanbul", badge: true,
      name: "Çınaraltı · Maltepe",
      images: ["cinaralti-istanbul/1.jpg.png", "cinaralti-istanbul/2.jpg.avif"],
      desc: {
        tr: "İstanbul Maltepe Küçükyalı'da 24 saat hizmet veren Çınaraltı; her saat taze mangal keyfi sunar.",
        en: "Open 24 hours in Küçükyalı, Maltepe — Çınaraltı offers fresh grill delights around the clock.",
        de: "Rund um die Uhr geöffnet in Küçükyalı, Maltepe — Çınaraltı bietet jederzeit frische Grillgenüsse."
      },
      address: "Altıntepe Mah. Kasaplar Çarşısı No:2 F-G, Küçükyalı, 34840 Maltepe / İstanbul",
      phone: "0535 334 44 44", tel: "+905353344444", hours24: true,
      instagram: "Cinaralti"
    },
    {
      id: "shangai", city: "Mersin",
      name: "Shangai 520 · Mersin",
      images: ["shangai-mersin/1.jpeg", "shangai-mersin/2.jpeg", "shangai-mersin/3.jpeg", "shangai-mersin/4.jpeg"],
      desc: {
        tr: "Mersin'de Uzak Doğu ve Asya mutfağının seçkin lezzetlerini sunan modern restoran konsepti Shangai 520.",
        en: "Shangai 520 — a modern restaurant concept in Mersin offering the finest flavours of Far East & Asian cuisine.",
        de: "Shangai 520 — ein modernes Restaurantkonzept in Mersin mit den feinsten Aromen fernöstlicher & asiatischer Küche."
      },
      address: "Mersin / Türkiye",
      cuisine: { tr: "Uzak Doğu & Asya Mutfağı", en: "Far East & Asian Cuisine", de: "Fernöstliche & Asiatische Küche" },
      instagram: "The520shanghai"
    }
  ];

  const lang = () => (typeof currentLang !== "undefined" ? currentLang : "tr");
  const t = (o) => (o && (o[lang()] || o.tr)) || "";
  const mapUrl = (b) => "https://maps.google.com/?q=" + encodeURIComponent(b.name.replace(/·/g, "") + " " + b.address);

  const cardsWrap = document.getElementById("branchCards");

  function renderCards() {
    if (!cardsWrap) return;
    cardsWrap.innerHTML = BRANCHES.map(function (b, i) {
      var badge = b.badge ? '<span class="branch-open">' + t(L.open24) + "</span>" : "";
      return (
        '<article class="branch reveal" data-branch="' + i + '" role="button" tabindex="0" aria-label="' + b.name + '">' +
          '<div class="branch-media">' +
            '<img src="' + IMG + b.images[0] + '" alt="' + b.name + '" loading="lazy" />' +
            '<span class="branch-city">' + b.city + "</span>" +
            badge +
            '<span class="branch-count">' + SVG.images + b.images.length + " " + t(L.photos) + "</span>" +
          "</div>" +
          '<div class="branch-body">' +
            '<h3 class="branch-name">' + b.name + "</h3>" +
            buildMeta(b, true) +
            '<span class="branch-cta">' + t(L.detail) + SVG.arrow + "</span>" +
          "</div>" +
        "</article>"
      );
    }).join("");

    cardsWrap.querySelectorAll(".branch").forEach(function (el) {
      var idx = +el.getAttribute("data-branch");
      el.addEventListener("click", function () { openModal(idx); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(idx); }
      });
    });
    observeReveal(cardsWrap.querySelectorAll(".reveal"));
  }

  function buildMeta(b, compact) {
    var rows = [];
    rows.push(metaRow(SVG.pin, compact ? null : t(L.address), b.address));
    if (b.phone) rows.push(metaRow(SVG.phone, compact ? null : t(L.phone), b.phone, "tel:" + b.tel));
    if (b.cuisine) rows.push(metaRow(SVG.cuisine, compact ? null : t(L.cuisine), t(b.cuisine)));
    if (b.hours24) rows.push(metaRow(SVG.clock, compact ? null : t(L.hours), t(L.open24)));
    else if (b.hours) rows.push(metaRow(SVG.clock, compact ? null : t(L.hours), b.hours));
    if (!compact && b.instagram) {
      rows.push(metaRow(SVG.instagram, t(L.instagram), "@" + b.instagram, "https://instagram.com/" + b.instagram, "_blank"));
    }
    return '<ul class="' + (compact ? "branch-meta" : "bm-meta") + '">' + rows.join("") + "</ul>";
  }

  function metaRow(icon, label, value, href, target) {
    var attr = target ? ' target="' + target + '" rel="noopener"' : "";
    var inner = href ? '<a href="' + href + '"' + attr + ">" + value + "</a>" : "<span>" + value + "</span>";
    var lbl = label ? '<span class="bm-label">' + label + "</span>" : "";
    return "<li>" + icon + "<div>" + lbl + inner + "</div></li>";
  }

  /* ---------- Modal ---------- */
  var modal = document.getElementById("branchModal");
  var mainImg = document.getElementById("bmMainImg");
  var thumbs = document.getElementById("bmThumbs");
  var counter = document.getElementById("bmCounter");
  var state = { branch: null, idx: 0 };

  function openModal(i) {
    var b = BRANCHES[i];
    if (!b || !modal) return;
    state.branch = b; state.idx = 0;

    document.getElementById("bmCity").textContent = b.city;
    document.getElementById("bmName").textContent = b.name;
    document.getElementById("bmDesc").textContent = t(b.desc);
    document.getElementById("bmMeta").outerHTML = buildMeta(b, false).replace('class="bm-meta"', 'class="bm-meta" id="bmMeta"');
    var mapBtn = document.getElementById("bmMap");
    mapBtn.href = mapUrl(b);
    mapBtn.textContent = t(L.directions);

    thumbs.innerHTML = b.images.map(function (src, k) {
      return '<button class="bm-thumb' + (k === 0 ? " active" : "") + '" data-k="' + k + '"><img src="' + IMG + src + '" alt="" loading="lazy" /></button>';
    }).join("");
    thumbs.style.display = b.images.length > 1 ? "flex" : "none";
    thumbs.querySelectorAll(".bm-thumb").forEach(function (th) {
      th.addEventListener("click", function () { showImg(+th.getAttribute("data-k")); });
    });

    showImg(0);
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("bm-lock");
  }

  function showImg(k) {
    var b = state.branch; if (!b) return;
    var n = b.images.length;
    state.idx = (k + n) % n;
    mainImg.src = IMG + b.images[state.idx];
    mainImg.alt = b.name;
    counter.textContent = (state.idx + 1) + " / " + n;
    counter.style.display = n > 1 ? "block" : "none";
    thumbs.querySelectorAll(".bm-thumb").forEach(function (th, i) {
      th.classList.toggle("active", i === state.idx);
    });
    var arrows = modal.querySelectorAll(".bm-arrow");
    arrows.forEach(function (a) { a.style.display = n > 1 ? "grid" : "none"; });
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("bm-lock");
  }

  if (modal) {
    modal.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", closeModal);
    });
    document.getElementById("bmPrev").addEventListener("click", function () { showImg(state.idx - 1); });
    document.getElementById("bmNext").addEventListener("click", function () { showImg(state.idx + 1); });
    document.addEventListener("keydown", function (e) {
      if (!modal.classList.contains("open")) return;
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") showImg(state.idx - 1);
      else if (e.key === "ArrowRight") showImg(state.idx + 1);
    });
  }

  /* ---------- reveal helper for dynamic cards ---------- */
  function observeReveal(els) {
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  renderCards();
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      renderCards();
      if (modal && modal.classList.contains("open") && state.branch) {
        openModal(BRANCHES.indexOf(state.branch));
      }
    });
  });
})();

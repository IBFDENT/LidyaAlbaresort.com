"use client";

import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { useLanguage } from "@/components/LanguageProvider";

const LEGAL_COMPANY_NAME = "[LEGAL COMPANY NAME]";
const REGISTERED_ADDRESS = "[REGISTERED ADDRESS]";
const COMPANY_REGISTRATION_NUMBER = "[COMPANY / REGISTRATION NUMBER]";
const TAX_NUMBER = "[TAX NUMBER]";
const LEGAL_EMAIL = "[LEGAL CONTACT EMAIL]";

const translations = {
  en: {
    legalLabel: "Legal · Terms",
    title: "Terms & Conditions",
    subtitle: "Clear terms for a personal service.",
    heroText:
      "These Terms & Conditions govern your use of the LIDYA JEWELLERY website and related interactions, including enquiries, appointments and service requests.",
    lastUpdated: "Last updated",
    date: "August 2026",

    introduction: "Introduction",
    introTitle:
      "Our website is intended to provide information, support enquiries and facilitate personal service.",
    introText:
      "By using this website, you agree to use it lawfully and in accordance with these Terms & Conditions. Specific purchases, repairs, bespoke work or other services may also be subject to additional terms confirmed directly with you.",

    contents: "Contents",

    sections: [
      {
        title: "Website operator",
        nav: "Website operator",
        paragraphs: ["This website is operated by:"],
      },
      {
        title: "Use of the website",
        nav: "Use of the website",
        paragraphs: [
          "You may use this website for personal and lawful purposes, including browsing information about LIDYA JEWELLERY, collections, services, boutiques and related offerings.",
          "You must not misuse the website, attempt unauthorised access, interfere with its operation, introduce malicious code or use the website in a manner that could damage, disable or impair its functionality.",
        ],
      },
      {
        title: "Website information",
        nav: "Website information",
        paragraphs: [
          "We aim to keep website information accurate and up to date, but product descriptions, images, availability, prices, service details and other information may change from time to time.",
          "Images are intended to represent products and services as accurately as reasonably possible, but colours, proportions and visual appearance may vary depending on lighting, photography, display settings and the individual nature of jewellery and gemstones.",
        ],
      },
      {
        title: "Enquiries and appointments",
        nav: "Enquiries & appointments",
        paragraphs: [
          "Website enquiries, appointment requests, telephone calls, emails and WhatsApp communications do not by themselves create a binding sale or service agreement.",
          "An appointment or service request is confirmed only when accepted directly by LIDYA JEWELLERY or an authorised representative.",
        ],
      },
      {
        title: "Jewellery and watch services",
        nav: "Services",
        paragraphs: [
          "Repair, adjustment, stone-setting, redesign and related services may require physical inspection before scope, price and timing can be confirmed.",
          "Any estimate provided before inspection should be treated as indicative unless expressly confirmed otherwise.",
          "Customers are responsible for providing accurate information about items submitted for service, including any known damage, previous repairs or relevant history where applicable.",
        ],
      },
      {
        title: "Pricing, stock and availability",
        nav: "Pricing & availability",
        paragraphs: [
          "Prices, stock levels, precious metal values, gemstone availability and other commercial information may change without notice.",
          "The final price applicable to a purchase or service is the price confirmed directly with the customer at the relevant time.",
          "Displaying an item or service on the website does not guarantee that it is currently available.",
        ],
      },
      {
        title: "Bespoke and custom work",
        nav: "Bespoke & custom work",
        paragraphs: [
          "Bespoke jewellery, redesigns and custom commissions may involve individual consultation, design approval, material selection, measurements and other specifications agreed directly with the customer.",
          "Production times, deposits, cancellation conditions, alterations and final pricing should be confirmed individually before work begins.",
          "Because bespoke pieces are made to individual requirements, different cancellation, return or modification rules may apply where permitted by applicable law.",
        ],
      },
      {
        title: "Third-party links and services",
        nav: "Third-party services",
        paragraphs: [
          "The website may contain links to third-party websites and services, including WhatsApp, Instagram, Facebook, hotel websites, travel services and other external providers.",
          "These third parties operate independently from LIDYA JEWELLERY. We are not responsible for their content, availability, privacy practices, security or contractual terms.",
          "Any interaction with a third-party service is subject to that provider's own terms and policies.",
        ],
      },
      {
        title: "Intellectual property",
        nav: "Intellectual property",
        paragraphs: [
          "Unless otherwise indicated, the website design, written content, branding, logos, photography, graphics and other materials are owned by, licensed to or used with permission by LIDYA JEWELLERY.",
          "Website content may not be reproduced, distributed, republished, commercially exploited or modified without appropriate permission, except where permitted by law.",
        ],
      },
      {
        title: "Limitation of liability",
        nav: "Liability",
        paragraphs: [
          "The website is provided for general information and communication purposes. To the extent permitted by law, we do not guarantee uninterrupted availability or that the website will always be free from technical errors.",
          "Nothing in these Terms & Conditions is intended to exclude or limit liability where such exclusion or limitation is prohibited by applicable law.",
          "Customers should obtain appropriate professional advice where a decision requires specialist legal, financial, tax, investment or other professional assessment.",
        ],
      },
      {
        title: "Changes to the website and these terms",
        nav: "Changes",
        paragraphs: [
          "We may update the website, services or these Terms & Conditions from time to time.",
          "The latest version will be published on this page together with the relevant revision date.",
        ],
      },
      {
        title: "Governing law and jurisdiction",
        nav: "Governing law",
        paragraphs: [
          "The law governing these Terms & Conditions and the courts or authorities having jurisdiction will depend on the legal identity and registered location of the website operator.",
          "This section should be finalised after the operator's legal details and applicable jurisdiction have been confirmed.",
        ],
      },
      {
        title: "Contact",
        nav: "Contact",
        paragraphs: [
          "Questions about these Terms & Conditions can be directed to:",
        ],
      },
    ],

    registration: "Registration / company number",
    taxNumber: "Tax number",
    legalContact: "Legal contact",
    returnWebsite: "Return to website",
  },

  de: {
    legalLabel: "Rechtliches · Bedingungen",
    title: "Allgemeine Geschäftsbedingungen",
    subtitle: "Klare Bedingungen für persönlichen Service.",
    heroText:
      "Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung der Website von LIDYA JEWELLERY sowie damit verbundene Interaktionen, einschließlich Anfragen, Terminvereinbarungen und Serviceanfragen.",
    lastUpdated: "Zuletzt aktualisiert",
    date: "August 2026",

    introduction: "Einleitung",
    introTitle:
      "Unsere Website dient dazu, Informationen bereitzustellen, Anfragen zu unterstützen und persönlichen Service zu ermöglichen.",
    introText:
      "Mit der Nutzung dieser Website erklären Sie sich damit einverstanden, sie rechtmäßig und gemäß diesen Bedingungen zu verwenden. Für bestimmte Käufe, Reparaturen, Sonderanfertigungen oder andere Dienstleistungen können zusätzliche Bedingungen gelten, die direkt mit Ihnen vereinbart werden.",

    contents: "Inhalt",

    sections: [
      {
        title: "Websitebetreiber",
        nav: "Websitebetreiber",
        paragraphs: ["Diese Website wird betrieben von:"],
      },
      {
        title: "Nutzung der Website",
        nav: "Nutzung der Website",
        paragraphs: [
          "Sie dürfen diese Website für persönliche und rechtmäßige Zwecke nutzen, einschließlich der Einsicht in Informationen über LIDYA JEWELLERY, Kollektionen, Dienstleistungen, Boutiquen und damit verbundene Angebote.",
          "Sie dürfen die Website nicht missbräuchlich verwenden, keinen unbefugten Zugriff versuchen, den Betrieb beeinträchtigen, Schadsoftware einschleusen oder die Website in einer Weise nutzen, die ihre Funktion beschädigen, deaktivieren oder beeinträchtigen könnte.",
        ],
      },
      {
        title: "Informationen auf der Website",
        nav: "Websiteinformationen",
        paragraphs: [
          "Wir bemühen uns, die Informationen auf der Website korrekt und aktuell zu halten. Produktbeschreibungen, Bilder, Verfügbarkeit, Preise, Servicedetails und andere Informationen können sich jedoch ändern.",
          "Bilder sollen Produkte und Dienstleistungen möglichst genau darstellen. Farben, Proportionen und Erscheinungsbild können jedoch aufgrund von Beleuchtung, Fotografie, Bildschirmeinstellungen sowie der individuellen Beschaffenheit von Schmuck und Edelsteinen abweichen.",
        ],
      },
      {
        title: "Anfragen und Termine",
        nav: "Anfragen & Termine",
        paragraphs: [
          "Anfragen über die Website, Terminwünsche, Telefonate, E-Mails und WhatsApp-Kommunikation begründen für sich allein keinen verbindlichen Kauf- oder Dienstleistungsvertrag.",
          "Ein Termin oder eine Serviceanfrage gilt erst als bestätigt, wenn sie direkt von LIDYA JEWELLERY oder einem autorisierten Vertreter angenommen wurde.",
        ],
      },
      {
        title: "Schmuck- und Uhrenservice",
        nav: "Dienstleistungen",
        paragraphs: [
          "Reparaturen, Anpassungen, Steinfassungen, Umarbeitungen und ähnliche Dienstleistungen können eine persönliche Begutachtung erfordern, bevor Umfang, Preis und Dauer bestätigt werden können.",
          "Eine vor der Begutachtung abgegebene Kostenschätzung ist als unverbindlich zu betrachten, sofern nicht ausdrücklich anders bestätigt.",
          "Kunden sind dafür verantwortlich, korrekte Informationen über zur Bearbeitung übergebene Gegenstände bereitzustellen, einschließlich bekannter Schäden, früherer Reparaturen oder relevanter Vorgeschichte.",
        ],
      },
      {
        title: "Preise, Bestand und Verfügbarkeit",
        nav: "Preise & Verfügbarkeit",
        paragraphs: [
          "Preise, Lagerbestände, Edelmetallwerte, Verfügbarkeit von Edelsteinen und andere kommerzielle Informationen können sich ohne vorherige Ankündigung ändern.",
          "Der endgültige Preis für einen Kauf oder eine Dienstleistung ist der Preis, der zum jeweiligen Zeitpunkt direkt mit dem Kunden bestätigt wird.",
          "Die Darstellung eines Artikels oder einer Dienstleistung auf der Website garantiert nicht dessen aktuelle Verfügbarkeit.",
        ],
      },
      {
        title: "Sonderanfertigungen und individuelle Arbeiten",
        nav: "Sonderanfertigungen",
        paragraphs: [
          "Sonderanfertigungen, Umarbeitungen und individuelle Aufträge können persönliche Beratung, Designfreigabe, Materialauswahl, Maße und weitere direkt mit dem Kunden vereinbarte Spezifikationen umfassen.",
          "Produktionszeiten, Anzahlungen, Stornierungsbedingungen, Änderungen und endgültige Preise sollten vor Beginn der Arbeiten individuell bestätigt werden.",
          "Da Sonderanfertigungen nach individuellen Anforderungen hergestellt werden, können im gesetzlich zulässigen Rahmen besondere Regeln für Stornierung, Rückgabe oder Änderungen gelten.",
        ],
      },
      {
        title: "Links und Dienste Dritter",
        nav: "Drittanbieter",
        paragraphs: [
          "Die Website kann Links zu Websites und Diensten Dritter enthalten, darunter WhatsApp, Instagram, Facebook, Hotel-Websites, Reisedienste und andere externe Anbieter.",
          "Diese Drittanbieter arbeiten unabhängig von LIDYA JEWELLERY. Wir sind nicht für deren Inhalte, Verfügbarkeit, Datenschutzpraktiken, Sicherheit oder Vertragsbedingungen verantwortlich.",
          "Jede Interaktion mit einem Drittanbieter unterliegt dessen eigenen Bedingungen und Richtlinien.",
        ],
      },
      {
        title: "Geistiges Eigentum",
        nav: "Geistiges Eigentum",
        paragraphs: [
          "Sofern nicht anders angegeben, stehen Webdesign, Texte, Marken, Logos, Fotografien, Grafiken und andere Materialien im Eigentum von LIDYA JEWELLERY, sind an LIDYA JEWELLERY lizenziert oder werden mit entsprechender Genehmigung verwendet.",
          "Inhalte der Website dürfen ohne entsprechende Genehmigung nicht vervielfältigt, verbreitet, erneut veröffentlicht, kommerziell genutzt oder verändert werden, soweit dies nicht gesetzlich erlaubt ist.",
        ],
      },
      {
        title: "Haftungsbeschränkung",
        nav: "Haftung",
        paragraphs: [
          "Die Website dient allgemeinen Informations- und Kommunikationszwecken. Soweit gesetzlich zulässig, garantieren wir weder eine ununterbrochene Verfügbarkeit noch eine jederzeit fehlerfreie technische Funktion.",
          "Diese Bedingungen sollen keine Haftung ausschließen oder beschränken, wenn ein solcher Ausschluss oder eine solche Beschränkung nach geltendem Recht unzulässig ist.",
          "Kunden sollten geeignete professionelle Beratung einholen, wenn eine Entscheidung eine spezialisierte rechtliche, finanzielle, steuerliche, investitionsbezogene oder andere fachliche Beurteilung erfordert.",
        ],
      },
      {
        title: "Änderungen der Website und dieser Bedingungen",
        nav: "Änderungen",
        paragraphs: [
          "Wir können die Website, Dienstleistungen oder diese Bedingungen von Zeit zu Zeit aktualisieren.",
          "Die jeweils aktuelle Version wird zusammen mit dem entsprechenden Änderungsdatum auf dieser Seite veröffentlicht.",
        ],
      },
      {
        title: "Anwendbares Recht und Gerichtsstand",
        nav: "Anwendbares Recht",
        paragraphs: [
          "Das auf diese Bedingungen anwendbare Recht sowie die zuständigen Gerichte oder Behörden richten sich nach der rechtlichen Identität und dem eingetragenen Sitz des Websitebetreibers.",
          "Dieser Abschnitt sollte nach Bestätigung der rechtlichen Angaben des Betreibers und der anwendbaren Rechtsordnung endgültig festgelegt werden.",
        ],
      },
      {
        title: "Kontakt",
        nav: "Kontakt",
        paragraphs: [
          "Fragen zu diesen Allgemeinen Geschäftsbedingungen können gerichtet werden an:",
        ],
      },
    ],

    registration: "Registrierungs- / Unternehmensnummer",
    taxNumber: "Steuernummer",
    legalContact: "Rechtlicher Kontakt",
    returnWebsite: "Zurück zur Website",
  },

  tr: {
    legalLabel: "Yasal · Koşullar",
    title: "Şartlar ve Koşullar",
    subtitle: "Kişisel hizmet için açık ve anlaşılır koşullar.",
    heroText:
      "Bu Şartlar ve Koşullar, LIDYA JEWELLERY web sitesinin kullanımını ve talepler, randevular ve hizmet istekleri dahil olmak üzere ilgili etkileşimleri düzenler.",
    lastUpdated: "Son güncelleme",
    date: "Ağustos 2026",

    introduction: "Giriş",
    introTitle:
      "Web sitemiz bilgi sunmak, talepleri desteklemek ve kişisel hizmeti kolaylaştırmak amacıyla hazırlanmıştır.",
    introText:
      "Bu web sitesini kullanarak siteyi yasalara uygun şekilde ve bu Şartlar ve Koşullar doğrultusunda kullanmayı kabul edersiniz. Belirli satın almalar, onarımlar, özel üretimler veya diğer hizmetler, sizinle doğrudan teyit edilen ek koşullara tabi olabilir.",

    contents: "İçindekiler",

    sections: [
      {
        title: "Web sitesi işletmecisi",
        nav: "Web sitesi işletmecisi",
        paragraphs: ["Bu web sitesi aşağıdaki işletme tarafından yönetilmektedir:"],
      },
      {
        title: "Web sitesinin kullanımı",
        nav: "Web sitesinin kullanımı",
        paragraphs: [
          "Bu web sitesini LIDYA JEWELLERY, koleksiyonlar, hizmetler, butik mağazalar ve ilgili teklifler hakkında bilgi edinmek dahil olmak üzere kişisel ve yasal amaçlarla kullanabilirsiniz.",
          "Web sitesini kötüye kullanamaz, yetkisiz erişim girişiminde bulunamaz, çalışmasına müdahale edemez, zararlı yazılım yükleyemez veya sitenin işlevselliğine zarar verecek şekilde kullanamazsınız.",
        ],
      },
      {
        title: "Web sitesi bilgileri",
        nav: "Web sitesi bilgileri",
        paragraphs: [
          "Web sitesindeki bilgileri doğru ve güncel tutmaya çalışıyoruz; ancak ürün açıklamaları, görseller, stok durumu, fiyatlar, hizmet ayrıntıları ve diğer bilgiler zaman zaman değişebilir.",
          "Görseller ürün ve hizmetleri mümkün olduğunca doğru şekilde temsil etmeyi amaçlar. Ancak renkler, oranlar ve görünüm; ışık, fotoğraf, ekran ayarları ve mücevherler ile değerli taşların kendine özgü yapısı nedeniyle farklılık gösterebilir.",
        ],
      },
      {
        title: "Talepler ve randevular",
        nav: "Talepler & randevular",
        paragraphs: [
          "Web sitesi üzerinden gönderilen talepler, randevu istekleri, telefon görüşmeleri, e-postalar ve WhatsApp iletişimleri tek başına bağlayıcı bir satış veya hizmet sözleşmesi oluşturmaz.",
          "Bir randevu veya hizmet talebi yalnızca LIDYA JEWELLERY veya yetkili bir temsilci tarafından doğrudan kabul edildiğinde onaylanmış sayılır.",
        ],
      },
      {
        title: "Mücevher ve saat hizmetleri",
        nav: "Hizmetler",
        paragraphs: [
          "Onarım, ayarlama, taş montürü, yeniden tasarım ve ilgili hizmetlerde kapsam, fiyat ve süre kesinleşmeden önce ürünün fiziksel olarak incelenmesi gerekebilir.",
          "İnceleme öncesinde verilen fiyat tahminleri, açıkça aksi belirtilmedikçe yaklaşık bilgi olarak değerlendirilmelidir.",
          "Müşteriler, hizmete verilen ürünler hakkında bilinen hasarlar, önceki onarımlar veya ilgili geçmiş dahil olmak üzere doğru bilgi sağlamaktan sorumludur.",
        ],
      },
      {
        title: "Fiyatlar, stok ve bulunabilirlik",
        nav: "Fiyat & bulunabilirlik",
        paragraphs: [
          "Fiyatlar, stok seviyeleri, değerli metal değerleri, değerli taş bulunabilirliği ve diğer ticari bilgiler önceden bildirim yapılmaksızın değişebilir.",
          "Bir satın alma veya hizmet için geçerli nihai fiyat, ilgili zamanda müşteriyle doğrudan teyit edilen fiyattır.",
          "Bir ürün veya hizmetin web sitesinde gösterilmesi, o anda mevcut olduğunu garanti etmez.",
        ],
      },
      {
        title: "Özel tasarım ve kişiye özel çalışmalar",
        nav: "Özel tasarım",
        paragraphs: [
          "Özel tasarım mücevherler, yeniden tasarımlar ve kişiye özel siparişler; bireysel danışmanlık, tasarım onayı, malzeme seçimi, ölçüler ve müşteriyle doğrudan kararlaştırılan diğer özellikleri içerebilir.",
          "Üretim süreleri, depozitolar, iptal koşulları, değişiklikler ve nihai fiyatlandırma işe başlanmadan önce ayrı ayrı teyit edilmelidir.",
          "Özel tasarım ürünler kişisel gereksinimlere göre üretildiğinden, yürürlükteki yasaların izin verdiği ölçüde farklı iptal, iade veya değişiklik kuralları uygulanabilir.",
        ],
      },
      {
        title: "Üçüncü taraf bağlantıları ve hizmetleri",
        nav: "Üçüncü taraf hizmetleri",
        paragraphs: [
          "Web sitesi WhatsApp, Instagram, Facebook, otel web siteleri, seyahat hizmetleri ve diğer harici sağlayıcılar dahil olmak üzere üçüncü taraf web sitelerine ve hizmetlerine bağlantılar içerebilir.",
          "Bu üçüncü taraflar LIDYA JEWELLERY'den bağımsız olarak faaliyet gösterir. İçerikleri, kullanılabilirlikleri, gizlilik uygulamaları, güvenlikleri veya sözleşme koşullarından sorumlu değiliz.",
          "Üçüncü taraf hizmetleriyle yapılan tüm etkileşimler ilgili sağlayıcının kendi şart ve politikalarına tabidir.",
        ],
      },
      {
        title: "Fikri mülkiyet",
        nav: "Fikri mülkiyet",
        paragraphs: [
          "Aksi belirtilmedikçe web sitesi tasarımı, yazılı içerik, marka unsurları, logolar, fotoğraflar, grafikler ve diğer materyaller LIDYA JEWELLERY'ye aittir, lisanslanmıştır veya izinle kullanılmaktadır.",
          "Web sitesi içeriği, yasaların izin verdiği durumlar dışında, uygun izin olmaksızın çoğaltılamaz, dağıtılamaz, yeniden yayımlanamaz, ticari olarak kullanılamaz veya değiştirilemez.",
        ],
      },
      {
        title: "Sorumluluğun sınırlandırılması",
        nav: "Sorumluluk",
        paragraphs: [
          "Web sitesi genel bilgi ve iletişim amaçları için sunulmaktadır. Yasaların izin verdiği ölçüde kesintisiz erişim veya web sitesinin her zaman teknik hatalardan tamamen arınmış olacağını garanti etmiyoruz.",
          "Bu Şartlar ve Koşullardaki hiçbir hüküm, yürürlükteki yasaların yasakladığı durumlarda sorumluluğu ortadan kaldırmayı veya sınırlandırmayı amaçlamaz.",
          "Hukuki, mali, vergisel, yatırım veya başka bir uzman değerlendirmesi gerektiren kararlar için müşteriler uygun profesyonel danışmanlık almalıdır.",
        ],
      },
      {
        title: "Web sitesi ve koşullardaki değişiklikler",
        nav: "Değişiklikler",
        paragraphs: [
          "Web sitesini, hizmetleri veya bu Şartlar ve Koşulları zaman zaman güncelleyebiliriz.",
          "En güncel sürüm, ilgili güncelleme tarihiyle birlikte bu sayfada yayımlanacaktır.",
        ],
      },
      {
        title: "Uygulanacak hukuk ve yetki",
        nav: "Uygulanacak hukuk",
        paragraphs: [
          "Bu Şartlar ve Koşullara uygulanacak hukuk ile yetkili mahkeme veya makamlar, web sitesi işletmecisinin hukuki kimliğine ve kayıtlı adresine bağlı olacaktır.",
          "Bu bölüm, işletmecinin yasal bilgileri ve uygulanacak yargı yetkisi teyit edildikten sonra kesinleştirilmelidir.",
        ],
      },
      {
        title: "İletişim",
        nav: "İletişim",
        paragraphs: [
          "Bu Şartlar ve Koşullar hakkındaki sorularınızı aşağıdaki adrese iletebilirsiniz:",
        ],
      },
    ],

    registration: "Şirket / kayıt numarası",
    taxNumber: "Vergi numarası",
    legalContact: "Yasal iletişim",
    returnWebsite: "Web sitesine dön",
  },

  sk: {
    legalLabel: "Právne · Podmienky",
    title: "Obchodné podmienky",
    subtitle: "Jasné podmienky pre osobný servis.",
    heroText:
      "Tieto obchodné podmienky upravujú používanie webovej stránky LIDYA JEWELLERY a súvisiace interakcie vrátane otázok, rezervácií termínov a servisných požiadaviek.",
    lastUpdated: "Posledná aktualizácia",
    date: "August 2026",

    introduction: "Úvod",
    introTitle:
      "Naša webová stránka slúži na poskytovanie informácií, vybavovanie otázok a uľahčenie osobného servisu.",
    introText:
      "Používaním tejto webovej stránky súhlasíte s tým, že ju budete používať zákonným spôsobom a v súlade s týmito obchodnými podmienkami. Na konkrétne nákupy, opravy, zákazkovú výrobu alebo iné služby sa môžu vzťahovať aj dodatočné podmienky, ktoré vám budú potvrdené priamo.",

    contents: "Obsah",

    sections: [
      {
        title: "Prevádzkovateľ webovej stránky",
        nav: "Prevádzkovateľ",
        paragraphs: ["Túto webovú stránku prevádzkuje:"],
      },
      {
        title: "Používanie webovej stránky",
        nav: "Používanie stránky",
        paragraphs: [
          "Túto webovú stránku môžete používať na osobné a zákonné účely vrátane prezerania informácií o LIDYA JEWELLERY, kolekciách, službách, butikoch a súvisiacich ponukách.",
          "Webovú stránku nesmiete zneužívať, pokúšať sa o neoprávnený prístup, narúšať jej fungovanie, zavádzať škodlivý kód ani ju používať spôsobom, ktorý by mohol poškodiť, zablokovať alebo obmedziť jej funkčnosť.",
        ],
      },
      {
        title: "Informácie na webovej stránke",
        nav: "Informácie na stránke",
        paragraphs: [
          "Snažíme sa udržiavať informácie na webovej stránke presné a aktuálne, avšak popisy produktov, obrázky, dostupnosť, ceny, podrobnosti o službách a ďalšie informácie sa môžu priebežne meniť.",
          "Obrázky majú čo najpresnejšie zobrazovať produkty a služby, avšak farby, proporcie a vizuálny vzhľad sa môžu líšiť v závislosti od osvetlenia, fotografie, nastavenia obrazovky a individuálnej povahy šperkov a drahých kameňov.",
        ],
      },
      {
        title: "Otázky a rezervácie termínov",
        nav: "Otázky & termíny",
        paragraphs: [
          "Otázky odoslané cez webovú stránku, žiadosti o termín, telefonáty, e-maily ani komunikácia cez WhatsApp samy osebe nevytvárajú záväznú kúpnu alebo servisnú zmluvu.",
          "Termín alebo servisná požiadavka je potvrdená až vtedy, keď ju priamo prijme LIDYA JEWELLERY alebo oprávnený zástupca.",
        ],
      },
      {
        title: "Servis šperkov a hodiniek",
        nav: "Servis",
        paragraphs: [
          "Opravy, úpravy, osádzanie kameňov, redizajn a súvisiace služby môžu vyžadovať osobnú kontrolu predmetu pred potvrdením rozsahu práce, ceny a termínu.",
          "Akýkoľvek odhad poskytnutý pred kontrolou je potrebné považovať za orientačný, pokiaľ nie je výslovne potvrdené inak.",
          "Zákazník je zodpovedný za poskytnutie presných informácií o predmetoch odovzdaných do servisu vrátane známeho poškodenia, predchádzajúcich opráv alebo relevantnej histórie.",
        ],
      },
      {
        title: "Ceny, sklad a dostupnosť",
        nav: "Ceny & dostupnosť",
        paragraphs: [
          "Ceny, skladové zásoby, hodnoty drahých kovov, dostupnosť drahých kameňov a ďalšie obchodné informácie sa môžu meniť bez predchádzajúceho upozornenia.",
          "Konečná cena nákupu alebo služby je cena potvrdená priamo zákazníkovi v príslušnom čase.",
          "Zobrazenie produktu alebo služby na webovej stránke nezaručuje ich aktuálnu dostupnosť.",
        ],
      },
      {
        title: "Zákazková a individuálna výroba",
        nav: "Zákazková výroba",
        paragraphs: [
          "Zákazkové šperky, redizajn a individuálne objednávky môžu zahŕňať osobnú konzultáciu, schválenie návrhu, výber materiálu, rozmery a ďalšie špecifikácie dohodnuté priamo so zákazníkom.",
          "Čas výroby, zálohy, podmienky zrušenia, úpravy a konečná cena by mali byť individuálne potvrdené pred začatím práce.",
          "Keďže zákazkové výrobky sú vyrábané podľa individuálnych požiadaviek, môžu sa na ne v rozsahu povolenom platnými právnymi predpismi vzťahovať odlišné pravidlá zrušenia, vrátenia alebo úprav.",
        ],
      },
      {
        title: "Odkazy a služby tretích strán",
        nav: "Služby tretích strán",
        paragraphs: [
          "Webová stránka môže obsahovať odkazy na webové stránky a služby tretích strán vrátane WhatsApp, Instagramu, Facebooku, hotelových stránok, cestovných služieb a ďalších externých poskytovateľov.",
          "Tieto tretie strany fungujú nezávisle od LIDYA JEWELLERY. Nezodpovedáme za ich obsah, dostupnosť, zásady ochrany súkromia, bezpečnosť ani zmluvné podmienky.",
          "Akákoľvek interakcia so službou tretej strany podlieha vlastným podmienkam a zásadám daného poskytovateľa.",
        ],
      },
      {
        title: "Duševné vlastníctvo",
        nav: "Duševné vlastníctvo",
        paragraphs: [
          "Ak nie je uvedené inak, dizajn webovej stránky, textový obsah, značka, logá, fotografie, grafika a ďalšie materiály sú vlastníctvom LIDYA JEWELLERY, sú jej licencované alebo sa používajú s príslušným povolením.",
          "Obsah webovej stránky nesmie byť bez príslušného povolenia reprodukovaný, distribuovaný, opätovne publikovaný, komerčne využívaný ani upravovaný, okrem prípadov povolených zákonom.",
        ],
      },
      {
        title: "Obmedzenie zodpovednosti",
        nav: "Zodpovednosť",
        paragraphs: [
          "Webová stránka slúži na všeobecné informačné a komunikačné účely. V rozsahu povolenom zákonom nezaručujeme nepretržitú dostupnosť ani to, že webová stránka bude vždy bez technických chýb.",
          "Žiadne ustanovenie týchto obchodných podmienok nemá za cieľ vylúčiť alebo obmedziť zodpovednosť v prípadoch, keď takéto vylúčenie alebo obmedzenie platné právo nepovoľuje.",
          "Ak rozhodnutie vyžaduje odborné právne, finančné, daňové, investičné alebo iné odborné posúdenie, zákazníci by mali vyhľadať primerané odborné poradenstvo.",
        ],
      },
      {
        title: "Zmeny webovej stránky a týchto podmienok",
        nav: "Zmeny",
        paragraphs: [
          "Webovú stránku, služby alebo tieto obchodné podmienky môžeme priebežne aktualizovať.",
          "Najnovšia verzia bude zverejnená na tejto stránke spolu s príslušným dátumom aktualizácie.",
        ],
      },
      {
        title: "Rozhodné právo a jurisdikcia",
        nav: "Rozhodné právo",
        paragraphs: [
          "Právo, ktorým sa riadia tieto obchodné podmienky, ako aj príslušné súdy alebo orgány budú závisieť od právnej identity a registrovaného sídla prevádzkovateľa webovej stránky.",
          "Táto časť by mala byť dokončená po potvrdení právnych údajov prevádzkovateľa a príslušnej jurisdikcie.",
        ],
      },
      {
        title: "Kontakt",
        nav: "Kontakt",
        paragraphs: [
          "Otázky týkajúce sa týchto obchodných podmienok môžete smerovať na:",
        ],
      },
    ],

    registration: "Registračné / firemné číslo",
    taxNumber: "Daňové číslo",
    legalContact: "Právny kontakt",
    returnWebsite: "Späť na webovú stránku",
  },

  cs: {
    legalLabel: "Právní · Podmínky",
    title: "Obchodní podmínky",
    subtitle: "Jasné podmínky pro osobní servis.",
    heroText:
      "Tyto obchodní podmínky upravují používání webových stránek LIDYA JEWELLERY a související interakce včetně dotazů, rezervací termínů a servisních požadavků.",
    lastUpdated: "Poslední aktualizace",
    date: "Srpen 2026",

    introduction: "Úvod",
    introTitle:
      "Naše webové stránky slouží k poskytování informací, vyřizování dotazů a usnadnění osobního servisu.",
    introText:
      "Používáním těchto webových stránek souhlasíte s tím, že je budete používat zákonným způsobem a v souladu s těmito obchodními podmínkami. Na konkrétní nákupy, opravy, zakázkovou výrobu nebo jiné služby se mohou vztahovat také dodatečné podmínky potvrzené přímo s vámi.",

    contents: "Obsah",

    sections: [
      {
        title: "Provozovatel webových stránek",
        nav: "Provozovatel",
        paragraphs: ["Tyto webové stránky provozuje:"],
      },
      {
        title: "Používání webových stránek",
        nav: "Používání stránek",
        paragraphs: [
          "Tyto webové stránky můžete používat pro osobní a zákonné účely, včetně prohlížení informací o LIDYA JEWELLERY, kolekcích, službách, buticích a souvisejících nabídkách.",
          "Webové stránky nesmíte zneužívat, pokoušet se o neoprávněný přístup, narušovat jejich provoz, zavádět škodlivý kód ani je používat způsobem, který by mohl poškodit nebo omezit jejich funkčnost.",
        ],
      },
      {
        title: "Informace na webových stránkách",
        nav: "Informace na stránkách",
        paragraphs: [
          "Snažíme se udržovat informace na webových stránkách přesné a aktuální, avšak popisy produktů, obrázky, dostupnost, ceny, podrobnosti služeb a další informace se mohou průběžně měnit.",
          "Obrázky mají produkty a služby zobrazovat co nejpřesněji, ale barvy, proporce a vzhled se mohou lišit podle osvětlení, fotografie, nastavení displeje a individuální povahy šperků a drahých kamenů.",
        ],
      },
      {
        title: "Dotazy a rezervace termínů",
        nav: "Dotazy & termíny",
        paragraphs: [
          "Dotazy prostřednictvím webu, žádosti o termín, telefonáty, e-maily ani komunikace přes WhatsApp samy o sobě nevytvářejí závaznou kupní nebo servisní smlouvu.",
          "Termín nebo servisní požadavek je potvrzen až tehdy, když jej přímo přijme LIDYA JEWELLERY nebo oprávněný zástupce.",
        ],
      },
      {
        title: "Servis šperků a hodinek",
        nav: "Servis",
        paragraphs: [
          "Opravy, úpravy, zasazování kamenů, redesign a související služby mohou vyžadovat fyzickou kontrolu před potvrzením rozsahu, ceny a termínu.",
          "Jakýkoli odhad poskytnutý před kontrolou je třeba považovat za orientační, pokud není výslovně potvrzeno jinak.",
          "Zákazníci odpovídají za poskytnutí přesných informací o předmětech předaných do servisu, včetně známého poškození, předchozích oprav nebo relevantní historie.",
        ],
      },
      {
        title: "Ceny, sklad a dostupnost",
        nav: "Ceny & dostupnost",
        paragraphs: [
          "Ceny, skladové zásoby, hodnoty drahých kovů, dostupnost drahých kamenů a další obchodní informace se mohou měnit bez předchozího upozornění.",
          "Konečná cena nákupu nebo služby je cena potvrzená přímo zákazníkovi v příslušném okamžiku.",
          "Zobrazení produktu nebo služby na webových stránkách nezaručuje jejich aktuální dostupnost.",
        ],
      },
      {
        title: "Zakázková a individuální výroba",
        nav: "Zakázková výroba",
        paragraphs: [
          "Zakázkové šperky, redesign a individuální objednávky mohou zahrnovat osobní konzultaci, schválení návrhu, výběr materiálu, rozměry a další specifikace dohodnuté přímo se zákazníkem.",
          "Výrobní lhůty, zálohy, podmínky zrušení, úpravy a konečné ceny by měly být individuálně potvrzeny před zahájením práce.",
          "Protože jsou zakázkové výrobky vyráběny podle individuálních požadavků, mohou se na ně v rozsahu povoleném platnými právními předpisy vztahovat odlišná pravidla pro zrušení, vrácení nebo úpravy.",
        ],
      },
      {
        title: "Odkazy a služby třetích stran",
        nav: "Služby třetích stran",
        paragraphs: [
          "Webové stránky mohou obsahovat odkazy na služby třetích stran, včetně WhatsApp, Instagramu, Facebooku, hotelových webů, cestovních služeb a dalších externích poskytovatelů.",
          "Tyto třetí strany fungují nezávisle na LIDYA JEWELLERY. Neodpovídáme za jejich obsah, dostupnost, zásady ochrany soukromí, bezpečnost ani smluvní podmínky.",
          "Jakákoli interakce se službou třetí strany podléhá vlastním podmínkám a zásadám příslušného poskytovatele.",
        ],
      },
      {
        title: "Duševní vlastnictví",
        nav: "Duševní vlastnictví",
        paragraphs: [
          "Není-li uvedeno jinak, design webových stránek, textový obsah, značka, loga, fotografie, grafika a další materiály jsou vlastnictvím LIDYA JEWELLERY, jsou jí licencovány nebo používány s příslušným svolením.",
          "Obsah webových stránek nesmí být bez příslušného svolení reprodukován, distribuován, znovu publikován, komerčně využíván ani upravován, s výjimkou případů povolených zákonem.",
        ],
      },
      {
        title: "Omezení odpovědnosti",
        nav: "Odpovědnost",
        paragraphs: [
          "Webové stránky slouží k obecným informačním a komunikačním účelům. V rozsahu povoleném zákonem nezaručujeme nepřetržitou dostupnost ani to, že webové stránky budou vždy bez technických chyb.",
          "Žádné ustanovení těchto obchodních podmínek nemá za cíl vyloučit nebo omezit odpovědnost tam, kde takové vyloučení nebo omezení platné právo zakazuje.",
          "Pokud rozhodnutí vyžaduje odborné právní, finanční, daňové, investiční nebo jiné odborné posouzení, měli by zákazníci vyhledat vhodné odborné poradenství.",
        ],
      },
      {
        title: "Změny webových stránek a těchto podmínek",
        nav: "Změny",
        paragraphs: [
          "Webové stránky, služby nebo tyto obchodní podmínky můžeme čas od času aktualizovat.",
          "Nejnovější verze bude zveřejněna na této stránce spolu s příslušným datem aktualizace.",
        ],
      },
      {
        title: "Rozhodné právo a jurisdikce",
        nav: "Rozhodné právo",
        paragraphs: [
          "Právo, kterým se řídí tyto obchodní podmínky, a příslušné soudy nebo orgány budou záviset na právní identitě a registrovaném sídle provozovatele webových stránek.",
          "Tato část by měla být dokončena po potvrzení právních údajů provozovatele a příslušné jurisdikce.",
        ],
      },
      {
        title: "Kontakt",
        nav: "Kontakt",
        paragraphs: [
          "Dotazy týkající se těchto obchodních podmínek můžete zasílat na:",
        ],
      },
    ],

    registration: "Registrační / firemní číslo",
    taxNumber: "Daňové číslo",
    legalContact: "Právní kontakt",
    returnWebsite: "Zpět na web",
  },

  hu: {
    legalLabel: "Jogi · Feltételek",
    title: "Általános Szerződési Feltételek",
    subtitle: "Egyértelmű feltételek a személyes kiszolgáláshoz.",
    heroText:
      "Jelen feltételek szabályozzák a LIDYA JEWELLERY weboldal használatát és a kapcsolódó interakciókat, beleértve a megkereséseket, időpontfoglalásokat és szolgáltatási kérelmeket.",
    lastUpdated: "Utolsó frissítés",
    date: "2026. augusztus",

    introduction: "Bevezetés",
    introTitle:
      "Weboldalunk célja információ nyújtása, a megkeresések támogatása és a személyes kiszolgálás megkönnyítése.",
    introText:
      "A weboldal használatával Ön vállalja, hogy azt jogszerűen és jelen feltételeknek megfelelően használja. Egyes vásárlásokra, javításokra, egyedi munkákra vagy más szolgáltatásokra további, közvetlenül Önnel egyeztetett feltételek vonatkozhatnak.",

    contents: "Tartalom",

    sections: [
      {
        title: "A weboldal üzemeltetője",
        nav: "Üzemeltető",
        paragraphs: ["A weboldal üzemeltetője:"],
      },
      {
        title: "A weboldal használata",
        nav: "A weboldal használata",
        paragraphs: [
          "A weboldalt személyes és jogszerű célokra használhatja, beleértve a LIDYA JEWELLERY-ről, kollekciókról, szolgáltatásokról, butikokról és kapcsolódó ajánlatokról szóló információk megtekintését.",
          "Tilos a weboldallal visszaélni, jogosulatlan hozzáférést megkísérelni, működését megzavarni, rosszindulatú kódot elhelyezni vagy olyan módon használni, amely károsíthatja vagy korlátozhatja annak működését.",
        ],
      },
      {
        title: "A weboldalon található információk",
        nav: "Weboldal-információk",
        paragraphs: [
          "Törekszünk arra, hogy a weboldalon található információk pontosak és naprakészek legyenek, azonban a termékleírások, képek, elérhetőség, árak, szolgáltatási részletek és egyéb információk időről időre változhatnak.",
          "A képek célja a termékek és szolgáltatások lehető legpontosabb bemutatása, azonban a színek, arányok és megjelenés eltérhetnek a világítás, fényképezés, kijelzőbeállítások, valamint az ékszerek és drágakövek egyedi jellege miatt.",
        ],
      },
      {
        title: "Megkeresések és időpontok",
        nav: "Megkeresések & időpontok",
        paragraphs: [
          "A weboldalon küldött megkeresések, időpontkérések, telefonhívások, e-mailek és WhatsApp-üzenetek önmagukban nem hoznak létre kötelező érvényű adásvételi vagy szolgáltatási szerződést.",
          "Az időpont vagy szolgáltatási kérelem csak akkor tekinthető visszaigazoltnak, ha azt a LIDYA JEWELLERY vagy annak meghatalmazott képviselője közvetlenül elfogadta.",
        ],
      },
      {
        title: "Ékszer- és óraszerviz",
        nav: "Szolgáltatások",
        paragraphs: [
          "A javítások, méretigazítások, kőfoglalások, áttervezések és kapcsolódó szolgáltatások esetén fizikai vizsgálatra lehet szükség a munka terjedelmének, árának és határidejének megerősítése előtt.",
          "A vizsgálat előtt adott becslés tájékoztató jellegűnek tekintendő, kivéve, ha kifejezetten másként kerül megerősítésre.",
          "Az ügyfél felelős a szervizre átadott tárgyakról szóló pontos információk megadásáért, beleértve az ismert sérüléseket, korábbi javításokat és releváns előzményeket.",
        ],
      },
      {
        title: "Árak, készlet és elérhetőség",
        nav: "Árak & elérhetőség",
        paragraphs: [
          "Az árak, készletszintek, nemesfémértékek, drágakövek elérhetősége és más kereskedelmi információk előzetes értesítés nélkül változhatnak.",
          "A vásárlásra vagy szolgáltatásra vonatkozó végleges ár az az ár, amelyet az adott időpontban közvetlenül megerősítünk az ügyféllel.",
          "Egy termék vagy szolgáltatás weboldalon történő megjelenítése nem garantálja annak aktuális elérhetőségét.",
        ],
      },
      {
        title: "Egyedi és személyre szabott munkák",
        nav: "Egyedi munkák",
        paragraphs: [
          "Az egyedi ékszerek, áttervezések és személyre szabott megrendelések személyes konzultációt, tervjóváhagyást, anyagválasztást, méretezést és más, az ügyféllel közvetlenül egyeztetett specifikációkat igényelhetnek.",
          "A gyártási időt, előleget, lemondási feltételeket, módosításokat és végleges árat a munka megkezdése előtt egyedileg kell megerősíteni.",
          "Mivel az egyedi darabok személyes igények alapján készülnek, a hatályos jog által megengedett mértékben eltérő lemondási, visszaküldési vagy módosítási szabályok vonatkozhatnak rájuk.",
        ],
      },
      {
        title: "Harmadik fél linkjei és szolgáltatásai",
        nav: "Külső szolgáltatások",
        paragraphs: [
          "A weboldal harmadik fél weboldalaira és szolgáltatásaira mutató linkeket tartalmazhat, beleértve a WhatsAppot, Instagramot, Facebookot, szállodai oldalakat, utazási szolgáltatásokat és más külső szolgáltatókat.",
          "Ezek a harmadik felek a LIDYA JEWELLERY-től függetlenül működnek. Nem vállalunk felelősséget tartalmukért, elérhetőségükért, adatvédelmi gyakorlatukért, biztonságukért vagy szerződéses feltételeikért.",
          "A harmadik fél szolgáltatásával való bármely interakció az adott szolgáltató saját feltételei és szabályzatai alá tartozik.",
        ],
      },
      {
        title: "Szellemi tulajdon",
        nav: "Szellemi tulajdon",
        paragraphs: [
          "Eltérő jelzés hiányában a weboldal kialakítása, írott tartalma, márkaelemei, logói, fényképei, grafikái és más anyagai a LIDYA JEWELLERY tulajdonában vannak, részére licenceltek vagy engedéllyel kerülnek felhasználásra.",
          "A weboldal tartalma megfelelő engedély nélkül nem másolható, terjeszthető, újraközölhető, kereskedelmi célra nem használható és nem módosítható, kivéve, ha azt a jogszabály megengedi.",
        ],
      },
      {
        title: "A felelősség korlátozása",
        nav: "Felelősség",
        paragraphs: [
          "A weboldal általános tájékoztatási és kommunikációs célokat szolgál. A jogszabályok által megengedett mértékben nem garantáljuk a megszakítás nélküli elérhetőséget vagy a technikai hibáktól való teljes mentességet.",
          "Jelen feltételek egyetlen rendelkezése sem irányul olyan felelősség kizárására vagy korlátozására, amelyet a hatályos jog nem enged meg.",
          "Ha egy döntés speciális jogi, pénzügyi, adózási, befektetési vagy más szakmai értékelést igényel, az ügyfélnek megfelelő szakértői tanácsot kell kérnie.",
        ],
      },
      {
        title: "A weboldal és a feltételek módosítása",
        nav: "Módosítások",
        paragraphs: [
          "Időről időre frissíthetjük a weboldalt, a szolgáltatásokat vagy jelen feltételeket.",
          "A legfrissebb verzió a megfelelő módosítási dátummal együtt ezen az oldalon kerül közzétételre.",
        ],
      },
      {
        title: "Irányadó jog és joghatóság",
        nav: "Irányadó jog",
        paragraphs: [
          "A jelen feltételekre irányadó jog, valamint az illetékes bíróságok vagy hatóságok a weboldal üzemeltetőjének jogi személyétől és bejegyzett székhelyétől függenek.",
          "Ezt a részt az üzemeltető jogi adatainak és az alkalmazandó joghatóságnak a megerősítése után kell véglegesíteni.",
        ],
      },
      {
        title: "Kapcsolat",
        nav: "Kapcsolat",
        paragraphs: [
          "A jelen feltételekkel kapcsolatos kérdéseket az alábbi elérhetőségre küldheti:",
        ],
      },
    ],

    registration: "Cég- / nyilvántartási szám",
    taxNumber: "Adószám",
    legalContact: "Jogi kapcsolattartó",
    returnWebsite: "Vissza a weboldalra",
  },

  pl: {
    legalLabel: "Informacje prawne · Warunki",
    title: "Regulamin",
    subtitle: "Jasne warunki osobistej obsługi.",
    heroText:
      "Niniejszy Regulamin określa zasady korzystania ze strony internetowej LIDYA JEWELLERY oraz związanych z nią kontaktów, w tym zapytań, rezerwacji terminów i zgłoszeń serwisowych.",
    lastUpdated: "Ostatnia aktualizacja",
    date: "Sierpień 2026",

    introduction: "Wprowadzenie",
    introTitle:
      "Nasza strona internetowa służy do przekazywania informacji, obsługi zapytań i ułatwiania osobistej obsługi.",
    introText:
      "Korzystając z tej strony internetowej, zgadzasz się używać jej zgodnie z prawem i niniejszym Regulaminem. Poszczególne zakupy, naprawy, realizacje na zamówienie lub inne usługi mogą podlegać dodatkowym warunkom potwierdzanym bezpośrednio z klientem.",

    contents: "Spis treści",

    sections: [
      {
        title: "Operator strony internetowej",
        nav: "Operator strony",
        paragraphs: ["Niniejsza strona internetowa jest prowadzona przez:"],
      },
      {
        title: "Korzystanie ze strony internetowej",
        nav: "Korzystanie ze strony",
        paragraphs: [
          "Możesz korzystać z tej strony w celach osobistych i zgodnych z prawem, w tym przeglądać informacje o LIDYA JEWELLERY, kolekcjach, usługach, butikach i powiązanych ofertach.",
          "Nie wolno niewłaściwie korzystać ze strony, podejmować prób nieautoryzowanego dostępu, zakłócać jej działania, wprowadzać złośliwego kodu ani używać jej w sposób mogący uszkodzić lub ograniczyć jej funkcjonalność.",
        ],
      },
      {
        title: "Informacje na stronie",
        nav: "Informacje na stronie",
        paragraphs: [
          "Staramy się, aby informacje na stronie były dokładne i aktualne, jednak opisy produktów, zdjęcia, dostępność, ceny, szczegóły usług i inne informacje mogą ulegać zmianom.",
          "Zdjęcia mają możliwie dokładnie przedstawiać produkty i usługi, jednak kolory, proporcje i wygląd mogą różnić się w zależności od oświetlenia, fotografii, ustawień ekranu oraz indywidualnego charakteru biżuterii i kamieni szlachetnych.",
        ],
      },
      {
        title: "Zapytania i rezerwacje",
        nav: "Zapytania & rezerwacje",
        paragraphs: [
          "Zapytania wysyłane przez stronę, prośby o termin, rozmowy telefoniczne, wiadomości e-mail i komunikacja przez WhatsApp same w sobie nie tworzą wiążącej umowy sprzedaży ani świadczenia usług.",
          "Termin lub zgłoszenie serwisowe zostaje potwierdzone dopiero po bezpośredniej akceptacji przez LIDYA JEWELLERY lub upoważnionego przedstawiciela.",
        ],
      },
      {
        title: "Serwis biżuterii i zegarków",
        nav: "Usługi",
        paragraphs: [
          "Naprawy, regulacje, oprawianie kamieni, przeprojektowanie i podobne usługi mogą wymagać fizycznej oceny przed potwierdzeniem zakresu, ceny i terminu.",
          "Każdą wycenę przekazaną przed oględzinami należy traktować jako orientacyjną, chyba że wyraźnie potwierdzono inaczej.",
          "Klienci są odpowiedzialni za przekazanie dokładnych informacji o przedmiotach oddanych do serwisu, w tym o znanych uszkodzeniach, wcześniejszych naprawach i istotnej historii.",
        ],
      },
      {
        title: "Ceny, stan magazynowy i dostępność",
        nav: "Ceny & dostępność",
        paragraphs: [
          "Ceny, stany magazynowe, wartości metali szlachetnych, dostępność kamieni szlachetnych i inne informacje handlowe mogą ulec zmianie bez wcześniejszego powiadomienia.",
          "Ostateczną ceną zakupu lub usługi jest cena potwierdzona bezpośrednio z klientem w odpowiednim czasie.",
          "Prezentacja produktu lub usługi na stronie nie gwarantuje ich aktualnej dostępności.",
        ],
      },
      {
        title: "Biżuteria na zamówienie i prace indywidualne",
        nav: "Na zamówienie",
        paragraphs: [
          "Biżuteria na zamówienie, przeprojektowanie i indywidualne realizacje mogą wymagać osobistej konsultacji, akceptacji projektu, wyboru materiałów, pomiarów i innych specyfikacji uzgodnionych bezpośrednio z klientem.",
          "Czas realizacji, zaliczki, warunki anulowania, zmiany i ostateczna cena powinny zostać indywidualnie potwierdzone przed rozpoczęciem prac.",
          "Ponieważ produkty na zamówienie są wykonywane według indywidualnych wymagań, mogą obowiązywać odmienne zasady anulowania, zwrotu lub modyfikacji w zakresie dozwolonym przez obowiązujące prawo.",
        ],
      },
      {
        title: "Linki i usługi podmiotów trzecich",
        nav: "Usługi zewnętrzne",
        paragraphs: [
          "Strona może zawierać linki do stron i usług podmiotów trzecich, w tym WhatsApp, Instagram, Facebook, stron hoteli, usług turystycznych i innych zewnętrznych dostawców.",
          "Podmioty te działają niezależnie od LIDYA JEWELLERY. Nie odpowiadamy za ich treści, dostępność, praktyki dotyczące prywatności, bezpieczeństwo ani warunki umowne.",
          "Każda interakcja z usługą podmiotu trzeciego podlega warunkom i zasadom danego dostawcy.",
        ],
      },
      {
        title: "Własność intelektualna",
        nav: "Własność intelektualna",
        paragraphs: [
          "O ile nie wskazano inaczej, projekt strony, treści pisemne, branding, logo, fotografie, grafiki i inne materiały są własnością LIDYA JEWELLERY, są jej licencjonowane lub wykorzystywane za odpowiednią zgodą.",
          "Treści strony nie mogą być kopiowane, rozpowszechniane, ponownie publikowane, wykorzystywane komercyjnie ani modyfikowane bez odpowiedniego zezwolenia, z wyjątkiem przypadków dozwolonych prawem.",
        ],
      },
      {
        title: "Ograniczenie odpowiedzialności",
        nav: "Odpowiedzialność",
        paragraphs: [
          "Strona internetowa jest udostępniana w celach informacyjnych i komunikacyjnych. W zakresie dozwolonym prawem nie gwarantujemy nieprzerwanej dostępności ani całkowitego braku błędów technicznych.",
          "Żadne postanowienie niniejszego Regulaminu nie ma na celu wyłączenia ani ograniczenia odpowiedzialności tam, gdzie takie wyłączenie lub ograniczenie jest zabronione przez obowiązujące prawo.",
          "Jeżeli decyzja wymaga specjalistycznej oceny prawnej, finansowej, podatkowej, inwestycyjnej lub innej profesjonalnej porady, klient powinien zasięgnąć odpowiedniej opinii specjalisty.",
        ],
      },
      {
        title: "Zmiany strony i Regulaminu",
        nav: "Zmiany",
        paragraphs: [
          "Możemy okresowo aktualizować stronę internetową, usługi lub niniejszy Regulamin.",
          "Najnowsza wersja zostanie opublikowana na tej stronie wraz z odpowiednią datą aktualizacji.",
        ],
      },
      {
        title: "Prawo właściwe i jurysdykcja",
        nav: "Prawo właściwe",
        paragraphs: [
          "Prawo właściwe dla niniejszego Regulaminu oraz właściwe sądy lub organy będą zależeć od tożsamości prawnej i zarejestrowanej siedziby operatora strony internetowej.",
          "Ta część powinna zostać sfinalizowana po potwierdzeniu danych prawnych operatora oraz właściwej jurysdykcji.",
        ],
      },
      {
        title: "Kontakt",
        nav: "Kontakt",
        paragraphs: [
          "Pytania dotyczące niniejszego Regulaminu można kierować na:",
        ],
      },
    ],

    registration: "Numer rejestracyjny / firmy",
    taxNumber: "Numer podatkowy",
    legalContact: "Kontakt prawny",
    returnWebsite: "Powrót do strony",
  },
} as const;

const sectionIds = [
  "operator",
  "use",
  "information",
  "enquiries",
  "services",
  "pricing",
  "bespoke",
  "third-party",
  "intellectual-property",
  "liability",
  "changes",
  "law",
  "contact",
] as const;

export default function TermsContent() {
  const { locale } = useLanguage();

  const t =
    translations[locale as keyof typeof translations] ?? translations.en;

  return (
    <>
      <Header />

      <main className="bg-[#F7F4EE] text-plum-dark">
        {/* HERO */}
        <section className="relative overflow-hidden bg-plum-dark pb-20 pt-36 text-brand-white md:pb-24 md:pt-40 lg:pb-28 lg:pt-44">
          <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-gold/8 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-brand-white/[0.025] blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-gold">
                  {t.legalLabel}
                </span>

                <h1
                  className="mt-6 max-w-[900px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-7xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {t.title}
                </h1>

                <p
                  className="mt-6 max-w-[780px] font-display text-2xl italic leading-tight md:text-3xl"
                  style={{ color: "#E8D8B5" }}
                >
                  {t.subtitle}
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  {t.heroText}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-gold" />

                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-brand-white/40">
                    {t.lastUpdated} · {t.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-plum-dark/10 bg-ivory py-14 md:py-16">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  {t.introduction}
                </span>
              </div>

              <div className="lg:col-span-9">
                <p
                  className="max-w-[850px] font-display text-2xl leading-snug md:text-3xl"
                  style={{ color: "#1B0B20" }}
                >
                  {t.introTitle}
                </p>

                <p className="mt-6 max-w-[850px] text-sm leading-7 text-grey md:text-base">
                  {t.introText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="bg-brand-white py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* SIDE NAV */}
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-gold">
                    {t.contents}
                  </span>

                  <nav className="mt-6 flex flex-col gap-3 text-sm text-plum-dark/55">
                    {t.sections.map((section, index) => (
                      <a
                        key={sectionIds[index]}
                        href={`#${sectionIds[index]}`}
                        className="transition-colors hover:text-gold"
                      >
                        {String(index + 1).padStart(2, "0")} · {section.nav}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* LEGAL COPY */}
              <div className="space-y-16 lg:col-span-9">
                {t.sections.map((section, index) => {
                  const id = sectionIds[index];
                  const number = String(index + 1).padStart(2, "0");

                  return (
                    <LegalSection
                      key={id}
                      id={id}
                      number={number}
                      title={section.title}
                    >
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className={paragraphIndex > 0 ? "mt-4" : ""}
                        >
                          {paragraph}
                        </p>
                      ))}

                      {index === 0 && (
                        <div className="mt-6 border-l border-gold/50 pl-6">
                          <p className="font-semibold text-plum-dark">
                            {LEGAL_COMPANY_NAME}
                          </p>

                          <p className="mt-2">{REGISTERED_ADDRESS}</p>

                          <p className="mt-2">
                            {t.registration}: {COMPANY_REGISTRATION_NUMBER}
                          </p>

                          <p className="mt-2">
                            {t.taxNumber}: {TAX_NUMBER}
                          </p>

                          <p className="mt-2">
                            {t.legalContact}:{" "}
                            <span className="text-plum-dark">
                              {LEGAL_EMAIL}
                            </span>
                          </p>
                        </div>
                      )}

                      {index === t.sections.length - 1 && (
                        <div className="mt-6 border border-plum-dark/10 bg-ivory p-6 md:p-8">
                          <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-gold">
                            {t.legalContact}
                          </span>

                          <p className="mt-4 font-display text-2xl text-plum-dark">
                            {LEGAL_COMPANY_NAME}
                          </p>

                          <p className="mt-3 text-sm text-grey">
                            {LEGAL_EMAIL}
                          </p>

                          <p className="mt-1 text-sm text-grey">
                            {REGISTERED_ADDRESS}
                          </p>
                        </div>
                      )}
                    </LegalSection>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* LEGAL NOTE */}
        <section className="border-t border-plum-dark/10 bg-ivory py-12">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-gold">
                  LIDYA JEWELLERY
                </span>

                <p className="mt-2 text-sm text-grey">
                  {t.title} · {t.lastUpdated} {t.date}
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/60 transition-colors hover:text-gold"
              >
                {t.returnWebsite}
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

type LegalSectionProps = {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
};

function LegalSection({
  id,
  number,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-plum-dark/10 pb-14"
    >
      <div className="flex items-center gap-4">
        <span className="text-[0.56rem] font-semibold tracking-[0.22em] text-gold">
          {number}
        </span>

        <span className="h-px w-8 bg-gold/60" />
      </div>

      <h2
        className="mt-5 font-display text-3xl leading-tight md:text-4xl"
        style={{ color: "#1B0B20" }}
      >
        {title}
      </h2>

      <div className="mt-6 max-w-[800px] text-sm leading-7 text-grey md:text-[0.95rem]">
        {children}
      </div>
    </section>
  );
}
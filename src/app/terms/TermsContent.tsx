"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

const LEGAL_COMPANY_NAME = "[LEGAL COMPANY NAME]";
const REGISTERED_ADDRESS = "[REGISTERED ADDRESS]";
const COMPANY_REGISTRATION_NUMBER =
  "[COMPANY / REGISTRATION NUMBER]";
const TAX_NUMBER = "[TAX NUMBER]";
const LEGAL_EMAIL = "[LEGAL CONTACT EMAIL]";

type TermsSection = {
  title: string;
  nav: string;
  paragraphs: readonly string[];
};

type TermsCopy = {
  legalLabel: string;
  title: string;
  subtitle: string;
  heroText: string;
  lastUpdated: string;
  date: string;

  introduction: string;
  introTitle: string;
  introText: string;

  contents: string;

  sections: readonly TermsSection[];

  registration: string;
  taxNumber: string;
  legalContact: string;
  returnWebsite: string;
};

const translations: Record<Locale, TermsCopy> = {
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
        paragraphs: [
          "Bu web sitesi aşağıdaki işletme tarafından yönetilmektedir:",
        ],
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
        paragraphs: [
          "Niniejsza strona internetowa jest prowadzona przez:",
        ],
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

  ru: {
    legalLabel: "Правовая информация · Условия",
    title: "Условия использования",
    subtitle: "Понятные условия персонального обслуживания.",
    heroText:
      "Настоящие Условия регулируют использование веб-сайта LIDYA JEWELLERY и связанные с ним взаимодействия, включая запросы, запись на встречи и обращения за услугами.",
    lastUpdated: "Последнее обновление",
    date: "Август 2026",

    introduction: "Введение",
    introTitle:
      "Наш веб-сайт предназначен для предоставления информации, обработки запросов и организации персонального обслуживания.",
    introText:
      "Используя этот веб-сайт, вы соглашаетесь использовать его законным образом и в соответствии с настоящими Условиями. Отдельные покупки, ремонт, индивидуальные заказы и другие услуги могут регулироваться дополнительными условиями, согласованными непосредственно с вами.",

    contents: "Содержание",

    sections: [
      {
        title: "Оператор веб-сайта",
        nav: "Оператор сайта",
        paragraphs: ["Оператором данного веб-сайта является:"],
      },
      {
        title: "Использование веб-сайта",
        nav: "Использование сайта",
        paragraphs: [
          "Вы можете использовать этот веб-сайт в личных и законных целях, в том числе для просмотра информации о LIDYA JEWELLERY, коллекциях, услугах, бутиках и связанных предложениях.",
          "Запрещается злоупотреблять использованием сайта, пытаться получить несанкционированный доступ, вмешиваться в его работу, внедрять вредоносный код или использовать сайт способом, способным повредить, отключить или нарушить его функциональность.",
        ],
      },
      {
        title: "Информация на веб-сайте",
        nav: "Информация на сайте",
        paragraphs: [
          "Мы стремимся поддерживать информацию на сайте точной и актуальной, однако описания товаров, изображения, наличие, цены, сведения об услугах и другая информация могут время от времени изменяться.",
          "Изображения предназначены для максимально точного представления товаров и услуг, однако цвета, пропорции и внешний вид могут отличаться в зависимости от освещения, фотографии, настроек дисплея и индивидуальных особенностей ювелирных изделий и драгоценных камней.",
        ],
      },
      {
        title: "Запросы и встречи",
        nav: "Запросы и встречи",
        paragraphs: [
          "Запросы через сайт, заявки на встречу, телефонные звонки, электронные письма и сообщения WhatsApp сами по себе не создают обязательного договора купли-продажи или оказания услуг.",
          "Встреча или запрос на услугу считаются подтверждёнными только после прямого принятия со стороны LIDYA JEWELLERY или уполномоченного представителя.",
        ],
      },
      {
        title: "Ювелирные и часовые услуги",
        nav: "Услуги",
        paragraphs: [
          "Ремонт, регулировка, закрепка камней, изменение дизайна и связанные услуги могут потребовать физического осмотра изделия до подтверждения объёма работ, стоимости и сроков.",
          "Любая предварительная оценка до осмотра считается ориентировочной, если прямо не подтверждено иное.",
          "Клиент несёт ответственность за предоставление точной информации об изделиях, переданных на обслуживание, включая известные повреждения, предыдущие ремонты и другую существенную историю.",
        ],
      },
      {
        title: "Цены, наличие и доступность",
        nav: "Цены и наличие",
        paragraphs: [
          "Цены, складские остатки, стоимость драгоценных металлов, наличие драгоценных камней и другая коммерческая информация могут изменяться без предварительного уведомления.",
          "Окончательной ценой покупки или услуги является цена, непосредственно подтверждённая клиенту на соответствующий момент.",
          "Размещение товара или услуги на веб-сайте не гарантирует их фактического наличия.",
        ],
      },
      {
        title: "Индивидуальные и заказные работы",
        nav: "Индивидуальные заказы",
        paragraphs: [
          "Изготовление украшений на заказ, редизайн и индивидуальные проекты могут включать персональную консультацию, утверждение дизайна, выбор материалов, размеры и другие параметры, согласованные непосредственно с клиентом.",
          "Сроки изготовления, авансовые платежи, условия отмены, изменения и окончательная стоимость должны быть согласованы до начала работы.",
          "Поскольку изделия на заказ создаются по индивидуальным требованиям, к ним могут применяться особые правила отмены, возврата или изменения в пределах, допускаемых применимым законодательством.",
        ],
      },
      {
        title: "Ссылки и услуги третьих лиц",
        nav: "Сторонние сервисы",
        paragraphs: [
          "Веб-сайт может содержать ссылки на сторонние сайты и сервисы, включая WhatsApp, Instagram, Facebook, сайты отелей, туристические сервисы и других внешних поставщиков.",
          "Такие третьи лица действуют независимо от LIDYA JEWELLERY. Мы не несём ответственности за их содержание, доступность, практики конфиденциальности, безопасность или договорные условия.",
          "Любое взаимодействие со сторонним сервисом регулируется собственными условиями и политиками соответствующего поставщика.",
        ],
      },
      {
        title: "Интеллектуальная собственность",
        nav: "Интеллектуальная собственность",
        paragraphs: [
          "Если не указано иное, дизайн веб-сайта, тексты, элементы бренда, логотипы, фотографии, графика и другие материалы принадлежат LIDYA JEWELLERY, лицензированы ей или используются с соответствующего разрешения.",
          "Содержимое веб-сайта нельзя воспроизводить, распространять, повторно публиковать, использовать в коммерческих целях или изменять без соответствующего разрешения, за исключением случаев, разрешённых законом.",
        ],
      },
      {
        title: "Ограничение ответственности",
        nav: "Ответственность",
        paragraphs: [
          "Веб-сайт предоставляется для общих информационных и коммуникационных целей. В пределах, разрешённых законом, мы не гарантируем непрерывную доступность сайта или полное отсутствие технических ошибок.",
          "Ничто в настоящих Условиях не предназначено для исключения или ограничения ответственности в случаях, когда такое исключение или ограничение запрещено применимым законодательством.",
          "Если решение требует специализированной юридической, финансовой, налоговой, инвестиционной или иной профессиональной оценки, клиенту следует обратиться за соответствующей профессиональной консультацией.",
        ],
      },
      {
        title: "Изменения сайта и настоящих условий",
        nav: "Изменения",
        paragraphs: [
          "Мы можем время от времени обновлять веб-сайт, услуги или настоящие Условия.",
          "Последняя версия будет опубликована на этой странице вместе с соответствующей датой обновления.",
        ],
      },
      {
        title: "Применимое право и юрисдикция",
        nav: "Применимое право",
        paragraphs: [
          "Применимое к настоящим Условиям право, а также компетентные суды или органы зависят от юридического статуса и зарегистрированного местонахождения оператора веб-сайта.",
          "Этот раздел должен быть окончательно оформлен после подтверждения юридических данных оператора и применимой юрисдикции.",
        ],
      },
      {
        title: "Контакты",
        nav: "Контакты",
        paragraphs: [
          "Вопросы, касающиеся настоящих Условий, можно направлять по адресу:",
        ],
      },
    ],

    registration: "Регистрационный / корпоративный номер",
    taxNumber: "Налоговый номер",
    legalContact: "Юридический контакт",
    returnWebsite: "Вернуться на сайт",
  },

  nl: {
    legalLabel: "Juridisch · Voorwaarden",
    title: "Algemene voorwaarden",
    subtitle: "Duidelijke voorwaarden voor persoonlijke service.",
    heroText:
      "Deze Algemene voorwaarden regelen het gebruik van de website van LIDYA JEWELLERY en de daarmee samenhangende contacten, waaronder aanvragen, afspraken en serviceverzoeken.",
    lastUpdated: "Laatst bijgewerkt",
    date: "Augustus 2026",

    introduction: "Inleiding",
    introTitle:
      "Onze website is bedoeld om informatie te bieden, aanvragen te ondersteunen en persoonlijke service mogelijk te maken.",
    introText:
      "Door deze website te gebruiken, stemt u ermee in deze rechtmatig en in overeenstemming met deze Algemene voorwaarden te gebruiken. Voor specifieke aankopen, reparaties, maatwerk of andere diensten kunnen aanvullende voorwaarden gelden die rechtstreeks met u worden bevestigd.",

    contents: "Inhoud",

    sections: [
      {
        title: "Websitebeheerder",
        nav: "Websitebeheerder",
        paragraphs: ["Deze website wordt beheerd door:"],
      },
      {
        title: "Gebruik van de website",
        nav: "Gebruik van de website",
        paragraphs: [
          "U mag deze website gebruiken voor persoonlijke en rechtmatige doeleinden, waaronder het bekijken van informatie over LIDYA JEWELLERY, collecties, diensten, boutiques en gerelateerde aanbiedingen.",
          "U mag de website niet misbruiken, geen ongeoorloofde toegang proberen te verkrijgen, de werking niet verstoren, schadelijke code introduceren of de website gebruiken op een manier die de functionaliteit kan beschadigen, uitschakelen of beperken.",
        ],
      },
      {
        title: "Informatie op de website",
        nav: "Website-informatie",
        paragraphs: [
          "Wij streven ernaar de informatie op de website correct en actueel te houden, maar productbeschrijvingen, afbeeldingen, beschikbaarheid, prijzen, servicedetails en andere informatie kunnen van tijd tot tijd wijzigen.",
          "Afbeeldingen zijn bedoeld om producten en diensten zo nauwkeurig mogelijk weer te geven, maar kleuren, verhoudingen en visuele uitstraling kunnen verschillen door verlichting, fotografie, scherminstellingen en het individuele karakter van sieraden en edelstenen.",
        ],
      },
      {
        title: "Aanvragen en afspraken",
        nav: "Aanvragen & afspraken",
        paragraphs: [
          "Aanvragen via de website, verzoeken om afspraken, telefoongesprekken, e-mails en WhatsApp-communicatie vormen op zichzelf geen bindende koop- of dienstverleningsovereenkomst.",
          "Een afspraak of serviceverzoek is pas bevestigd wanneer dit rechtstreeks door LIDYA JEWELLERY of een bevoegde vertegenwoordiger is aanvaard.",
        ],
      },
      {
        title: "Sieraden- en horlogeservices",
        nav: "Diensten",
        paragraphs: [
          "Reparaties, aanpassingen, steenzetting, herontwerp en aanverwante diensten kunnen een fysieke inspectie vereisen voordat omvang, prijs en doorlooptijd kunnen worden bevestigd.",
          "Elke prijsindicatie die vóór inspectie wordt verstrekt, moet als indicatief worden beschouwd tenzij uitdrukkelijk anders bevestigd.",
          "Klanten zijn verantwoordelijk voor het verstrekken van correcte informatie over artikelen die voor service worden ingediend, waaronder bekende schade, eerdere reparaties en relevante voorgeschiedenis.",
        ],
      },
      {
        title: "Prijzen, voorraad en beschikbaarheid",
        nav: "Prijzen & beschikbaarheid",
        paragraphs: [
          "Prijzen, voorraadniveaus, waarden van edelmetalen, beschikbaarheid van edelstenen en andere commerciële informatie kunnen zonder voorafgaande kennisgeving wijzigen.",
          "De uiteindelijke prijs voor een aankoop of dienst is de prijs die op het relevante moment rechtstreeks met de klant wordt bevestigd.",
          "Het tonen van een artikel of dienst op de website garandeert niet dat deze op dat moment beschikbaar is.",
        ],
      },
      {
        title: "Maatwerk en persoonlijke opdrachten",
        nav: "Maatwerk",
        paragraphs: [
          "Maatwerkjuwelen, herontwerpen en persoonlijke opdrachten kunnen individuele consultatie, goedkeuring van het ontwerp, materiaalkeuze, maten en andere rechtstreeks met de klant overeengekomen specificaties omvatten.",
          "Productietijden, aanbetalingen, annuleringsvoorwaarden, wijzigingen en definitieve prijzen moeten vóór aanvang van het werk afzonderlijk worden bevestigd.",
          "Omdat maatwerkstukken volgens individuele wensen worden vervaardigd, kunnen afwijkende regels gelden voor annulering, retour of wijziging voor zover toegestaan door de toepasselijke wetgeving.",
        ],
      },
      {
        title: "Links en diensten van derden",
        nav: "Diensten van derden",
        paragraphs: [
          "De website kan links bevatten naar websites en diensten van derden, waaronder WhatsApp, Instagram, Facebook, hotelwebsites, reisdiensten en andere externe aanbieders.",
          "Deze derden opereren onafhankelijk van LIDYA JEWELLERY. Wij zijn niet verantwoordelijk voor hun inhoud, beschikbaarheid, privacypraktijken, beveiliging of contractuele voorwaarden.",
          "Elke interactie met een dienst van een derde is onderworpen aan de eigen voorwaarden en beleidsregels van die aanbieder.",
        ],
      },
      {
        title: "Intellectuele eigendom",
        nav: "Intellectuele eigendom",
        paragraphs: [
          "Tenzij anders vermeld, zijn het websiteontwerp, de geschreven inhoud, branding, logo's, fotografie, grafische elementen en andere materialen eigendom van LIDYA JEWELLERY, aan haar gelicentieerd of met toestemming gebruikt.",
          "Website-inhoud mag niet zonder passende toestemming worden gereproduceerd, verspreid, opnieuw gepubliceerd, commercieel geëxploiteerd of gewijzigd, behalve waar dit wettelijk is toegestaan.",
        ],
      },
      {
        title: "Beperking van aansprakelijkheid",
        nav: "Aansprakelijkheid",
        paragraphs: [
          "De website wordt aangeboden voor algemene informatie- en communicatiedoeleinden. Voor zover wettelijk toegestaan garanderen wij geen ononderbroken beschikbaarheid of dat de website altijd vrij zal zijn van technische fouten.",
          "Niets in deze Algemene voorwaarden is bedoeld om aansprakelijkheid uit te sluiten of te beperken wanneer een dergelijke uitsluiting of beperking volgens toepasselijk recht verboden is.",
          "Klanten dienen passende professionele begeleiding in te winnen wanneer een beslissing gespecialiseerde juridische, financiële, fiscale, beleggings- of andere professionele beoordeling vereist.",
        ],
      },
      {
        title: "Wijzigingen aan de website en deze voorwaarden",
        nav: "Wijzigingen",
        paragraphs: [
          "Wij kunnen de website, diensten of deze Algemene voorwaarden van tijd tot tijd bijwerken.",
          "De meest recente versie wordt op deze pagina gepubliceerd samen met de relevante wijzigingsdatum.",
        ],
      },
      {
        title: "Toepasselijk recht en bevoegde rechter",
        nav: "Toepasselijk recht",
        paragraphs: [
          "Het recht dat op deze Algemene voorwaarden van toepassing is en de bevoegde rechtbanken of autoriteiten zijn afhankelijk van de juridische identiteit en geregistreerde vestigingsplaats van de websitebeheerder.",
          "Deze paragraaf dient te worden afgerond nadat de juridische gegevens van de beheerder en de toepasselijke jurisdictie zijn bevestigd.",
        ],
      },
      {
        title: "Contact",
        nav: "Contact",
        paragraphs: [
          "Vragen over deze Algemene voorwaarden kunnen worden gericht aan:",
        ],
      },
    ],

    registration: "Registratie- / bedrijfsnummer",
    taxNumber: "Belastingnummer",
    legalContact: "Juridisch contact",
    returnWebsite: "Terug naar de website",
  },

  da: {
    legalLabel: "Juridisk · Vilkår",
    title: "Vilkår og betingelser",
    subtitle: "Klare vilkår for personlig service.",
    heroText:
      "Disse vilkår og betingelser regulerer din brug af LIDYA JEWELLERYs hjemmeside og relaterede henvendelser, herunder forespørgsler, aftaler og serviceanmodninger.",
    lastUpdated: "Senest opdateret",
    date: "August 2026",

    introduction: "Introduktion",
    introTitle:
      "Vores hjemmeside er beregnet til at give information, understøtte forespørgsler og gøre personlig service lettere.",
    introText:
      "Ved at bruge denne hjemmeside accepterer du at anvende den lovligt og i overensstemmelse med disse vilkår og betingelser. Specifikke køb, reparationer, specialarbejde eller andre tjenester kan desuden være underlagt yderligere vilkår, som bekræftes direkte med dig.",

    contents: "Indhold",

    sections: [
      {
        title: "Hjemmesidens operatør",
        nav: "Operatør",
        paragraphs: ["Denne hjemmeside drives af:"],
      },
      {
        title: "Brug af hjemmesiden",
        nav: "Brug af hjemmesiden",
        paragraphs: [
          "Du må bruge hjemmesiden til personlige og lovlige formål, herunder at se oplysninger om LIDYA JEWELLERY, kollektioner, tjenester, butikker og relaterede tilbud.",
          "Du må ikke misbruge hjemmesiden, forsøge uautoriseret adgang, forstyrre dens drift, introducere skadelig kode eller bruge hjemmesiden på en måde, der kan beskadige, deaktivere eller begrænse dens funktionalitet.",
        ],
      },
      {
        title: "Oplysninger på hjemmesiden",
        nav: "Hjemmesideoplysninger",
        paragraphs: [
          "Vi bestræber os på at holde oplysningerne på hjemmesiden korrekte og opdaterede, men produktbeskrivelser, billeder, tilgængelighed, priser, servicedetaljer og andre oplysninger kan ændres.",
          "Billeder har til formål at gengive produkter og tjenester så præcist som muligt, men farver, proportioner og udseende kan variere afhængigt af belysning, fotografering, skærmindstillinger og smykkers og ædelstenes individuelle karakter.",
        ],
      },
      {
        title: "Forespørgsler og aftaler",
        nav: "Forespørgsler & aftaler",
        paragraphs: [
          "Forespørgsler via hjemmesiden, aftaleanmodninger, telefonopkald, e-mails og WhatsApp-kommunikation skaber ikke i sig selv en bindende købs- eller serviceaftale.",
          "En aftale eller serviceanmodning er først bekræftet, når den er accepteret direkte af LIDYA JEWELLERY eller en autoriseret repræsentant.",
        ],
      },
      {
        title: "Smykke- og urservice",
        nav: "Service",
        paragraphs: [
          "Reparationer, justeringer, stenfatning, redesign og relaterede tjenester kan kræve fysisk inspektion, før omfang, pris og tidsplan kan bekræftes.",
          "Ethvert prisoverslag givet før inspektion skal betragtes som vejledende, medmindre andet udtrykkeligt bekræftes.",
          "Kunden er ansvarlig for at give korrekte oplysninger om genstande indleveret til service, herunder kendte skader, tidligere reparationer og relevant historik.",
        ],
      },
      {
        title: "Priser, lager og tilgængelighed",
        nav: "Priser & tilgængelighed",
        paragraphs: [
          "Priser, lagerbeholdning, værdier på ædelmetaller, tilgængelighed af ædelsten og andre kommercielle oplysninger kan ændres uden varsel.",
          "Den endelige pris for et køb eller en service er den pris, der bekræftes direkte med kunden på det relevante tidspunkt.",
          "At et produkt eller en service vises på hjemmesiden er ikke en garanti for, at det aktuelt er tilgængeligt.",
        ],
      },
      {
        title: "Specialfremstilling og individuelt arbejde",
        nav: "Specialfremstilling",
        paragraphs: [
          "Specialfremstillede smykker, redesign og individuelle bestillinger kan omfatte personlig konsultation, designgodkendelse, materialevalg, mål og andre specifikationer aftalt direkte med kunden.",
          "Produktionstid, depositum, annulleringsvilkår, ændringer og endelig pris bør bekræftes individuelt før arbejdet påbegyndes.",
          "Da specialfremstillede produkter laves efter individuelle krav, kan særlige regler for annullering, returnering eller ændring gælde i det omfang, lovgivningen tillader det.",
        ],
      },
      {
        title: "Links og tjenester fra tredjeparter",
        nav: "Tredjepartstjenester",
        paragraphs: [
          "Hjemmesiden kan indeholde links til tredjepartswebsteder og -tjenester, herunder WhatsApp, Instagram, Facebook, hotelwebsteder, rejsetjenester og andre eksterne udbydere.",
          "Disse tredjeparter opererer uafhængigt af LIDYA JEWELLERY. Vi er ikke ansvarlige for deres indhold, tilgængelighed, privatlivspraksis, sikkerhed eller kontraktvilkår.",
          "Enhver interaktion med en tredjepartstjeneste er underlagt den pågældende udbyders egne vilkår og politikker.",
        ],
      },
      {
        title: "Immaterielle rettigheder",
        nav: "Immaterielle rettigheder",
        paragraphs: [
          "Medmindre andet er angivet, ejes hjemmesidens design, skriftlige indhold, branding, logoer, fotografier, grafik og andre materialer af LIDYA JEWELLERY, er licenseret til virksomheden eller anvendes med tilladelse.",
          "Hjemmesidens indhold må ikke reproduceres, distribueres, genudgives, udnyttes kommercielt eller ændres uden relevant tilladelse, medmindre loven tillader det.",
        ],
      },
      {
        title: "Begrænsning af ansvar",
        nav: "Ansvar",
        paragraphs: [
          "Hjemmesiden stilles til rådighed til generelle informations- og kommunikationsformål. I det omfang loven tillader det, garanterer vi ikke uafbrudt tilgængelighed eller at hjemmesiden altid vil være fri for tekniske fejl.",
          "Intet i disse vilkår og betingelser har til formål at udelukke eller begrænse ansvar, hvor en sådan udelukkelse eller begrænsning er forbudt efter gældende lov.",
          "Kunder bør indhente relevant professionel rådgivning, hvis en beslutning kræver specialiseret juridisk, finansiel, skattemæssig, investeringsmæssig eller anden faglig vurdering.",
        ],
      },
      {
        title: "Ændringer af hjemmesiden og disse vilkår",
        nav: "Ændringer",
        paragraphs: [
          "Vi kan fra tid til anden opdatere hjemmesiden, tjenesterne eller disse vilkår og betingelser.",
          "Den seneste version offentliggøres på denne side sammen med den relevante revisionsdato.",
        ],
      },
      {
        title: "Lovvalg og jurisdiktion",
        nav: "Lovvalg",
        paragraphs: [
          "Den lovgivning, der gælder for disse vilkår og betingelser, samt kompetente domstole eller myndigheder afhænger af hjemmesideoperatørens juridiske identitet og registrerede hjemsted.",
          "Dette afsnit bør færdiggøres, når operatørens juridiske oplysninger og relevante jurisdiktion er bekræftet.",
        ],
      },
      {
        title: "Kontakt",
        nav: "Kontakt",
        paragraphs: [
          "Spørgsmål om disse vilkår og betingelser kan sendes til:",
        ],
      },
    ],

    registration: "Registrerings- / virksomhedsnummer",
    taxNumber: "Skattenummer",
    legalContact: "Juridisk kontakt",
    returnWebsite: "Tilbage til hjemmesiden",
  },

  fi: {
    legalLabel: "Oikeudelliset tiedot · Ehdot",
    title: "Käyttöehdot",
    subtitle: "Selkeät ehdot henkilökohtaiseen palveluun.",
    heroText:
      "Nämä käyttöehdot koskevat LIDYA JEWELLERY -verkkosivuston käyttöä ja siihen liittyvää asiointia, mukaan lukien tiedustelut, ajanvaraukset ja palvelupyynnöt.",
    lastUpdated: "Viimeksi päivitetty",
    date: "Elokuu 2026",

    introduction: "Johdanto",
    introTitle:
      "Verkkosivustomme tarkoituksena on tarjota tietoa, tukea tiedusteluja ja helpottaa henkilökohtaista palvelua.",
    introText:
      "Käyttämällä tätä verkkosivustoa hyväksyt, että käytät sitä lainmukaisesti ja näiden käyttöehtojen mukaisesti. Yksittäisiin ostoihin, korjauksiin, mittatilaustöihin tai muihin palveluihin voi lisäksi soveltua erillisiä ehtoja, jotka vahvistetaan kanssasi suoraan.",

    contents: "Sisältö",

    sections: [
      {
        title: "Verkkosivuston ylläpitäjä",
        nav: "Ylläpitäjä",
        paragraphs: ["Tätä verkkosivustoa ylläpitää:"],
      },
      {
        title: "Verkkosivuston käyttö",
        nav: "Verkkosivuston käyttö",
        paragraphs: [
          "Voit käyttää verkkosivustoa henkilökohtaisiin ja lainmukaisiin tarkoituksiin, kuten LIDYA JEWELLERYä, mallistoja, palveluja, liikkeitä ja muita tarjontaan liittyviä tietoja varten.",
          "Verkkosivustoa ei saa käyttää väärin, siihen ei saa yrittää päästä luvatta, sen toimintaa ei saa häiritä, siihen ei saa syöttää haitallista koodia eikä sitä saa käyttää tavalla, joka voi vahingoittaa tai rajoittaa sen toimintaa.",
        ],
      },
      {
        title: "Verkkosivuston tiedot",
        nav: "Verkkosivuston tiedot",
        paragraphs: [
          "Pyrimme pitämään verkkosivuston tiedot oikeina ja ajan tasalla, mutta tuotekuvaukset, kuvat, saatavuus, hinnat, palvelujen yksityiskohdat ja muut tiedot voivat muuttua.",
          "Kuvat pyrkivät esittämään tuotteet ja palvelut mahdollisimman tarkasti, mutta värit, mittasuhteet ja ulkonäkö voivat vaihdella valaistuksen, valokuvauksen, näyttöasetusten sekä korujen ja jalokivien yksilöllisen luonteen vuoksi.",
        ],
      },
      {
        title: "Tiedustelut ja ajanvaraukset",
        nav: "Tiedustelut & ajanvaraukset",
        paragraphs: [
          "Verkkosivuston kautta tehdyt tiedustelut, ajanvarauspyynnöt, puhelut, sähköpostit ja WhatsApp-viestit eivät yksinään muodosta sitovaa kauppa- tai palvelusopimusta.",
          "Ajanvaraus tai palvelupyyntö katsotaan vahvistetuksi vasta, kun LIDYA JEWELLERY tai valtuutettu edustaja on hyväksynyt sen suoraan.",
        ],
      },
      {
        title: "Koru- ja kellopalvelut",
        nav: "Palvelut",
        paragraphs: [
          "Korjaukset, säädöt, kivien istutukset, uudelleensuunnittelu ja niihin liittyvät palvelut voivat edellyttää tuotteen fyysistä tarkastusta ennen työn laajuuden, hinnan ja aikataulun vahvistamista.",
          "Ennen tarkastusta annettua arviota on pidettävä suuntaa-antavana, ellei muuta nimenomaisesti vahvisteta.",
          "Asiakas vastaa huoltoon toimitettujen tuotteiden oikeiden tietojen antamisesta, mukaan lukien tiedossa olevat vauriot, aiemmat korjaukset ja muut olennaiset tiedot.",
        ],
      },
      {
        title: "Hinnat, varasto ja saatavuus",
        nav: "Hinnat & saatavuus",
        paragraphs: [
          "Hinnat, varastotilanteet, jalometallien arvot, jalokivien saatavuus ja muut kaupalliset tiedot voivat muuttua ilman ennakkoilmoitusta.",
          "Oston tai palvelun lopullinen hinta on se hinta, joka vahvistetaan asiakkaalle kyseisenä ajankohtana.",
          "Tuotteen tai palvelun näkyminen verkkosivustolla ei takaa sen ajankohtaista saatavuutta.",
        ],
      },
      {
        title: "Mittatilaus- ja yksilölliset työt",
        nav: "Mittatilaustyöt",
        paragraphs: [
          "Mittatilauskorut, uudelleensuunnittelu ja yksilölliset toimeksiannot voivat sisältää henkilökohtaisen konsultoinnin, mallin hyväksynnän, materiaalivalinnan, mitat ja muita asiakkaan kanssa suoraan sovittavia tietoja.",
          "Valmistusajat, ennakkomaksut, peruutusehdot, muutokset ja lopullinen hinnoittelu tulee vahvistaa erikseen ennen työn aloittamista.",
          "Koska mittatilaustuotteet valmistetaan yksilöllisten vaatimusten mukaisesti, niihin voi soveltua poikkeavia peruutus-, palautus- tai muutossääntöjä sovellettavan lain sallimissa rajoissa.",
        ],
      },
      {
        title: "Kolmansien osapuolten linkit ja palvelut",
        nav: "Ulkoiset palvelut",
        paragraphs: [
          "Verkkosivusto voi sisältää linkkejä kolmansien osapuolten verkkosivustoille ja palveluihin, kuten WhatsAppiin, Instagramiin, Facebookiin, hotellien verkkosivuille, matkailupalveluihin ja muihin ulkoisiin palveluntarjoajiin.",
          "Nämä kolmannet osapuolet toimivat LIDYA JEWELLERYstä riippumattomasti. Emme vastaa niiden sisällöstä, saatavuudesta, tietosuojakäytännöistä, turvallisuudesta tai sopimusehdoista.",
          "Kaikki asiointi kolmannen osapuolen palvelun kanssa on kyseisen palveluntarjoajan omien ehtojen ja käytäntöjen alaista.",
        ],
      },
      {
        title: "Immateriaalioikeudet",
        nav: "Immateriaalioikeudet",
        paragraphs: [
          "Ellei toisin ilmoiteta, verkkosivuston suunnittelu, tekstit, brändielementit, logot, valokuvat, grafiikka ja muut materiaalit ovat LIDYA JEWELLERYn omistamia, sille lisensoituja tai niitä käytetään luvalla.",
          "Verkkosivuston sisältöä ei saa jäljentää, jakaa, julkaista uudelleen, hyödyntää kaupallisesti tai muokata ilman asianmukaista lupaa, ellei laki sitä salli.",
        ],
      },
      {
        title: "Vastuun rajoittaminen",
        nav: "Vastuu",
        paragraphs: [
          "Verkkosivusto tarjotaan yleistä tiedottamista ja yhteydenpitoa varten. Lain sallimissa rajoissa emme takaa keskeytyksetöntä saatavuutta tai sitä, että verkkosivusto olisi aina vapaa teknisistä virheistä.",
          "Mikään näissä käyttöehdoissa ei pyri sulkemaan pois tai rajoittamaan vastuuta tilanteissa, joissa tällainen poissulkeminen tai rajoitus on sovellettavan lain mukaan kielletty.",
          "Asiakkaan tulee hankkia asianmukaista ammatillista neuvontaa, jos päätös edellyttää erityistä oikeudellista, taloudellista, verotuksellista, sijoituksellista tai muuta ammatillista arviointia.",
        ],
      },
      {
        title: "Verkkosivuston ja ehtojen muutokset",
        nav: "Muutokset",
        paragraphs: [
          "Voimme ajoittain päivittää verkkosivustoa, palveluja tai näitä käyttöehtoja.",
          "Uusin versio julkaistaan tällä sivulla yhdessä asianmukaisen päivityspäivän kanssa.",
        ],
      },
      {
        title: "Sovellettava laki ja oikeuspaikka",
        nav: "Sovellettava laki",
        paragraphs: [
          "Näihin käyttöehtoihin sovellettava laki sekä toimivaltaiset tuomioistuimet tai viranomaiset riippuvat verkkosivuston ylläpitäjän oikeudellisesta identiteetistä ja rekisteröidystä sijainnista.",
          "Tämä kohta tulee viimeistellä, kun ylläpitäjän oikeudelliset tiedot ja sovellettava oikeuspaikka on vahvistettu.",
        ],
      },
      {
        title: "Yhteystiedot",
        nav: "Yhteystiedot",
        paragraphs: [
          "Näitä käyttöehtoja koskevat kysymykset voi osoittaa:",
        ],
      },
    ],

    registration: "Rekisteri- / yritysnumero",
    taxNumber: "Veronumero",
    legalContact: "Oikeudellinen yhteyshenkilö",
    returnWebsite: "Takaisin verkkosivustolle",
  },

  sv: {
    legalLabel: "Juridiskt · Villkor",
    title: "Allmänna villkor",
    subtitle: "Tydliga villkor för personlig service.",
    heroText:
      "Dessa allmänna villkor reglerar användningen av LIDYA JEWELLERYs webbplats och relaterade kontakter, inklusive förfrågningar, bokningar och serviceärenden.",
    lastUpdated: "Senast uppdaterad",
    date: "Augusti 2026",

    introduction: "Introduktion",
    introTitle:
      "Vår webbplats är avsedd att tillhandahålla information, stödja förfrågningar och underlätta personlig service.",
    introText:
      "Genom att använda webbplatsen samtycker du till att använda den lagligt och i enlighet med dessa villkor. Specifika köp, reparationer, specialbeställningar eller andra tjänster kan dessutom omfattas av ytterligare villkor som bekräftas direkt med dig.",

    contents: "Innehåll",

    sections: [
      {
        title: "Webbplatsens operatör",
        nav: "Operatör",
        paragraphs: ["Denna webbplats drivs av:"],
      },
      {
        title: "Användning av webbplatsen",
        nav: "Användning av webbplatsen",
        paragraphs: [
          "Du får använda webbplatsen för personliga och lagliga ändamål, inklusive för att ta del av information om LIDYA JEWELLERY, kollektioner, tjänster, butiker och relaterade erbjudanden.",
          "Du får inte missbruka webbplatsen, försöka få obehörig åtkomst, störa dess drift, införa skadlig kod eller använda webbplatsen på ett sätt som kan skada, inaktivera eller begränsa dess funktionalitet.",
        ],
      },
      {
        title: "Information på webbplatsen",
        nav: "Webbplatsinformation",
        paragraphs: [
          "Vi strävar efter att hålla informationen på webbplatsen korrekt och aktuell, men produktbeskrivningar, bilder, tillgänglighet, priser, servicedetaljer och annan information kan ändras.",
          "Bilder är avsedda att återge produkter och tjänster så korrekt som möjligt, men färger, proportioner och utseende kan variera beroende på belysning, fotografering, skärminställningar och smyckens och ädelstenars individuella karaktär.",
        ],
      },
      {
        title: "Förfrågningar och bokningar",
        nav: "Förfrågningar & bokningar",
        paragraphs: [
          "Förfrågningar via webbplatsen, bokningsförfrågningar, telefonsamtal, e-post och WhatsApp-kommunikation skapar inte i sig ett bindande köp- eller serviceavtal.",
          "En bokning eller serviceförfrågan är bekräftad först när den uttryckligen har accepterats av LIDYA JEWELLERY eller en behörig representant.",
        ],
      },
      {
        title: "Smyckes- och klockservice",
        nav: "Service",
        paragraphs: [
          "Reparationer, justeringar, steninfattning, redesign och relaterade tjänster kan kräva fysisk inspektion innan omfattning, pris och tidsplan kan bekräftas.",
          "Varje uppskattning som lämnas före inspektion ska betraktas som vägledande om inget annat uttryckligen bekräftas.",
          "Kunden ansvarar för att lämna korrekt information om föremål som lämnas in för service, inklusive kända skador, tidigare reparationer och relevant historik.",
        ],
      },
      {
        title: "Priser, lager och tillgänglighet",
        nav: "Priser & tillgänglighet",
        paragraphs: [
          "Priser, lagernivåer, värden på ädelmetaller, tillgänglighet av ädelstenar och annan kommersiell information kan ändras utan föregående meddelande.",
          "Det slutliga priset för ett köp eller en tjänst är det pris som bekräftas direkt med kunden vid den aktuella tidpunkten.",
          "Att en produkt eller tjänst visas på webbplatsen innebär inte att den garanterat finns tillgänglig.",
        ],
      },
      {
        title: "Specialbeställningar och individuellt arbete",
        nav: "Specialbeställningar",
        paragraphs: [
          "Specialtillverkade smycken, redesign och individuella uppdrag kan omfatta personlig konsultation, godkännande av design, materialval, mått och andra specifikationer som avtalas direkt med kunden.",
          "Produktionstider, depositioner, avbokningsvillkor, ändringar och slutligt pris bör bekräftas individuellt innan arbetet påbörjas.",
          "Eftersom specialtillverkade produkter görs efter individuella krav kan särskilda regler för avbokning, retur eller ändring gälla i den utsträckning tillämplig lag tillåter.",
        ],
      },
      {
        title: "Länkar och tjänster från tredje part",
        nav: "Tredjepartstjänster",
        paragraphs: [
          "Webbplatsen kan innehålla länkar till tredje parts webbplatser och tjänster, inklusive WhatsApp, Instagram, Facebook, hotellwebbplatser, resetjänster och andra externa leverantörer.",
          "Dessa tredje parter verkar oberoende av LIDYA JEWELLERY. Vi ansvarar inte för deras innehåll, tillgänglighet, integritetspraxis, säkerhet eller avtalsvillkor.",
          "All interaktion med en tredjepartstjänst omfattas av den leverantörens egna villkor och policyer.",
        ],
      },
      {
        title: "Immateriella rättigheter",
        nav: "Immateriella rättigheter",
        paragraphs: [
          "Om inget annat anges ägs webbplatsens design, skriftliga innehåll, varumärkeselement, logotyper, fotografier, grafik och andra material av LIDYA JEWELLERY, är licensierade till bolaget eller används med tillstånd.",
          "Webbplatsens innehåll får inte reproduceras, distribueras, återpubliceras, utnyttjas kommersiellt eller ändras utan lämpligt tillstånd, utom där lagen medger det.",
        ],
      },
      {
        title: "Ansvarsbegränsning",
        nav: "Ansvar",
        paragraphs: [
          "Webbplatsen tillhandahålls för allmän information och kommunikation. I den utsträckning lagen tillåter garanterar vi inte oavbruten tillgänglighet eller att webbplatsen alltid kommer att vara fri från tekniska fel.",
          "Ingenting i dessa villkor syftar till att utesluta eller begränsa ansvar där ett sådant undantag eller en sådan begränsning är förbjuden enligt tillämplig lag.",
          "Kunder bör inhämta lämplig professionell rådgivning när ett beslut kräver särskild juridisk, finansiell, skattemässig, investeringsmässig eller annan professionell bedömning.",
        ],
      },
      {
        title: "Ändringar av webbplatsen och dessa villkor",
        nav: "Ändringar",
        paragraphs: [
          "Vi kan från tid till annan uppdatera webbplatsen, tjänsterna eller dessa villkor.",
          "Den senaste versionen publiceras på denna sida tillsammans med relevant revisionsdatum.",
        ],
      },
      {
        title: "Tillämplig lag och jurisdiktion",
        nav: "Tillämplig lag",
        paragraphs: [
          "Vilken lag som gäller för dessa villkor och vilka domstolar eller myndigheter som är behöriga beror på webbplatsoperatörens juridiska identitet och registrerade säte.",
          "Detta avsnitt bör färdigställas efter att operatörens juridiska uppgifter och tillämplig jurisdiktion har bekräftats.",
        ],
      },
      {
        title: "Kontakt",
        nav: "Kontakt",
        paragraphs: ["Frågor om dessa villkor kan skickas till:"],
      },
    ],

    registration: "Registrerings- / företagsnummer",
    taxNumber: "Skattenummer",
    legalContact: "Juridisk kontakt",
    returnWebsite: "Tillbaka till webbplatsen",
  },

  fr: {
    legalLabel: "Mentions légales · Conditions",
    title: "Conditions générales",
    subtitle: "Des conditions claires pour un service personnalisé.",
    heroText:
      "Les présentes Conditions générales régissent l’utilisation du site LIDYA JEWELLERY et les interactions associées, notamment les demandes, les rendez-vous et les demandes de service.",
    lastUpdated: "Dernière mise à jour",
    date: "Août 2026",

    introduction: "Introduction",
    introTitle:
      "Notre site a pour vocation de fournir des informations, de faciliter les demandes et d’accompagner un service personnalisé.",
    introText:
      "En utilisant ce site, vous acceptez de l’utiliser de manière légale et conformément aux présentes Conditions générales. Certains achats, réparations, travaux sur mesure ou autres services peuvent également être soumis à des conditions supplémentaires confirmées directement avec vous.",

    contents: "Sommaire",

    sections: [
      {
        title: "Exploitant du site",
        nav: "Exploitant du site",
        paragraphs: ["Ce site est exploité par :"],
      },
      {
        title: "Utilisation du site",
        nav: "Utilisation du site",
        paragraphs: [
          "Vous pouvez utiliser ce site à des fins personnelles et légales, notamment pour consulter des informations sur LIDYA JEWELLERY, ses collections, services, boutiques et offres associées.",
          "Vous ne devez pas utiliser le site de manière abusive, tenter d’y accéder sans autorisation, perturber son fonctionnement, introduire un code malveillant ou l’utiliser d’une manière susceptible d’endommager, de désactiver ou d’altérer ses fonctionnalités.",
        ],
      },
      {
        title: "Informations du site",
        nav: "Informations du site",
        paragraphs: [
          "Nous nous efforçons de maintenir les informations du site exactes et à jour, mais les descriptions de produits, images, disponibilités, prix, détails de services et autres informations peuvent évoluer.",
          "Les images visent à représenter les produits et services aussi fidèlement que possible, mais les couleurs, proportions et apparences peuvent varier selon l’éclairage, la photographie, les réglages d’affichage et le caractère individuel des bijoux et pierres précieuses.",
        ],
      },
      {
        title: "Demandes et rendez-vous",
        nav: "Demandes & rendez-vous",
        paragraphs: [
          "Les demandes effectuées via le site, demandes de rendez-vous, appels téléphoniques, e-mails et communications WhatsApp ne constituent pas à eux seuls un contrat de vente ou de service contraignant.",
          "Un rendez-vous ou une demande de service n’est confirmé qu’après acceptation directe par LIDYA JEWELLERY ou par un représentant autorisé.",
        ],
      },
      {
        title: "Services de joaillerie et d’horlogerie",
        nav: "Services",
        paragraphs: [
          "Les réparations, ajustements, sertissages, transformations et services associés peuvent nécessiter un examen physique de la pièce avant de pouvoir confirmer l’étendue des travaux, le prix et le délai.",
          "Toute estimation fournie avant examen doit être considérée comme indicative, sauf confirmation expresse contraire.",
          "Le client est responsable de fournir des informations exactes sur les articles confiés au service, notamment tout dommage connu, réparation antérieure ou historique pertinent.",
        ],
      },
      {
        title: "Prix, stock et disponibilité",
        nav: "Prix & disponibilité",
        paragraphs: [
          "Les prix, niveaux de stock, valeurs des métaux précieux, disponibilités des pierres et autres informations commerciales peuvent être modifiés sans préavis.",
          "Le prix final applicable à un achat ou à un service est celui qui est confirmé directement avec le client au moment concerné.",
          "La présentation d’un article ou d’un service sur le site ne garantit pas sa disponibilité actuelle.",
        ],
      },
      {
        title: "Créations sur mesure et travaux personnalisés",
        nav: "Sur mesure",
        paragraphs: [
          "Les bijoux sur mesure, transformations et commandes personnalisées peuvent nécessiter une consultation individuelle, la validation d’un dessin, le choix des matériaux, des mesures et d’autres spécifications convenues directement avec le client.",
          "Les délais de production, acomptes, conditions d’annulation, modifications et prix définitifs doivent être confirmés individuellement avant le début du travail.",
          "Les pièces sur mesure étant réalisées selon des exigences individuelles, des règles particulières d’annulation, de retour ou de modification peuvent s’appliquer dans les limites permises par la loi.",
        ],
      },
      {
        title: "Liens et services de tiers",
        nav: "Services tiers",
        paragraphs: [
          "Le site peut contenir des liens vers des sites et services tiers, notamment WhatsApp, Instagram, Facebook, des sites d’hôtels, des services de voyage et d’autres prestataires externes.",
          "Ces tiers opèrent indépendamment de LIDYA JEWELLERY. Nous ne sommes pas responsables de leur contenu, disponibilité, pratiques de confidentialité, sécurité ou conditions contractuelles.",
          "Toute interaction avec un service tiers est soumise aux propres conditions et politiques de ce prestataire.",
        ],
      },
      {
        title: "Propriété intellectuelle",
        nav: "Propriété intellectuelle",
        paragraphs: [
          "Sauf indication contraire, la conception du site, les textes, éléments de marque, logos, photographies, graphismes et autres contenus appartiennent à LIDYA JEWELLERY, lui sont concédés sous licence ou sont utilisés avec autorisation.",
          "Le contenu du site ne peut être reproduit, distribué, republié, exploité commercialement ou modifié sans autorisation appropriée, sauf lorsque la loi le permet.",
        ],
      },
      {
        title: "Limitation de responsabilité",
        nav: "Responsabilité",
        paragraphs: [
          "Le site est fourni à des fins générales d’information et de communication. Dans les limites permises par la loi, nous ne garantissons ni une disponibilité ininterrompue ni l’absence permanente d’erreurs techniques.",
          "Aucune disposition des présentes Conditions générales ne vise à exclure ou limiter une responsabilité lorsque cette exclusion ou limitation est interdite par la loi applicable.",
          "Les clients doivent solliciter un conseil professionnel approprié lorsqu’une décision nécessite une expertise juridique, financière, fiscale, d’investissement ou autre.",
        ],
      },
      {
        title: "Modifications du site et des présentes conditions",
        nav: "Modifications",
        paragraphs: [
          "Nous pouvons mettre à jour le site, les services ou les présentes Conditions générales de temps à autre.",
          "La version la plus récente sera publiée sur cette page avec la date de révision correspondante.",
        ],
      },
      {
        title: "Droit applicable et juridiction",
        nav: "Droit applicable",
        paragraphs: [
          "Le droit applicable aux présentes Conditions générales ainsi que les juridictions ou autorités compétentes dépendront de l’identité juridique et du siège enregistré de l’exploitant du site.",
          "Cette section devra être finalisée après confirmation des informations juridiques de l’exploitant et de la juridiction applicable.",
        ],
      },
      {
        title: "Contact",
        nav: "Contact",
        paragraphs: [
          "Toute question concernant les présentes Conditions générales peut être adressée à :",
        ],
      },
    ],

    registration: "Numéro d’immatriculation / société",
    taxNumber: "Numéro fiscal",
    legalContact: "Contact juridique",
    returnWebsite: "Retour au site",
  },

  it: {
    legalLabel: "Informazioni legali · Condizioni",
    title: "Termini e condizioni",
    subtitle: "Condizioni chiare per un servizio personale.",
    heroText:
      "I presenti Termini e condizioni regolano l’utilizzo del sito LIDYA JEWELLERY e le relative interazioni, incluse richieste, appuntamenti e richieste di servizio.",
    lastUpdated: "Ultimo aggiornamento",
    date: "Agosto 2026",

    introduction: "Introduzione",
    introTitle:
      "Il nostro sito è pensato per fornire informazioni, supportare le richieste e facilitare un servizio personalizzato.",
    introText:
      "Utilizzando questo sito, accettate di farlo in modo legale e nel rispetto dei presenti Termini e condizioni. Acquisti specifici, riparazioni, lavori su misura o altri servizi possono inoltre essere soggetti a condizioni aggiuntive confermate direttamente con voi.",

    contents: "Contenuti",

    sections: [
      {
        title: "Gestore del sito",
        nav: "Gestore del sito",
        paragraphs: ["Questo sito è gestito da:"],
      },
      {
        title: "Utilizzo del sito",
        nav: "Utilizzo del sito",
        paragraphs: [
          "Potete utilizzare questo sito per scopi personali e leciti, incluso consultare informazioni su LIDYA JEWELLERY, collezioni, servizi, boutique e offerte collegate.",
          "Non è consentito utilizzare impropriamente il sito, tentare accessi non autorizzati, interferire con il suo funzionamento, introdurre codice dannoso o utilizzarlo in modo tale da danneggiarne, disabilitarne o comprometterne le funzionalità.",
        ],
      },
      {
        title: "Informazioni sul sito",
        nav: "Informazioni sul sito",
        paragraphs: [
          "Ci impegniamo a mantenere le informazioni sul sito accurate e aggiornate, ma descrizioni dei prodotti, immagini, disponibilità, prezzi, dettagli dei servizi e altre informazioni possono cambiare nel tempo.",
          "Le immagini intendono rappresentare prodotti e servizi nel modo più accurato possibile, ma colori, proporzioni e aspetto visivo possono variare in base a illuminazione, fotografia, impostazioni dello schermo e caratteristiche individuali di gioielli e pietre preziose.",
        ],
      },
      {
        title: "Richieste e appuntamenti",
        nav: "Richieste & appuntamenti",
        paragraphs: [
          "Richieste tramite il sito, richieste di appuntamento, telefonate, e-mail e comunicazioni WhatsApp non costituiscono di per sé un contratto vincolante di vendita o di servizio.",
          "Un appuntamento o una richiesta di servizio si considera confermato solo dopo l’accettazione diretta da parte di LIDYA JEWELLERY o di un rappresentante autorizzato.",
        ],
      },
      {
        title: "Servizi di gioielleria e orologeria",
        nav: "Servizi",
        paragraphs: [
          "Riparazioni, regolazioni, incastonatura di pietre, redesign e servizi correlati possono richiedere un’ispezione fisica prima di poter confermare l’entità del lavoro, il prezzo e i tempi.",
          "Qualsiasi stima fornita prima dell’ispezione deve essere considerata indicativa, salvo espressa conferma contraria.",
          "Il cliente è responsabile della correttezza delle informazioni fornite sugli articoli consegnati per il servizio, inclusi eventuali danni noti, riparazioni precedenti e storia rilevante.",
        ],
      },
      {
        title: "Prezzi, disponibilità e stock",
        nav: "Prezzi & disponibilità",
        paragraphs: [
          "Prezzi, livelli di stock, valori dei metalli preziosi, disponibilità delle pietre e altre informazioni commerciali possono cambiare senza preavviso.",
          "Il prezzo finale applicabile a un acquisto o servizio è quello confermato direttamente con il cliente al momento pertinente.",
          "La presenza di un articolo o servizio sul sito non ne garantisce l’effettiva disponibilità.",
        ],
      },
      {
        title: "Lavori su misura e personalizzati",
        nav: "Su misura",
        paragraphs: [
          "Gioielli su misura, redesign e commissioni personalizzate possono richiedere consulenza individuale, approvazione del progetto, selezione dei materiali, misure e altre specifiche concordate direttamente con il cliente.",
          "Tempi di produzione, depositi, condizioni di cancellazione, modifiche e prezzo finale devono essere confermati individualmente prima dell’inizio del lavoro.",
          "Poiché i pezzi su misura vengono realizzati secondo requisiti individuali, possono applicarsi regole particolari in materia di cancellazione, restituzione o modifica nei limiti consentiti dalla legge.",
        ],
      },
      {
        title: "Link e servizi di terze parti",
        nav: "Servizi di terzi",
        paragraphs: [
          "Il sito può contenere link a siti e servizi di terze parti, tra cui WhatsApp, Instagram, Facebook, siti di hotel, servizi di viaggio e altri fornitori esterni.",
          "Tali terze parti operano indipendentemente da LIDYA JEWELLERY. Non siamo responsabili dei loro contenuti, disponibilità, pratiche sulla privacy, sicurezza o condizioni contrattuali.",
          "Qualsiasi interazione con un servizio di terzi è soggetta ai termini e alle politiche del relativo fornitore.",
        ],
      },
      {
        title: "Proprietà intellettuale",
        nav: "Proprietà intellettuale",
        paragraphs: [
          "Salvo diversa indicazione, il design del sito, i contenuti scritti, gli elementi di brand, i loghi, le fotografie, la grafica e gli altri materiali sono di proprietà di LIDYA JEWELLERY, concessi in licenza o utilizzati con autorizzazione.",
          "I contenuti del sito non possono essere riprodotti, distribuiti, ripubblicati, sfruttati commercialmente o modificati senza adeguata autorizzazione, salvo nei casi consentiti dalla legge.",
        ],
      },
      {
        title: "Limitazione di responsabilità",
        nav: "Responsabilità",
        paragraphs: [
          "Il sito è fornito per finalità generali di informazione e comunicazione. Nei limiti consentiti dalla legge, non garantiamo disponibilità ininterrotta né che il sito sia sempre privo di errori tecnici.",
          "Nulla nei presenti Termini e condizioni mira a escludere o limitare responsabilità quando tale esclusione o limitazione è vietata dalla legge applicabile.",
          "I clienti dovrebbero ottenere una consulenza professionale adeguata quando una decisione richiede una valutazione specialistica legale, finanziaria, fiscale, d’investimento o di altra natura.",
        ],
      },
      {
        title: "Modifiche al sito e ai presenti termini",
        nav: "Modifiche",
        paragraphs: [
          "Possiamo aggiornare periodicamente il sito, i servizi o i presenti Termini e condizioni.",
          "La versione più recente sarà pubblicata su questa pagina insieme alla relativa data di revisione.",
        ],
      },
      {
        title: "Legge applicabile e giurisdizione",
        nav: "Legge applicabile",
        paragraphs: [
          "La legge applicabile ai presenti Termini e condizioni e i tribunali o le autorità competenti dipenderanno dall’identità giuridica e dalla sede registrata del gestore del sito.",
          "Questa sezione dovrà essere completata dopo la conferma dei dati legali del gestore e della giurisdizione applicabile.",
        ],
      },
      {
        title: "Contatti",
        nav: "Contatti",
        paragraphs: [
          "Le domande relative ai presenti Termini e condizioni possono essere inviate a:",
        ],
      },
    ],

    registration: "Numero di registrazione / società",
    taxNumber: "Numero fiscale",
    legalContact: "Contatto legale",
    returnWebsite: "Torna al sito",
  },

  es: {
    legalLabel: "Legal · Condiciones",
    title: "Términos y condiciones",
    subtitle: "Condiciones claras para un servicio personal.",
    heroText:
      "Estos Términos y condiciones regulan el uso del sitio web de LIDYA JEWELLERY y las interacciones relacionadas, incluidas consultas, citas y solicitudes de servicio.",
    lastUpdated: "Última actualización",
    date: "Agosto de 2026",

    introduction: "Introducción",
    introTitle:
      "Nuestro sitio web está destinado a proporcionar información, atender consultas y facilitar un servicio personalizado.",
    introText:
      "Al utilizar este sitio web, acepta hacerlo de forma legal y de acuerdo con estos Términos y condiciones. Determinadas compras, reparaciones, trabajos a medida u otros servicios pueden estar sujetos además a condiciones adicionales confirmadas directamente con usted.",

    contents: "Contenido",

    sections: [
      {
        title: "Operador del sitio web",
        nav: "Operador del sitio",
        paragraphs: ["Este sitio web es operado por:"],
      },
      {
        title: "Uso del sitio web",
        nav: "Uso del sitio",
        paragraphs: [
          "Puede utilizar este sitio web con fines personales y legales, incluido consultar información sobre LIDYA JEWELLERY, colecciones, servicios, boutiques y ofertas relacionadas.",
          "No debe hacer un uso indebido del sitio, intentar acceder sin autorización, interferir con su funcionamiento, introducir código malicioso ni utilizarlo de una manera que pueda dañar, deshabilitar o perjudicar su funcionalidad.",
        ],
      },
      {
        title: "Información del sitio web",
        nav: "Información del sitio",
        paragraphs: [
          "Procuramos mantener la información del sitio exacta y actualizada, pero las descripciones de productos, imágenes, disponibilidad, precios, detalles de servicios y otra información pueden cambiar con el tiempo.",
          "Las imágenes tienen como objetivo representar los productos y servicios con la mayor precisión posible, pero los colores, proporciones y apariencia visual pueden variar según la iluminación, la fotografía, los ajustes de pantalla y el carácter individual de las joyas y piedras preciosas.",
        ],
      },
      {
        title: "Consultas y citas",
        nav: "Consultas & citas",
        paragraphs: [
          "Las consultas realizadas a través del sitio, solicitudes de cita, llamadas telefónicas, correos electrónicos y comunicaciones por WhatsApp no constituyen por sí mismas un contrato vinculante de venta o servicio.",
          "Una cita o solicitud de servicio solo se considera confirmada cuando ha sido aceptada directamente por LIDYA JEWELLERY o por un representante autorizado.",
        ],
      },
      {
        title: "Servicios de joyería y relojería",
        nav: "Servicios",
        paragraphs: [
          "Las reparaciones, ajustes, engaste de piedras, rediseños y servicios relacionados pueden requerir una inspección física antes de confirmar el alcance, el precio y el plazo.",
          "Cualquier estimación proporcionada antes de la inspección debe considerarse orientativa salvo que se confirme expresamente lo contrario.",
          "Los clientes son responsables de proporcionar información exacta sobre los artículos entregados para servicio, incluidos daños conocidos, reparaciones anteriores y antecedentes relevantes.",
        ],
      },
      {
        title: "Precios, stock y disponibilidad",
        nav: "Precios & disponibilidad",
        paragraphs: [
          "Los precios, niveles de stock, valores de metales preciosos, disponibilidad de piedras preciosas y otra información comercial pueden cambiar sin previo aviso.",
          "El precio final aplicable a una compra o servicio es el precio confirmado directamente con el cliente en el momento correspondiente.",
          "La presentación de un producto o servicio en el sitio no garantiza su disponibilidad actual.",
        ],
      },
      {
        title: "Trabajos a medida y personalizados",
        nav: "A medida",
        paragraphs: [
          "Las joyas a medida, rediseños y encargos personalizados pueden implicar una consulta individual, aprobación del diseño, selección de materiales, medidas y otras especificaciones acordadas directamente con el cliente.",
          "Los plazos de producción, depósitos, condiciones de cancelación, modificaciones y precio final deben confirmarse individualmente antes del inicio del trabajo.",
          "Debido a que las piezas a medida se elaboran según requisitos individuales, pueden aplicarse reglas especiales de cancelación, devolución o modificación en la medida permitida por la legislación aplicable.",
        ],
      },
      {
        title: "Enlaces y servicios de terceros",
        nav: "Servicios de terceros",
        paragraphs: [
          "El sitio puede contener enlaces a sitios web y servicios de terceros, incluidos WhatsApp, Instagram, Facebook, páginas de hoteles, servicios de viaje y otros proveedores externos.",
          "Estos terceros operan independientemente de LIDYA JEWELLERY. No somos responsables de su contenido, disponibilidad, prácticas de privacidad, seguridad ni condiciones contractuales.",
          "Cualquier interacción con un servicio de terceros está sujeta a los términos y políticas propios de dicho proveedor.",
        ],
      },
      {
        title: "Propiedad intelectual",
        nav: "Propiedad intelectual",
        paragraphs: [
          "Salvo indicación contraria, el diseño del sitio, los contenidos escritos, elementos de marca, logotipos, fotografías, gráficos y otros materiales pertenecen a LIDYA JEWELLERY, están licenciados a su favor o se utilizan con autorización.",
          "El contenido del sitio no puede reproducirse, distribuirse, volver a publicarse, explotarse comercialmente ni modificarse sin la autorización correspondiente, salvo cuando la ley lo permita.",
        ],
      },
      {
        title: "Limitación de responsabilidad",
        nav: "Responsabilidad",
        paragraphs: [
          "El sitio se ofrece con fines generales de información y comunicación. En la medida permitida por la ley, no garantizamos una disponibilidad ininterrumpida ni que el sitio esté siempre libre de errores técnicos.",
          "Nada de lo dispuesto en estos Términos y condiciones pretende excluir o limitar la responsabilidad cuando dicha exclusión o limitación esté prohibida por la legislación aplicable.",
          "Los clientes deben obtener asesoramiento profesional adecuado cuando una decisión requiera una evaluación especializada jurídica, financiera, fiscal, de inversión o de otro tipo.",
        ],
      },
      {
        title: "Cambios en el sitio y en estas condiciones",
        nav: "Cambios",
        paragraphs: [
          "Podemos actualizar periódicamente el sitio web, los servicios o estos Términos y condiciones.",
          "La versión más reciente se publicará en esta página junto con la fecha de revisión correspondiente.",
        ],
      },
      {
        title: "Ley aplicable y jurisdicción",
        nav: "Ley aplicable",
        paragraphs: [
          "La ley que regirá estos Términos y condiciones, así como los tribunales o autoridades competentes, dependerán de la identidad jurídica y domicilio registrado del operador del sitio.",
          "Esta sección deberá finalizarse una vez confirmados los datos legales del operador y la jurisdicción aplicable.",
        ],
      },
      {
        title: "Contacto",
        nav: "Contacto",
        paragraphs: [
          "Las preguntas relacionadas con estos Términos y condiciones pueden dirigirse a:",
        ],
      },
    ],

    registration: "Número de registro / empresa",
    taxNumber: "Número fiscal",
    legalContact: "Contacto legal",
    returnWebsite: "Volver al sitio web",
  },
};

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

  const activeLocale: Locale =
    locale && translations[locale] ? locale : "en";

  const t = translations[activeLocale];

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
                    {t.sections.map((section, index) => {
                      const id =
                        sectionIds[index] ?? `section-${index + 1}`;

                      return (
                        <a
                          key={id}
                          href={`#${id}`}
                          className="transition-colors hover:text-gold"
                        >
                          {String(index + 1).padStart(2, "0")} ·{" "}
                          {section.nav}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              {/* LEGAL COPY */}
              <div className="space-y-16 lg:col-span-9">
                {t.sections.map((section, index) => {
                  const id =
                    sectionIds[index] ?? `section-${index + 1}`;

                  const number = String(index + 1).padStart(2, "0");

                  const isOperator = index === 0;

                  const isContact =
                    index === t.sections.length - 1;

                  return (
                    <LegalSection
                      key={id}
                      id={id}
                      number={number}
                      title={section.title}
                    >
                      {section.paragraphs.map(
                        (paragraph, paragraphIndex) => (
                          <p
                            key={`${id}-${paragraphIndex}`}
                            className={
                              paragraphIndex > 0 ? "mt-4" : ""
                            }
                          >
                            {paragraph}
                          </p>
                        )
                      )}

                      {isOperator && (
                        <div className="mt-6 border-l border-gold/50 pl-6">
                          <p className="font-semibold text-plum-dark">
                            {LEGAL_COMPANY_NAME}
                          </p>

                          <p className="mt-2">
                            {REGISTERED_ADDRESS}
                          </p>

                          <p className="mt-2">
                            {t.registration}:{" "}
                            {COMPANY_REGISTRATION_NUMBER}
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

                      {isContact && (
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
  children: ReactNode;
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
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
const PRIVACY_EMAIL = "[PRIVACY CONTACT EMAIL]";

type SectionCopy = {
  title: string;
  paragraphs: readonly string[];
};

type PrivacyCopy = {
  legalPrivacy: string;
  title: string;
  heroLead: string;
  heroDescription: string;
  lastUpdated: string;
  lastUpdatedValue: string;

  introduction: string;
  introLead: string;
  introText: string;

  contents: string;

  controller: SectionCopy;
  data: SectionCopy;
  use: SectionCopy;
  legalBasis: SectionCopy;
  sharing: SectionCopy;
  international: SectionCopy;
  retention: SectionCopy;
  cookies: SectionCopy;
  rights: SectionCopy;
  security: SectionCopy;
  changes: SectionCopy;
  contact: SectionCopy;

  registrationLabel: string;
  taxLabel: string;
  privacyContactLabel: string;

  cookieButton: string;

  privacyContact: string;
  bottomPolicy: string;
  returnToWebsite: string;
};

const PRIVACY_COPY: Record<Locale, PrivacyCopy> = {
  de: {
    legalPrivacy: "Rechtliches · Datenschutz",
    title: "Datenschutzerklärung",
    heroLead: "Ihre Privatsphäre ist uns wichtig.",
    heroDescription:
      "Diese Datenschutzerklärung erläutert, wie personenbezogene Daten erhoben, verwendet und geschützt werden können, wenn Sie die Website von LIDYA JEWELRY und unsere Services nutzen.",
    lastUpdated: "Zuletzt aktualisiert",
    lastUpdatedValue: "August 2026",

    introduction: "Einleitung",
    introLead:
      "Wir möchten personenbezogene Daten sorgfältig, transparent und respektvoll behandeln.",
    introText:
      "Diese Erklärung gilt für Informationen, die über diese Website verarbeitet werden, einschließlich Anfragen, Terminwünschen, Servicekommunikation, Cookie-Einstellungen und Interaktionen mit verknüpften Kommunikationsdiensten wie E-Mail und WhatsApp.",

    contents: "Inhalt",

    controller: {
      title: "Verantwortlicher",
      paragraphs: [
        "Der für die Verarbeitung personenbezogener Daten über diese Website verantwortliche Betreiber ist:",
      ],
    },

    data: {
      title: "Informationen, die wir erfassen können",
      paragraphs: [
        "Je nachdem, wie Sie die Website nutzen oder mit uns Kontakt aufnehmen, können wir Informationen wie Ihren Namen, Ihre Telefonnummer, Ihre E-Mail-Adresse, den Inhalt Ihrer Anfrage, Angaben zu gewünschten Services oder Terminen sowie weitere von Ihnen freiwillig bereitgestellte Informationen erhalten.",
        "Im Rahmen des normalen Websitebetriebs können auch technische Informationen verarbeitet werden, einschließlich IP-Adresse, Browsertyp, Geräteinformationen, aufgerufene Seiten, Zeitstempel, Sicherheitsprotokolle und ähnliche durch die Hosting-Infrastruktur erzeugte technische Daten.",
        "Die über die Website gewählten Cookie-Einstellungen werden lokal in Ihrem Browser gespeichert, damit sich die Website Ihre Auswahl merken kann.",
      ],
    },

    use: {
      title: "Wie wir personenbezogene Daten verwenden",
      paragraphs: [
        "Personenbezogene Daten können verwendet werden, um Anfragen zu beantworten, Termine zu vereinbaren, über Schmuck- oder Uhrenservices zu kommunizieren, Serviceanfragen zu bearbeiten, Kundensupport zu leisten sowie die Sicherheit und den Betrieb der Website aufrechtzuerhalten.",
        "Wenn optionale Analyse- oder Marketingtechnologien eingeführt werden, werden diese nur entsprechend den über die Website gewählten Cookie-Einstellungen verwendet.",
      ],
    },

    legalBasis: {
      title: "Rechtsgrundlage der Verarbeitung",
      paragraphs: [
        "Die Rechtsgrundlage der Verarbeitung hängt vom jeweiligen Kontext ab. Eine Verarbeitung kann erforderlich sein, um eine Anfrage zu beantworten, Maßnahmen im Zusammenhang mit einem Service oder Termin zu ergreifen, gesetzliche Verpflichtungen zu erfüllen, berechtigte Geschäfts- und Sicherheitsinteressen zu schützen oder auf Grundlage Ihrer Einwilligung zu handeln, sofern eine Einwilligung erforderlich ist.",
        "Optionale Analyse- und Marketingtechnologien sollen erst nach Erteilung der entsprechenden Einwilligung verwendet werden.",
      ],
    },

    sharing: {
      title: "Wann Informationen weitergegeben werden können",
      paragraphs: [
        "Wir verkaufen keine personenbezogenen Daten.",
        "Informationen können an Dienstleister weitergegeben werden, wenn dies für Hosting, technischen Betrieb, Kommunikation, Sicherheit, professionelle Beratung oder einen von Ihnen angeforderten Service angemessen erforderlich ist.",
        "Informationen können außerdem offengelegt werden, wenn dies gesetzlich, regulatorisch, durch gerichtliche Anordnung oder eine andere gültige rechtliche Verpflichtung erforderlich ist.",
      ],
    },

    international: {
      title: "Externe und internationale Dienste",
      paragraphs: [
        "Die Website enthält Links zu Diensten Dritter, darunter WhatsApp, Instagram und Facebook. Wenn Sie einem solchen Link folgen, unterliegt Ihre Interaktion den Datenschutzpraktiken und Bedingungen des jeweiligen Drittanbieters.",
        "Einige Dienstleister können Informationen in anderen Ländern als Ihrem Aufenthaltsland verarbeiten. Soweit erforderlich, sollten geeignete Schutzmaßnahmen entsprechend den geltenden Datenschutzanforderungen eingesetzt werden.",
      ],
    },

    retention: {
      title: "Speicherdauer",
      paragraphs: [
        "Personenbezogene Daten sollen nur so lange gespeichert werden, wie dies für den Zweck ihrer Erhebung angemessen erforderlich ist, zur Führung relevanter Geschäftsunterlagen, zur Klärung von Anfragen oder Streitigkeiten, zur Erfüllung gesetzlicher Verpflichtungen und zum Schutz berechtigter Interessen.",
        "Die genauen Aufbewahrungsfristen können je nach Art der Informationen und Art der Kundenbeziehung variieren.",
      ],
    },

    cookies: {
      title: "Cookies und Einwilligung",
      paragraphs: [
        "Die Website verwendet notwendige Browsertechnologien für grundlegende Funktionen. Optionale Analyse- und Marketingkategorien werden über die Cookie-Einwilligungsoberfläche der Website gesteuert.",
        "Ihre aktuellen Cookie-Einstellungen können jederzeit über den Link zu den Cookie-Einstellungen im Footer der Website geändert werden.",
      ],
    },

    rights: {
      title: "Ihre Datenschutzrechte",
      paragraphs: [
        "Je nach anwendbarem Recht können Ihnen Rechte in Bezug auf Ihre personenbezogenen Daten zustehen, darunter Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch gegen bestimmte Verarbeitungen und Widerruf einer Einwilligung.",
        "Beruht die Verarbeitung auf einer Einwilligung, berührt deren Widerruf nicht die Rechtmäßigkeit der Verarbeitung vor dem Widerruf.",
        "Sie können außerdem berechtigt sein, sich an die für Sie zuständige Datenschutzaufsichtsbehörde zu wenden oder dort Beschwerde einzulegen.",
      ],
    },

    security: {
      title: "Datensicherheit",
      paragraphs: [
        "Es sollen angemessene technische und organisatorische Maßnahmen eingesetzt werden, um personenbezogene Daten vor unbefugtem Zugriff, Verlust, Missbrauch, Veränderung oder Offenlegung zu schützen.",
        "Keine Übertragung über das Internet oder elektronische Speicherung kann vollständig sicher garantiert werden. Nutzer sollten daher beim elektronischen Versand sensibler Informationen angemessene Vorsicht walten lassen.",
      ],
    },

    changes: {
      title: "Änderungen dieser Erklärung",
      paragraphs: [
        "Diese Datenschutzerklärung kann von Zeit zu Zeit aktualisiert werden, um Änderungen an Website, Services, Technologien oder geltenden Anforderungen zu berücksichtigen.",
        "Bei wesentlichen Änderungen werden die aktualisierte Fassung und das Änderungsdatum auf dieser Seite veröffentlicht.",
      ],
    },

    contact: {
      title: "Datenschutzanfragen",
      paragraphs: [
        "Fragen zu dieser Datenschutzerklärung oder Anfragen zu personenbezogenen Daten können gerichtet werden an:",
      ],
    },

    registrationLabel: "Registrierungs- / Unternehmensnummer",
    taxLabel: "Steuernummer",
    privacyContactLabel: "Datenschutzkontakt",

    cookieButton: "Cookie-Einstellungen öffnen",

    privacyContact: "Datenschutzkontakt",
    bottomPolicy: "Datenschutzerklärung",
    returnToWebsite: "Zur Website zurückkehren",
  },

  en: {
    legalPrivacy: "Legal · Privacy",
    title: "Privacy Policy",
    heroLead: "Your privacy matters to us.",
    heroDescription:
      "This Privacy Policy explains how personal information may be collected, used and protected when you interact with the LIDYA JEWELRY website and our services.",
    lastUpdated: "Last updated",
    lastUpdatedValue: "August 2026",

    introduction: "Introduction",
    introLead:
      "We aim to handle personal information with care, transparency and respect.",
    introText:
      "This policy applies to information processed through this website, including enquiries, appointment requests, service communications, cookie preferences and interactions with linked communication services such as email and WhatsApp.",

    contents: "Contents",

    controller: {
      title: "Data controller",
      paragraphs: [
        "The operator responsible for the processing of personal information through this website is:",
      ],
    },

    data: {
      title: "Information we may collect",
      paragraphs: [
        "Depending on how you use the website or contact us, we may receive information such as your name, telephone number, email address, the content of your enquiry, requested service or appointment details and other information that you choose to provide.",
        "Technical information may also be processed as part of normal website operation, including IP address, browser type, device information, requested pages, timestamps, security logs and similar technical data generated by the hosting infrastructure.",
        "Cookie preferences selected through the website are stored locally in your browser so that the site can remember your choices.",
      ],
    },

    use: {
      title: "How we use personal information",
      paragraphs: [
        "Personal information may be used to respond to enquiries, arrange appointments, communicate about jewellery or watch services, process service requests, provide customer support and maintain the security and operation of the website.",
        "Where optional analytics or marketing technologies are introduced, they will only be used in accordance with the cookie choices made through the website.",
      ],
    },

    legalBasis: {
      title: "Legal basis for processing",
      paragraphs: [
        "The legal basis for processing depends on the context in which information is provided. Processing may be necessary to respond to a request, take steps connected with a service or appointment, comply with legal obligations, protect legitimate business and security interests, or act on your consent where consent is required.",
        "Optional analytics and marketing technologies are intended to operate only after the relevant consent has been given.",
      ],
    },

    sharing: {
      title: "When information may be shared",
      paragraphs: [
        "We do not sell personal information.",
        "Information may be shared with service providers where reasonably necessary for website hosting, technical operation, communications, security, professional advice or another service requested by you.",
        "Information may also be disclosed where required by law, regulation, court order or another valid legal obligation.",
      ],
    },

    international: {
      title: "External and international services",
      paragraphs: [
        "The website contains links to third-party services, including WhatsApp, Instagram and Facebook. When you choose to follow one of these links, your interaction is governed by the privacy practices and terms of the relevant third-party provider.",
        "Some service providers may process information in countries other than the country in which you are located. Where applicable, appropriate safeguards should be used in accordance with relevant data protection requirements.",
      ],
    },

    retention: {
      title: "How long information is kept",
      paragraphs: [
        "Personal information is intended to be retained only for as long as reasonably necessary for the purpose for which it was collected, to maintain relevant business records, resolve enquiries or disputes, meet legal obligations and protect legitimate interests.",
        "Exact retention periods may vary depending on the type of information and the nature of the relationship with the customer.",
      ],
    },

    cookies: {
      title: "Cookies and consent",
      paragraphs: [
        "The website uses necessary browser technologies required for core functionality. Optional analytics and marketing categories are controlled through the website's cookie consent interface.",
        "Your current cookie preferences can be changed at any time through the Cookie Settings link available in the website footer.",
      ],
    },

    rights: {
      title: "Your privacy rights",
      paragraphs: [
        "Depending on the law applicable to you, you may have rights relating to your personal information, including rights to request access, correction, deletion, restriction, portability, objection to certain processing and withdrawal of consent.",
        "Where processing is based on consent, withdrawing consent does not affect the lawfulness of processing carried out before the withdrawal.",
        "You may also have the right to contact or lodge a complaint with the data protection authority applicable to your jurisdiction.",
      ],
    },

    security: {
      title: "Data security",
      paragraphs: [
        "Reasonable technical and organisational measures are intended to be used to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
        "No internet transmission or electronic storage method can be guaranteed to be completely secure, and users should take appropriate care when sending sensitive information electronically.",
      ],
    },

    changes: {
      title: "Changes to this policy",
      paragraphs: [
        "This Privacy Policy may be updated from time to time to reflect changes to the website, services, technologies or applicable requirements.",
        "When material changes are made, the updated version and revision date will be published on this page.",
      ],
    },

    contact: {
      title: "Privacy enquiries",
      paragraphs: [
        "Questions about this Privacy Policy or requests concerning personal information can be directed to:",
      ],
    },

    registrationLabel: "Registration / company number",
    taxLabel: "Tax number",
    privacyContactLabel: "Privacy contact",

    cookieButton: "Open cookie settings",

    privacyContact: "Privacy contact",
    bottomPolicy: "Privacy Policy",
    returnToWebsite: "Return to website",
  },

  tr: {
    legalPrivacy: "Yasal · Gizlilik",
    title: "Gizlilik Politikası",
    heroLead: "Gizliliğiniz bizim için önemlidir.",
    heroDescription:
      "Bu Gizlilik Politikası, LIDYA JEWELRY web sitesi ve hizmetlerimizle etkileşim kurduğunuzda kişisel bilgilerin nasıl toplanabileceğini, kullanılabileceğini ve korunabileceğini açıklar.",
    lastUpdated: "Son güncelleme",
    lastUpdatedValue: "Ağustos 2026",

    introduction: "Giriş",
    introLead:
      "Kişisel bilgileri özenli, şeffaf ve saygılı bir şekilde işlemeyi amaçlıyoruz.",
    introText:
      "Bu politika, talepler, randevu istekleri, servis iletişimleri, çerez tercihleri ve e-posta ile WhatsApp gibi bağlantılı iletişim hizmetleriyle etkileşimler dahil olmak üzere bu web sitesi üzerinden işlenen bilgiler için geçerlidir.",

    contents: "İçindekiler",

    controller: {
      title: "Veri sorumlusu",
      paragraphs: [
        "Bu web sitesi üzerinden kişisel bilgilerin işlenmesinden sorumlu işletmeci:",
      ],
    },

    data: {
      title: "Toplayabileceğimiz bilgiler",
      paragraphs: [
        "Web sitesini nasıl kullandığınıza veya bizimle nasıl iletişime geçtiğinize bağlı olarak adınız, telefon numaranız, e-posta adresiniz, talebinizin içeriği, talep edilen servis veya randevu bilgileri ve paylaşmayı tercih ettiğiniz diğer bilgileri alabiliriz.",
        "Web sitesinin normal çalışması kapsamında IP adresi, tarayıcı türü, cihaz bilgileri, istenen sayfalar, zaman damgaları, güvenlik kayıtları ve barındırma altyapısı tarafından oluşturulan benzer teknik veriler de işlenebilir.",
        "Web sitesi üzerinden seçtiğiniz çerez tercihleri, sitenin seçimlerinizi hatırlayabilmesi için tarayıcınızda yerel olarak saklanır.",
      ],
    },

    use: {
      title: "Kişisel bilgileri nasıl kullanıyoruz",
      paragraphs: [
        "Kişisel bilgiler; taleplere yanıt vermek, randevular düzenlemek, mücevher veya saat hizmetleri hakkında iletişim kurmak, servis taleplerini işlemek, müşteri desteği sağlamak ve web sitesinin güvenliğini ve işleyişini sürdürmek amacıyla kullanılabilir.",
        "İsteğe bağlı analiz veya pazarlama teknolojileri kullanıma sunulursa, yalnızca web sitesi üzerinden yaptığınız çerez tercihlerine uygun olarak kullanılacaktır.",
      ],
    },

    legalBasis: {
      title: "İşlemenin hukuki dayanağı",
      paragraphs: [
        "İşlemenin hukuki dayanağı, bilgilerin hangi bağlamda sağlandığına bağlıdır. İşleme; bir talebe yanıt vermek, bir servis veya randevuyla ilgili adımlar atmak, yasal yükümlülüklere uymak, meşru ticari ve güvenlik çıkarlarını korumak veya onay gerektiğinde onayınıza dayanmak için gerekli olabilir.",
        "İsteğe bağlı analiz ve pazarlama teknolojilerinin yalnızca ilgili onay verildikten sonra çalışması amaçlanmaktadır.",
      ],
    },

    sharing: {
      title: "Bilgiler ne zaman paylaşılabilir",
      paragraphs: [
        "Kişisel bilgileri satmıyoruz.",
        "Bilgiler; web sitesi barındırma, teknik işletim, iletişim, güvenlik, profesyonel danışmanlık veya sizin talep ettiğiniz başka bir hizmet için makul ölçüde gerekli olduğunda hizmet sağlayıcılarla paylaşılabilir.",
        "Bilgiler ayrıca kanun, düzenleme, mahkeme kararı veya başka geçerli bir hukuki yükümlülük gerektirdiğinde açıklanabilir.",
      ],
    },

    international: {
      title: "Harici ve uluslararası hizmetler",
      paragraphs: [
        "Web sitesi WhatsApp, Instagram ve Facebook dahil olmak üzere üçüncü taraf hizmetlere bağlantılar içerir. Bu bağlantılardan birini takip ettiğinizde etkileşiminiz ilgili üçüncü taraf sağlayıcının gizlilik uygulamaları ve şartlarına tabidir.",
        "Bazı hizmet sağlayıcılar bilgileri bulunduğunuz ülkeden farklı ülkelerde işleyebilir. Uygulanabilir olduğu durumlarda ilgili veri koruma gerekliliklerine uygun koruma önlemleri kullanılmalıdır.",
      ],
    },

    retention: {
      title: "Bilgilerin saklanma süresi",
      paragraphs: [
        "Kişisel bilgilerin yalnızca toplandıkları amaç için makul ölçüde gerekli olduğu süre boyunca, ilgili ticari kayıtları tutmak, talepleri veya uyuşmazlıkları çözmek, yasal yükümlülükleri yerine getirmek ve meşru çıkarları korumak amacıyla saklanması hedeflenmektedir.",
        "Kesin saklama süreleri, bilgi türüne ve müşteri ilişkisinin niteliğine göre değişebilir.",
      ],
    },

    cookies: {
      title: "Çerezler ve onay",
      paragraphs: [
        "Web sitesi temel işlevler için gerekli tarayıcı teknolojilerini kullanır. İsteğe bağlı analiz ve pazarlama kategorileri web sitesindeki çerez onay arayüzünden yönetilir.",
        "Mevcut çerez tercihlerinizi web sitesinin alt kısmında bulunan Çerez Ayarları bağlantısından istediğiniz zaman değiştirebilirsiniz.",
      ],
    },

    rights: {
      title: "Gizlilik haklarınız",
      paragraphs: [
        "Size uygulanan hukuka bağlı olarak kişisel bilgilerinizle ilgili erişim, düzeltme, silme, kısıtlama, taşınabilirlik, belirli işlemelere itiraz ve onayı geri çekme gibi haklara sahip olabilirsiniz.",
        "İşleme onaya dayanıyorsa, onayın geri çekilmesi geri çekilmeden önce gerçekleştirilen işlemenin hukuka uygunluğunu etkilemez.",
        "Ayrıca bulunduğunuz yargı alanında yetkili veri koruma makamına başvurma veya şikayette bulunma hakkınız olabilir.",
      ],
    },

    security: {
      title: "Veri güvenliği",
      paragraphs: [
        "Kişisel bilgileri yetkisiz erişim, kayıp, kötüye kullanım, değiştirme veya açıklamaya karşı korumak için makul teknik ve organizasyonel önlemler kullanılması amaçlanmaktadır.",
        "Hiçbir internet iletimi veya elektronik depolama yöntemi tamamen güvenli olarak garanti edilemez. Kullanıcılar hassas bilgileri elektronik olarak gönderirken uygun özeni göstermelidir.",
      ],
    },

    changes: {
      title: "Bu politikadaki değişiklikler",
      paragraphs: [
        "Bu Gizlilik Politikası, web sitesindeki, hizmetlerdeki, teknolojilerdeki veya uygulanabilir gerekliliklerdeki değişiklikleri yansıtmak için zaman zaman güncellenebilir.",
        "Önemli değişiklikler yapıldığında güncel sürüm ve revizyon tarihi bu sayfada yayımlanacaktır.",
      ],
    },

    contact: {
      title: "Gizlilik talepleri",
      paragraphs: [
        "Bu Gizlilik Politikası hakkındaki sorular veya kişisel bilgilere ilişkin talepler şu adrese yöneltilebilir:",
      ],
    },

    registrationLabel: "Kayıt / şirket numarası",
    taxLabel: "Vergi numarası",
    privacyContactLabel: "Gizlilik iletişimi",

    cookieButton: "Çerez ayarlarını aç",

    privacyContact: "Gizlilik iletişimi",
    bottomPolicy: "Gizlilik Politikası",
    returnToWebsite: "Web sitesine dön",
  },

  sk: {
    legalPrivacy: "Právne · Súkromie",
    title: "Zásady ochrany osobných údajov",
    heroLead: "Na vašom súkromí nám záleží.",
    heroDescription:
      "Tieto zásady vysvetľujú, ako môžu byť osobné údaje zhromažďované, používané a chránené pri používaní webovej stránky LIDYA JEWELRY a našich služieb.",
    lastUpdated: "Posledná aktualizácia",
    lastUpdatedValue: "August 2026",

    introduction: "Úvod",
    introLead:
      "Osobné údaje sa snažíme spracúvať starostlivo, transparentne a s rešpektom.",
    introText:
      "Tieto zásady sa vzťahujú na informácie spracúvané prostredníctvom tejto webovej stránky vrátane otázok, žiadostí o termín, servisnej komunikácie, nastavení cookies a komunikácie prostredníctvom prepojených služieb, ako sú e-mail a WhatsApp.",

    contents: "Obsah",

    controller: {
      title: "Prevádzkovateľ osobných údajov",
      paragraphs: [
        "Prevádzkovateľ zodpovedný za spracúvanie osobných údajov prostredníctvom tejto webovej stránky je:",
      ],
    },

    data: {
      title: "Údaje, ktoré môžeme zhromažďovať",
      paragraphs: [
        "V závislosti od spôsobu používania webovej stránky alebo kontaktovania našej spoločnosti môžeme získať údaje, ako sú vaše meno, telefónne číslo, e-mailová adresa, obsah vašej požiadavky, údaje o požadovanom servise alebo termíne a ďalšie informácie, ktoré sa rozhodnete poskytnúť.",
        "V rámci bežnej prevádzky webovej stránky môžu byť spracúvané aj technické údaje vrátane IP adresy, typu prehliadača, údajov o zariadení, navštívených stránok, časových údajov, bezpečnostných záznamov a podobných technických údajov vytvorených hostingovou infraštruktúrou.",
        "Nastavenia cookies vybrané prostredníctvom webovej stránky sa ukladajú lokálne vo vašom prehliadači, aby si stránka mohla zapamätať vaše rozhodnutia.",
      ],
    },

    use: {
      title: "Ako používame osobné údaje",
      paragraphs: [
        "Osobné údaje môžu byť použité na odpovedanie na otázky, dohodnutie termínov, komunikáciu o servise šperkov alebo hodiniek, spracovanie servisných požiadaviek, poskytovanie zákazníckej podpory a zabezpečenie bezpečnosti a fungovania webovej stránky.",
        "Ak budú zavedené voliteľné analytické alebo marketingové technológie, budú používané iba v súlade s nastaveniami cookies zvolenými prostredníctvom webovej stránky.",
      ],
    },

    legalBasis: {
      title: "Právny základ spracúvania",
      paragraphs: [
        "Právny základ spracúvania závisí od okolností, za ktorých boli údaje poskytnuté. Spracúvanie môže byť potrebné na odpoveď na požiadavku, vykonanie krokov súvisiacich so službou alebo termínom, splnenie zákonných povinností, ochranu oprávnených obchodných a bezpečnostných záujmov alebo na základe vášho súhlasu, ak je súhlas potrebný.",
        "Voliteľné analytické a marketingové technológie majú byť používané až po udelení príslušného súhlasu.",
      ],
    },

    sharing: {
      title: "Kedy môžu byť údaje zdieľané",
      paragraphs: [
        "Osobné údaje nepredávame.",
        "Údaje môžu byť zdieľané s poskytovateľmi služieb, ak je to primerane potrebné pre hosting webovej stránky, technickú prevádzku, komunikáciu, bezpečnosť, odborné poradenstvo alebo inú službu, ktorú ste si vyžiadali.",
        "Údaje môžu byť poskytnuté aj vtedy, ak to vyžaduje zákon, právny predpis, súdne rozhodnutie alebo iná platná právna povinnosť.",
      ],
    },

    international: {
      title: "Externé a medzinárodné služby",
      paragraphs: [
        "Webová stránka obsahuje odkazy na služby tretích strán vrátane WhatsApp, Instagram a Facebook. Ak sa rozhodnete použiť niektorý z týchto odkazov, vaša interakcia sa riadi zásadami ochrany osobných údajov a podmienkami príslušného poskytovateľa.",
        "Niektorí poskytovatelia služieb môžu spracúvať údaje v krajinách odlišných od krajiny, v ktorej sa nachádzate. Tam, kde je to potrebné, by mali byť použité primerané ochranné opatrenia v súlade s príslušnými požiadavkami na ochranu údajov.",
      ],
    },

    retention: {
      title: "Ako dlho údaje uchovávame",
      paragraphs: [
        "Osobné údaje majú byť uchovávané iba tak dlho, ako je primerane potrebné na účel, na ktorý boli zhromaždené, na vedenie príslušných obchodných záznamov, riešenie otázok alebo sporov, plnenie zákonných povinností a ochranu oprávnených záujmov.",
        "Konkrétne lehoty uchovávania sa môžu líšiť podľa typu informácií a povahy vzťahu so zákazníkom.",
      ],
    },

    cookies: {
      title: "Cookies a súhlas",
      paragraphs: [
        "Webová stránka používa nevyhnutné technológie prehliadača potrebné na základné fungovanie. Voliteľné analytické a marketingové kategórie sú riadené prostredníctvom rozhrania na správu súhlasu s cookies.",
        "Aktuálne nastavenia cookies môžete kedykoľvek zmeniť prostredníctvom odkazu Nastavenia cookies v pätičke webovej stránky.",
      ],
    },

    rights: {
      title: "Vaše práva na ochranu súkromia",
      paragraphs: [
        "V závislosti od právnych predpisov, ktoré sa na vás vzťahujú, môžete mať práva týkajúce sa vašich osobných údajov, vrátane práva na prístup, opravu, vymazanie, obmedzenie spracúvania, prenosnosť údajov, námietku proti určitým druhom spracúvania a odvolanie súhlasu.",
        "Ak je spracúvanie založené na súhlase, jeho odvolanie nemá vplyv na zákonnosť spracúvania vykonaného pred odvolaním.",
        "Môžete mať tiež právo obrátiť sa na príslušný orgán na ochranu osobných údajov alebo podať sťažnosť.",
      ],
    },

    security: {
      title: "Bezpečnosť údajov",
      paragraphs: [
        "Na ochranu osobných údajov pred neoprávneným prístupom, stratou, zneužitím, zmenou alebo zverejnením majú byť používané primerané technické a organizačné opatrenia.",
        "Žiadny spôsob prenosu údajov cez internet ani elektronického uchovávania nemožno zaručiť ako úplne bezpečný. Používatelia by preto mali byť opatrní pri elektronickom posielaní citlivých informácií.",
      ],
    },

    changes: {
      title: "Zmeny týchto zásad",
      paragraphs: [
        "Tieto zásady ochrany osobných údajov môžu byť z času na čas aktualizované tak, aby zohľadňovali zmeny webovej stránky, služieb, technológií alebo príslušných požiadaviek.",
        "Pri významných zmenách bude na tejto stránke zverejnená aktualizovaná verzia spolu s dátumom revízie.",
      ],
    },

    contact: {
      title: "Otázky týkajúce sa súkromia",
      paragraphs: [
        "Otázky k týmto zásadám alebo požiadavky týkajúce sa osobných údajov môžete smerovať na:",
      ],
    },

    registrationLabel: "Registračné / firemné číslo",
    taxLabel: "Daňové číslo",
    privacyContactLabel: "Kontakt pre ochranu súkromia",

    cookieButton: "Otvoriť nastavenia cookies",

    privacyContact: "Kontakt pre ochranu súkromia",
    bottomPolicy: "Zásady ochrany osobných údajov",
    returnToWebsite: "Späť na web",
  },

  cs: {
    legalPrivacy: "Právní · Soukromí",
    title: "Zásady ochrany osobních údajů",
    heroLead: "Na vašem soukromí nám záleží.",
    heroDescription:
      "Tyto zásady vysvětlují, jak mohou být osobní údaje shromažďovány, používány a chráněny při používání webové stránky LIDYA JEWELRY a našich služeb.",
    lastUpdated: "Poslední aktualizace",
    lastUpdatedValue: "Srpen 2026",

    introduction: "Úvod",
    introLead:
      "Osobní údaje se snažíme zpracovávat pečlivě, transparentně a s respektem.",
    introText:
      "Tyto zásady se vztahují na informace zpracovávané prostřednictvím této webové stránky, včetně dotazů, žádostí o termín, servisní komunikace, nastavení cookies a komunikace prostřednictvím propojených služeb, jako jsou e-mail a WhatsApp.",

    contents: "Obsah",

    controller: {
      title: "Správce osobních údajů",
      paragraphs: [
        "Provozovatel odpovědný za zpracování osobních údajů prostřednictvím této webové stránky je:",
      ],
    },

    data: {
      title: "Údaje, které můžeme shromažďovat",
      paragraphs: [
        "Podle způsobu používání webové stránky nebo kontaktování naší společnosti můžeme získat údaje, jako jsou vaše jméno, telefonní číslo, e-mailová adresa, obsah vašeho dotazu, údaje o požadovaném servisu nebo termínu a další informace, které se rozhodnete poskytnout.",
        "V rámci běžného provozu webové stránky mohou být zpracovávány také technické údaje včetně IP adresy, typu prohlížeče, údajů o zařízení, navštívených stránek, časových údajů, bezpečnostních záznamů a podobných technických údajů vytvořených hostingovou infrastrukturou.",
        "Nastavení cookies zvolené prostřednictvím webové stránky se ukládá lokálně ve vašem prohlížeči, aby si stránka mohla zapamatovat vaše volby.",
      ],
    },

    use: {
      title: "Jak používáme osobní údaje",
      paragraphs: [
        "Osobní údaje mohou být používány k odpovídání na dotazy, sjednávání termínů, komunikaci o servisu šperků nebo hodinek, zpracování servisních požadavků, poskytování zákaznické podpory a zajištění bezpečnosti a fungování webové stránky.",
        "Pokud budou zavedeny volitelné analytické nebo marketingové technologie, budou používány pouze v souladu s nastaveními cookies zvolenými prostřednictvím webové stránky.",
      ],
    },

    legalBasis: {
      title: "Právní základ zpracování",
      paragraphs: [
        "Právní základ zpracování závisí na okolnostech, za kterých byly údaje poskytnuty. Zpracování může být nezbytné pro odpověď na požadavek, provedení kroků souvisejících se službou nebo termínem, splnění zákonných povinností, ochranu oprávněných obchodních a bezpečnostních zájmů nebo na základě vašeho souhlasu, pokud je souhlas vyžadován.",
        "Volitelné analytické a marketingové technologie mají být používány až po udělení příslušného souhlasu.",
      ],
    },

    sharing: {
      title: "Kdy mohou být údaje sdíleny",
      paragraphs: [
        "Osobní údaje neprodáváme.",
        "Údaje mohou být sdíleny s poskytovateli služeb, pokud je to přiměřeně nezbytné pro hosting webové stránky, technický provoz, komunikaci, bezpečnost, odborné poradenství nebo jinou vámi požadovanou službu.",
        "Údaje mohou být také poskytnuty, pokud to vyžaduje zákon, právní předpis, soudní rozhodnutí nebo jiná platná právní povinnost.",
      ],
    },

    international: {
      title: "Externí a mezinárodní služby",
      paragraphs: [
        "Webová stránka obsahuje odkazy na služby třetích stran včetně WhatsApp, Instagram a Facebook. Pokud se rozhodnete některý z těchto odkazů použít, vaše interakce se řídí zásadami ochrany osobních údajů a podmínkami příslušného poskytovatele.",
        "Někteří poskytovatelé služeb mohou zpracovávat údaje v jiných zemích než v zemi, kde se nacházíte. Tam, kde je to nutné, by měla být použita vhodná ochranná opatření v souladu s příslušnými požadavky na ochranu údajů.",
      ],
    },

    retention: {
      title: "Jak dlouho údaje uchováváme",
      paragraphs: [
        "Osobní údaje mají být uchovávány pouze po dobu přiměřeně nezbytnou pro účel, pro který byly shromážděny, pro vedení relevantních obchodních záznamů, řešení dotazů nebo sporů, plnění zákonných povinností a ochranu oprávněných zájmů.",
        "Konkrétní doby uchovávání se mohou lišit podle typu informací a povahy vztahu se zákazníkem.",
      ],
    },

    cookies: {
      title: "Cookies a souhlas",
      paragraphs: [
        "Webová stránka používá nezbytné technologie prohlížeče potřebné pro základní funkce. Volitelné analytické a marketingové kategorie jsou řízeny prostřednictvím rozhraní pro správu souhlasu s cookies.",
        "Aktuální nastavení cookies můžete kdykoli změnit prostřednictvím odkazu Nastavení cookies v patičce webové stránky.",
      ],
    },

    rights: {
      title: "Vaše práva na ochranu soukromí",
      paragraphs: [
        "V závislosti na právních předpisech, které se na vás vztahují, můžete mít práva týkající se vašich osobních údajů, včetně práva na přístup, opravu, výmaz, omezení zpracování, přenositelnost, námitku proti určitým typům zpracování a odvolání souhlasu.",
        "Pokud je zpracování založeno na souhlasu, jeho odvolání nemá vliv na zákonnost zpracování provedeného před odvoláním.",
        "Můžete mít také právo obrátit se na příslušný úřad pro ochranu osobních údajů nebo podat stížnost.",
      ],
    },

    security: {
      title: "Bezpečnost údajů",
      paragraphs: [
        "K ochraně osobních údajů před neoprávněným přístupem, ztrátou, zneužitím, změnou nebo zveřejněním mají být používána přiměřená technická a organizační opatření.",
        "Žádný způsob přenosu přes internet ani elektronického ukládání nelze zaručit jako zcela bezpečný. Uživatelé by proto měli být opatrní při elektronickém posílání citlivých informací.",
      ],
    },

    changes: {
      title: "Změny těchto zásad",
      paragraphs: [
        "Tyto zásady ochrany osobních údajů mohou být čas od času aktualizovány tak, aby odrážely změny webové stránky, služeb, technologií nebo příslušných požadavků.",
        "Při významných změnách bude na této stránce zveřejněna aktualizovaná verze spolu s datem revize.",
      ],
    },

    contact: {
      title: "Dotazy týkající se soukromí",
      paragraphs: [
        "Dotazy k těmto zásadám nebo požadavky týkající se osobních údajů můžete směřovat na:",
      ],
    },

    registrationLabel: "Registrační / firemní číslo",
    taxLabel: "Daňové číslo",
    privacyContactLabel: "Kontakt pro ochranu soukromí",

    cookieButton: "Otevřít nastavení cookies",

    privacyContact: "Kontakt pro ochranu soukromí",
    bottomPolicy: "Zásady ochrany osobních údajů",
    returnToWebsite: "Zpět na web",
  },

  hu: {
    legalPrivacy: "Jogi · Adatvédelem",
    title: "Adatvédelmi szabályzat",
    heroLead: "Fontos számunkra az Ön adatainak védelme.",
    heroDescription:
      "Ez az Adatvédelmi szabályzat ismerteti, hogyan gyűjthetünk, használhatunk és védhetünk személyes adatokat a LIDYA JEWELRY weboldal és szolgáltatásaink használata során.",
    lastUpdated: "Utolsó frissítés",
    lastUpdatedValue: "2026. augusztus",

    introduction: "Bevezetés",
    introLead:
      "A személyes adatokat gondosan, átláthatóan és tisztelettel kívánjuk kezelni.",
    introText:
      "Ez a szabályzat a weboldalon keresztül kezelt információkra vonatkozik, beleértve a megkereséseket, időpontkéréseket, szervizkommunikációt, cookie-beállításokat és az olyan kapcsolódó kommunikációs szolgáltatásokkal való interakciókat, mint az e-mail és a WhatsApp.",

    contents: "Tartalom",

    controller: {
      title: "Adatkezelő",
      paragraphs: [
        "A weboldalon keresztül kezelt személyes adatokért felelős üzemeltető:",
      ],
    },

    data: {
      title: "Milyen adatokat gyűjthetünk",
      paragraphs: [
        "A weboldal használatától vagy a kapcsolatfelvétel módjától függően olyan adatokat kaphatunk, mint az Ön neve, telefonszáma, e-mail-címe, megkeresésének tartalma, a kért szolgáltatás vagy időpont részletei, valamint az Ön által önként megadott egyéb információk.",
        "A weboldal normál működésének részeként technikai adatok is kezelhetők, például IP-cím, böngészőtípus, eszközinformációk, megnyitott oldalak, időbélyegek, biztonsági naplók és a tárhely-infrastruktúra által létrehozott hasonló technikai adatok.",
        "A weboldalon kiválasztott cookie-beállításokat a böngésző helyileg tárolja, hogy a webhely megjegyezhesse az Ön választásait.",
      ],
    },

    use: {
      title: "Hogyan használjuk a személyes adatokat",
      paragraphs: [
        "A személyes adatokat felhasználhatjuk megkeresések megválaszolására, időpontok egyeztetésére, ékszer- vagy óraszervizzel kapcsolatos kommunikációra, szervizigények feldolgozására, ügyféltámogatás nyújtására, valamint a weboldal biztonságának és működésének fenntartására.",
        "Ha opcionális analitikai vagy marketingtechnológiákat vezetünk be, azokat kizárólag a weboldalon megadott cookie-beállításoknak megfelelően használjuk.",
      ],
    },

    legalBasis: {
      title: "Az adatkezelés jogalapja",
      paragraphs: [
        "Az adatkezelés jogalapja az adat megadásának körülményeitől függ. Az adatkezelés szükséges lehet egy megkeresés megválaszolásához, szolgáltatáshoz vagy időponthoz kapcsolódó lépések megtételéhez, jogi kötelezettségek teljesítéséhez, jogos üzleti és biztonsági érdekek védelméhez vagy az Ön hozzájárulása alapján történő eljáráshoz, ha hozzájárulás szükséges.",
        "Az opcionális analitikai és marketingtechnológiák használata csak a megfelelő hozzájárulás megadása után történhet.",
      ],
    },

    sharing: {
      title: "Mikor oszthatók meg az adatok",
      paragraphs: [
        "Személyes adatokat nem értékesítünk.",
        "Az adatok megoszthatók szolgáltatókkal, ha ez ésszerűen szükséges a weboldal tárhelyszolgáltatásához, műszaki működéséhez, kommunikációhoz, biztonsághoz, szakmai tanácsadáshoz vagy más, Ön által kért szolgáltatáshoz.",
        "Az adatok jogszabály, hatósági előírás, bírósági végzés vagy más érvényes jogi kötelezettség esetén is kiadhatók.",
      ],
    },

    international: {
      title: "Külső és nemzetközi szolgáltatások",
      paragraphs: [
        "A weboldal harmadik fél szolgáltatásaira mutató linkeket tartalmaz, beleértve a WhatsAppot, Instagramot és Facebookot. Ha ilyen linket követ, az interakcióra az adott szolgáltató adatvédelmi gyakorlata és feltételei vonatkoznak.",
        "Egyes szolgáltatók az Ön tartózkodási helyétől eltérő országokban is kezelhetnek adatokat. Ilyen esetben a vonatkozó adatvédelmi követelményeknek megfelelő biztosítékokat kell alkalmazni.",
      ],
    },

    retention: {
      title: "Az adatok megőrzési ideje",
      paragraphs: [
        "A személyes adatokat csak addig kívánjuk megőrizni, ameddig az adatgyűjtés céljához ésszerűen szükséges, ideértve a megfelelő üzleti nyilvántartások fenntartását, megkeresések vagy viták rendezését, jogi kötelezettségek teljesítését és jogos érdekek védelmét.",
        "A pontos megőrzési idők az adat típusától és az ügyfélkapcsolat jellegétől függően eltérhetnek.",
      ],
    },

    cookies: {
      title: "Cookie-k és hozzájárulás",
      paragraphs: [
        "A weboldal a működéshez szükséges böngészőtechnológiákat használ. Az opcionális analitikai és marketingkategóriák a weboldal cookie-hozzájárulási felületén kezelhetők.",
        "A jelenlegi cookie-beállításait bármikor megváltoztathatja a weboldal láblécében található Cookie-beállítások linken keresztül.",
      ],
    },

    rights: {
      title: "Az Ön adatvédelmi jogai",
      paragraphs: [
        "Az Önre alkalmazandó jogszabályoktól függően személyes adataival kapcsolatban joga lehet többek között hozzáférést, helyesbítést, törlést, korlátozást vagy adathordozhatóságot kérni, bizonyos adatkezelések ellen tiltakozni, illetve hozzájárulását visszavonni.",
        "Ha az adatkezelés hozzájáruláson alapul, annak visszavonása nem érinti a visszavonás előtt végzett adatkezelés jogszerűségét.",
        "Jogában állhat továbbá az illetékes adatvédelmi hatósághoz fordulni vagy panaszt benyújtani.",
      ],
    },

    security: {
      title: "Adatbiztonság",
      paragraphs: [
        "A személyes adatok jogosulatlan hozzáférés, elvesztés, visszaélés, módosítás vagy nyilvánosságra hozatal elleni védelmére megfelelő technikai és szervezési intézkedéseket kívánunk alkalmazni.",
        "Semmilyen internetes adattovábbítási vagy elektronikus tárolási módszer nem garantálható teljesen biztonságosnak. A felhasználóknak ezért megfelelő körültekintéssel kell eljárniuk érzékeny információk elektronikus továbbításakor.",
      ],
    },

    changes: {
      title: "A szabályzat módosításai",
      paragraphs: [
        "Ez az Adatvédelmi szabályzat időről időre frissíthető a weboldal, a szolgáltatások, a technológiák vagy az alkalmazandó követelmények változásainak megfelelően.",
        "Lényeges változtatások esetén a frissített változat és a módosítás dátuma ezen az oldalon kerül közzétételre.",
      ],
    },

    contact: {
      title: "Adatvédelmi kérdések",
      paragraphs: [
        "Az Adatvédelmi szabályzattal kapcsolatos kérdések vagy személyes adatokkal kapcsolatos kérelmek az alábbi címre küldhetők:",
      ],
    },

    registrationLabel: "Cégjegyzék- / regisztrációs szám",
    taxLabel: "Adószám",
    privacyContactLabel: "Adatvédelmi kapcsolat",

    cookieButton: "Cookie-beállítások megnyitása",

    privacyContact: "Adatvédelmi kapcsolat",
    bottomPolicy: "Adatvédelmi szabályzat",
    returnToWebsite: "Vissza a weboldalra",
  },

  pl: {
    legalPrivacy: "Informacje prawne · Prywatność",
    title: "Polityka prywatności",
    heroLead: "Twoja prywatność jest dla nas ważna.",
    heroDescription:
      "Niniejsza Polityka prywatności wyjaśnia, w jaki sposób dane osobowe mogą być zbierane, wykorzystywane i chronione podczas korzystania ze strony LIDYA JEWELRY i naszych usług.",
    lastUpdated: "Ostatnia aktualizacja",
    lastUpdatedValue: "Sierpień 2026",

    introduction: "Wprowadzenie",
    introLead:
      "Dążymy do przetwarzania danych osobowych z należytą starannością, przejrzystością i szacunkiem.",
    introText:
      "Polityka dotyczy informacji przetwarzanych za pośrednictwem tej strony, w tym zapytań, próśb o spotkanie, komunikacji serwisowej, preferencji dotyczących cookies oraz interakcji z powiązanymi usługami komunikacyjnymi, takimi jak e-mail i WhatsApp.",

    contents: "Spis treści",

    controller: {
      title: "Administrator danych",
      paragraphs: [
        "Podmiot odpowiedzialny za przetwarzanie danych osobowych za pośrednictwem tej strony to:",
      ],
    },

    data: {
      title: "Informacje, które możemy gromadzić",
      paragraphs: [
        "W zależności od sposobu korzystania ze strony lub kontaktowania się z nami możemy otrzymywać informacje, takie jak imię i nazwisko, numer telefonu, adres e-mail, treść zapytania, szczegóły dotyczące wymaganej usługi lub spotkania oraz inne informacje, które zdecydujesz się przekazać.",
        "W ramach normalnego działania strony mogą być również przetwarzane dane techniczne, w tym adres IP, typ przeglądarki, informacje o urządzeniu, odwiedzane strony, znaczniki czasu, logi bezpieczeństwa oraz podobne dane techniczne generowane przez infrastrukturę hostingową.",
        "Preferencje dotyczące cookies wybrane na stronie są przechowywane lokalnie w przeglądarce, aby strona mogła zapamiętać Twoje wybory.",
      ],
    },

    use: {
      title: "Jak wykorzystujemy dane osobowe",
      paragraphs: [
        "Dane osobowe mogą być wykorzystywane do odpowiadania na zapytania, umawiania spotkań, komunikacji dotyczącej serwisu biżuterii lub zegarków, obsługi zgłoszeń serwisowych, zapewniania wsparcia klienta oraz utrzymania bezpieczeństwa i prawidłowego działania strony.",
        "Jeżeli zostaną wprowadzone opcjonalne technologie analityczne lub marketingowe, będą używane wyłącznie zgodnie z preferencjami dotyczącymi cookies wybranymi na stronie.",
      ],
    },

    legalBasis: {
      title: "Podstawa prawna przetwarzania",
      paragraphs: [
        "Podstawa prawna przetwarzania zależy od kontekstu, w którym dane zostały przekazane. Przetwarzanie może być konieczne w celu odpowiedzi na zapytanie, podjęcia działań związanych z usługą lub spotkaniem, wypełnienia obowiązków prawnych, ochrony uzasadnionych interesów biznesowych i bezpieczeństwa albo działania na podstawie zgody, jeśli jest ona wymagana.",
        "Opcjonalne technologie analityczne i marketingowe mają działać dopiero po udzieleniu odpowiedniej zgody.",
      ],
    },

    sharing: {
      title: "Kiedy informacje mogą być udostępniane",
      paragraphs: [
        "Nie sprzedajemy danych osobowych.",
        "Informacje mogą być udostępniane usługodawcom, jeśli jest to rozsądnie konieczne do hostingu strony, działania technicznego, komunikacji, bezpieczeństwa, profesjonalnego doradztwa lub innej usługi zamówionej przez użytkownika.",
        "Informacje mogą być również ujawniane, jeśli wymaga tego prawo, regulacja, nakaz sądowy lub inny ważny obowiązek prawny.",
      ],
    },

    international: {
      title: "Usługi zewnętrzne i międzynarodowe",
      paragraphs: [
        "Strona zawiera linki do usług stron trzecich, w tym WhatsApp, Instagram i Facebook. Po przejściu do jednej z tych usług interakcja podlega zasadom prywatności i warunkom danego dostawcy.",
        "Niektórzy dostawcy usług mogą przetwarzać dane w krajach innych niż kraj, w którym się znajdujesz. Tam, gdzie jest to wymagane, powinny być stosowane odpowiednie zabezpieczenia zgodne z obowiązującymi przepisami o ochronie danych.",
      ],
    },

    retention: {
      title: "Jak długo przechowujemy informacje",
      paragraphs: [
        "Dane osobowe mają być przechowywane tylko tak długo, jak jest to rozsądnie konieczne do celu, w jakim zostały zebrane, prowadzenia odpowiednich dokumentów biznesowych, rozwiązywania zapytań lub sporów, wypełniania obowiązków prawnych oraz ochrony uzasadnionych interesów.",
        "Dokładne okresy przechowywania mogą się różnić w zależności od rodzaju informacji i charakteru relacji z klientem.",
      ],
    },

    cookies: {
      title: "Cookies i zgoda",
      paragraphs: [
        "Strona korzysta z niezbędnych technologii przeglądarki wymaganych do podstawowego działania. Opcjonalne kategorie analityczne i marketingowe są kontrolowane za pomocą panelu zgody na cookies.",
        "Aktualne preferencje dotyczące cookies można w każdej chwili zmienić za pomocą linku Ustawienia cookies dostępnego w stopce strony.",
      ],
    },

    rights: {
      title: "Twoje prawa dotyczące prywatności",
      paragraphs: [
        "W zależności od obowiązującego prawa możesz mieć prawa dotyczące swoich danych osobowych, w tym prawo do dostępu, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, sprzeciwu wobec określonego przetwarzania oraz wycofania zgody.",
        "Jeżeli przetwarzanie odbywa się na podstawie zgody, jej wycofanie nie wpływa na zgodność z prawem przetwarzania dokonanego przed wycofaniem.",
        "Możesz także mieć prawo skontaktować się z właściwym organem ochrony danych lub złożyć do niego skargę.",
      ],
    },

    security: {
      title: "Bezpieczeństwo danych",
      paragraphs: [
        "W celu ochrony danych osobowych przed nieuprawnionym dostępem, utratą, nadużyciem, zmianą lub ujawnieniem mają być stosowane odpowiednie środki techniczne i organizacyjne.",
        "Żaden sposób transmisji przez internet ani elektronicznego przechowywania nie może być zagwarantowany jako całkowicie bezpieczny. Użytkownicy powinni zachować odpowiednią ostrożność podczas elektronicznego przesyłania poufnych informacji.",
      ],
    },

    changes: {
      title: "Zmiany niniejszej polityki",
      paragraphs: [
        "Niniejsza Polityka prywatności może być okresowo aktualizowana w celu uwzględnienia zmian na stronie, w usługach, technologiach lub obowiązujących wymaganiach.",
        "W przypadku istotnych zmian zaktualizowana wersja oraz data zmiany zostaną opublikowane na tej stronie.",
      ],
    },

    contact: {
      title: "Zapytania dotyczące prywatności",
      paragraphs: [
        "Pytania dotyczące niniejszej Polityki prywatności lub żądania dotyczące danych osobowych można kierować na adres:",
      ],
    },

    registrationLabel: "Numer rejestracyjny / firmowy",
    taxLabel: "Numer podatkowy",
    privacyContactLabel: "Kontakt ds. prywatności",

    cookieButton: "Otwórz ustawienia cookies",

    privacyContact: "Kontakt ds. prywatności",
    bottomPolicy: "Polityka prywatności",
    returnToWebsite: "Powrót do strony",
  },

  ru: {
    legalPrivacy: "Правовая информация · Конфиденциальность",
    title: "Политика конфиденциальности",
    heroLead: "Ваша конфиденциальность важна для нас.",
    heroDescription:
      "Настоящая Политика конфиденциальности объясняет, как персональные данные могут собираться, использоваться и защищаться при взаимодействии с веб-сайтом LIDYA JEWELRY и нашими услугами.",
    lastUpdated: "Последнее обновление",
    lastUpdatedValue: "Август 2026",

    introduction: "Введение",
    introLead:
      "Мы стремимся обращаться с персональными данными бережно, прозрачно и уважительно.",
    introText:
      "Настоящая политика применяется к информации, обрабатываемой через этот веб-сайт, включая запросы, заявки на встречи, сервисную коммуникацию, настройки cookies и взаимодействие со связанными средствами связи, такими как электронная почта и WhatsApp.",

    contents: "Содержание",

    controller: {
      title: "Оператор персональных данных",
      paragraphs: [
        "Оператором, ответственным за обработку персональных данных через этот веб-сайт, является:",
      ],
    },

    data: {
      title: "Какие данные мы можем собирать",
      paragraphs: [
        "В зависимости от того, как вы используете веб-сайт или связываетесь с нами, мы можем получать такие данные, как ваше имя, номер телефона, адрес электронной почты, содержание вашего запроса, сведения о запрашиваемой услуге или встрече, а также другую информацию, которую вы решите предоставить.",
        "В рамках обычной работы веб-сайта также могут обрабатываться технические данные, включая IP-адрес, тип браузера, сведения об устройстве, посещённые страницы, временные метки, журналы безопасности и аналогичные технические данные, создаваемые инфраструктурой хостинга.",
        "Настройки cookies, выбранные через веб-сайт, сохраняются локально в вашем браузере, чтобы сайт мог запомнить ваш выбор.",
      ],
    },

    use: {
      title: "Как мы используем персональные данные",
      paragraphs: [
        "Персональные данные могут использоваться для ответа на запросы, организации встреч, коммуникации по вопросам ювелирного и часового сервиса, обработки сервисных заявок, поддержки клиентов, а также обеспечения безопасности и работы веб-сайта.",
        "Если будут использоваться дополнительные аналитические или маркетинговые технологии, они будут применяться только в соответствии с выбранными вами настройками cookies.",
      ],
    },

    legalBasis: {
      title: "Правовые основания обработки",
      paragraphs: [
        "Правовое основание обработки зависит от обстоятельств предоставления данных. Обработка может быть необходима для ответа на запрос, принятия мер в связи с услугой или встречей, исполнения юридических обязанностей, защиты законных деловых интересов и интересов безопасности либо на основании вашего согласия, когда такое согласие требуется.",
        "Дополнительные аналитические и маркетинговые технологии должны использоваться только после получения соответствующего согласия.",
      ],
    },

    sharing: {
      title: "Когда данные могут передаваться",
      paragraphs: [
        "Мы не продаём персональные данные.",
        "Данные могут передаваться поставщикам услуг, если это обоснованно необходимо для хостинга сайта, технической работы, коммуникации, безопасности, профессиональных консультаций или другой запрошенной вами услуги.",
        "Данные также могут быть раскрыты, если этого требует закон, нормативный акт, судебное решение или иное действительное юридическое обязательство.",
      ],
    },

    international: {
      title: "Внешние и международные сервисы",
      paragraphs: [
        "Веб-сайт содержит ссылки на сторонние сервисы, включая WhatsApp, Instagram и Facebook. При переходе по таким ссылкам ваше взаимодействие регулируется политиками конфиденциальности и условиями соответствующего поставщика.",
        "Некоторые поставщики услуг могут обрабатывать данные в странах, отличных от страны вашего нахождения. В соответствующих случаях должны применяться надлежащие меры защиты в соответствии с требованиями законодательства о защите данных.",
      ],
    },

    retention: {
      title: "Срок хранения данных",
      paragraphs: [
        "Персональные данные предполагается хранить только столько, сколько разумно необходимо для целей их сбора, ведения соответствующих деловых записей, решения запросов или споров, выполнения юридических обязанностей и защиты законных интересов.",
        "Точные сроки хранения могут различаться в зависимости от типа данных и характера отношений с клиентом.",
      ],
    },

    cookies: {
      title: "Cookies и согласие",
      paragraphs: [
        "Веб-сайт использует необходимые технологии браузера для основных функций. Дополнительные аналитические и маркетинговые категории управляются через интерфейс согласия на cookies.",
        "Текущие настройки cookies можно изменить в любое время через ссылку настроек cookies в нижней части сайта.",
      ],
    },

    rights: {
      title: "Ваши права в отношении данных",
      paragraphs: [
        "В зависимости от применимого к вам законодательства вы можете иметь права в отношении своих персональных данных, включая право на доступ, исправление, удаление, ограничение обработки, переносимость данных, возражение против определённых видов обработки и отзыв согласия.",
        "Если обработка основана на согласии, его отзыв не влияет на законность обработки, осуществлённой до такого отзыва.",
        "Вы также можете иметь право обратиться или подать жалобу в соответствующий орган по защите данных.",
      ],
    },

    security: {
      title: "Безопасность данных",
      paragraphs: [
        "Предполагается использование разумных технических и организационных мер для защиты персональных данных от несанкционированного доступа, утраты, неправомерного использования, изменения или раскрытия.",
        "Ни один способ передачи через интернет или электронного хранения не может быть гарантирован как полностью безопасный, поэтому пользователям следует соблюдать осторожность при электронной передаче конфиденциальной информации.",
      ],
    },

    changes: {
      title: "Изменения настоящей политики",
      paragraphs: [
        "Настоящая Политика конфиденциальности может время от времени обновляться с учётом изменений веб-сайта, услуг, технологий или применимых требований.",
        "При существенных изменениях обновлённая версия и дата редакции будут опубликованы на этой странице.",
      ],
    },

    contact: {
      title: "Вопросы о конфиденциальности",
      paragraphs: [
        "Вопросы по настоящей Политике конфиденциальности или запросы, касающиеся персональных данных, можно направлять по адресу:",
      ],
    },

    registrationLabel:
      "Регистрационный / корпоративный номер",
    taxLabel: "Налоговый номер",
    privacyContactLabel:
      "Контакт по вопросам конфиденциальности",

    cookieButton: "Открыть настройки cookies",

    privacyContact:
      "Контакт по вопросам конфиденциальности",
    bottomPolicy: "Политика конфиденциальности",
    returnToWebsite: "Вернуться на сайт",
  },

  nl: {
    legalPrivacy: "Juridisch · Privacy",
    title: "Privacybeleid",
    heroLead: "Uw privacy is belangrijk voor ons.",
    heroDescription:
      "Dit Privacybeleid legt uit hoe persoonsgegevens kunnen worden verzameld, gebruikt en beschermd wanneer u de website van LIDYA JEWELRY en onze diensten gebruikt.",
    lastUpdated: "Laatst bijgewerkt",
    lastUpdatedValue: "Augustus 2026",

    introduction: "Inleiding",
    introLead:
      "Wij willen persoonsgegevens zorgvuldig, transparant en respectvol behandelen.",
    introText:
      "Dit beleid is van toepassing op informatie die via deze website wordt verwerkt, waaronder aanvragen, verzoeken om afspraken, servicecommunicatie, cookievoorkeuren en interacties met gekoppelde communicatiediensten zoals e-mail en WhatsApp.",

    contents: "Inhoud",

    controller: {
      title: "Verwerkingsverantwoordelijke",
      paragraphs: [
        "De beheerder die verantwoordelijk is voor de verwerking van persoonsgegevens via deze website is:",
      ],
    },

    data: {
      title: "Gegevens die wij kunnen verzamelen",
      paragraphs: [
        "Afhankelijk van hoe u de website gebruikt of contact met ons opneemt, kunnen wij gegevens ontvangen zoals uw naam, telefoonnummer, e-mailadres, de inhoud van uw aanvraag, gegevens over de gewenste dienst of afspraak en andere informatie die u vrijwillig verstrekt.",
        "Als onderdeel van de normale werking van de website kunnen ook technische gegevens worden verwerkt, waaronder IP-adres, browsertype, apparaatinformatie, bezochte pagina's, tijdstempels, beveiligingslogs en vergelijkbare technische gegevens die door de hostinginfrastructuur worden gegenereerd.",
        "Cookievoorkeuren die via de website worden geselecteerd, worden lokaal in uw browser opgeslagen zodat de website uw keuzes kan onthouden.",
      ],
    },

    use: {
      title: "Hoe wij persoonsgegevens gebruiken",
      paragraphs: [
        "Persoonsgegevens kunnen worden gebruikt om aanvragen te beantwoorden, afspraken te regelen, te communiceren over sieraden- of horlogeservices, serviceverzoeken te verwerken, klantenondersteuning te bieden en de veiligheid en werking van de website te waarborgen.",
        "Wanneer optionele analyse- of marketingtechnologieën worden ingevoerd, worden deze uitsluitend gebruikt in overeenstemming met de cookiekeuzes die via de website zijn gemaakt.",
      ],
    },

    legalBasis: {
      title: "Rechtsgrond voor verwerking",
      paragraphs: [
        "De rechtsgrond voor verwerking hangt af van de context waarin gegevens worden verstrekt. Verwerking kan noodzakelijk zijn om een verzoek te beantwoorden, stappen te nemen in verband met een dienst of afspraak, wettelijke verplichtingen na te komen, gerechtvaardigde bedrijfs- en veiligheidsbelangen te beschermen of op basis van uw toestemming te handelen wanneer toestemming vereist is.",
        "Optionele analyse- en marketingtechnologieën zijn bedoeld om pas te worden gebruikt nadat de relevante toestemming is gegeven.",
      ],
    },

    sharing: {
      title: "Wanneer gegevens kunnen worden gedeeld",
      paragraphs: [
        "Wij verkopen geen persoonsgegevens.",
        "Gegevens kunnen met dienstverleners worden gedeeld wanneer dit redelijkerwijs noodzakelijk is voor hosting, technische werking, communicatie, beveiliging, professioneel advies of een andere door u gevraagde dienst.",
        "Gegevens kunnen ook worden verstrekt wanneer dit vereist is door wetgeving, regelgeving, een rechterlijk bevel of een andere geldige juridische verplichting.",
      ],
    },

    international: {
      title: "Externe en internationale diensten",
      paragraphs: [
        "De website bevat links naar diensten van derden, waaronder WhatsApp, Instagram en Facebook. Wanneer u een dergelijke link volgt, valt uw interactie onder de privacypraktijken en voorwaarden van de betreffende aanbieder.",
        "Sommige dienstverleners kunnen gegevens verwerken in andere landen dan het land waarin u zich bevindt. Waar van toepassing moeten passende waarborgen worden gebruikt in overeenstemming met relevante gegevensbeschermingsvereisten.",
      ],
    },

    retention: {
      title: "Hoe lang gegevens worden bewaard",
      paragraphs: [
        "Persoonsgegevens worden in principe alleen bewaard zolang dit redelijkerwijs noodzakelijk is voor het doel waarvoor ze zijn verzameld, voor het bijhouden van relevante bedrijfsadministratie, het afhandelen van vragen of geschillen, het voldoen aan wettelijke verplichtingen en het beschermen van gerechtvaardigde belangen.",
        "De exacte bewaartermijnen kunnen verschillen afhankelijk van het type gegevens en de aard van de klantrelatie.",
      ],
    },

    cookies: {
      title: "Cookies en toestemming",
      paragraphs: [
        "De website gebruikt noodzakelijke browsertechnologieën die vereist zijn voor basisfunctionaliteit. Optionele analyse- en marketingcategorieën worden beheerd via de cookie-toestemmingsinterface van de website.",
        "Uw huidige cookievoorkeuren kunnen op elk moment worden gewijzigd via de link Cookie-instellingen in de footer van de website.",
      ],
    },

    rights: {
      title: "Uw privacyrechten",
      paragraphs: [
        "Afhankelijk van de wetgeving die op u van toepassing is, kunt u rechten hebben met betrekking tot uw persoonsgegevens, waaronder het recht op inzage, correctie, verwijdering, beperking, overdraagbaarheid, bezwaar tegen bepaalde verwerking en intrekking van toestemming.",
        "Wanneer verwerking is gebaseerd op toestemming, heeft intrekking van die toestemming geen invloed op de rechtmatigheid van de verwerking vóór de intrekking.",
        "U kunt ook het recht hebben om contact op te nemen met of een klacht in te dienen bij de bevoegde gegevensbeschermingsautoriteit.",
      ],
    },

    security: {
      title: "Gegevensbeveiliging",
      paragraphs: [
        "Er wordt beoogd redelijke technische en organisatorische maatregelen te gebruiken om persoonsgegevens te beschermen tegen ongeoorloofde toegang, verlies, misbruik, wijziging of openbaarmaking.",
        "Geen enkele methode van internetoverdracht of elektronische opslag kan als volledig veilig worden gegarandeerd. Gebruikers moeten daarom passende voorzichtigheid betrachten bij het elektronisch verzenden van gevoelige informatie.",
      ],
    },

    changes: {
      title: "Wijzigingen in dit beleid",
      paragraphs: [
        "Dit Privacybeleid kan van tijd tot tijd worden bijgewerkt om wijzigingen in de website, diensten, technologieën of toepasselijke vereisten weer te geven.",
        "Wanneer belangrijke wijzigingen worden aangebracht, worden de bijgewerkte versie en revisiedatum op deze pagina gepubliceerd.",
      ],
    },

    contact: {
      title: "Privacyvragen",
      paragraphs: [
        "Vragen over dit Privacybeleid of verzoeken met betrekking tot persoonsgegevens kunnen worden gericht aan:",
      ],
    },

    registrationLabel: "Registratie- / bedrijfsnummer",
    taxLabel: "Belastingnummer",
    privacyContactLabel: "Privacycontact",

    cookieButton: "Cookie-instellingen openen",

    privacyContact: "Privacycontact",
    bottomPolicy: "Privacybeleid",
    returnToWebsite: "Terug naar de website",
  },

  da: {
    legalPrivacy: "Juridisk · Privatliv",
    title: "Privatlivspolitik",
    heroLead: "Dit privatliv er vigtigt for os.",
    heroDescription:
      "Denne privatlivspolitik forklarer, hvordan personoplysninger kan indsamles, anvendes og beskyttes, når du bruger LIDYA JEWELRYs hjemmeside og vores tjenester.",
    lastUpdated: "Senest opdateret",
    lastUpdatedValue: "August 2026",

    introduction: "Introduktion",
    introLead:
      "Vi ønsker at behandle personoplysninger omhyggeligt, gennemsigtigt og respektfuldt.",
    introText:
      "Denne politik gælder for oplysninger, der behandles via denne hjemmeside, herunder forespørgsler, anmodninger om aftaler, servicekommunikation, cookiepræferencer og interaktion med tilknyttede kommunikationstjenester som e-mail og WhatsApp.",

    contents: "Indhold",

    controller: {
      title: "Dataansvarlig",
      paragraphs: [
        "Den operatør, der er ansvarlig for behandlingen af personoplysninger via denne hjemmeside, er:",
      ],
    },

    data: {
      title: "Oplysninger vi kan indsamle",
      paragraphs: [
        "Afhængigt af hvordan du bruger hjemmesiden eller kontakter os, kan vi modtage oplysninger som dit navn, telefonnummer, e-mailadresse, indholdet af din forespørgsel, oplysninger om den ønskede service eller aftale samt andre oplysninger, du vælger at give os.",
        "Som en del af hjemmesidens normale drift kan tekniske oplysninger også blive behandlet, herunder IP-adresse, browsertype, enhedsoplysninger, besøgte sider, tidsstempler, sikkerhedslogs og lignende tekniske data genereret af hostinginfrastrukturen.",
        "Cookiepræferencer valgt via hjemmesiden gemmes lokalt i din browser, så hjemmesiden kan huske dine valg.",
      ],
    },

    use: {
      title: "Sådan bruger vi personoplysninger",
      paragraphs: [
        "Personoplysninger kan bruges til at besvare forespørgsler, arrangere aftaler, kommunikere om smykke- eller urservice, behandle serviceanmodninger, yde kundesupport og opretholde hjemmesidens sikkerhed og drift.",
        "Hvis valgfrie analyse- eller marketingteknologier indføres, vil de kun blive brugt i overensstemmelse med de cookievalg, der foretages via hjemmesiden.",
      ],
    },

    legalBasis: {
      title: "Retsgrundlag for behandling",
      paragraphs: [
        "Retsgrundlaget for behandlingen afhænger af den sammenhæng, hvori oplysningerne gives. Behandling kan være nødvendig for at besvare en anmodning, tage skridt i forbindelse med en service eller aftale, overholde juridiske forpligtelser, beskytte legitime forretnings- og sikkerhedsinteresser eller handle på baggrund af dit samtykke, hvor samtykke er nødvendigt.",
        "Valgfrie analyse- og marketingteknologier er beregnet til først at blive anvendt, når det relevante samtykke er givet.",
      ],
    },

    sharing: {
      title: "Hvornår oplysninger kan deles",
      paragraphs: [
        "Vi sælger ikke personoplysninger.",
        "Oplysninger kan deles med tjenesteudbydere, hvor det med rimelighed er nødvendigt for hosting, teknisk drift, kommunikation, sikkerhed, professionel rådgivning eller en anden tjeneste, du har anmodet om.",
        "Oplysninger kan også videregives, hvis det kræves ved lov, regulering, retskendelse eller anden gyldig juridisk forpligtelse.",
      ],
    },

    international: {
      title: "Eksterne og internationale tjenester",
      paragraphs: [
        "Hjemmesiden indeholder links til tredjepartstjenester, herunder WhatsApp, Instagram og Facebook. Når du vælger at følge et sådant link, er din interaktion underlagt den relevante tredjeparts privatlivspraksis og vilkår.",
        "Nogle tjenesteudbydere kan behandle oplysninger i andre lande end det land, hvor du befinder dig. Hvor det er relevant, bør passende sikkerhedsforanstaltninger anvendes i overensstemmelse med gældende databeskyttelseskrav.",
      ],
    },

    retention: {
      title: "Hvor længe oplysninger opbevares",
      paragraphs: [
        "Personoplysninger tilstræbes kun opbevaret så længe, som det med rimelighed er nødvendigt for det formål, de blev indsamlet til, for at vedligeholde relevante forretningsoptegnelser, løse forespørgsler eller tvister, opfylde juridiske forpligtelser og beskytte legitime interesser.",
        "De præcise opbevaringsperioder kan variere afhængigt af typen af oplysninger og karakteren af kundeforholdet.",
      ],
    },

    cookies: {
      title: "Cookies og samtykke",
      paragraphs: [
        "Hjemmesiden bruger nødvendige browserteknologier, som kræves for grundlæggende funktionalitet. Valgfrie analyse- og marketingkategorier styres via hjemmesidens cookie-samtykkeinterface.",
        "Dine aktuelle cookiepræferencer kan til enhver tid ændres via linket til cookieindstillinger i hjemmesidens footer.",
      ],
    },

    rights: {
      title: "Dine privatlivsrettigheder",
      paragraphs: [
        "Afhængigt af den lovgivning, der gælder for dig, kan du have rettigheder vedrørende dine personoplysninger, herunder ret til adgang, rettelse, sletning, begrænsning, dataportabilitet, indsigelse mod visse behandlinger og tilbagetrækning af samtykke.",
        "Hvor behandlingen er baseret på samtykke, påvirker en tilbagetrækning af samtykket ikke lovligheden af behandling foretaget før tilbagetrækningen.",
        "Du kan også have ret til at kontakte eller indgive en klage til den relevante databeskyttelsesmyndighed.",
      ],
    },

    security: {
      title: "Datasikkerhed",
      paragraphs: [
        "Der tilstræbes anvendt rimelige tekniske og organisatoriske foranstaltninger til at beskytte personoplysninger mod uautoriseret adgang, tab, misbrug, ændring eller offentliggørelse.",
        "Ingen metode til internetoverførsel eller elektronisk lagring kan garanteres fuldstændig sikker. Brugere bør derfor udvise passende forsigtighed ved elektronisk fremsendelse af følsomme oplysninger.",
      ],
    },

    changes: {
      title: "Ændringer af denne politik",
      paragraphs: [
        "Denne privatlivspolitik kan fra tid til anden blive opdateret for at afspejle ændringer i hjemmesiden, tjenesterne, teknologierne eller gældende krav.",
        "Ved væsentlige ændringer offentliggøres den opdaterede version og revisionsdato på denne side.",
      ],
    },

    contact: {
      title: "Forespørgsler om privatliv",
      paragraphs: [
        "Spørgsmål om denne privatlivspolitik eller anmodninger vedrørende personoplysninger kan sendes til:",
      ],
    },

    registrationLabel: "Registrerings- / virksomhedsnummer",
    taxLabel: "Skattenummer",
    privacyContactLabel: "Kontakt vedrørende privatliv",

    cookieButton: "Åbn cookieindstillinger",

    privacyContact: "Kontakt vedrørende privatliv",
    bottomPolicy: "Privatlivspolitik",
    returnToWebsite: "Tilbage til hjemmesiden",
  },

  fi: {
    legalPrivacy: "Lakiasiat · Tietosuoja",
    title: "Tietosuojakäytäntö",
    heroLead: "Yksityisyytesi on meille tärkeää.",
    heroDescription:
      "Tässä tietosuojakäytännössä kerrotaan, miten henkilötietoja voidaan kerätä, käyttää ja suojata käyttäessäsi LIDYA JEWELRY -verkkosivustoa ja palveluitamme.",
    lastUpdated: "Viimeksi päivitetty",
    lastUpdatedValue: "Elokuu 2026",

    introduction: "Johdanto",
    introLead:
      "Pyrimme käsittelemään henkilötietoja huolellisesti, avoimesti ja kunnioittavasti.",
    introText:
      "Tämä käytäntö koskee tämän verkkosivuston kautta käsiteltäviä tietoja, mukaan lukien tiedustelut, ajanvarauspyynnöt, palveluviestintä, evästeasetukset sekä vuorovaikutus linkitettyjen viestintäpalvelujen, kuten sähköpostin ja WhatsAppin, kanssa.",

    contents: "Sisältö",

    controller: {
      title: "Rekisterinpitäjä",
      paragraphs: [
        "Tämän verkkosivuston kautta käsiteltävistä henkilötiedoista vastaava toimija on:",
      ],
    },

    data: {
      title: "Tietoja, joita voimme kerätä",
      paragraphs: [
        "Riippuen siitä, miten käytät verkkosivustoa tai otat meihin yhteyttä, voimme saada tietoja kuten nimesi, puhelinnumerosi, sähköpostiosoitteesi, tiedustelusi sisällön, pyydettyyn palveluun tai ajanvaraukseen liittyvät tiedot sekä muita tietoja, jotka päätät antaa.",
        "Verkkosivuston normaalin toiminnan yhteydessä voidaan käsitellä myös teknisiä tietoja, kuten IP-osoitetta, selaintyyppiä, laitetietoja, vierailtuja sivuja, aikaleimoja, turvallisuuslokeja ja muita hosting-infrastruktuurin tuottamia teknisiä tietoja.",
        "Verkkosivustolla valitut evästeasetukset tallennetaan paikallisesti selaimeesi, jotta sivusto voi muistaa valintasi.",
      ],
    },

    use: {
      title: "Miten käytämme henkilötietoja",
      paragraphs: [
        "Henkilötietoja voidaan käyttää tiedusteluihin vastaamiseen, ajanvarausten järjestämiseen, koru- tai kellopalveluihin liittyvään viestintään, palvelupyyntöjen käsittelyyn, asiakastuen tarjoamiseen sekä verkkosivuston turvallisuuden ja toiminnan ylläpitämiseen.",
        "Jos valinnaisia analytiikka- tai markkinointiteknologioita otetaan käyttöön, niitä käytetään vain verkkosivustolla tehtyjen evästevalintojen mukaisesti.",
      ],
    },

    legalBasis: {
      title: "Käsittelyn oikeusperuste",
      paragraphs: [
        "Käsittelyn oikeusperuste riippuu siitä, missä yhteydessä tiedot annetaan. Käsittely voi olla tarpeen pyynnön käsittelemiseksi, palveluun tai ajanvaraukseen liittyvien toimien suorittamiseksi, lakisääteisten velvoitteiden täyttämiseksi, oikeutettujen liiketoiminta- ja turvallisuusetujen suojaamiseksi tai suostumuksesi perusteella silloin, kun suostumus vaaditaan.",
        "Valinnaisten analytiikka- ja markkinointiteknologioiden on tarkoitus toimia vasta asianmukaisen suostumuksen jälkeen.",
      ],
    },

    sharing: {
      title: "Milloin tietoja voidaan jakaa",
      paragraphs: [
        "Emme myy henkilötietoja.",
        "Tietoja voidaan jakaa palveluntarjoajien kanssa silloin, kun se on kohtuudella tarpeen verkkosivuston hostingia, teknistä toimintaa, viestintää, turvallisuutta, ammatillista neuvontaa tai muuta pyytämääsi palvelua varten.",
        "Tietoja voidaan myös luovuttaa, jos laki, määräys, tuomioistuimen päätös tai muu pätevä oikeudellinen velvoite sitä edellyttää.",
      ],
    },

    international: {
      title: "Ulkoiset ja kansainväliset palvelut",
      paragraphs: [
        "Verkkosivusto sisältää linkkejä kolmansien osapuolten palveluihin, kuten WhatsAppiin, Instagramiin ja Facebookiin. Kun siirryt tällaisen linkin kautta, vuorovaikutukseesi sovelletaan kyseisen palveluntarjoajan tietosuojakäytäntöjä ja ehtoja.",
        "Jotkin palveluntarjoajat voivat käsitellä tietoja muissa maissa kuin siinä, jossa itse sijaitset. Tarvittaessa tulee käyttää asianmukaisia suojatoimia sovellettavien tietosuojavaatimusten mukaisesti.",
      ],
    },

    retention: {
      title: "Tietojen säilytysaika",
      paragraphs: [
        "Henkilötietoja on tarkoitus säilyttää vain niin kauan kuin on kohtuudella tarpeen niiden alkuperäiseen tarkoitukseen, asianmukaisten liiketoimintatietojen ylläpitämiseen, tiedustelujen tai riitojen ratkaisemiseen, lakisääteisten velvoitteiden täyttämiseen ja oikeutettujen etujen suojaamiseen.",
        "Tarkat säilytysajat voivat vaihdella tietotyypin ja asiakassuhteen luonteen mukaan.",
      ],
    },

    cookies: {
      title: "Evästeet ja suostumus",
      paragraphs: [
        "Verkkosivusto käyttää perustoimintojen kannalta välttämättömiä selaimeen liittyviä teknologioita. Valinnaisia analytiikka- ja markkinointikategorioita hallitaan verkkosivuston evästesuostumusrajapinnan kautta.",
        "Voit muuttaa nykyisiä evästeasetuksiasi milloin tahansa verkkosivuston alatunnisteessa olevan Evästeasetukset-linkin kautta.",
      ],
    },

    rights: {
      title: "Tietosuojaoikeutesi",
      paragraphs: [
        "Sinua koskevasta lainsäädännöstä riippuen sinulla voi olla henkilötietoihisi liittyviä oikeuksia, kuten oikeus pyytää pääsyä tietoihin, niiden korjaamista, poistamista, käsittelyn rajoittamista, siirrettävyyttä, vastustaa tiettyä käsittelyä sekä peruuttaa suostumus.",
        "Jos käsittely perustuu suostumukseen, suostumuksen peruuttaminen ei vaikuta ennen peruuttamista suoritetun käsittelyn lainmukaisuuteen.",
        "Sinulla voi myös olla oikeus ottaa yhteyttä toimivaltaiseen tietosuojaviranomaiseen tai tehdä sille valitus.",
      ],
    },

    security: {
      title: "Tietoturva",
      paragraphs: [
        "Henkilötietojen suojaamiseksi luvattomalta käytöltä, katoamiselta, väärinkäytöltä, muuttamiselta tai luovuttamiselta pyritään käyttämään kohtuullisia teknisiä ja organisatorisia toimenpiteitä.",
        "Mikään internetin kautta tapahtuva tiedonsiirto tai sähköinen tallennusmenetelmä ei ole täysin turvallinen. Käyttäjien tulee siksi noudattaa asianmukaista varovaisuutta lähettäessään arkaluonteisia tietoja sähköisesti.",
      ],
    },

    changes: {
      title: "Muutokset tähän käytäntöön",
      paragraphs: [
        "Tätä tietosuojakäytäntöä voidaan päivittää ajoittain verkkosivuston, palvelujen, teknologioiden tai sovellettavien vaatimusten muutosten huomioimiseksi.",
        "Merkittävistä muutoksista julkaistaan päivitetty versio ja päivityspäivä tällä sivulla.",
      ],
    },

    contact: {
      title: "Tietosuojaa koskevat yhteydenotot",
      paragraphs: [
        "Tätä tietosuojakäytäntöä koskevat kysymykset tai henkilötietoihin liittyvät pyynnöt voidaan osoittaa:",
      ],
    },

    registrationLabel: "Rekisteri- / yritysnumero",
    taxLabel: "Veronumero",
    privacyContactLabel: "Tietosuojayhteyshenkilö",

    cookieButton: "Avaa evästeasetukset",

    privacyContact: "Tietosuojayhteyshenkilö",
    bottomPolicy: "Tietosuojakäytäntö",
    returnToWebsite: "Takaisin verkkosivustolle",
  },

  sv: {
    legalPrivacy: "Juridiskt · Integritet",
    title: "Integritetspolicy",
    heroLead: "Din integritet är viktig för oss.",
    heroDescription:
      "Denna integritetspolicy förklarar hur personuppgifter kan samlas in, användas och skyddas när du använder LIDYA JEWELRYs webbplats och våra tjänster.",
    lastUpdated: "Senast uppdaterad",
    lastUpdatedValue: "Augusti 2026",

    introduction: "Introduktion",
    introLead:
      "Vi strävar efter att hantera personuppgifter med omsorg, transparens och respekt.",
    introText:
      "Denna policy gäller information som behandlas via webbplatsen, inklusive förfrågningar, bokningsförfrågningar, servicekommunikation, cookieinställningar och interaktion med länkade kommunikationstjänster som e-post och WhatsApp.",

    contents: "Innehåll",

    controller: {
      title: "Personuppgiftsansvarig",
      paragraphs: [
        "Den operatör som ansvarar för behandlingen av personuppgifter via denna webbplats är:",
      ],
    },

    data: {
      title: "Information vi kan samla in",
      paragraphs: [
        "Beroende på hur du använder webbplatsen eller kontaktar oss kan vi få information såsom ditt namn, telefonnummer, e-postadress, innehållet i din förfrågan, uppgifter om önskad tjänst eller bokning samt annan information som du väljer att lämna.",
        "Som en del av webbplatsens normala drift kan även teknisk information behandlas, inklusive IP-adress, webbläsartyp, enhetsinformation, besökta sidor, tidsstämplar, säkerhetsloggar och liknande tekniska data som genereras av hostinginfrastrukturen.",
        "Cookieinställningar som väljs via webbplatsen lagras lokalt i din webbläsare så att webbplatsen kan komma ihåg dina val.",
      ],
    },

    use: {
      title: "Hur vi använder personuppgifter",
      paragraphs: [
        "Personuppgifter kan användas för att besvara förfrågningar, ordna bokningar, kommunicera om smyckes- eller klockservice, behandla serviceärenden, tillhandahålla kundsupport och upprätthålla webbplatsens säkerhet och funktion.",
        "Om valfria analys- eller marknadsföringstekniker införs kommer de endast att användas i enlighet med de cookieval som görs via webbplatsen.",
      ],
    },

    legalBasis: {
      title: "Rättslig grund för behandling",
      paragraphs: [
        "Den rättsliga grunden för behandling beror på sammanhanget i vilket informationen lämnas. Behandling kan vara nödvändig för att besvara en begäran, vidta åtgärder i samband med en tjänst eller bokning, uppfylla juridiska skyldigheter, skydda legitima affärs- och säkerhetsintressen eller agera på grundval av ditt samtycke när samtycke krävs.",
        "Valfria analys- och marknadsföringstekniker är avsedda att användas först efter att relevant samtycke har lämnats.",
      ],
    },

    sharing: {
      title: "När information kan delas",
      paragraphs: [
        "Vi säljer inte personuppgifter.",
        "Information kan delas med tjänsteleverantörer när det rimligen är nödvändigt för hosting, teknisk drift, kommunikation, säkerhet, professionell rådgivning eller annan tjänst som du har begärt.",
        "Information kan också lämnas ut om det krävs enligt lag, förordning, domstolsbeslut eller annan giltig rättslig skyldighet.",
      ],
    },

    international: {
      title: "Externa och internationella tjänster",
      paragraphs: [
        "Webbplatsen innehåller länkar till tredjepartstjänster, inklusive WhatsApp, Instagram och Facebook. När du följer en sådan länk styrs din interaktion av den relevanta tredjepartsleverantörens integritetspraxis och villkor.",
        "Vissa tjänsteleverantörer kan behandla information i andra länder än det land där du befinner dig. Där det är tillämpligt bör lämpliga skyddsåtgärder användas i enlighet med relevanta dataskyddskrav.",
      ],
    },

    retention: {
      title: "Hur länge information sparas",
      paragraphs: [
        "Personuppgifter är avsedda att sparas endast så länge som rimligen är nödvändigt för det syfte de samlades in för, för att upprätthålla relevanta affärsregister, hantera förfrågningar eller tvister, uppfylla rättsliga skyldigheter och skydda legitima intressen.",
        "Exakta lagringstider kan variera beroende på typen av information och kundrelationens karaktär.",
      ],
    },

    cookies: {
      title: "Cookies och samtycke",
      paragraphs: [
        "Webbplatsen använder nödvändiga webbläsartekniker som krävs för grundläggande funktionalitet. Valfria analys- och marknadsföringskategorier styrs via webbplatsens cookie-samtyckesgränssnitt.",
        "Dina aktuella cookieinställningar kan när som helst ändras via länken Cookieinställningar i webbplatsens sidfot.",
      ],
    },

    rights: {
      title: "Dina integritetsrättigheter",
      paragraphs: [
        "Beroende på den lag som gäller för dig kan du ha rättigheter avseende dina personuppgifter, inklusive rätt till tillgång, rättelse, radering, begränsning, dataportabilitet, invändning mot viss behandling och återkallande av samtycke.",
        "När behandling baseras på samtycke påverkar ett återkallande av samtycket inte lagligheten av behandling som utförts före återkallandet.",
        "Du kan också ha rätt att kontakta eller lämna in ett klagomål till relevant dataskyddsmyndighet.",
      ],
    },

    security: {
      title: "Datasäkerhet",
      paragraphs: [
        "Rimliga tekniska och organisatoriska åtgärder är avsedda att användas för att skydda personuppgifter mot obehörig åtkomst, förlust, missbruk, ändring eller utlämnande.",
        "Ingen metod för överföring via internet eller elektronisk lagring kan garanteras vara helt säker. Användare bör därför vara försiktiga när känslig information skickas elektroniskt.",
      ],
    },

    changes: {
      title: "Ändringar av denna policy",
      paragraphs: [
        "Denna integritetspolicy kan uppdateras från tid till annan för att återspegla förändringar av webbplatsen, tjänsterna, tekniken eller tillämpliga krav.",
        "Vid väsentliga ändringar publiceras den uppdaterade versionen och revisionsdatumet på denna sida.",
      ],
    },

    contact: {
      title: "Integritetsfrågor",
      paragraphs: [
        "Frågor om denna integritetspolicy eller begäranden som gäller personuppgifter kan skickas till:",
      ],
    },

    registrationLabel: "Registrerings- / företagsnummer",
    taxLabel: "Skattenummer",
    privacyContactLabel: "Integritetskontakt",

    cookieButton: "Öppna cookieinställningar",

    privacyContact: "Integritetskontakt",
    bottomPolicy: "Integritetspolicy",
    returnToWebsite: "Tillbaka till webbplatsen",
  },

  fr: {
    legalPrivacy: "Mentions légales · Confidentialité",
    title: "Politique de confidentialité",
    heroLead: "Votre vie privée compte pour nous.",
    heroDescription:
      "Cette Politique de confidentialité explique comment les données personnelles peuvent être collectées, utilisées et protégées lorsque vous utilisez le site LIDYA JEWELRY et nos services.",
    lastUpdated: "Dernière mise à jour",
    lastUpdatedValue: "Août 2026",

    introduction: "Introduction",
    introLead:
      "Nous souhaitons traiter les données personnelles avec soin, transparence et respect.",
    introText:
      "Cette politique s’applique aux informations traitées via ce site, notamment les demandes, demandes de rendez-vous, communications de service, préférences relatives aux cookies et interactions avec des services de communication liés tels que l’e-mail et WhatsApp.",

    contents: "Sommaire",

    controller: {
      title: "Responsable du traitement",
      paragraphs: [
        "L’exploitant responsable du traitement des données personnelles via ce site est :",
      ],
    },

    data: {
      title: "Informations que nous pouvons collecter",
      paragraphs: [
        "Selon la manière dont vous utilisez le site ou nous contactez, nous pouvons recevoir des informations telles que votre nom, votre numéro de téléphone, votre adresse e-mail, le contenu de votre demande, des informations relatives au service ou au rendez-vous demandé, ainsi que toute autre information que vous choisissez de fournir.",
        "Des informations techniques peuvent également être traitées dans le cadre du fonctionnement normal du site, notamment l’adresse IP, le type de navigateur, les informations sur l’appareil, les pages consultées, les horodatages, les journaux de sécurité et d’autres données techniques similaires générées par l’infrastructure d’hébergement.",
        "Les préférences relatives aux cookies sélectionnées via le site sont enregistrées localement dans votre navigateur afin que le site puisse mémoriser vos choix.",
      ],
    },

    use: {
      title: "Comment nous utilisons les données personnelles",
      paragraphs: [
        "Les données personnelles peuvent être utilisées pour répondre aux demandes, organiser des rendez-vous, communiquer au sujet des services de joaillerie ou d’horlogerie, traiter les demandes de service, assurer l’assistance clientèle et maintenir la sécurité et le fonctionnement du site.",
        "Lorsque des technologies facultatives d’analyse ou de marketing sont introduites, elles ne sont utilisées que conformément aux choix de cookies effectués via le site.",
      ],
    },

    legalBasis: {
      title: "Base juridique du traitement",
      paragraphs: [
        "La base juridique du traitement dépend du contexte dans lequel les informations sont fournies. Le traitement peut être nécessaire pour répondre à une demande, prendre des mesures liées à un service ou à un rendez-vous, respecter des obligations légales, protéger des intérêts commerciaux et de sécurité légitimes ou agir sur la base de votre consentement lorsque celui-ci est requis.",
        "Les technologies facultatives d’analyse et de marketing sont destinées à fonctionner uniquement après obtention du consentement correspondant.",
      ],
    },

    sharing: {
      title: "Quand les informations peuvent être partagées",
      paragraphs: [
        "Nous ne vendons pas les données personnelles.",
        "Les informations peuvent être partagées avec des prestataires lorsque cela est raisonnablement nécessaire pour l’hébergement, le fonctionnement technique, les communications, la sécurité, les conseils professionnels ou un autre service que vous avez demandé.",
        "Les informations peuvent également être divulguées lorsqu’une loi, une réglementation, une décision judiciaire ou une autre obligation légale valable l’exige.",
      ],
    },

    international: {
      title: "Services externes et internationaux",
      paragraphs: [
        "Le site contient des liens vers des services tiers, notamment WhatsApp, Instagram et Facebook. Lorsque vous suivez l’un de ces liens, votre interaction est régie par les pratiques de confidentialité et les conditions du prestataire concerné.",
        "Certains prestataires peuvent traiter des informations dans des pays différents de celui où vous vous trouvez. Lorsque cela s’applique, des garanties appropriées doivent être utilisées conformément aux exigences pertinentes en matière de protection des données.",
      ],
    },

    retention: {
      title: "Durée de conservation des informations",
      paragraphs: [
        "Les données personnelles sont destinées à être conservées uniquement pendant la durée raisonnablement nécessaire à la finalité pour laquelle elles ont été collectées, au maintien de documents professionnels pertinents, au traitement de demandes ou de litiges, au respect d’obligations légales et à la protection d’intérêts légitimes.",
        "Les durées précises de conservation peuvent varier selon la nature des informations et de la relation avec le client.",
      ],
    },

    cookies: {
      title: "Cookies et consentement",
      paragraphs: [
        "Le site utilise les technologies de navigateur nécessaires à son fonctionnement de base. Les catégories facultatives d’analyse et de marketing sont contrôlées via l’interface de consentement aux cookies du site.",
        "Vos préférences actuelles en matière de cookies peuvent être modifiées à tout moment via le lien Paramètres des cookies disponible dans le pied de page du site.",
      ],
    },

    rights: {
      title: "Vos droits en matière de confidentialité",
      paragraphs: [
        "Selon la législation qui vous est applicable, vous pouvez disposer de droits concernant vos données personnelles, notamment des droits d’accès, de rectification, d’effacement, de limitation, de portabilité, d’opposition à certains traitements et de retrait du consentement.",
        "Lorsque le traitement repose sur le consentement, son retrait n’affecte pas la licéité du traitement effectué avant ce retrait.",
        "Vous pouvez également avoir le droit de contacter ou de déposer une réclamation auprès de l’autorité de protection des données compétente.",
      ],
    },

    security: {
      title: "Sécurité des données",
      paragraphs: [
        "Des mesures techniques et organisationnelles raisonnables sont destinées à protéger les données personnelles contre l’accès non autorisé, la perte, l’utilisation abusive, la modification ou la divulgation.",
        "Aucune méthode de transmission sur Internet ou de stockage électronique ne peut être garantie comme totalement sécurisée. Les utilisateurs doivent donc faire preuve de prudence lorsqu’ils transmettent électroniquement des informations sensibles.",
      ],
    },

    changes: {
      title: "Modifications de cette politique",
      paragraphs: [
        "Cette Politique de confidentialité peut être mise à jour de temps à autre pour refléter les changements apportés au site, aux services, aux technologies ou aux exigences applicables.",
        "En cas de modification importante, la version mise à jour et la date de révision seront publiées sur cette page.",
      ],
    },

    contact: {
      title: "Demandes relatives à la confidentialité",
      paragraphs: [
        "Les questions concernant cette Politique de confidentialité ou les demandes relatives aux données personnelles peuvent être adressées à :",
      ],
    },

    registrationLabel: "Numéro d’immatriculation / société",
    taxLabel: "Numéro fiscal",
    privacyContactLabel: "Contact confidentialité",

    cookieButton: "Ouvrir les paramètres des cookies",

    privacyContact: "Contact confidentialité",
    bottomPolicy: "Politique de confidentialité",
    returnToWebsite: "Retour au site",
  },

  it: {
    legalPrivacy: "Informazioni legali · Privacy",
    title: "Informativa sulla privacy",
    heroLead: "La vostra privacy è importante per noi.",
    heroDescription:
      "Questa Informativa sulla privacy spiega come i dati personali possono essere raccolti, utilizzati e protetti quando interagite con il sito LIDYA JEWELRY e con i nostri servizi.",
    lastUpdated: "Ultimo aggiornamento",
    lastUpdatedValue: "Agosto 2026",

    introduction: "Introduzione",
    introLead:
      "Vogliamo trattare i dati personali con attenzione, trasparenza e rispetto.",
    introText:
      "Questa informativa si applica alle informazioni trattate tramite il sito, incluse richieste, appuntamenti, comunicazioni di servizio, preferenze relative ai cookie e interazioni con servizi di comunicazione collegati come e-mail e WhatsApp.",

    contents: "Contenuti",

    controller: {
      title: "Titolare del trattamento",
      paragraphs: [
        "Il soggetto responsabile del trattamento dei dati personali attraverso questo sito è:",
      ],
    },

    data: {
      title: "Informazioni che possiamo raccogliere",
      paragraphs: [
        "A seconda di come utilizzate il sito o ci contattate, possiamo ricevere informazioni come nome, numero di telefono, indirizzo e-mail, contenuto della richiesta, dettagli del servizio o appuntamento richiesto e altre informazioni che scegliete di fornire.",
        "Nell’ambito del normale funzionamento del sito possono essere trattate anche informazioni tecniche, tra cui indirizzo IP, tipo di browser, informazioni sul dispositivo, pagine visitate, timestamp, registri di sicurezza e dati tecnici simili generati dall’infrastruttura di hosting.",
        "Le preferenze relative ai cookie selezionate attraverso il sito vengono memorizzate localmente nel browser affinché il sito possa ricordare le vostre scelte.",
      ],
    },

    use: {
      title: "Come utilizziamo i dati personali",
      paragraphs: [
        "I dati personali possono essere utilizzati per rispondere alle richieste, organizzare appuntamenti, comunicare in merito ai servizi di gioielleria o orologeria, elaborare richieste di assistenza, fornire supporto al cliente e mantenere la sicurezza e il funzionamento del sito.",
        "Qualora vengano introdotte tecnologie opzionali di analisi o marketing, esse saranno utilizzate esclusivamente in conformità alle preferenze sui cookie selezionate tramite il sito.",
      ],
    },

    legalBasis: {
      title: "Base giuridica del trattamento",
      paragraphs: [
        "La base giuridica del trattamento dipende dal contesto in cui vengono fornite le informazioni. Il trattamento può essere necessario per rispondere a una richiesta, adottare misure relative a un servizio o appuntamento, rispettare obblighi legali, proteggere legittimi interessi commerciali e di sicurezza o agire sulla base del vostro consenso quando richiesto.",
        "Le tecnologie opzionali di analisi e marketing sono destinate a funzionare solo dopo che sia stato fornito il relativo consenso.",
      ],
    },

    sharing: {
      title: "Quando le informazioni possono essere condivise",
      paragraphs: [
        "Non vendiamo dati personali.",
        "Le informazioni possono essere condivise con fornitori di servizi quando ciò è ragionevolmente necessario per hosting, funzionamento tecnico, comunicazioni, sicurezza, consulenza professionale o altro servizio richiesto.",
        "Le informazioni possono inoltre essere divulgate quando richiesto da legge, regolamento, ordine del tribunale o altro valido obbligo legale.",
      ],
    },

    international: {
      title: "Servizi esterni e internazionali",
      paragraphs: [
        "Il sito contiene collegamenti a servizi di terze parti, tra cui WhatsApp, Instagram e Facebook. Quando scegliete di seguire uno di questi collegamenti, la vostra interazione è disciplinata dalle pratiche sulla privacy e dalle condizioni del relativo fornitore.",
        "Alcuni fornitori possono trattare informazioni in Paesi diversi da quello in cui vi trovate. Ove applicabile, devono essere adottate adeguate misure di protezione conformemente ai requisiti pertinenti in materia di protezione dei dati.",
      ],
    },

    retention: {
      title: "Per quanto tempo vengono conservate le informazioni",
      paragraphs: [
        "I dati personali sono destinati a essere conservati solo per il tempo ragionevolmente necessario alla finalità per la quale sono stati raccolti, al mantenimento di registrazioni commerciali pertinenti, alla risoluzione di richieste o controversie, all’adempimento di obblighi legali e alla protezione di interessi legittimi.",
        "I periodi esatti di conservazione possono variare in base al tipo di informazione e alla natura del rapporto con il cliente.",
      ],
    },

    cookies: {
      title: "Cookie e consenso",
      paragraphs: [
        "Il sito utilizza tecnologie del browser necessarie alle funzionalità di base. Le categorie opzionali di analisi e marketing vengono controllate tramite l’interfaccia di consenso ai cookie del sito.",
        "Le preferenze correnti relative ai cookie possono essere modificate in qualsiasi momento tramite il collegamento Impostazioni cookie disponibile nel footer del sito.",
      ],
    },

    rights: {
      title: "I vostri diritti sulla privacy",
      paragraphs: [
        "A seconda della legge applicabile, potete avere diritti relativi ai vostri dati personali, inclusi diritti di accesso, rettifica, cancellazione, limitazione, portabilità, opposizione a determinati trattamenti e revoca del consenso.",
        "Qualora il trattamento sia basato sul consenso, la revoca del consenso non pregiudica la liceità del trattamento effettuato prima della revoca.",
        "Potreste inoltre avere il diritto di contattare o presentare un reclamo all’autorità competente per la protezione dei dati.",
      ],
    },

    security: {
      title: "Sicurezza dei dati",
      paragraphs: [
        "Si intende adottare misure tecniche e organizzative ragionevoli per proteggere i dati personali da accesso non autorizzato, perdita, uso improprio, modifica o divulgazione.",
        "Nessun metodo di trasmissione via Internet o archiviazione elettronica può essere garantito come completamente sicuro. Gli utenti devono quindi prestare adeguata attenzione nell’invio elettronico di informazioni sensibili.",
      ],
    },

    changes: {
      title: "Modifiche a questa informativa",
      paragraphs: [
        "Questa Informativa sulla privacy può essere aggiornata periodicamente per riflettere modifiche al sito, ai servizi, alle tecnologie o ai requisiti applicabili.",
        "In caso di modifiche sostanziali, la versione aggiornata e la data di revisione saranno pubblicate su questa pagina.",
      ],
    },

    contact: {
      title: "Richieste relative alla privacy",
      paragraphs: [
        "Le domande relative a questa Informativa sulla privacy o le richieste riguardanti i dati personali possono essere indirizzate a:",
      ],
    },

    registrationLabel: "Numero di registrazione / società",
    taxLabel: "Numero fiscale",
    privacyContactLabel: "Contatto privacy",

    cookieButton: "Apri impostazioni cookie",

    privacyContact: "Contatto privacy",
    bottomPolicy: "Informativa sulla privacy",
    returnToWebsite: "Torna al sito",
  },

  es: {
    legalPrivacy: "Legal · Privacidad",
    title: "Política de privacidad",
    heroLead: "Su privacidad es importante para nosotros.",
    heroDescription:
      "Esta Política de privacidad explica cómo pueden recopilarse, utilizarse y protegerse los datos personales cuando utiliza el sitio web de LIDYA JEWELRY y nuestros servicios.",
    lastUpdated: "Última actualización",
    lastUpdatedValue: "Agosto de 2026",

    introduction: "Introducción",
    introLead:
      "Nuestro objetivo es tratar los datos personales con cuidado, transparencia y respeto.",
    introText:
      "Esta política se aplica a la información tratada a través de este sitio web, incluidas consultas, solicitudes de cita, comunicaciones de servicio, preferencias de cookies e interacciones con servicios de comunicación vinculados como correo electrónico y WhatsApp.",

    contents: "Contenido",

    controller: {
      title: "Responsable del tratamiento",
      paragraphs: [
        "El operador responsable del tratamiento de datos personales a través de este sitio web es:",
      ],
    },

    data: {
      title: "Información que podemos recopilar",
      paragraphs: [
        "Dependiendo de cómo utilice el sitio web o se ponga en contacto con nosotros, podemos recibir información como su nombre, número de teléfono, dirección de correo electrónico, contenido de su consulta, detalles del servicio o cita solicitados y cualquier otra información que decida proporcionar.",
        "Como parte del funcionamiento normal del sitio también pueden tratarse datos técnicos, incluidos la dirección IP, el tipo de navegador, información del dispositivo, páginas visitadas, marcas de tiempo, registros de seguridad y otros datos técnicos similares generados por la infraestructura de alojamiento.",
        "Las preferencias de cookies seleccionadas a través del sitio se almacenan localmente en su navegador para que el sitio pueda recordar sus elecciones.",
      ],
    },

    use: {
      title: "Cómo utilizamos los datos personales",
      paragraphs: [
        "Los datos personales pueden utilizarse para responder consultas, organizar citas, comunicarse sobre servicios de joyería o relojería, procesar solicitudes de servicio, proporcionar atención al cliente y mantener la seguridad y el funcionamiento del sitio.",
        "Cuando se introduzcan tecnologías opcionales de análisis o marketing, solo se utilizarán de acuerdo con las opciones de cookies seleccionadas a través del sitio.",
      ],
    },

    legalBasis: {
      title: "Base jurídica del tratamiento",
      paragraphs: [
        "La base jurídica del tratamiento depende del contexto en el que se proporcionen los datos. El tratamiento puede ser necesario para responder a una solicitud, adoptar medidas relacionadas con un servicio o cita, cumplir obligaciones legales, proteger intereses legítimos empresariales y de seguridad o actuar sobre la base de su consentimiento cuando este sea necesario.",
        "Las tecnologías opcionales de análisis y marketing están destinadas a funcionar únicamente después de haberse otorgado el consentimiento correspondiente.",
      ],
    },

    sharing: {
      title: "Cuándo pueden compartirse los datos",
      paragraphs: [
        "No vendemos datos personales.",
        "Los datos pueden compartirse con proveedores de servicios cuando sea razonablemente necesario para alojamiento web, funcionamiento técnico, comunicaciones, seguridad, asesoramiento profesional u otro servicio solicitado por usted.",
        "Los datos también pueden divulgarse cuando lo exijan la ley, una regulación, una orden judicial u otra obligación legal válida.",
      ],
    },

    international: {
      title: "Servicios externos e internacionales",
      paragraphs: [
        "El sitio contiene enlaces a servicios de terceros, incluidos WhatsApp, Instagram y Facebook. Cuando decide seguir uno de esos enlaces, su interacción se rige por las prácticas de privacidad y los términos del proveedor correspondiente.",
        "Algunos proveedores pueden tratar información en países distintos de aquel en el que usted se encuentra. Cuando corresponda, deberán utilizarse garantías adecuadas de conformidad con los requisitos aplicables de protección de datos.",
      ],
    },

    retention: {
      title: "Durante cuánto tiempo conservamos los datos",
      paragraphs: [
        "Los datos personales están destinados a conservarse únicamente durante el tiempo razonablemente necesario para la finalidad para la que fueron recopilados, mantener registros empresariales pertinentes, resolver consultas o disputas, cumplir obligaciones legales y proteger intereses legítimos.",
        "Los períodos exactos de conservación pueden variar según el tipo de información y la naturaleza de la relación con el cliente.",
      ],
    },

    cookies: {
      title: "Cookies y consentimiento",
      paragraphs: [
        "El sitio utiliza tecnologías del navegador necesarias para la funcionalidad básica. Las categorías opcionales de análisis y marketing se controlan mediante la interfaz de consentimiento de cookies del sitio.",
        "Sus preferencias actuales de cookies pueden modificarse en cualquier momento mediante el enlace Configuración de cookies disponible en el pie de página del sitio.",
      ],
    },

    rights: {
      title: "Sus derechos de privacidad",
      paragraphs: [
        "Dependiendo de la legislación aplicable, puede tener derechos relativos a sus datos personales, incluidos derechos de acceso, rectificación, supresión, limitación, portabilidad, oposición a determinados tratamientos y retirada del consentimiento.",
        "Cuando el tratamiento se base en el consentimiento, retirarlo no afecta a la licitud del tratamiento efectuado antes de dicha retirada.",
        "También puede tener derecho a contactar o presentar una reclamación ante la autoridad de protección de datos correspondiente.",
      ],
    },

    security: {
      title: "Seguridad de los datos",
      paragraphs: [
        "Se pretende utilizar medidas técnicas y organizativas razonables para proteger los datos personales contra accesos no autorizados, pérdidas, usos indebidos, modificaciones o divulgaciones.",
        "Ningún método de transmisión por Internet o almacenamiento electrónico puede garantizarse como completamente seguro. Los usuarios deben por ello tener la debida precaución al enviar información sensible por vía electrónica.",
      ],
    },

    changes: {
      title: "Cambios en esta política",
      paragraphs: [
        "Esta Política de privacidad puede actualizarse periódicamente para reflejar cambios en el sitio web, los servicios, las tecnologías o los requisitos aplicables.",
        "Cuando se realicen cambios importantes, la versión actualizada y la fecha de revisión se publicarán en esta página.",
      ],
    },

    contact: {
      title: "Consultas sobre privacidad",
      paragraphs: [
        "Las preguntas sobre esta Política de privacidad o las solicitudes relativas a datos personales pueden dirigirse a:",
      ],
    },

    registrationLabel: "Número de registro / empresa",
    taxLabel: "Número fiscal",
    privacyContactLabel: "Contacto de privacidad",

    cookieButton: "Abrir configuración de cookies",

    privacyContact: "Contacto de privacidad",
    bottomPolicy: "Política de privacidad",
    returnToWebsite: "Volver al sitio web",
  },
};

export default function PrivacyContent() {
  const { locale } = useLanguage();

  const copy = PRIVACY_COPY[locale] ?? PRIVACY_COPY.en;

  const openCookieSettings = () => {
    window.dispatchEvent(
      new Event("open-cookie-settings")
    );
  };

  const sections = [
    {
      id: "controller",
      number: "01",
      copy: copy.controller,
    },
    {
      id: "data",
      number: "02",
      copy: copy.data,
    },
    {
      id: "use",
      number: "03",
      copy: copy.use,
    },
    {
      id: "legal-basis",
      number: "04",
      copy: copy.legalBasis,
    },
    {
      id: "sharing",
      number: "05",
      copy: copy.sharing,
    },
    {
      id: "international",
      number: "06",
      copy: copy.international,
    },
    {
      id: "retention",
      number: "07",
      copy: copy.retention,
    },
    {
      id: "cookies",
      number: "08",
      copy: copy.cookies,
    },
    {
      id: "rights",
      number: "09",
      copy: copy.rights,
    },
    {
      id: "security",
      number: "10",
      copy: copy.security,
    },
    {
      id: "changes",
      number: "11",
      copy: copy.changes,
    },
    {
      id: "contact",
      number: "12",
      copy: copy.contact,
    },
  ];

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
                  {copy.legalPrivacy}
                </span>

                <h1
                  className="mt-6 max-w-[900px] font-display text-5xl leading-[0.92] tracking-[-0.035em] md:text-6xl lg:text-7xl"
                  style={{ color: "#F5EFE6" }}
                >
                  {copy.title}
                </h1>

                <p
                  className="mt-6 max-w-[780px] font-display text-2xl italic leading-tight md:text-3xl"
                  style={{ color: "#E8D8B5" }}
                >
                  {copy.heroLead}
                </p>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-md text-sm leading-7 text-brand-white/55 md:text-base">
                  {copy.heroDescription}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <span className="h-px w-10 bg-gold" />

                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-brand-white/40">
                    {copy.lastUpdated} ·{" "}
                    {copy.lastUpdatedValue}
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
                  {copy.introduction}
                </span>
              </div>

              <div className="lg:col-span-9">
                <p
                  className="max-w-[850px] font-display text-2xl leading-snug md:text-3xl"
                  style={{ color: "#1B0B20" }}
                >
                  {copy.introLead}
                </p>

                <p className="mt-6 max-w-[850px] text-sm leading-7 text-grey md:text-base">
                  {copy.introText}
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
                    {copy.contents}
                  </span>

                  <nav className="mt-6 flex flex-col gap-3 text-sm text-plum-dark/55">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="transition-colors hover:text-gold"
                      >
                        {section.number} ·{" "}
                        {section.copy.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* LEGAL COPY */}
              <div className="space-y-16 lg:col-span-9">
                {/* 01 CONTROLLER */}
                <LegalSection
                  id="controller"
                  number="01"
                  title={copy.controller.title}
                >
                  <p>
                    {copy.controller.paragraphs[0]}
                  </p>

                  <div className="mt-6 border-l border-gold/50 pl-6">
                    <p className="font-semibold text-plum-dark">
                      {LEGAL_COMPANY_NAME}
                    </p>

                    <p className="mt-2">
                      {REGISTERED_ADDRESS}
                    </p>

                    <p className="mt-2">
                      {copy.registrationLabel}:{" "}
                      {COMPANY_REGISTRATION_NUMBER}
                    </p>

                    <p className="mt-2">
                      {copy.taxLabel}: {TAX_NUMBER}
                    </p>

                    <p className="mt-2">
                      {copy.privacyContactLabel}:{" "}
                      <span className="text-plum-dark">
                        {PRIVACY_EMAIL}
                      </span>
                    </p>
                  </div>
                </LegalSection>

                {/* 02 - 07 */}
                {sections
                  .slice(1, 7)
                  .map((section) => (
                    <LegalSection
                      key={section.id}
                      id={section.id}
                      number={section.number}
                      title={section.copy.title}
                    >
                      {section.copy.paragraphs.map(
                        (paragraph, index) => (
                          <p
                            key={`${section.id}-${index}`}
                            className={
                              index > 0 ? "mt-4" : ""
                            }
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </LegalSection>
                  ))}

                {/* 08 COOKIES */}
                <LegalSection
                  id="cookies"
                  number="08"
                  title={copy.cookies.title}
                >
                  {copy.cookies.paragraphs.map(
                    (paragraph, index) => (
                      <p
                        key={`cookies-${index}`}
                        className={
                          index > 0 ? "mt-4" : ""
                        }
                      >
                        {paragraph}
                      </p>
                    )
                  )}

                  <button
                    type="button"
                    onClick={openCookieSettings}
                    className="mt-6 border border-plum-dark/20 px-5 py-3 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/70 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-plum-dark"
                  >
                    {copy.cookieButton}
                  </button>
                </LegalSection>

                {/* 09 - 11 */}
                {sections
                  .slice(8, 11)
                  .map((section) => (
                    <LegalSection
                      key={section.id}
                      id={section.id}
                      number={section.number}
                      title={section.copy.title}
                    >
                      {section.copy.paragraphs.map(
                        (paragraph, index) => (
                          <p
                            key={`${section.id}-${index}`}
                            className={
                              index > 0 ? "mt-4" : ""
                            }
                          >
                            {paragraph}
                          </p>
                        )
                      )}
                    </LegalSection>
                  ))}

                {/* 12 CONTACT */}
                <LegalSection
                  id="contact"
                  number="12"
                  title={copy.contact.title}
                >
                  <p>{copy.contact.paragraphs[0]}</p>

                  <div className="mt-6 border border-plum-dark/10 bg-ivory p-6 md:p-8">
                    <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-gold">
                      {copy.privacyContact}
                    </span>

                    <p className="mt-4 font-display text-2xl text-plum-dark">
                      {LEGAL_COMPANY_NAME}
                    </p>

                    <p className="mt-3 text-sm text-grey">
                      {PRIVACY_EMAIL}
                    </p>

                    <p className="mt-1 text-sm text-grey">
                      {REGISTERED_ADDRESS}
                    </p>
                  </div>
                </LegalSection>
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
                  LIDYA JEWELRY
                </span>

                <p className="mt-2 text-sm text-grey">
                  {copy.bottomPolicy} ·{" "}
                  {copy.lastUpdated}{" "}
                  {copy.lastUpdatedValue}
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/60 transition-colors hover:text-gold"
              >
                {copy.returnToWebsite}
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
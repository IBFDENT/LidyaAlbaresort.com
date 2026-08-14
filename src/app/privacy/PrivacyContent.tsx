"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

/* =========================================================
   LEGAL COMPANY DETAILS
   ========================================================= */

const LEGAL_COMPANY_NAME =
  "LİDYA GOLD BAZAAR KUYUMCULUK TİCARET VE PAZARLAMA LİMİTED ŞİRKETİ";

const REGISTERED_ADDRESS =
  "Aşağı Hisar Mh. Antalya Cd. No:50/2, Manavgat, Antalya, Türkiye";

const COMPANY_REGISTRATION_NUMBER = "1850";

const TAX_NUMBER = "6080068522";

const TAX_NUMBER_LABELS: Record<Locale, string> = {
  de: "Steuernummer",
  en: "Tax number",
  tr: "Vergi numarası",
  sk: "Daňové číslo",
  cs: "Daňové číslo",
  hu: "Adószám",
  pl: "Numer podatkowy",
  ru: "Налоговый номер",
  nl: "Belastingnummer",
  da: "Skattenummer",
  fi: "Veronumero",
  sv: "Skattenummer",
  fr: "Numéro fiscal",
  it: "Numero fiscale",
  es: "Número fiscal",
};

/**
 * Privacy email is intentionally empty until the official
 * privacy / KVKK contact email is confirmed.
 *
 * Example later:
 * const PRIVACY_EMAIL = "privacy@yourdomain.com";
 */
const PRIVACY_EMAIL = "";

/* =========================================================
   TYPES
   ========================================================= */

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
  privacyContactLabel: string;

  cookieButton: string;

  privacyContact: string;
  bottomPolicy: string;
  returnToWebsite: string;
};

/* =========================================================
   TRANSLATIONS
   ========================================================= */

const PRIVACY_COPY: Record<Locale, PrivacyCopy> = {
  de: {
    legalPrivacy: "Rechtliches · Datenschutz",
    title: "Datenschutzerklärung",
    heroLead: "Ihre Privatsphäre ist uns wichtig.",
    heroDescription:
      "Diese Datenschutzerklärung erläutert, wie personenbezogene Daten erhoben, verwendet, weitergegeben und geschützt werden, wenn Sie die Website von LIDYA JEWELRY und unsere Services nutzen.",
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
        "Im Rahmen des normalen Websitebetriebs können außerdem technische Informationen verarbeitet werden, darunter IP-Adresse, Browsertyp, Geräteinformationen, aufgerufene Seiten, Zeitstempel, Sicherheitsprotokolle und ähnliche technische Daten, die durch Hosting- oder Sicherheitsinfrastruktur erzeugt werden.",
        "Über die Website gewählte Cookie-Einstellungen können lokal in Ihrem Browser gespeichert werden, damit sich die Website Ihre Auswahl merken kann.",
      ],
    },

    use: {
      title: "Wie wir personenbezogene Daten verwenden",
      paragraphs: [
        "Personenbezogene Daten können verwendet werden, um Anfragen zu beantworten, Termine zu vereinbaren, über Schmuck- oder Uhrenservices zu kommunizieren, Serviceanfragen zu bearbeiten, Kundensupport zu leisten und die Sicherheit sowie den ordnungsgemäßen Betrieb der Website zu gewährleisten.",
        "Soweit Analyse- oder Marketingtechnologien eine Einwilligung erfordern, sollen sie erst nach Erteilung der entsprechenden Einwilligung aktiviert werden.",
      ],
    },

    legalBasis: {
      title: "Rechtsgrundlage der Verarbeitung",
      paragraphs: [
        "Als in Türkiye tätiges Unternehmen verarbeitet LIDYA personenbezogene Daten insbesondere gemäß dem türkischen Gesetz Nr. 6698 über den Schutz personenbezogener Daten (KVKK) und sonstigen anwendbaren Rechtsvorschriften.",
        "Je nach Verarbeitung kann die Rechtsgrundlage insbesondere die Durchführung oder Vorbereitung eines Vertrags, die Erfüllung einer gesetzlichen Verpflichtung, die Begründung, Ausübung oder Verteidigung eines Rechts, berechtigte Interessen des Verantwortlichen unter Wahrung der Grundrechte der betroffenen Person oder eine ausdrückliche Einwilligung sein, sofern diese erforderlich ist.",
      ],
    },

    sharing: {
      title: "Wann Informationen weitergegeben werden können",
      paragraphs: [
        "Wir verkaufen keine personenbezogenen Daten.",
        "Informationen können an Dienstleister weitergegeben werden, soweit dies für Hosting, technischen Betrieb, Kommunikation, Sicherheit, professionelle Beratung oder einen von Ihnen angeforderten Service erforderlich ist.",
        "Informationen können außerdem offengelegt werden, wenn dies aufgrund gesetzlicher Vorschriften, einer behördlichen oder gerichtlichen Anordnung oder einer anderen verbindlichen rechtlichen Verpflichtung erforderlich ist.",
      ],
    },

    international: {
      title: "Externe und internationale Dienste",
      paragraphs: [
        "Die Website kann Links zu Diensten Dritter wie WhatsApp, Instagram oder Facebook enthalten. Wenn Sie einen solchen Dienst aufrufen, gelten zusätzlich die Datenschutzpraktiken und Bedingungen des jeweiligen Drittanbieters.",
        "Einige Dienstleister können personenbezogene Daten außerhalb von Türkiye oder außerhalb des Landes verarbeiten, in dem Sie sich befinden. Internationale Übermittlungen sollen nur im Einklang mit den jeweils anwendbaren Datenschutzanforderungen erfolgen.",
      ],
    },

    retention: {
      title: "Speicherdauer",
      paragraphs: [
        "Personenbezogene Daten werden grundsätzlich nur so lange aufbewahrt, wie dies für den Zweck ihrer Verarbeitung, die Durchführung der Geschäftsbeziehung, gesetzliche Aufbewahrungspflichten, die Bearbeitung von Anfragen oder Streitigkeiten sowie die Begründung, Ausübung oder Verteidigung von Rechten erforderlich ist.",
        "Die konkrete Speicherdauer kann je nach Kategorie der Daten, Zweck der Verarbeitung und gesetzlichen Verpflichtungen unterschiedlich sein.",
      ],
    },

    cookies: {
      title: "Cookies und Einwilligung",
      paragraphs: [
        "Die Website kann notwendige Browsertechnologien verwenden, die für grundlegende Funktionen erforderlich sind. Optionale Analyse- oder Marketingtechnologien werden über die Cookie-Einstellungen der Website gesteuert, soweit eine Einwilligung erforderlich ist.",
        "Ihre Cookie-Auswahl kann über die Cookie-Einstellungen der Website geändert werden.",
      ],
    },

    rights: {
      title: "Ihre Datenschutzrechte",
      paragraphs: [
        "Nach Artikel 11 des türkischen Gesetzes Nr. 6698 (KVKK) können betroffene Personen unter anderem Auskunft darüber verlangen, ob ihre personenbezogenen Daten verarbeitet werden, Informationen über die Verarbeitung und deren Zwecke erhalten sowie erfahren, an welche Dritten Daten im In- oder Ausland übermittelt wurden.",
        "Unter den gesetzlichen Voraussetzungen können Sie außerdem die Berichtigung unvollständiger oder unrichtiger Daten sowie die Löschung oder Vernichtung personenbezogener Daten verlangen und verlangen, dass bestimmte Maßnahmen gegenüber Empfängern Ihrer Daten mitgeteilt werden.",
        "Sie können einer ausschließlich automatisierten Analyse widersprechen, wenn daraus ein für Sie nachteiliges Ergebnis entsteht, und bei rechtswidriger Verarbeitung gegebenenfalls Schadensersatz verlangen. Weitere Rechte können sich aus anderen anwendbaren Datenschutzgesetzen ergeben.",
      ],
    },

    security: {
      title: "Datensicherheit",
      paragraphs: [
        "Wir beabsichtigen, angemessene technische und organisatorische Maßnahmen zum Schutz personenbezogener Daten vor unbefugtem Zugriff, Verlust, Missbrauch, Veränderung oder Offenlegung einzusetzen.",
        "Keine Übertragung über das Internet und keine elektronische Speicherung kann vollständig sicher garantiert werden.",
      ],
    },

    changes: {
      title: "Änderungen dieser Erklärung",
      paragraphs: [
        "Diese Datenschutzerklärung kann aktualisiert werden, wenn sich unsere Website, Services, eingesetzten Technologien, Verarbeitungsvorgänge oder rechtliche Anforderungen ändern.",
        "Die jeweils aktuelle Fassung sowie das Datum der letzten Aktualisierung werden auf dieser Seite veröffentlicht.",
      ],
    },

    contact: {
      title: "Datenschutz- und KVKK-Anfragen",
      paragraphs: [
        "Fragen zu dieser Datenschutzerklärung sowie Anträge bezüglich personenbezogener Daten können an den unten angegebenen Verantwortlichen gerichtet werden. Anträge werden entsprechend dem anwendbaren Verfahren und den gesetzlichen Fristen bearbeitet.",
      ],
    },

    registrationLabel:
      "Registrierungs- / Unternehmensnummer",
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
      "This Privacy Policy explains how personal information may be collected, used, shared and protected when you interact with the LIDYA JEWELRY website and our services.",
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
        "The operator responsible for processing personal information through this website is:",
      ],
    },

    data: {
      title: "Information we may collect",
      paragraphs: [
        "Depending on how you use the website or contact us, we may receive information such as your name, telephone number, email address, the content of your enquiry, requested service or appointment details and other information that you choose to provide.",
        "Technical information may also be processed as part of normal website operation, including IP address, browser type, device information, requested pages, timestamps, security logs and similar technical information generated by hosting or security infrastructure.",
        "Cookie preferences selected through the website may be stored locally in your browser so that the website can remember your choices.",
      ],
    },

    use: {
      title: "How we use personal information",
      paragraphs: [
        "Personal information may be used to respond to enquiries, arrange appointments, communicate about jewellery or watch services, process service requests, provide customer support and maintain the security and proper operation of the website.",
        "Where analytics or marketing technologies require consent, they are intended to be activated only after the relevant consent has been provided.",
      ],
    },

    legalBasis: {
      title: "Legal basis for processing",
      paragraphs: [
        "As a business operating in Türkiye, LIDYA processes personal data in accordance with Turkish Personal Data Protection Law No. 6698 (KVKK) and other applicable legislation.",
        "Depending on the circumstances, processing may be based on steps necessary to establish or perform a contract, compliance with a legal obligation, establishment, exercise or protection of a right, the legitimate interests of the data controller provided that the fundamental rights and freedoms of the data subject are not harmed, or explicit consent where consent is required.",
      ],
    },

    sharing: {
      title: "When information may be shared",
      paragraphs: [
        "We do not sell personal information.",
        "Information may be shared with service providers where reasonably necessary for website hosting, technical operation, communications, security, professional advice or another service requested by you.",
        "Information may also be disclosed where required by applicable law, regulation, an authorised public body, court order or another binding legal obligation.",
      ],
    },

    international: {
      title: "External and international services",
      paragraphs: [
        "The website may contain links to third-party services such as WhatsApp, Instagram and Facebook. When you choose to use one of those services, your interaction may also be governed by the privacy practices and terms of the relevant third-party provider.",
        "Certain service providers may process personal data outside Türkiye or outside the country in which you are located. International transfers are intended to be made only in accordance with applicable data protection requirements.",
      ],
    },

    retention: {
      title: "How long information is kept",
      paragraphs: [
        "Personal information is generally retained only for as long as necessary for the purpose of processing, the customer or business relationship, applicable legal retention obligations, resolution of enquiries or disputes and the establishment, exercise or defence of legal rights.",
        "Exact retention periods may vary according to the category of personal data, the purpose of processing and applicable legal requirements.",
      ],
    },

    cookies: {
      title: "Cookies and consent",
      paragraphs: [
        "The website may use necessary browser technologies required for core functionality. Optional analytics or marketing technologies are controlled through the website's cookie settings where consent is required.",
        "You can change your cookie choices through the website's Cookie Settings interface.",
      ],
    },

    rights: {
      title: "Your privacy rights",
      paragraphs: [
        "Under Article 11 of Turkish Personal Data Protection Law No. 6698 (KVKK), data subjects may request information about whether their personal data is processed, obtain information concerning that processing and its purposes, and learn the third parties to whom personal data has been transferred domestically or abroad.",
        "Where the legal conditions are met, you may also request correction of incomplete or inaccurate personal data, erasure or destruction of personal data and notification of certain correction or deletion operations to recipients of the data.",
        "You may object to a result arising against you through analysis exclusively by automated systems and may claim compensation where you suffer damage as a result of unlawful processing. Additional rights may apply under other applicable data protection laws.",
      ],
    },

    security: {
      title: "Data security",
      paragraphs: [
        "We intend to use appropriate technical and organisational measures to protect personal information against unauthorised access, loss, misuse, alteration or disclosure.",
        "No method of transmission over the internet or electronic storage can be guaranteed to be completely secure.",
      ],
    },

    changes: {
      title: "Changes to this policy",
      paragraphs: [
        "This Privacy Policy may be updated from time to time to reflect changes to our website, services, technologies, processing activities or applicable legal requirements.",
        "The current version and date of the latest update will be published on this page.",
      ],
    },

    contact: {
      title: "Privacy and KVKK requests",
      paragraphs: [
        "Questions about this Privacy Policy and requests concerning personal data may be submitted to the data controller using the details below. Requests will be handled in accordance with the applicable procedure and statutory response periods.",
      ],
    },

    registrationLabel: "Registration / company number",
    privacyContactLabel: "Privacy contact",

    cookieButton: "Open cookie settings",

    privacyContact: "Privacy contact",
    bottomPolicy: "Privacy Policy",
    returnToWebsite: "Return to website",
  },

  tr: {
    legalPrivacy: "Yasal · Gizlilik",
    title: "Gizlilik ve Kişisel Verilerin Korunması",
    heroLead: "Gizliliğiniz bizim için önemlidir.",
    heroDescription:
      "Bu politika, LIDYA JEWELRY web sitesi ve hizmetlerimizle etkileşim kurduğunuzda kişisel verilerin nasıl işlenebileceğini ve korunabileceğini açıklar.",
    lastUpdated: "Son güncelleme",
    lastUpdatedValue: "Ağustos 2026",

    introduction: "Giriş",
    introLead:
      "Kişisel verileri dikkatli, şeffaf ve saygılı bir şekilde işlemeyi amaçlıyoruz.",
    introText:
      "Bu politika; web sitesi üzerinden gerçekleştirilen talepler, randevu istekleri, servis iletişimleri, çerez tercihleri ve e-posta veya WhatsApp gibi bağlantılı iletişim hizmetleri aracılığıyla gerçekleştirilen işlemler için geçerlidir.",

    contents: "İçindekiler",

    controller: {
      title: "Veri sorumlusu",
      paragraphs: [
        "Bu web sitesi üzerinden kişisel verilerin işlenmesinden sorumlu veri sorumlusu:",
      ],
    },

    data: {
      title: "İşleyebileceğimiz kişisel veriler",
      paragraphs: [
        "Web sitesini kullanımınıza veya bizimle iletişime geçme şeklinize bağlı olarak adınız, telefon numaranız, e-posta adresiniz, talebinizin içeriği, hizmet veya randevu bilgileri ve gönüllü olarak sağladığınız diğer bilgiler işlenebilir.",
        "Web sitesinin normal çalışması kapsamında IP adresi, tarayıcı türü, cihaz bilgileri, ziyaret edilen sayfalar, zaman kayıtları, güvenlik kayıtları ve hosting veya güvenlik altyapısının oluşturduğu benzer teknik bilgiler de işlenebilir.",
        "Web sitesinde seçilen çerez tercihleri, seçimlerinizin hatırlanabilmesi amacıyla tarayıcınızda yerel olarak saklanabilir.",
      ],
    },

    use: {
      title: "Kişisel verileri hangi amaçlarla kullanıyoruz",
      paragraphs: [
        "Kişisel veriler taleplere yanıt vermek, randevu düzenlemek, mücevher veya saat hizmetleri hakkında iletişim kurmak, servis taleplerini yönetmek, müşteri desteği sunmak ve web sitesinin güvenliğini ve düzgün çalışmasını sağlamak amacıyla işlenebilir.",
        "Açık rıza gerektiren analiz veya pazarlama teknolojileri, ilgili rıza verilmeden etkinleştirilmemelidir.",
      ],
    },

    legalBasis: {
      title: "Kişisel veri işlemenin hukuki sebepleri",
      paragraphs: [
        "LIDYA, kişisel verileri başta 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) olmak üzere uygulanabilir mevzuata uygun olarak işler.",
        "İşlemenin niteliğine göre hukuki sebep; bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, veri sorumlusunun hukuki yükümlülüğünü yerine getirmesi, bir hakkın tesisi, kullanılması veya korunması, ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaati veya gerekli olduğu durumlarda açık rıza olabilir.",
      ],
    },

    sharing: {
      title: "Kişisel verilerin aktarılması",
      paragraphs: [
        "Kişisel verileri satmıyoruz.",
        "Kişisel veriler; hosting, teknik altyapı, iletişim, güvenlik, profesyonel danışmanlık veya talep ettiğiniz hizmetlerin sağlanması için gerekli olduğu ölçüde hizmet sağlayıcılarla paylaşılabilir.",
        "Veriler ayrıca yürürlükteki mevzuat, yetkili kamu kurumlarının talepleri, mahkeme kararları veya diğer bağlayıcı hukuki yükümlülükler doğrultusunda aktarılabilir.",
      ],
    },

    international: {
      title: "Harici hizmetler ve yurt dışı aktarımlar",
      paragraphs: [
        "Web sitesi WhatsApp, Instagram ve Facebook gibi üçüncü taraf hizmetlere bağlantılar içerebilir. Bu hizmetleri kullandığınızda ilgili sağlayıcının gizlilik politikaları ve koşulları da geçerli olabilir.",
        "Bazı hizmet sağlayıcılar kişisel verileri Türkiye dışında işleyebilir. Yurt dışına aktarımlar, uygulanabilir KVKK hükümleri ve diğer veri koruma gereklilikleri doğrultusunda gerçekleştirilmelidir.",
      ],
    },

    retention: {
      title: "Saklama süreleri",
      paragraphs: [
        "Kişisel veriler yalnızca işleme amacı, müşteri veya ticari ilişki, yasal saklama yükümlülükleri, uyuşmazlıkların çözümü ve hakların tesisi, kullanılması veya korunması için gerekli olduğu süre boyunca saklanır.",
        "Saklama süreleri kişisel veri kategorisine, işleme amacına ve uygulanabilir yasal yükümlülüklere göre değişebilir.",
      ],
    },

    cookies: {
      title: "Çerezler ve açık rıza",
      paragraphs: [
        "Web sitesi temel işlevler için gerekli tarayıcı teknolojilerini kullanabilir. Açık rıza gerektiren isteğe bağlı analiz veya pazarlama teknolojileri çerez ayarları üzerinden yönetilir.",
        "Çerez tercihlerinizi web sitesinin Çerez Ayarları bölümünden değiştirebilirsiniz.",
      ],
    },

    rights: {
      title: "KVKK kapsamındaki haklarınız",
      paragraphs: [
        "6698 sayılı KVKK'nın 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme ve kişisel verilerin aktarıldığı üçüncü kişileri bilme hakkına sahip olabilirsiniz.",
        "Kanuni şartların oluşması halinde eksik veya yanlış işlenen kişisel verilerin düzeltilmesini, kişisel verilerin silinmesini veya yok edilmesini ve bu işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini talep edebilirsiniz.",
        "İşlenen verilerin münhasıran otomatik sistemler aracılığıyla analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz edebilir ve kişisel verilerin kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep edebilirsiniz.",
      ],
    },

    security: {
      title: "Kişisel veri güvenliği",
      paragraphs: [
        "Kişisel verileri yetkisiz erişime, kayba, kötüye kullanıma, değiştirmeye veya açıklamaya karşı korumak için uygun teknik ve idari tedbirlerin uygulanması amaçlanmaktadır.",
        "İnternet üzerinden yapılan hiçbir aktarım veya elektronik saklama yöntemi mutlak güvenlik garantisi veremez.",
      ],
    },

    changes: {
      title: "Politikadaki değişiklikler",
      paragraphs: [
        "Bu politika web sitesi, hizmetler, teknolojiler, veri işleme faaliyetleri veya uygulanabilir mevzuattaki değişiklikleri yansıtmak üzere güncellenebilir.",
        "Güncel sürüm ve son güncelleme tarihi bu sayfada yayımlanacaktır.",
      ],
    },

    contact: {
      title: "KVKK başvuruları ve gizlilik talepleri",
      paragraphs: [
        "Bu politika hakkındaki sorularınız ve KVKK kapsamındaki kişisel veri başvurularınız aşağıda belirtilen veri sorumlusuna iletilebilir. Başvurular yürürlükteki usul ve yasal süreler doğrultusunda değerlendirilir.",
      ],
    },

    registrationLabel: "Kayıt / şirket numarası",
    privacyContactLabel: "KVKK / gizlilik iletişimi",

    cookieButton: "Çerez ayarlarını aç",

    privacyContact: "KVKK / gizlilik iletişimi",
    bottomPolicy: "Gizlilik ve KVKK Politikası",
    returnToWebsite: "Web sitesine dön",
  },

  sk: {
    legalPrivacy: "Právne · Súkromie",
    title: "Zásady ochrany osobných údajov",
    heroLead: "Na vašom súkromí nám záleží.",
    heroDescription:
      "Tieto zásady vysvetľujú, ako môžu byť osobné údaje spracúvané a chránené pri používaní webovej stránky LIDYA JEWELRY a našich služieb.",
    lastUpdated: "Posledná aktualizácia",
    lastUpdatedValue: "August 2026",

    introduction: "Úvod",
    introLead:
      "Osobné údaje sa snažíme spracúvať starostlivo, transparentne a s rešpektom.",
    introText:
      "Tieto zásady sa vzťahujú na informácie spracúvané prostredníctvom tejto webovej stránky vrátane otázok, žiadostí o termín, servisnej komunikácie, nastavení cookies a komunikácie cez prepojené služby, ako sú e-mail a WhatsApp.",

    contents: "Obsah",

    controller: {
      title: "Prevádzkovateľ osobných údajov",
      paragraphs: [
        "Prevádzkovateľ zodpovedný za spracúvanie osobných údajov prostredníctvom tejto webovej stránky je:",
      ],
    },

    data: {
      title: "Údaje, ktoré môžeme spracúvať",
      paragraphs: [
        "V závislosti od spôsobu používania webovej stránky alebo kontaktovania našej spoločnosti môžeme spracúvať vaše meno, telefónne číslo, e-mailovú adresu, obsah požiadavky, informácie o požadovanej službe alebo termíne a ďalšie údaje, ktoré nám dobrovoľne poskytnete.",
        "Pri bežnej prevádzke webovej stránky môžu byť spracúvané technické údaje, napríklad IP adresa, typ prehliadača, informácie o zariadení, navštívené stránky, časové údaje a bezpečnostné záznamy.",
        "Nastavenia cookies môžu byť uložené lokálne v prehliadači, aby si stránka zapamätala vaše rozhodnutia.",
      ],
    },

    use: {
      title: "Ako osobné údaje používame",
      paragraphs: [
        "Údaje môžeme používať na odpovedanie na otázky, dohodnutie termínov, komunikáciu o šperkoch a hodinkách, spracovanie servisných požiadaviek, zákaznícku podporu a zabezpečenie bezpečnej prevádzky webovej stránky.",
        "Analytické alebo marketingové technológie, pri ktorých je potrebný súhlas, majú byť aktivované až po jeho udelení.",
      ],
    },

    legalBasis: {
      title: "Právny základ spracúvania",
      paragraphs: [
        "LIDYA ako spoločnosť pôsobiaca v Türkiye spracúva osobné údaje najmä podľa tureckého zákona č. 6698 o ochrane osobných údajov (KVKK) a ďalších uplatniteľných právnych predpisov.",
        "Právnym základom môže byť podľa okolností uzatvorenie alebo plnenie zmluvy, splnenie zákonnej povinnosti, vznik, výkon alebo ochrana práva, oprávnený záujem prevádzkovateľa pri zachovaní základných práv dotknutej osoby alebo výslovný súhlas, ak je potrebný.",
      ],
    },

    sharing: {
      title: "Kedy môžu byť údaje zdieľané",
      paragraphs: [
        "Osobné údaje nepredávame.",
        "Údaje môžu byť poskytované poskytovateľom služieb v rozsahu potrebnom pre hosting, technickú prevádzku, komunikáciu, bezpečnosť, odborné služby alebo službu vyžiadanú zákazníkom.",
        "Údaje môžu byť poskytnuté aj v prípade povinnosti vyplývajúcej zo zákona, rozhodnutia príslušného orgánu alebo súdu.",
      ],
    },

    international: {
      title: "Externé služby a medzinárodné prenosy",
      paragraphs: [
        "Web môže obsahovať odkazy na služby tretích strán vrátane WhatsApp, Instagram a Facebook. Pri ich používaní sa môžu uplatňovať aj zásady príslušného poskytovateľa.",
        "Niektorí poskytovatelia môžu spracúvať údaje mimo Türkiye alebo mimo krajiny, v ktorej sa nachádzate. Takéto prenosy majú prebiehať v súlade s uplatniteľnými pravidlami ochrany údajov.",
      ],
    },

    retention: {
      title: "Ako dlho údaje uchovávame",
      paragraphs: [
        "Údaje uchovávame iba počas obdobia potrebného na účel spracúvania, obchodný alebo zákaznícky vzťah, splnenie zákonných povinností, riešenie sporov alebo ochranu práv.",
        "Konkrétna lehota závisí od kategórie údajov, účelu ich spracúvania a zákonných požiadaviek.",
      ],
    },

    cookies: {
      title: "Cookies a súhlas",
      paragraphs: [
        "Web môže používať nevyhnutné technológie potrebné na základné fungovanie. Voliteľné analytické alebo marketingové technológie sa riadia prostredníctvom nastavení cookies, ak sa na ne vyžaduje súhlas.",
        "Svoje nastavenia cookies môžete zmeniť cez rozhranie Nastavenia cookies.",
      ],
    },

    rights: {
      title: "Vaše práva",
      paragraphs: [
        "Podľa článku 11 tureckého zákona č. 6698 (KVKK) môžete požiadať o informáciu, či sú vaše osobné údaje spracúvané, o informácie o ich spracúvaní a účeloch a o informácie o tretích osobách, ktorým boli údaje poskytnuté.",
        "Pri splnení zákonných podmienok môžete žiadať opravu nesprávnych alebo neúplných údajov, ich vymazanie alebo zničenie a oznámenie určitých opráv či vymazania príjemcom údajov.",
        "Môžete namietať proti nepriaznivému výsledku založenému výlučne na automatizovanom spracúvaní a v prípade škody spôsobenej nezákonným spracúvaním požadovať náhradu škody.",
      ],
    },

    security: {
      title: "Bezpečnosť údajov",
      paragraphs: [
        "Na ochranu osobných údajov sa snažíme používať primerané technické a organizačné opatrenia.",
        "Žiadny elektronický prenos alebo spôsob elektronického uchovávania nemožno zaručiť ako úplne bezpečný.",
      ],
    },

    changes: {
      title: "Zmeny týchto zásad",
      paragraphs: [
        "Tieto zásady môžeme aktualizovať v dôsledku zmien webovej stránky, služieb, technológií, spracovateľských činností alebo právnych požiadaviek.",
        "Aktuálna verzia a dátum poslednej aktualizácie budú zverejnené na tejto stránke.",
      ],
    },

    contact: {
      title: "Žiadosti podľa KVKK a otázky o súkromí",
      paragraphs: [
        "Otázky týkajúce sa týchto zásad a žiadosti súvisiace s osobnými údajmi môžete smerovať na prevádzkovateľa uvedeného nižšie. Žiadosti budú spracované podľa príslušného postupu a zákonných lehôt.",
      ],
    },

    registrationLabel: "Registračné / firemné číslo",
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
      "Tyto zásady vysvětlují, jak mohou být osobní údaje zpracovávány a chráněny při používání webu LIDYA JEWELRY a našich služeb.",
    lastUpdated: "Poslední aktualizace",
    lastUpdatedValue: "Srpen 2026",

    introduction: "Úvod",
    introLead:
      "Osobní údaje se snažíme zpracovávat pečlivě, transparentně a s respektem.",
    introText:
      "Tyto zásady se vztahují na informace zpracovávané prostřednictvím této webové stránky, včetně dotazů, žádostí o termín, servisní komunikace, nastavení cookies a komunikace prostřednictvím služeb jako e-mail a WhatsApp.",

    contents: "Obsah",

    controller: {
      title: "Správce osobních údajů",
      paragraphs: [
        "Správce odpovědný za zpracování osobních údajů prostřednictvím této webové stránky je:",
      ],
    },

    data: {
      title: "Údaje, které můžeme zpracovávat",
      paragraphs: [
        "Můžeme zpracovávat vaše jméno, telefonní číslo, e-mailovou adresu, obsah požadavku, údaje o požadované službě nebo termínu a další informace, které nám dobrovolně poskytnete.",
        "V rámci běžného provozu mohou být zpracovávány technické údaje, například IP adresa, typ prohlížeče, údaje o zařízení, navštívené stránky, časové údaje a bezpečnostní záznamy.",
        "Nastavení cookies může být uloženo lokálně v prohlížeči.",
      ],
    },

    use: {
      title: "Jak osobní údaje používáme",
      paragraphs: [
        "Údaje můžeme používat k odpovídání na dotazy, sjednávání termínů, komunikaci o službách, zpracování servisních požadavků, zákaznické podpoře a zabezpečení provozu webu.",
        "Analytické nebo marketingové technologie vyžadující souhlas budou aktivovány až po jeho udělení.",
      ],
    },

    legalBasis: {
      title: "Právní základ zpracování",
      paragraphs: [
        "LIDYA jako společnost působící v Türkiye zpracovává osobní údaje zejména podle tureckého zákona č. 6698 o ochraně osobních údajů (KVKK) a dalších použitelných právních předpisů.",
        "Právním základem může být podle okolností uzavření nebo plnění smlouvy, zákonná povinnost, vznik, výkon nebo ochrana práva, oprávněný zájem správce při respektování základních práv dotčené osoby nebo výslovný souhlas, pokud je vyžadován.",
      ],
    },

    sharing: {
      title: "Kdy mohou být údaje sdíleny",
      paragraphs: [
        "Osobní údaje neprodáváme.",
        "Údaje mohou být poskytovány nezbytným poskytovatelům technických, hostingových, komunikačních, bezpečnostních nebo odborných služeb.",
        "Údaje mohou být poskytnuty také tehdy, pokud to vyžaduje platná právní povinnost.",
      ],
    },

    international: {
      title: "Externí a mezinárodní služby",
      paragraphs: [
        "Web může obsahovat odkazy na služby třetích stran, například WhatsApp, Instagram a Facebook.",
        "Mezinárodní přenosy osobních údajů mají probíhat pouze v souladu s použitelnými pravidly ochrany údajů.",
      ],
    },

    retention: {
      title: "Doba uchovávání",
      paragraphs: [
        "Údaje jsou uchovávány pouze po dobu potřebnou k účelu zpracování, plnění právních povinností, vedení obchodního vztahu, řešení sporů nebo ochraně práv.",
        "Konkrétní doba závisí na typu údajů a právních požadavcích.",
      ],
    },

    cookies: {
      title: "Cookies a souhlas",
      paragraphs: [
        "Web může využívat nezbytné technologie potřebné k základnímu fungování. Volitelné analytické nebo marketingové technologie se řídí prostřednictvím nastavení cookies.",
        "Nastavení cookies můžete kdykoli změnit.",
      ],
    },

    rights: {
      title: "Vaše práva",
      paragraphs: [
        "Podle článku 11 tureckého zákona č. 6698 (KVKK) můžete získat informace o tom, zda a jak jsou vaše osobní údaje zpracovávány, za jakým účelem a komu byly předány.",
        "Při splnění zákonných podmínek můžete požadovat opravu, výmaz nebo zničení osobních údajů a informování příslušných příjemců.",
        "Můžete také namítat proti nepříznivému výsledku založenému výhradně na automatizovaném zpracování a v zákonem stanovených případech požadovat náhradu škody.",
      ],
    },

    security: {
      title: "Bezpečnost údajů",
      paragraphs: [
        "Používáme nebo zamýšlíme používat přiměřená technická a organizační bezpečnostní opatření.",
        "Žádný způsob elektronického přenosu nebo ukládání nelze zaručit jako absolutně bezpečný.",
      ],
    },

    changes: {
      title: "Změny těchto zásad",
      paragraphs: [
        "Tyto zásady mohou být průběžně aktualizovány.",
        "Aktuální verze a datum poslední aktualizace budou zveřejněny na této stránce.",
      ],
    },

    contact: {
      title: "Žádosti podle KVKK a dotazy",
      paragraphs: [
        "Dotazy a žádosti týkající se osobních údajů můžete zaslat správci uvedenému níže. Budou vyřízeny v souladu s platným postupem a zákonnými lhůtami.",
      ],
    },

    registrationLabel: "Registrační / firemní číslo",
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
      "Ez a szabályzat ismerteti, hogyan kezelhetjük és védhetjük személyes adatait a LIDYA JEWELRY weboldal és szolgáltatásaink használata során.",
    lastUpdated: "Utolsó frissítés",
    lastUpdatedValue: "2026. augusztus",

    introduction: "Bevezetés",
    introLead:
      "A személyes adatokat gondosan, átláthatóan és tisztelettel kívánjuk kezelni.",
    introText:
      "A szabályzat kiterjed a megkeresésekre, időpontkérésekre, szolgáltatási kommunikációra, cookie-beállításokra és az e-mailhez vagy WhatsApphoz hasonló kapcsolódó szolgáltatásokra.",

    contents: "Tartalom",

    controller: {
      title: "Adatkezelő",
      paragraphs: [
        "A weboldalon keresztül kezelt személyes adatokért felelős adatkezelő:",
      ],
    },

    data: {
      title: "Kezelhető adatok",
      paragraphs: [
        "Kezelhetjük nevét, telefonszámát, e-mail-címét, megkeresésének tartalmát, szolgáltatási vagy időpontadatait és az Ön által önként megadott további információkat.",
        "Technikai adatok, például IP-cím, böngészőtípus, eszközinformációk és biztonsági naplók szintén kezelhetők.",
        "A cookie-beállítások helyben tárolhatók a böngészőben.",
      ],
    },

    use: {
      title: "Az adatok felhasználása",
      paragraphs: [
        "Az adatokat megkeresések megválaszolására, időpontok szervezésére, szolgáltatási kommunikációra, ügyféltámogatásra és a weboldal biztonságos működtetésére használhatjuk.",
        "Hozzájárulást igénylő elemzési vagy marketingtechnológia csak a szükséges hozzájárulás után aktiválható.",
      ],
    },

    legalBasis: {
      title: "Az adatkezelés jogalapja",
      paragraphs: [
        "A Türkiye területén működő LIDYA a személyes adatokat különösen a 6698. számú török személyesadat-védelmi törvény (KVKK) és más alkalmazandó jogszabályok szerint kezeli.",
        "A jogalap lehet többek között szerződés létrehozása vagy teljesítése, jogi kötelezettség, jog érvényesítése vagy védelme, jogos érdek, illetve szükség esetén kifejezett hozzájárulás.",
      ],
    },

    sharing: {
      title: "Adatok megosztása",
      paragraphs: [
        "Személyes adatokat nem értékesítünk.",
        "Az adatokat szükség esetén technikai, hosting-, kommunikációs, biztonsági vagy szakmai szolgáltatókkal oszthatjuk meg.",
        "Jogi kötelezettség esetén az adatok hatóságoknak vagy más jogosult szerveknek is átadhatók.",
      ],
    },

    international: {
      title: "Nemzetközi szolgáltatások",
      paragraphs: [
        "A weboldal harmadik felek szolgáltatásaira, például WhatsAppra, Instagramra vagy Facebookra mutató linkeket tartalmazhat.",
        "Nemzetközi adattovábbításra csak az alkalmazandó adatvédelmi követelményekkel összhangban kerülhet sor.",
      ],
    },

    retention: {
      title: "Adatmegőrzés",
      paragraphs: [
        "Az adatokat csak a szükséges ideig őrizzük meg.",
        "A pontos időtartam az adat típusától, céljától és a jogi kötelezettségektől függ.",
      ],
    },

    cookies: {
      title: "Cookie-k és hozzájárulás",
      paragraphs: [
        "A weboldal a működéshez szükséges technológiákat használhat. A hozzájárulást igénylő opcionális technológiák a cookie-beállításokon keresztül vezérelhetők.",
        "Cookie-beállításait bármikor módosíthatja.",
      ],
    },

    rights: {
      title: "Az Ön jogai",
      paragraphs: [
        "A KVKK 11. cikke alapján tájékoztatást kérhet arról, hogy személyes adatait kezelik-e, milyen célból és kinek továbbították.",
        "A törvényi feltételek fennállása esetén kérheti a hibás adatok helyesbítését, törlését vagy megsemmisítését.",
        "Tiltakozhat a kizárólag automatizált elemzésen alapuló, Önre hátrányos eredmény ellen, és jogellenes adatkezelés esetén kártérítést követelhet.",
      ],
    },

    security: {
      title: "Adatbiztonság",
      paragraphs: [
        "Megfelelő technikai és szervezési intézkedésekkel törekszünk az adatok védelmére.",
        "Teljes elektronikus biztonság nem garantálható.",
      ],
    },

    changes: {
      title: "Módosítások",
      paragraphs: [
        "A szabályzat időről időre frissíthető.",
        "Az aktuális változat ezen az oldalon érhető el.",
      ],
    },

    contact: {
      title: "KVKK- és adatvédelmi kérelmek",
      paragraphs: [
        "Adatvédelmi kérdéseit és kérelmeit az alább megadott adatkezelőhöz intézheti.",
      ],
    },

    registrationLabel: "Cég- / regisztrációs szám",
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
      "Niniejsza polityka wyjaśnia sposób przetwarzania i ochrony danych osobowych podczas korzystania ze strony LIDYA JEWELRY.",
    lastUpdated: "Ostatnia aktualizacja",
    lastUpdatedValue: "Sierpień 2026",

    introduction: "Wprowadzenie",
    introLead:
      "Dane osobowe traktujemy z należytą starannością, przejrzystością i szacunkiem.",
    introText:
      "Polityka obejmuje zapytania, prośby o spotkanie, komunikację serwisową, ustawienia cookies i korzystanie z powiązanych usług komunikacyjnych.",

    contents: "Spis treści",

    controller: {
      title: "Administrator danych",
      paragraphs: [
        "Administratorem odpowiedzialnym za przetwarzanie danych poprzez tę stronę jest:",
      ],
    },

    data: {
      title: "Dane, które możemy przetwarzać",
      paragraphs: [
        "Możemy przetwarzać imię i nazwisko, telefon, e-mail, treść zapytania, dane dotyczące usługi lub spotkania oraz informacje przekazane dobrowolnie.",
        "Mogą być również przetwarzane dane techniczne, takie jak adres IP, urządzenie, przeglądarka i logi bezpieczeństwa.",
        "Preferencje cookies mogą być zapisane lokalnie w przeglądarce.",
      ],
    },

    use: {
      title: "Jak wykorzystujemy dane",
      paragraphs: [
        "Dane mogą służyć do obsługi zapytań, spotkań, usług, wsparcia klienta oraz bezpieczeństwa strony.",
        "Technologie wymagające zgody będą aktywowane dopiero po jej uzyskaniu.",
      ],
    },

    legalBasis: {
      title: "Podstawa prawna",
      paragraphs: [
        "LIDYA jako podmiot działający w Türkiye przetwarza dane przede wszystkim zgodnie z turecką ustawą nr 6698 o ochronie danych osobowych (KVKK) oraz innymi mającymi zastosowanie przepisami.",
        "Podstawą może być m.in. zawarcie lub wykonanie umowy, obowiązek prawny, ustalenie lub ochrona prawa, uzasadniony interes administratora albo wyraźna zgoda, gdy jest wymagana.",
      ],
    },

    sharing: {
      title: "Udostępnianie danych",
      paragraphs: [
        "Nie sprzedajemy danych osobowych.",
        "Dane mogą być przekazywane niezbędnym dostawcom usług technicznych, hostingowych, komunikacyjnych, bezpieczeństwa i profesjonalnych.",
        "Dane mogą być ujawniane, jeżeli wymaga tego prawo.",
      ],
    },

    international: {
      title: "Usługi międzynarodowe",
      paragraphs: [
        "Strona może zawierać linki do WhatsApp, Instagram, Facebook i innych usług stron trzecich.",
        "Przekazywanie danych za granicę odbywa się zgodnie z mającymi zastosowanie wymogami ochrony danych.",
      ],
    },

    retention: {
      title: "Okres przechowywania",
      paragraphs: [
        "Dane są przechowywane przez okres wymagany do realizacji celu i obowiązków prawnych.",
        "Dokładny okres zależy od rodzaju danych i celu przetwarzania.",
      ],
    },

    cookies: {
      title: "Cookies i zgoda",
      paragraphs: [
        "Strona może stosować technologie niezbędne do działania. Opcjonalne technologie wymagające zgody są kontrolowane poprzez ustawienia cookies.",
        "Ustawienia cookies można zmienić w dowolnym momencie.",
      ],
    },

    rights: {
      title: "Twoje prawa",
      paragraphs: [
        "Na podstawie art. 11 tureckiej ustawy nr 6698 (KVKK) możesz uzyskać informacje o przetwarzaniu swoich danych, jego celu i odbiorcach danych.",
        "W odpowiednich przypadkach możesz żądać poprawienia, usunięcia lub zniszczenia danych.",
        "Możesz sprzeciwić się niekorzystnemu wynikowi opartemu wyłącznie na analizie automatycznej oraz dochodzić odszkodowania w przypadku szkody wynikającej z niezgodnego z prawem przetwarzania.",
      ],
    },

    security: {
      title: "Bezpieczeństwo danych",
      paragraphs: [
        "Stosujemy odpowiednie środki techniczne i organizacyjne.",
        "Nie można zagwarantować całkowitego bezpieczeństwa transmisji elektronicznej.",
      ],
    },

    changes: {
      title: "Zmiany polityki",
      paragraphs: [
        "Polityka może być okresowo aktualizowana.",
        "Aktualna wersja zostanie opublikowana na tej stronie.",
      ],
    },

    contact: {
      title: "Wnioski KVKK i pytania",
      paragraphs: [
        "Wnioski dotyczące danych osobowych można kierować do administratora podanego poniżej.",
      ],
    },

    registrationLabel: "Numer rejestracyjny / firmowy",
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
      "Настоящая политика объясняет порядок обработки и защиты персональных данных при использовании сайта LIDYA JEWELRY.",
    lastUpdated: "Последнее обновление",
    lastUpdatedValue: "Август 2026",

    introduction: "Введение",
    introLead:
      "Мы стремимся обращаться с персональными данными бережно и прозрачно.",
    introText:
      "Политика применяется к запросам, заявкам на встречи, сервисной коммуникации, настройкам cookies и связанным средствам связи.",

    contents: "Содержание",

    controller: {
      title: "Оператор персональных данных",
      paragraphs: [
        "Оператором, ответственным за обработку персональных данных через сайт, является:",
      ],
    },

    data: {
      title: "Какие данные могут обрабатываться",
      paragraphs: [
        "Мы можем обрабатывать имя, телефон, электронную почту, содержание запроса, сведения об услуге или встрече и другую добровольно предоставленную информацию.",
        "Также могут обрабатываться IP-адрес, сведения об устройстве и браузере и технические журналы.",
        "Настройки cookies могут храниться локально в браузере.",
      ],
    },

    use: {
      title: "Как используются данные",
      paragraphs: [
        "Данные могут использоваться для обработки запросов, организации встреч, предоставления услуг и поддержки, а также для безопасности сайта.",
        "Технологии, требующие согласия, активируются только после получения соответствующего согласия.",
      ],
    },

    legalBasis: {
      title: "Правовые основания",
      paragraphs: [
        "LIDYA, осуществляющая деятельность в Türkiye, обрабатывает персональные данные прежде всего в соответствии с турецким Законом № 6698 о защите персональных данных (KVKK) и другими применимыми нормами.",
        "Основанием может быть договор, юридическая обязанность, установление или защита права, законный интерес оператора либо явное согласие, когда оно необходимо.",
      ],
    },

    sharing: {
      title: "Передача данных",
      paragraphs: [
        "Мы не продаём персональные данные.",
        "Данные могут передаваться необходимым техническим, хостинговым, коммуникационным и профессиональным поставщикам услуг.",
        "Передача также возможна в случаях, предусмотренных законом.",
      ],
    },

    international: {
      title: "Международные сервисы",
      paragraphs: [
        "Сайт может содержать ссылки на WhatsApp, Instagram, Facebook и другие сервисы третьих лиц.",
        "Международная передача данных осуществляется в соответствии с применимыми требованиями защиты данных.",
      ],
    },

    retention: {
      title: "Срок хранения",
      paragraphs: [
        "Данные хранятся только в течение необходимого периода.",
        "Срок зависит от категории данных, цели и юридических обязанностей.",
      ],
    },

    cookies: {
      title: "Cookies и согласие",
      paragraphs: [
        "Необходимые технологии могут использоваться для работы сайта. Дополнительные технологии, требующие согласия, управляются через настройки cookies.",
        "Настройки можно изменить в любое время.",
      ],
    },

    rights: {
      title: "Ваши права",
      paragraphs: [
        "В соответствии со статьёй 11 Закона № 6698 (KVKK) вы можете получить информацию о том, обрабатываются ли ваши данные, с какой целью и кому они передавались.",
        "При наличии установленных законом условий можно требовать исправления, удаления или уничтожения данных.",
        "Можно возражать против неблагоприятного результата исключительно автоматизированного анализа и требовать компенсацию ущерба от незаконной обработки.",
      ],
    },

    security: {
      title: "Безопасность",
      paragraphs: [
        "Для защиты данных применяются соответствующие технические и организационные меры.",
        "Полная безопасность электронной передачи не может быть гарантирована.",
      ],
    },

    changes: {
      title: "Изменения политики",
      paragraphs: [
        "Политика может обновляться.",
        "Действующая версия публикуется на этой странице.",
      ],
    },

    contact: {
      title: "Запросы KVKK",
      paragraphs: [
        "Запросы относительно персональных данных можно направлять оператору, указанному ниже.",
      ],
    },

    registrationLabel:
      "Регистрационный / корпоративный номер",
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
      "Dit beleid legt uit hoe persoonsgegevens kunnen worden verwerkt en beschermd bij het gebruik van de website van LIDYA JEWELRY.",
    lastUpdated: "Laatst bijgewerkt",
    lastUpdatedValue: "Augustus 2026",

    introduction: "Inleiding",
    introLead:
      "Wij behandelen persoonsgegevens zorgvuldig en transparant.",
    introText:
      "Dit beleid heeft betrekking op aanvragen, afspraken, servicecommunicatie, cookievoorkeuren en gekoppelde communicatiediensten.",

    contents: "Inhoud",

    controller: {
      title: "Verwerkingsverantwoordelijke",
      paragraphs: [
        "De verantwoordelijke voor verwerking via deze website is:",
      ],
    },

    data: {
      title: "Gegevens die wij kunnen verwerken",
      paragraphs: [
        "Wij kunnen naam, telefoonnummer, e-mailadres, aanvragen en andere vrijwillig verstrekte gegevens verwerken.",
        "Ook technische gegevens zoals IP-adres, browser-, apparaat- en beveiligingsinformatie kunnen worden verwerkt.",
        "Cookievoorkeuren kunnen lokaal worden opgeslagen.",
      ],
    },

    use: {
      title: "Gebruik van persoonsgegevens",
      paragraphs: [
        "Gegevens kunnen worden gebruikt voor aanvragen, afspraken, dienstverlening, klantenondersteuning en websitebeveiliging.",
        "Technologieën waarvoor toestemming vereist is, worden pas na toestemming geactiveerd.",
      ],
    },

    legalBasis: {
      title: "Rechtsgrond",
      paragraphs: [
        "LIDYA verwerkt als onderneming in Türkiye persoonsgegevens met name overeenkomstig de Turkse Wet nr. 6698 inzake bescherming van persoonsgegevens (KVKK) en andere toepasselijke wetgeving.",
        "De grondslag kan onder meer contractuele noodzaak, wettelijke verplichting, bescherming van rechten, gerechtvaardigd belang of uitdrukkelijke toestemming zijn.",
      ],
    },

    sharing: {
      title: "Delen van gegevens",
      paragraphs: [
        "Wij verkopen geen persoonsgegevens.",
        "Gegevens kunnen worden gedeeld met noodzakelijke technische en professionele dienstverleners.",
        "Gegevens kunnen ook worden verstrekt indien de wet dit vereist.",
      ],
    },

    international: {
      title: "Internationale diensten",
      paragraphs: [
        "De website kan links bevatten naar diensten zoals WhatsApp, Instagram en Facebook.",
        "Internationale doorgifte vindt plaats volgens toepasselijke gegevensbeschermingsregels.",
      ],
    },

    retention: {
      title: "Bewaartermijn",
      paragraphs: [
        "Gegevens worden slechts bewaard zolang dit nodig is.",
        "De termijn hangt af van doel, gegevenscategorie en wettelijke vereisten.",
      ],
    },

    cookies: {
      title: "Cookies en toestemming",
      paragraphs: [
        "Noodzakelijke technologieën kunnen worden gebruikt. Optionele technologieën worden via cookie-instellingen beheerd.",
        "Uw voorkeuren kunnen worden gewijzigd.",
      ],
    },

    rights: {
      title: "Uw rechten",
      paragraphs: [
        "Op grond van artikel 11 van de Turkse wet nr. 6698 (KVKK) kunt u informatie vragen over de verwerking, doeleinden en ontvangers van uw persoonsgegevens.",
        "Onder wettelijke voorwaarden kunt u correctie, verwijdering of vernietiging aanvragen.",
        "U kunt bezwaar maken tegen nadelige resultaten van uitsluitend geautomatiseerde analyse en onder voorwaarden schadevergoeding vragen.",
      ],
    },

    security: {
      title: "Beveiliging",
      paragraphs: [
        "Wij gebruiken passende technische en organisatorische maatregelen.",
        "Volledige elektronische veiligheid kan niet worden gegarandeerd.",
      ],
    },

    changes: {
      title: "Wijzigingen",
      paragraphs: [
        "Dit beleid kan worden bijgewerkt.",
        "De actuele versie wordt hier gepubliceerd.",
      ],
    },

    contact: {
      title: "Privacy- en KVKK-verzoeken",
      paragraphs: [
        "Verzoeken over persoonsgegevens kunnen worden gericht aan de onderstaande verantwoordelijke.",
      ],
    },

    registrationLabel: "Registratie- / bedrijfsnummer",
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
      "Denne politik forklarer, hvordan personoplysninger behandles og beskyttes ved brug af LIDYA JEWELRYs hjemmeside.",
    lastUpdated: "Senest opdateret",
    lastUpdatedValue: "August 2026",

    introduction: "Introduktion",
    introLead:
      "Vi behandler personoplysninger med omhu og gennemsigtighed.",
    introText:
      "Politikken gælder forespørgsler, aftaler, servicekommunikation, cookies og tilknyttede kommunikationstjenester.",

    contents: "Indhold",

    controller: {
      title: "Dataansvarlig",
      paragraphs: [
        "Den dataansvarlige for behandling via hjemmesiden er:",
      ],
    },

    data: {
      title: "Oplysninger vi kan behandle",
      paragraphs: [
        "Vi kan behandle navn, telefonnummer, e-mail, indhold af forespørgsler og andre frivilligt oplyste data.",
        "Tekniske oplysninger som IP-adresse, browser, enhed og sikkerhedslogs kan også behandles.",
        "Cookievalg kan gemmes lokalt.",
      ],
    },

    use: {
      title: "Sådan bruger vi data",
      paragraphs: [
        "Data bruges til forespørgsler, aftaler, tjenester, support og sikker drift af hjemmesiden.",
        "Teknologier der kræver samtykke aktiveres først efter samtykke.",
      ],
    },

    legalBasis: {
      title: "Retsgrundlag",
      paragraphs: [
        "LIDYA behandler som virksomhed i Türkiye personoplysninger i overensstemmelse med den tyrkiske lov nr. 6698 om beskyttelse af personoplysninger (KVKK) og anden gældende lovgivning.",
        "Grundlaget kan bl.a. være kontrakt, juridisk forpligtelse, beskyttelse af rettigheder, legitim interesse eller udtrykkeligt samtykke.",
      ],
    },

    sharing: {
      title: "Deling af oplysninger",
      paragraphs: [
        "Vi sælger ikke personoplysninger.",
        "Data kan deles med nødvendige tekniske og professionelle tjenesteudbydere.",
        "Data kan videregives, hvis loven kræver det.",
      ],
    },

    international: {
      title: "Internationale tjenester",
      paragraphs: [
        "Hjemmesiden kan linke til WhatsApp, Instagram, Facebook og andre tredjepartstjenester.",
        "International overførsel skal ske i overensstemmelse med gældende databeskyttelsesregler.",
      ],
    },

    retention: {
      title: "Opbevaring",
      paragraphs: [
        "Oplysninger opbevares kun så længe det er nødvendigt.",
        "Perioden afhænger af datatype, formål og juridiske krav.",
      ],
    },

    cookies: {
      title: "Cookies og samtykke",
      paragraphs: [
        "Nødvendige teknologier kan anvendes. Valgfrie teknologier styres via cookieindstillinger.",
        "Dine valg kan ændres.",
      ],
    },

    rights: {
      title: "Dine rettigheder",
      paragraphs: [
        "Efter artikel 11 i tyrkisk lov nr. 6698 (KVKK) kan du anmode om oplysninger om behandlingen, formålet og modtagere.",
        "Når betingelserne er opfyldt, kan du kræve rettelse, sletning eller destruktion.",
        "Du kan gøre indsigelse mod negative resultater af udelukkende automatiseret analyse og i relevante tilfælde kræve erstatning.",
      ],
    },

    security: {
      title: "Datasikkerhed",
      paragraphs: [
        "Vi anvender passende tekniske og organisatoriske sikkerhedsforanstaltninger.",
        "Fuld elektronisk sikkerhed kan ikke garanteres.",
      ],
    },

    changes: {
      title: "Ændringer",
      paragraphs: [
        "Politikken kan blive opdateret.",
        "Den aktuelle version offentliggøres her.",
      ],
    },

    contact: {
      title: "KVKK- og privatlivsanmodninger",
      paragraphs: [
        "Anmodninger vedrørende personoplysninger kan sendes til den dataansvarlige nedenfor.",
      ],
    },

    registrationLabel: "Registrerings- / virksomhedsnummer",
    privacyContactLabel: "Privatlivskontakt",

    cookieButton: "Åbn cookieindstillinger",

    privacyContact: "Privatlivskontakt",
    bottomPolicy: "Privatlivspolitik",
    returnToWebsite: "Tilbage til hjemmesiden",
  },

  fi: {
    legalPrivacy: "Lakiasiat · Tietosuoja",
    title: "Tietosuojakäytäntö",
    heroLead: "Yksityisyytesi on meille tärkeää.",
    heroDescription:
      "Tässä käytännössä kerrotaan, miten henkilötietoja käsitellään ja suojataan LIDYA JEWELRY -verkkosivustolla.",
    lastUpdated: "Viimeksi päivitetty",
    lastUpdatedValue: "Elokuu 2026",

    introduction: "Johdanto",
    introLead:
      "Käsittelemme henkilötietoja huolellisesti ja avoimesti.",
    introText:
      "Käytäntö koskee tiedusteluja, ajanvarauksia, palveluviestintää, evästeitä ja linkitettyjä viestintäpalveluja.",

    contents: "Sisältö",

    controller: {
      title: "Rekisterinpitäjä",
      paragraphs: [
        "Verkkosivuston kautta tapahtuvan henkilötietojen käsittelyn rekisterinpitäjä on:",
      ],
    },

    data: {
      title: "Käsiteltävät tiedot",
      paragraphs: [
        "Voimme käsitellä nimeä, puhelinnumeroa, sähköpostia, tiedustelun sisältöä ja muita vapaaehtoisesti annettuja tietoja.",
        "Myös IP-osoite, selain-, laite- ja turvallisuustiedot voivat tulla käsitellyiksi.",
        "Evästevalinnat voidaan tallentaa paikallisesti.",
      ],
    },

    use: {
      title: "Tietojen käyttö",
      paragraphs: [
        "Tietoja käytetään tiedusteluihin, ajanvarauksiin, palveluihin, asiakastukeen ja sivuston turvalliseen toimintaan.",
        "Suostumusta vaativat teknologiat aktivoidaan vasta suostumuksen jälkeen.",
      ],
    },

    legalBasis: {
      title: "Käsittelyn oikeusperuste",
      paragraphs: [
        "Türkiye-alueella toimiva LIDYA käsittelee henkilötietoja erityisesti Turkin henkilötietojen suojaa koskevan lain nro 6698 (KVKK) ja muun sovellettavan lainsäädännön mukaisesti.",
        "Peruste voi olla sopimus, lakisääteinen velvoite, oikeuden perustaminen tai suojaaminen, rekisterinpitäjän oikeutettu etu tai tarvittaessa nimenomainen suostumus.",
      ],
    },

    sharing: {
      title: "Tietojen jakaminen",
      paragraphs: [
        "Emme myy henkilötietoja.",
        "Tietoja voidaan jakaa tarpeellisten teknisten ja ammatillisten palveluntarjoajien kanssa.",
        "Tietoja voidaan luovuttaa lain niin edellyttäessä.",
      ],
    },

    international: {
      title: "Kansainväliset palvelut",
      paragraphs: [
        "Sivusto voi sisältää linkkejä WhatsAppiin, Instagramiin ja Facebookiin.",
        "Kansainväliset siirrot tehdään sovellettavien tietosuojavaatimusten mukaisesti.",
      ],
    },

    retention: {
      title: "Säilytysaika",
      paragraphs: [
        "Tietoja säilytetään vain tarpeellisen ajan.",
        "Aika riippuu tietotyypistä, tarkoituksesta ja oikeudellisista velvoitteista.",
      ],
    },

    cookies: {
      title: "Evästeet ja suostumus",
      paragraphs: [
        "Välttämättömiä teknologioita voidaan käyttää. Valinnaiset teknologiat hallitaan evästeasetuksissa.",
        "Valintoja voidaan muuttaa.",
      ],
    },

    rights: {
      title: "Oikeutesi",
      paragraphs: [
        "Turkin lain nro 6698 (KVKK) 11 artiklan mukaisesti voit pyytää tietoa henkilötietojesi käsittelystä, tarkoituksesta ja vastaanottajista.",
        "Lakisääteisten ehtojen täyttyessä voit pyytää tietojen oikaisua, poistamista tai tuhoamista.",
        "Voit vastustaa yksinomaan automatisoidusta analyysista aiheutuvaa haitallista tulosta ja tietyissä tilanteissa vaatia vahingonkorvausta.",
      ],
    },

    security: {
      title: "Tietoturva",
      paragraphs: [
        "Käytämme asianmukaisia teknisiä ja organisatorisia turvatoimia.",
        "Täydellistä sähköistä turvallisuutta ei voida taata.",
      ],
    },

    changes: {
      title: "Muutokset",
      paragraphs: [
        "Käytäntöä voidaan päivittää.",
        "Ajantasainen versio julkaistaan tällä sivulla.",
      ],
    },

    contact: {
      title: "KVKK- ja tietosuojapyynnöt",
      paragraphs: [
        "Henkilötietoja koskevat pyynnöt voidaan osoittaa alla olevalle rekisterinpitäjälle.",
      ],
    },

    registrationLabel: "Rekisteri- / yritysnumero",
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
      "Denna policy beskriver hur personuppgifter behandlas och skyddas när du använder LIDYA JEWELRYs webbplats.",
    lastUpdated: "Senast uppdaterad",
    lastUpdatedValue: "Augusti 2026",

    introduction: "Introduktion",
    introLead:
      "Vi behandlar personuppgifter omsorgsfullt och transparent.",
    introText:
      "Policyn omfattar förfrågningar, bokningar, servicekommunikation, cookies och länkade kommunikationstjänster.",

    contents: "Innehåll",

    controller: {
      title: "Personuppgiftsansvarig",
      paragraphs: [
        "Personuppgiftsansvarig för behandling genom webbplatsen är:",
      ],
    },

    data: {
      title: "Uppgifter vi kan behandla",
      paragraphs: [
        "Vi kan behandla namn, telefonnummer, e-post, förfrågningar och andra frivilligt lämnade uppgifter.",
        "Tekniska data som IP-adress, webbläsare, enhet och säkerhetsloggar kan också behandlas.",
        "Cookieval kan sparas lokalt.",
      ],
    },

    use: {
      title: "Hur uppgifterna används",
      paragraphs: [
        "Uppgifter används för förfrågningar, bokningar, tjänster, kundsupport och säker drift av webbplatsen.",
        "Teknik som kräver samtycke aktiveras först efter samtycke.",
      ],
    },

    legalBasis: {
      title: "Rättslig grund",
      paragraphs: [
        "LIDYA, som bedriver verksamhet i Türkiye, behandlar personuppgifter främst enligt den turkiska lagen nr 6698 om skydd av personuppgifter (KVKK) och annan tillämplig lagstiftning.",
        "Grunden kan bland annat vara avtal, rättslig skyldighet, skydd av rättigheter, berättigat intresse eller uttryckligt samtycke.",
      ],
    },

    sharing: {
      title: "Delning av uppgifter",
      paragraphs: [
        "Vi säljer inte personuppgifter.",
        "Uppgifter kan delas med nödvändiga tekniska och professionella leverantörer.",
        "Uppgifter kan lämnas ut när lagen kräver det.",
      ],
    },

    international: {
      title: "Internationella tjänster",
      paragraphs: [
        "Webbplatsen kan länka till WhatsApp, Instagram och Facebook.",
        "Internationell överföring sker enligt tillämpliga dataskyddsregler.",
      ],
    },

    retention: {
      title: "Lagringstid",
      paragraphs: [
        "Personuppgifter sparas endast så länge de behövs.",
        "Tiden beror på kategori, ändamål och rättsliga krav.",
      ],
    },

    cookies: {
      title: "Cookies och samtycke",
      paragraphs: [
        "Nödvändig teknik kan användas. Valfria tekniker hanteras via cookieinställningarna.",
        "Inställningarna kan ändras.",
      ],
    },

    rights: {
      title: "Dina rättigheter",
      paragraphs: [
        "Enligt artikel 11 i turkisk lag nr 6698 (KVKK) kan du begära information om behandling, ändamål och mottagare.",
        "När lagens villkor är uppfyllda kan du begära rättelse, radering eller förstöring.",
        "Du kan invända mot negativa resultat från uteslutande automatiserad analys och i vissa fall kräva ersättning.",
      ],
    },

    security: {
      title: "Datasäkerhet",
      paragraphs: [
        "Vi använder lämpliga tekniska och organisatoriska säkerhetsåtgärder.",
        "Fullständig elektronisk säkerhet kan inte garanteras.",
      ],
    },

    changes: {
      title: "Ändringar",
      paragraphs: [
        "Policyn kan uppdateras.",
        "Den aktuella versionen publiceras här.",
      ],
    },

    contact: {
      title: "KVKK- och integritetsbegäranden",
      paragraphs: [
        "Begäranden om personuppgifter kan skickas till den personuppgiftsansvarige nedan.",
      ],
    },

    registrationLabel: "Registrerings- / företagsnummer",
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
      "Cette politique explique comment les données personnelles peuvent être traitées et protégées lorsque vous utilisez le site LIDYA JEWELRY.",
    lastUpdated: "Dernière mise à jour",
    lastUpdatedValue: "Août 2026",

    introduction: "Introduction",
    introLead:
      "Nous souhaitons traiter les données avec soin et transparence.",
    introText:
      "Cette politique couvre les demandes, rendez-vous, communications, cookies et services de communication liés.",

    contents: "Sommaire",

    controller: {
      title: "Responsable du traitement",
      paragraphs: [
        "Le responsable du traitement via ce site est :",
      ],
    },

    data: {
      title: "Données pouvant être traitées",
      paragraphs: [
        "Nous pouvons traiter votre nom, téléphone, e-mail, demandes et autres informations fournies volontairement.",
        "Des informations techniques telles que l'adresse IP, le navigateur, l'appareil et les journaux de sécurité peuvent également être traitées.",
        "Les préférences cookies peuvent être enregistrées localement.",
      ],
    },

    use: {
      title: "Utilisation des données",
      paragraphs: [
        "Les données peuvent servir à traiter les demandes, rendez-vous, services, assistance et sécurité du site.",
        "Les technologies nécessitant un consentement ne sont activées qu'après celui-ci.",
      ],
    },

    legalBasis: {
      title: "Base juridique",
      paragraphs: [
        "LIDYA, exerçant ses activités en Türkiye, traite les données personnelles notamment conformément à la loi turque n° 6698 sur la protection des données personnelles (KVKK) et aux autres lois applicables.",
        "La base peut notamment être un contrat, une obligation légale, l'établissement ou la protection d'un droit, l'intérêt légitime du responsable ou le consentement explicite lorsqu'il est requis.",
      ],
    },

    sharing: {
      title: "Partage des données",
      paragraphs: [
        "Nous ne vendons pas les données personnelles.",
        "Les données peuvent être communiquées aux prestataires techniques ou professionnels nécessaires.",
        "Elles peuvent également être divulguées lorsqu'une obligation légale l'exige.",
      ],
    },

    international: {
      title: "Services internationaux",
      paragraphs: [
        "Le site peut inclure des liens vers WhatsApp, Instagram, Facebook ou d'autres tiers.",
        "Les transferts internationaux sont effectués conformément aux règles applicables.",
      ],
    },

    retention: {
      title: "Conservation",
      paragraphs: [
        "Les données sont conservées uniquement pendant la durée nécessaire.",
        "La durée dépend de leur catégorie, de la finalité et des obligations légales.",
      ],
    },

    cookies: {
      title: "Cookies et consentement",
      paragraphs: [
        "Les technologies nécessaires peuvent être utilisées. Les technologies facultatives sont contrôlées via les paramètres de cookies.",
        "Vos choix peuvent être modifiés.",
      ],
    },

    rights: {
      title: "Vos droits",
      paragraphs: [
        "En vertu de l'article 11 de la loi turque n° 6698 (KVKK), vous pouvez demander des informations sur le traitement, ses finalités et les destinataires de vos données.",
        "Lorsque les conditions légales sont réunies, vous pouvez demander la rectification, l'effacement ou la destruction des données.",
        "Vous pouvez contester certains résultats issus exclusivement d'une analyse automatisée et demander réparation en cas de dommage résultant d'un traitement illicite.",
      ],
    },

    security: {
      title: "Sécurité",
      paragraphs: [
        "Nous appliquons des mesures techniques et organisationnelles appropriées.",
        "Une sécurité électronique absolue ne peut être garantie.",
      ],
    },

    changes: {
      title: "Modifications",
      paragraphs: [
        "Cette politique peut être mise à jour.",
        "La version actuelle sera publiée ici.",
      ],
    },

    contact: {
      title: "Demandes KVKK et confidentialité",
      paragraphs: [
        "Les demandes relatives aux données personnelles peuvent être adressées au responsable ci-dessous.",
      ],
    },

    registrationLabel: "Numéro d'immatriculation / société",
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
      "Questa informativa descrive come i dati personali possono essere trattati e protetti utilizzando il sito LIDYA JEWELRY.",
    lastUpdated: "Ultimo aggiornamento",
    lastUpdatedValue: "Agosto 2026",

    introduction: "Introduzione",
    introLead:
      "Trattiamo i dati personali con attenzione e trasparenza.",
    introText:
      "L'informativa riguarda richieste, appuntamenti, comunicazioni, cookie e servizi collegati.",

    contents: "Contenuti",

    controller: {
      title: "Titolare del trattamento",
      paragraphs: [
        "Il titolare responsabile del trattamento tramite il sito è:",
      ],
    },

    data: {
      title: "Dati che possiamo trattare",
      paragraphs: [
        "Possiamo trattare nome, telefono, e-mail, richieste e altre informazioni fornite volontariamente.",
        "Possono essere trattati anche indirizzo IP, browser, dispositivo e registri di sicurezza.",
        "Le preferenze cookie possono essere memorizzate localmente.",
      ],
    },

    use: {
      title: "Utilizzo dei dati",
      paragraphs: [
        "I dati possono essere utilizzati per richieste, appuntamenti, servizi, assistenza e sicurezza del sito.",
        "Le tecnologie che richiedono consenso vengono attivate solo dopo il consenso.",
      ],
    },

    legalBasis: {
      title: "Base giuridica",
      paragraphs: [
        "LIDYA, operante in Türkiye, tratta i dati personali principalmente ai sensi della legge turca n. 6698 sulla protezione dei dati personali (KVKK) e delle altre norme applicabili.",
        "La base può comprendere contratto, obbligo legale, esercizio o tutela di un diritto, interesse legittimo o consenso esplicito quando richiesto.",
      ],
    },

    sharing: {
      title: "Condivisione dei dati",
      paragraphs: [
        "Non vendiamo dati personali.",
        "I dati possono essere condivisi con fornitori tecnici e professionali necessari.",
        "Possono essere comunicati quando richiesto dalla legge.",
      ],
    },

    international: {
      title: "Servizi internazionali",
      paragraphs: [
        "Il sito può contenere collegamenti a WhatsApp, Instagram e Facebook.",
        "I trasferimenti internazionali avvengono secondo le regole applicabili.",
      ],
    },

    retention: {
      title: "Conservazione",
      paragraphs: [
        "I dati vengono conservati solo per il periodo necessario.",
        "La durata dipende dal tipo di dato, dalla finalità e dagli obblighi legali.",
      ],
    },

    cookies: {
      title: "Cookie e consenso",
      paragraphs: [
        "Le tecnologie necessarie possono essere utilizzate. Quelle opzionali sono controllate tramite le impostazioni cookie.",
        "Le preferenze possono essere modificate.",
      ],
    },

    rights: {
      title: "I vostri diritti",
      paragraphs: [
        "Ai sensi dell'articolo 11 della legge turca n. 6698 (KVKK), potete chiedere informazioni sul trattamento, sulle finalità e sui destinatari dei vostri dati.",
        "Quando ricorrono le condizioni previste dalla legge potete chiedere rettifica, cancellazione o distruzione.",
        "Potete opporvi a risultati negativi derivanti esclusivamente da analisi automatizzate e, ove previsto, chiedere il risarcimento del danno.",
      ],
    },

    security: {
      title: "Sicurezza",
      paragraphs: [
        "Applichiamo misure tecniche e organizzative adeguate.",
        "Non può essere garantita la sicurezza elettronica assoluta.",
      ],
    },

    changes: {
      title: "Modifiche",
      paragraphs: [
        "L'informativa può essere aggiornata.",
        "La versione corrente sarà pubblicata qui.",
      ],
    },

    contact: {
      title: "Richieste KVKK e privacy",
      paragraphs: [
        "Le richieste relative ai dati personali possono essere inviate al titolare indicato di seguito.",
      ],
    },

    registrationLabel: "Numero di registrazione / società",
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
      "Esta política explica cómo pueden tratarse y protegerse sus datos personales al utilizar el sitio web de LIDYA JEWELRY.",
    lastUpdated: "Última actualización",
    lastUpdatedValue: "Agosto de 2026",

    introduction: "Introducción",
    introLead:
      "Tratamos los datos personales con cuidado y transparencia.",
    introText:
      "Esta política cubre consultas, citas, comunicaciones, cookies y servicios de comunicación vinculados.",

    contents: "Contenido",

    controller: {
      title: "Responsable del tratamiento",
      paragraphs: [
        "El responsable del tratamiento de datos a través de este sitio es:",
      ],
    },

    data: {
      title: "Datos que podemos tratar",
      paragraphs: [
        "Podemos tratar nombre, teléfono, correo electrónico, consultas y otra información proporcionada voluntariamente.",
        "También pueden tratarse dirección IP, navegador, dispositivo y registros de seguridad.",
        "Las preferencias de cookies pueden almacenarse localmente.",
      ],
    },

    use: {
      title: "Uso de los datos",
      paragraphs: [
        "Los datos pueden utilizarse para consultas, citas, servicios, atención al cliente y seguridad del sitio.",
        "Las tecnologías que requieran consentimiento se activarán únicamente después de obtenerlo.",
      ],
    },

    legalBasis: {
      title: "Base jurídica",
      paragraphs: [
        "LIDYA, como empresa que opera en Türkiye, trata los datos personales principalmente de acuerdo con la Ley turca n.º 6698 de Protección de Datos Personales (KVKK) y demás legislación aplicable.",
        "La base puede incluir contrato, obligación legal, establecimiento o protección de derechos, interés legítimo o consentimiento expreso cuando sea necesario.",
      ],
    },

    sharing: {
      title: "Compartir datos",
      paragraphs: [
        "No vendemos datos personales.",
        "Los datos pueden compartirse con proveedores técnicos y profesionales necesarios.",
        "También pueden divulgarse cuando exista una obligación legal.",
      ],
    },

    international: {
      title: "Servicios internacionales",
      paragraphs: [
        "El sitio puede contener enlaces a WhatsApp, Instagram, Facebook y otros servicios.",
        "Las transferencias internacionales se realizan conforme a los requisitos aplicables.",
      ],
    },

    retention: {
      title: "Conservación",
      paragraphs: [
        "Los datos se conservan únicamente durante el período necesario.",
        "El período depende del tipo de datos, finalidad y obligaciones legales.",
      ],
    },

    cookies: {
      title: "Cookies y consentimiento",
      paragraphs: [
        "Pueden utilizarse tecnologías necesarias. Las tecnologías opcionales se controlan mediante la configuración de cookies.",
        "Las preferencias pueden modificarse.",
      ],
    },

    rights: {
      title: "Sus derechos",
      paragraphs: [
        "Conforme al artículo 11 de la Ley turca n.º 6698 (KVKK), puede solicitar información sobre el tratamiento, su finalidad y los destinatarios de sus datos.",
        "Cuando se cumplan las condiciones legales puede solicitar la rectificación, eliminación o destrucción de sus datos.",
        "Puede oponerse a resultados adversos derivados exclusivamente del análisis automatizado y, cuando corresponda, reclamar una indemnización por daños.",
      ],
    },

    security: {
      title: "Seguridad",
      paragraphs: [
        "Aplicamos medidas técnicas y organizativas apropiadas.",
        "No puede garantizarse una seguridad electrónica absoluta.",
      ],
    },

    changes: {
      title: "Cambios",
      paragraphs: [
        "Esta política puede actualizarse.",
        "La versión actual se publicará aquí.",
      ],
    },

    contact: {
      title: "Solicitudes KVKK y privacidad",
      paragraphs: [
        "Las solicitudes relativas a datos personales pueden dirigirse al responsable indicado a continuación.",
      ],
    },

    registrationLabel: "Número de registro / empresa",
    privacyContactLabel: "Contacto de privacidad",

    cookieButton: "Abrir configuración de cookies",

    privacyContact: "Contacto de privacidad",
    bottomPolicy: "Política de privacidad",
    returnToWebsite: "Volver al sitio web",
  },
};

/* =========================================================
   COMPONENT
   ========================================================= */

export default function PrivacyContent() {
  const { locale } = useLanguage();

  const copy =
    PRIVACY_COPY[locale] ?? PRIVACY_COPY.en;

  const taxNumberLabel =
    TAX_NUMBER_LABELS[locale] ??
    TAX_NUMBER_LABELS.en;

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
                  style={{
                    color: "#F5EFE6",
                  }}
                >
                  {copy.title}
                </h1>

                <p
                  className="mt-6 max-w-[780px] font-display text-2xl italic leading-tight md:text-3xl"
                  style={{
                    color: "#E8D8B5",
                  }}
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
                  style={{
                    color: "#1B0B20",
                  }}
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

        <section className="bg-brand-white py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16">
            <div className="grid gap-12 lg:grid-cols-12">
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
                        className="transition-colors duration-300 hover:text-gold"
                      >
                        {section.number} ·{" "}
                        {section.copy.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="space-y-16 lg:col-span-9">
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
                      {taxNumberLabel}:{" "}
                      {TAX_NUMBER}
                    </p>

                    {PRIVACY_EMAIL && (
                      <p className="mt-2">
                        {copy.privacyContactLabel}:{" "}
                        <a
                          href={`mailto:${PRIVACY_EMAIL}`}
                          className="text-plum-dark transition-colors duration-300 hover:text-gold"
                        >
                          {PRIVACY_EMAIL}
                        </a>
                      </p>
                    )}
                  </div>
                </LegalSection>

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
                    className="
                      mt-6
                      border
                      border-plum-dark/20
                      px-5
                      py-3
                      text-[0.58rem]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-plum-dark/70
                      transition-all
                      duration-300
                      hover:border-gold
                      hover:bg-gold
                      hover:text-plum-dark
                    "
                  >
                    {copy.cookieButton}
                  </button>
                </LegalSection>

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

                <LegalSection
                  id="contact"
                  number="12"
                  title={copy.contact.title}
                >
                  <p>
                    {copy.contact.paragraphs[0]}
                  </p>

                  <div className="mt-6 border border-plum-dark/10 bg-ivory p-6 md:p-8">
                    <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-gold">
                      {copy.privacyContact}
                    </span>

                    <p className="mt-4 font-display text-2xl text-plum-dark">
                      {LEGAL_COMPANY_NAME}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-grey">
                      {REGISTERED_ADDRESS}
                    </p>

                    <p className="mt-2 text-sm text-grey">
                      {copy.registrationLabel}:{" "}
                      {COMPANY_REGISTRATION_NUMBER}
                    </p>

                    <p className="mt-2 text-sm text-grey">
                      {taxNumberLabel}:{" "}
                      {TAX_NUMBER}
                    </p>

                    {PRIVACY_EMAIL && (
                      <a
                        href={`mailto:${PRIVACY_EMAIL}`}
                        className="mt-4 inline-block text-sm text-plum-dark transition-colors duration-300 hover:text-gold"
                      >
                        {PRIVACY_EMAIL}
                      </a>
                    )}
                  </div>

                  {!PRIVACY_EMAIL && (
                    <p className="mt-5 text-xs leading-6 text-grey/70">
                      {REGISTERED_ADDRESS}
                    </p>
                  )}
                </LegalSection>
              </div>
            </div>
          </div>
        </section>

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
                className="inline-flex items-center gap-4 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-plum-dark/60 transition-colors duration-300 hover:text-gold"
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

/* =========================================================
   LEGAL SECTION COMPONENT
   ========================================================= */

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
        style={{
          color: "#1B0B20",
        }}
      >
        {title}
      </h2>

      <div className="mt-6 max-w-[800px] text-sm leading-7 text-grey md:text-[0.95rem]">
        {children}
      </div>
    </section>
  );
}
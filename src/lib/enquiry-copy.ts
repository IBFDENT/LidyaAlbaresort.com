import type { Locale } from "@/lib/i18n";

export type EnquiryType = "general" | "service" | "appointment";

type EnquiryCopy = {
  serviceOptions: string[];
  typeLabels: Record<EnquiryType, string>;
  headingGeneral: string;
  headingService: string;
  headingAppointment: string;
  eyebrow: string;
  lead: string;
  location: string;
  since: string;
  signedIn: string;
  name: string;
  email: string;
  phone: string;
  selectService: string;
  preferredDate: string;
  subject: string;
  itemDetails: string;
  appointmentMessage: string;
  message: string;
  consentPrefix: string;
  privacyPolicy: string;
  sending: string;
  sendRequest: string;
  requestError: string;
  successEmail: string;
  success: string;
};

export const ENQUIRY_COPY: Record<Locale, EnquiryCopy> = {
  en: {
    serviceOptions:["Jewellery cleaning & polishing","Repairs & adjustments","Stone & diamond setting","Bespoke & redesign","Watch service","Gold exchange"],
    typeLabels:{general:"General enquiry",service:"Service request",appointment:"Private appointment"}, headingGeneral:"Send us an enquiry", headingService:"Send a service request", headingAppointment:"Request a private appointment",
    eyebrow:"LIDYA Client Care", lead:"Your request is stored securely in the LIDYA administration system. Signed-in clients can follow its live status in Client Centre.", location:"Alba Resort · Antalya · Türkiye", since:"Personal service since 1989",
    signedIn:"Signed in to LIDYA Client Centre. This request will be linked to your account.", name:"Name *", email:"Email *", phone:"Telephone / WhatsApp", selectService:"Select service *", preferredDate:"Preferred date / subject", subject:"Subject", itemDetails:"Jewellery / watch / item details", appointmentMessage:"Tell us how we can prepare for your private appointment... *", message:"Your message *",
    consentPrefix:"I agree that LIDYA may use these details to respond to my request, in accordance with the", privacyPolicy:"Privacy Policy", sending:"Sending…", sendRequest:"Send request", requestError:"The request could not be sent.", successEmail:"Thank you. Your request has been received and a confirmation email has been sent. Reference: {reference}.", success:"Thank you. Your request has been received. Reference: {reference}."
  },
  sk: {
    serviceOptions:["Čistenie a leštenie šperkov","Opravy a úpravy","Osádzanie kameňov a diamantov","Výroba na mieru a redizajn","Servis hodiniek","Výmena zlata"],
    typeLabels:{general:"Všeobecná otázka",service:"Servisná požiadavka",appointment:"Súkromný termín"}, headingGeneral:"Pošlite nám otázku", headingService:"Odoslať servisnú požiadavku", headingAppointment:"Požiadať o súkromný termín",
    eyebrow:"Starostlivosť o klientov LIDYA", lead:"Vaša požiadavka je bezpečne uložená v administračnom systéme LIDYA. Prihlásení klienti môžu sledovať jej aktuálny stav v Klientskom centre.", location:"Alba Resort · Antalya · Türkiye", since:"Osobný servis od roku 1989",
    signedIn:"Ste prihlásený v Klientskom centre LIDYA. Táto požiadavka bude prepojená s vaším účtom.", name:"Meno *", email:"E-mail *", phone:"Telefón / WhatsApp", selectService:"Vyberte službu *", preferredDate:"Preferovaný dátum / predmet", subject:"Predmet", itemDetails:"Podrobnosti o šperku / hodinkách / predmete", appointmentMessage:"Napíšte nám, ako sa môžeme pripraviť na váš súkromný termín... *", message:"Vaša správa *",
    consentPrefix:"Súhlasím, aby LIDYA použila tieto údaje na odpoveď na moju požiadavku v súlade so", privacyPolicy:"Zásadami ochrany súkromia", sending:"Odosielam…", sendRequest:"Odoslať požiadavku", requestError:"Požiadavku sa nepodarilo odoslať.", successEmail:"Ďakujeme. Vašu požiadavku sme prijali a potvrdzujúci e-mail bol odoslaný. Referencia: {reference}.", success:"Ďakujeme. Vašu požiadavku sme prijali. Referencia: {reference}."
  },
  de: {
    serviceOptions:["Schmuckreinigung & Politur","Reparaturen & Anpassungen","Stein- & Diamantfassung","Maßanfertigung & Redesign","Uhrenservice","Goldtausch"],
    typeLabels:{general:"Allgemeine Anfrage",service:"Serviceanfrage",appointment:"Privater Termin"}, headingGeneral:"Senden Sie uns eine Anfrage", headingService:"Serviceanfrage senden", headingAppointment:"Privaten Termin anfragen",
    eyebrow:"LIDYA Kundenservice", lead:"Ihre Anfrage wird sicher im LIDYA Verwaltungssystem gespeichert. Angemeldete Kunden können den aktuellen Status im Kundencenter verfolgen.", location:"Alba Resort · Antalya · Türkiye", since:"Persönlicher Service seit 1989",
    signedIn:"Sie sind im LIDYA Kundencenter angemeldet. Diese Anfrage wird mit Ihrem Konto verknüpft.", name:"Name *", email:"E-Mail *", phone:"Telefon / WhatsApp", selectService:"Service auswählen *", preferredDate:"Wunschtermin / Betreff", subject:"Betreff", itemDetails:"Details zu Schmuck / Uhr / Gegenstand", appointmentMessage:"Teilen Sie uns mit, wie wir Ihren privaten Termin vorbereiten dürfen... *", message:"Ihre Nachricht *",
    consentPrefix:"Ich stimme zu, dass LIDYA diese Angaben zur Beantwortung meiner Anfrage gemäß der", privacyPolicy:"Datenschutzerklärung", sending:"Wird gesendet…", sendRequest:"Anfrage senden", requestError:"Die Anfrage konnte nicht gesendet werden.", successEmail:"Vielen Dank. Ihre Anfrage ist eingegangen und eine Bestätigungs-E-Mail wurde gesendet. Referenz: {reference}.", success:"Vielen Dank. Ihre Anfrage ist eingegangen. Referenz: {reference}."
  },
  tr: {
    serviceOptions:["Mücevher temizleme ve parlatma","Onarım ve ayarlamalar","Taş ve pırlanta mıhlama","Kişiye özel tasarım ve yeniden tasarım","Saat servisi","Altın değişimi"],
    typeLabels:{general:"Genel bilgi talebi",service:"Servis talebi",appointment:"Özel randevu"}, headingGeneral:"Bize bir talep gönderin", headingService:"Servis talebi gönderin", headingAppointment:"Özel randevu talep edin",
    eyebrow:"LIDYA Müşteri Hizmetleri", lead:"Talebiniz LIDYA yönetim sisteminde güvenli şekilde saklanır. Giriş yapan müşteriler canlı durumunu Müşteri Merkezi'nden takip edebilir.", location:"Alba Resort · Antalya · Türkiye", since:"1989'dan beri kişisel hizmet",
    signedIn:"LIDYA Müşteri Merkezi'ne giriş yaptınız. Bu talep hesabınıza bağlanacaktır.", name:"Ad Soyad *", email:"E-posta *", phone:"Telefon / WhatsApp", selectService:"Servis seçin *", preferredDate:"Tercih edilen tarih / konu", subject:"Konu", itemDetails:"Mücevher / saat / ürün detayları", appointmentMessage:"Özel randevunuza nasıl hazırlanabileceğimizi bize anlatın... *", message:"Mesajınız *",
    consentPrefix:"LIDYA'nın bu bilgileri talebime yanıt vermek için kullanmasını", privacyPolicy:"Gizlilik Politikası", sending:"Gönderiliyor…", sendRequest:"Talebi gönder", requestError:"Talep gönderilemedi.", successEmail:"Teşekkür ederiz. Talebiniz alındı ve onay e-postası gönderildi. Referans: {reference}.", success:"Teşekkür ederiz. Talebiniz alındı. Referans: {reference}."
  },
  ru: {
    serviceOptions:["Чистка и полировка украшений","Ремонт и корректировка","Закрепка камней и бриллиантов","Индивидуальный заказ и редизайн","Сервис часов","Обмен золота"],
    typeLabels:{general:"Общий запрос",service:"Заявка на сервис",appointment:"Частная встреча"}, headingGeneral:"Отправьте нам запрос", headingService:"Отправить заявку на сервис", headingAppointment:"Запросить частную встречу",
    eyebrow:"Клиентский сервис LIDYA", lead:"Ваш запрос надежно хранится в административной системе LIDYA. Авторизованные клиенты могут отслеживать его актуальный статус в Клиентском центре.", location:"Alba Resort · Antalya · Türkiye", since:"Персональный сервис с 1989 года",
    signedIn:"Вы вошли в Клиентский центр LIDYA. Этот запрос будет связан с вашей учетной записью.", name:"Имя *", email:"Электронная почта *", phone:"Телефон / WhatsApp", selectService:"Выберите услугу *", preferredDate:"Предпочтительная дата / тема", subject:"Тема", itemDetails:"Информация об украшении / часах / изделии", appointmentMessage:"Расскажите, как нам подготовиться к вашей частной встрече... *", message:"Ваше сообщение *",
    consentPrefix:"Я согласен, чтобы LIDYA использовала эти данные для ответа на мой запрос в соответствии с", privacyPolicy:"Политикой конфиденциальности", sending:"Отправка…", sendRequest:"Отправить запрос", requestError:"Не удалось отправить запрос.", successEmail:"Спасибо. Ваш запрос получен, письмо с подтверждением отправлено. Номер: {reference}.", success:"Спасибо. Ваш запрос получен. Номер: {reference}."
  },
  pl: {
    serviceOptions:["Czyszczenie i polerowanie biżuterii","Naprawy i korekty","Oprawa kamieni i diamentów","Projekty indywidualne i redesign","Serwis zegarków","Wymiana złota"],
    typeLabels:{general:"Zapytanie ogólne",service:"Zlecenie serwisowe",appointment:"Prywatne spotkanie"}, headingGeneral:"Wyślij nam zapytanie", headingService:"Wyślij zlecenie serwisowe", headingAppointment:"Poproś o prywatne spotkanie",
    eyebrow:"Opieka nad klientem LIDYA", lead:"Twoje zgłoszenie jest bezpiecznie przechowywane w systemie administracyjnym LIDYA. Zalogowani klienci mogą śledzić jego aktualny status w Centrum Klienta.", location:"Alba Resort · Antalya · Türkiye", since:"Osobista obsługa od 1989 roku",
    signedIn:"Jesteś zalogowany w Centrum Klienta LIDYA. To zgłoszenie zostanie powiązane z Twoim kontem.", name:"Imię i nazwisko *", email:"E-mail *", phone:"Telefon / WhatsApp", selectService:"Wybierz usługę *", preferredDate:"Preferowana data / temat", subject:"Temat", itemDetails:"Szczegóły biżuterii / zegarka / przedmiotu", appointmentMessage:"Napisz, jak możemy przygotować się do Twojego prywatnego spotkania... *", message:"Twoja wiadomość *",
    consentPrefix:"Zgadzam się, aby LIDYA wykorzystała te dane do odpowiedzi na moje zgłoszenie zgodnie z", privacyPolicy:"Polityką prywatności", sending:"Wysyłanie…", sendRequest:"Wyślij zgłoszenie", requestError:"Nie udało się wysłać zgłoszenia.", successEmail:"Dziękujemy. Otrzymaliśmy Twoje zgłoszenie i wysłaliśmy e-mail z potwierdzeniem. Numer: {reference}.", success:"Dziękujemy. Otrzymaliśmy Twoje zgłoszenie. Numer: {reference}."
  },
  ar: {
    serviceOptions:["تنظيف وتلميع المجوهرات","الإصلاحات والتعديلات","ترصيع الأحجار والألماس","تصميم حسب الطلب وإعادة التصميم","صيانة الساعات","استبدال الذهب"],
    typeLabels:{general:"استفسار عام",service:"طلب خدمة",appointment:"موعد خاص"}, headingGeneral:"أرسل لنا استفسارًا", headingService:"أرسل طلب خدمة", headingAppointment:"اطلب موعدًا خاصًا",
    eyebrow:"رعاية عملاء LIDYA", lead:"يتم حفظ طلبك بأمان في نظام إدارة LIDYA. يمكن للعملاء المسجلين متابعة حالته المباشرة في مركز العملاء.", location:"Alba Resort · Antalya · Türkiye", since:"خدمة شخصية منذ 1989",
    signedIn:"أنت مسجل الدخول إلى مركز عملاء LIDYA. سيتم ربط هذا الطلب بحسابك.", name:"الاسم *", email:"البريد الإلكتروني *", phone:"الهاتف / WhatsApp", selectService:"اختر الخدمة *", preferredDate:"التاريخ المفضل / الموضوع", subject:"الموضوع", itemDetails:"تفاصيل المجوهرات / الساعة / القطعة", appointmentMessage:"أخبرنا كيف يمكننا الاستعداد لموعدك الخاص... *", message:"رسالتك *",
    consentPrefix:"أوافق على أن تستخدم LIDYA هذه البيانات للرد على طلبي وفقًا لـ", privacyPolicy:"سياسة الخصوصية", sending:"جارٍ الإرسال…", sendRequest:"إرسال الطلب", requestError:"تعذر إرسال الطلب.", successEmail:"شكرًا لك. تم استلام طلبك وإرسال رسالة تأكيد بالبريد الإلكتروني. المرجع: {reference}.", success:"شكرًا لك. تم استلام طلبك. المرجع: {reference}."
  },
  cs: {
    serviceOptions:["Čištění a leštění šperků","Opravy a úpravy","Osazování kamenů a diamantů","Výroba na míru a redesign","Servis hodinek","Výměna zlata"],
    typeLabels:{general:"Obecný dotaz",service:"Servisní požadavek",appointment:"Soukromá schůzka"}, headingGeneral:"Pošlete nám dotaz", headingService:"Odeslat servisní požadavek", headingAppointment:"Požádat o soukromou schůzku",
    eyebrow:"Péče o klienty LIDYA", lead:"Váš požadavek je bezpečně uložen v administračním systému LIDYA. Přihlášení klienti mohou sledovat jeho aktuální stav v Klientském centru.", location:"Alba Resort · Antalya · Türkiye", since:"Osobní servis od roku 1989",
    signedIn:"Jste přihlášeni v Klientském centru LIDYA. Tento požadavek bude propojen s vaším účtem.", name:"Jméno *", email:"E-mail *", phone:"Telefon / WhatsApp", selectService:"Vyberte službu *", preferredDate:"Preferované datum / předmět", subject:"Předmět", itemDetails:"Podrobnosti o šperku / hodinkách / předmětu", appointmentMessage:"Napište nám, jak se můžeme připravit na vaši soukromou schůzku... *", message:"Vaše zpráva *",
    consentPrefix:"Souhlasím, aby LIDYA použila tyto údaje k odpovědi na můj požadavek v souladu se", privacyPolicy:"Zásadami ochrany soukromí", sending:"Odesílání…", sendRequest:"Odeslat požadavek", requestError:"Požadavek se nepodařilo odeslat.", successEmail:"Děkujeme. Váš požadavek jsme přijali a odeslali potvrzovací e-mail. Reference: {reference}.", success:"Děkujeme. Váš požadavek jsme přijali. Reference: {reference}."
  },
  uk: {
    serviceOptions:["Чищення та полірування прикрас","Ремонт і коригування","Закріплення каменів і діамантів","Індивідуальне виготовлення та редизайн","Сервіс годинників","Обмін золота"],
    typeLabels:{general:"Загальний запит",service:"Сервісний запит",appointment:"Приватна зустріч"}, headingGeneral:"Надішліть нам запит", headingService:"Надіслати сервісний запит", headingAppointment:"Запросити приватну зустріч",
    eyebrow:"Клієнтський сервіс LIDYA", lead:"Ваш запит безпечно зберігається в адміністративній системі LIDYA. Авторизовані клієнти можуть відстежувати його поточний статус у Клієнтському центрі.", location:"Alba Resort · Antalya · Türkiye", since:"Персональний сервіс з 1989 року",
    signedIn:"Ви увійшли до Клієнтського центру LIDYA. Цей запит буде пов'язано з вашим обліковим записом.", name:"Ім'я *", email:"Електронна пошта *", phone:"Телефон / WhatsApp", selectService:"Оберіть послугу *", preferredDate:"Бажана дата / тема", subject:"Тема", itemDetails:"Деталі прикраси / годинника / виробу", appointmentMessage:"Розкажіть, як нам підготуватися до вашої приватної зустрічі... *", message:"Ваше повідомлення *",
    consentPrefix:"Я погоджуюся, щоб LIDYA використала ці дані для відповіді на мій запит відповідно до", privacyPolicy:"Політики конфіденційності", sending:"Надсилання…", sendRequest:"Надіслати запит", requestError:"Не вдалося надіслати запит.", successEmail:"Дякуємо. Ваш запит отримано, лист-підтвердження надіслано. Номер: {reference}.", success:"Дякуємо. Ваш запит отримано. Номер: {reference}."
  },
  ro: {
    serviceOptions:["Curățare și lustruire bijuterii","Reparații și ajustări","Montare pietre și diamante","Lucrări personalizate și redesign","Service ceasuri","Schimb de aur"],
    typeLabels:{general:"Solicitare generală",service:"Solicitare de service",appointment:"Programare privată"}, headingGeneral:"Trimite-ne o solicitare", headingService:"Trimite o solicitare de service", headingAppointment:"Solicită o programare privată",
    eyebrow:"Asistență clienți LIDYA", lead:"Solicitarea ta este stocată în siguranță în sistemul administrativ LIDYA. Clienții autentificați îi pot urmări starea în timp real în Centrul clienților.", location:"Alba Resort · Antalya · Türkiye", since:"Serviciu personal din 1989",
    signedIn:"Ești autentificat în Centrul clienților LIDYA. Această solicitare va fi asociată contului tău.", name:"Nume *", email:"E-mail *", phone:"Telefon / WhatsApp", selectService:"Selectează serviciul *", preferredDate:"Data preferată / subiect", subject:"Subiect", itemDetails:"Detalii bijuterie / ceas / obiect", appointmentMessage:"Spune-ne cum ne putem pregăti pentru programarea ta privată... *", message:"Mesajul tău *",
    consentPrefix:"Sunt de acord ca LIDYA să folosească aceste date pentru a răspunde solicitării mele, în conformitate cu", privacyPolicy:"Politica de confidențialitate", sending:"Se trimite…", sendRequest:"Trimite solicitarea", requestError:"Solicitarea nu a putut fi trimisă.", successEmail:"Mulțumim. Solicitarea a fost primită și a fost trimis un e-mail de confirmare. Referință: {reference}.", success:"Mulțumim. Solicitarea a fost primită. Referință: {reference}."
  },
  hu: {
    serviceOptions:["Ékszertisztítás és polírozás","Javítások és igazítások","Kő- és gyémántfoglalás","Egyedi készítés és újratervezés","Óraszerviz","Aranycsere"],
    typeLabels:{general:"Általános érdeklődés",service:"Szervizkérelem",appointment:"Privát időpont"}, headingGeneral:"Küldjön nekünk érdeklődést", headingService:"Szervizkérelem küldése", headingAppointment:"Privát időpont kérése",
    eyebrow:"LIDYA Ügyfélgondozás", lead:"Kérelmét biztonságosan tároljuk a LIDYA adminisztrációs rendszerében. A bejelentkezett ügyfelek az Ügyfélközpontban követhetik annak aktuális állapotát.", location:"Alba Resort · Antalya · Türkiye", since:"Személyes kiszolgálás 1989 óta",
    signedIn:"Bejelentkezett a LIDYA Ügyfélközpontba. Ez a kérelem a fiókjához lesz kapcsolva.", name:"Név *", email:"E-mail *", phone:"Telefon / WhatsApp", selectService:"Válasszon szolgáltatást *", preferredDate:"Kívánt dátum / tárgy", subject:"Tárgy", itemDetails:"Ékszer / óra / tárgy részletei", appointmentMessage:"Írja meg, hogyan készülhetünk fel privát időpontjára... *", message:"Üzenete *",
    consentPrefix:"Hozzájárulok, hogy a LIDYA ezeket az adatokat kérelmem megválaszolására használja az", privacyPolicy:"Adatvédelmi irányelvek", sending:"Küldés…", sendRequest:"Kérelem küldése", requestError:"A kérelmet nem sikerült elküldeni.", successEmail:"Köszönjük. Kérelmét megkaptuk, és visszaigazoló e-mailt küldtünk. Hivatkozás: {reference}.", success:"Köszönjük. Kérelmét megkaptuk. Hivatkozás: {reference}."
  },
  fr: {
    serviceOptions:["Nettoyage et polissage des bijoux","Réparations et ajustements","Sertissage de pierres et diamants","Sur-mesure et redesign","Service horloger","Échange d'or"],
    typeLabels:{general:"Demande générale",service:"Demande de service",appointment:"Rendez-vous privé"}, headingGeneral:"Envoyez-nous une demande", headingService:"Envoyer une demande de service", headingAppointment:"Demander un rendez-vous privé",
    eyebrow:"Service Client LIDYA", lead:"Votre demande est conservée en toute sécurité dans le système d'administration LIDYA. Les clients connectés peuvent suivre son statut en direct dans l'Espace client.", location:"Alba Resort · Antalya · Türkiye", since:"Service personnalisé depuis 1989",
    signedIn:"Vous êtes connecté à l'Espace client LIDYA. Cette demande sera liée à votre compte.", name:"Nom *", email:"E-mail *", phone:"Téléphone / WhatsApp", selectService:"Sélectionnez un service *", preferredDate:"Date souhaitée / objet", subject:"Objet", itemDetails:"Détails du bijou / de la montre / de l'article", appointmentMessage:"Indiquez-nous comment nous préparer à votre rendez-vous privé... *", message:"Votre message *",
    consentPrefix:"J'accepte que LIDYA utilise ces informations pour répondre à ma demande, conformément à la", privacyPolicy:"Politique de confidentialité", sending:"Envoi…", sendRequest:"Envoyer la demande", requestError:"La demande n'a pas pu être envoyée.", successEmail:"Merci. Votre demande a été reçue et un e-mail de confirmation a été envoyé. Référence : {reference}.", success:"Merci. Votre demande a été reçue. Référence : {reference}."
  },
  it: {
    serviceOptions:["Pulizia e lucidatura gioielli","Riparazioni e regolazioni","Incastonatura pietre e diamanti","Su misura e redesign","Assistenza orologi","Cambio oro"],
    typeLabels:{general:"Richiesta generale",service:"Richiesta di assistenza",appointment:"Appuntamento privato"}, headingGeneral:"Inviaci una richiesta", headingService:"Invia una richiesta di assistenza", headingAppointment:"Richiedi un appuntamento privato",
    eyebrow:"Assistenza Clienti LIDYA", lead:"La tua richiesta viene conservata in modo sicuro nel sistema amministrativo LIDYA. I clienti autenticati possono seguirne lo stato in tempo reale nel Centro clienti.", location:"Alba Resort · Antalya · Türkiye", since:"Servizio personale dal 1989",
    signedIn:"Hai effettuato l'accesso al Centro clienti LIDYA. Questa richiesta verrà collegata al tuo account.", name:"Nome *", email:"E-mail *", phone:"Telefono / WhatsApp", selectService:"Seleziona il servizio *", preferredDate:"Data preferita / oggetto", subject:"Oggetto", itemDetails:"Dettagli gioiello / orologio / articolo", appointmentMessage:"Dicci come possiamo prepararci al tuo appuntamento privato... *", message:"Il tuo messaggio *",
    consentPrefix:"Accetto che LIDYA utilizzi questi dati per rispondere alla mia richiesta, in conformità con l'", privacyPolicy:"Informativa sulla privacy", sending:"Invio…", sendRequest:"Invia richiesta", requestError:"Non è stato possibile inviare la richiesta.", successEmail:"Grazie. La tua richiesta è stata ricevuta ed è stata inviata un'e-mail di conferma. Riferimento: {reference}.", success:"Grazie. La tua richiesta è stata ricevuta. Riferimento: {reference}."
  },
  es: {
    serviceOptions:["Limpieza y pulido de joyas","Reparaciones y ajustes","Engaste de piedras y diamantes","A medida y rediseño","Servicio de relojes","Cambio de oro"],
    typeLabels:{general:"Consulta general",service:"Solicitud de servicio",appointment:"Cita privada"}, headingGeneral:"Envíanos una consulta", headingService:"Enviar una solicitud de servicio", headingAppointment:"Solicitar una cita privada",
    eyebrow:"Atención al Cliente LIDYA", lead:"Tu solicitud se guarda de forma segura en el sistema administrativo de LIDYA. Los clientes que hayan iniciado sesión pueden seguir su estado en tiempo real en el Centro de clientes.", location:"Alba Resort · Antalya · Türkiye", since:"Servicio personal desde 1989",
    signedIn:"Has iniciado sesión en el Centro de clientes LIDYA. Esta solicitud quedará vinculada a tu cuenta.", name:"Nombre *", email:"Correo electrónico *", phone:"Teléfono / WhatsApp", selectService:"Selecciona un servicio *", preferredDate:"Fecha preferida / asunto", subject:"Asunto", itemDetails:"Detalles de la joya / reloj / artículo", appointmentMessage:"Cuéntanos cómo podemos preparar tu cita privada... *", message:"Tu mensaje *",
    consentPrefix:"Acepto que LIDYA utilice estos datos para responder a mi solicitud, de acuerdo con la", privacyPolicy:"Política de privacidad", sending:"Enviando…", sendRequest:"Enviar solicitud", requestError:"No se pudo enviar la solicitud.", successEmail:"Gracias. Hemos recibido tu solicitud y se ha enviado un correo de confirmación. Referencia: {reference}.", success:"Gracias. Hemos recibido tu solicitud. Referencia: {reference}."
  },
  nl: {
    serviceOptions:["Juwelen reinigen en polijsten","Reparaties en aanpassingen","Zetten van stenen en diamanten","Maatwerk en redesign","Horlogeservice","Goudruil"],
    typeLabels:{general:"Algemene vraag",service:"Serviceaanvraag",appointment:"Privéafspraak"}, headingGeneral:"Stuur ons een vraag", headingService:"Stuur een serviceaanvraag", headingAppointment:"Vraag een privéafspraak aan",
    eyebrow:"LIDYA Klantenservice", lead:"Uw aanvraag wordt veilig opgeslagen in het LIDYA-administratiesysteem. Ingelogde klanten kunnen de actuele status volgen in het Klantenportaal.", location:"Alba Resort · Antalya · Türkiye", since:"Persoonlijke service sinds 1989",
    signedIn:"U bent ingelogd in het LIDYA Klantenportaal. Deze aanvraag wordt aan uw account gekoppeld.", name:"Naam *", email:"E-mail *", phone:"Telefoon / WhatsApp", selectService:"Selecteer service *", preferredDate:"Gewenste datum / onderwerp", subject:"Onderwerp", itemDetails:"Details juweel / horloge / item", appointmentMessage:"Vertel ons hoe we uw privéafspraak kunnen voorbereiden... *", message:"Uw bericht *",
    consentPrefix:"Ik ga ermee akkoord dat LIDYA deze gegevens gebruikt om op mijn aanvraag te reageren, in overeenstemming met het", privacyPolicy:"Privacybeleid", sending:"Verzenden…", sendRequest:"Aanvraag verzenden", requestError:"De aanvraag kon niet worden verzonden.", successEmail:"Dank u. Uw aanvraag is ontvangen en er is een bevestigingsmail verzonden. Referentie: {reference}.", success:"Dank u. Uw aanvraag is ontvangen. Referentie: {reference}."
  }
};

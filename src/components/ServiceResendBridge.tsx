"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/lib/i18n";

type Copy = {
  email: string;
  emailPlaceholder: string;
  consent: string;
  privacy: string;
  submit: string;
  submitting: string;
  success: string;
  partial: string;
  selectService: string;
  enterName: string;
  enterEmail: string;
  consentRequired: string;
  whatsapp: string;
};

const COPY: Record<Locale, Copy> = {
  en: { email: "Your email", emailPlaceholder: "Email address", consent: "I agree that LIDYA may use these details to respond to my service request in accordance with the", privacy: "Privacy Policy", submit: "Send service request", submitting: "Sending...", success: "Your service request was received. Reference", partial: "Your request was saved, but one of the notification emails could not be delivered.", selectService: "Please select at least one service.", enterName: "Please enter your name.", enterEmail: "Please enter a valid email address.", consentRequired: "Please confirm your consent before sending.", whatsapp: "Send via WhatsApp" },
  de: { email: "Ihre E-Mail", emailPlaceholder: "E-Mail-Adresse", consent: "Ich stimme zu, dass LIDYA diese Angaben zur Bearbeitung meiner Serviceanfrage gemäß der", privacy: "Datenschutzerklärung", submit: "Serviceanfrage senden", submitting: "Wird gesendet...", success: "Ihre Serviceanfrage wurde empfangen. Referenz", partial: "Ihre Anfrage wurde gespeichert, aber eine Benachrichtigungs-E-Mail konnte nicht zugestellt werden.", selectService: "Bitte wählen Sie mindestens einen Service.", enterName: "Bitte geben Sie Ihren Namen ein.", enterEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.", consentRequired: "Bitte bestätigen Sie Ihre Zustimmung.", whatsapp: "Per WhatsApp senden" },
  tr: { email: "E-posta adresiniz", emailPlaceholder: "E-posta adresi", consent: "LIDYA'nın bu bilgileri hizmet talebime yanıt vermek için", privacy: "Gizlilik Politikası", submit: "Servis talebini gönder", submitting: "Gönderiliyor...", success: "Servis talebiniz alındı. Referans", partial: "Talebiniz kaydedildi ancak bildirim e-postalarından biri gönderilemedi.", selectService: "Lütfen en az bir hizmet seçin.", enterName: "Lütfen adınızı girin.", enterEmail: "Lütfen geçerli bir e-posta adresi girin.", consentRequired: "Lütfen göndermeden önce onay verin.", whatsapp: "WhatsApp ile gönder" },
  sk: { email: "Váš e-mail", emailPlaceholder: "E-mailová adresa", consent: "Súhlasím, aby LIDYA použila tieto údaje na vybavenie mojej servisnej požiadavky v súlade so", privacy: "Zásadami ochrany súkromia", submit: "Odoslať servisnú požiadavku", submitting: "Odosielam...", success: "Servisná požiadavka bola prijatá. Referencia", partial: "Požiadavka bola uložená, ale jeden z potvrdzovacích e-mailov sa nepodarilo doručiť.", selectService: "Vyberte aspoň jednu službu.", enterName: "Zadajte svoje meno.", enterEmail: "Zadajte platnú e-mailovú adresu.", consentRequired: "Pred odoslaním potvrďte súhlas.", whatsapp: "Odoslať cez WhatsApp" },
  cs: { email: "Váš e-mail", emailPlaceholder: "E-mailová adresa", consent: "Souhlasím, aby LIDYA použila tyto údaje k vyřízení mé servisní žádosti v souladu se", privacy: "Zásadami ochrany soukromí", submit: "Odeslat servisní žádost", submitting: "Odesílám...", success: "Servisní žádost byla přijata. Reference", partial: "Žádost byla uložena, ale jeden z potvrzovacích e-mailů se nepodařilo doručit.", selectService: "Vyberte alespoň jednu službu.", enterName: "Zadejte své jméno.", enterEmail: "Zadejte platnou e-mailovou adresu.", consentRequired: "Před odesláním potvrďte souhlas.", whatsapp: "Odeslat přes WhatsApp" },
  hu: { email: "E-mail címe", emailPlaceholder: "E-mail cím", consent: "Hozzájárulok, hogy a LIDYA ezeket az adatokat a szervizigényem megválaszolására használja az", privacy: "Adatvédelmi szabályzat", submit: "Szervizigény elküldése", submitting: "Küldés...", success: "Szervizigénye megérkezett. Hivatkozás", partial: "A kérés mentésre került, de az egyik értesítő e-mail nem kézbesíthető.", selectService: "Válasszon legalább egy szolgáltatást.", enterName: "Adja meg a nevét.", enterEmail: "Adjon meg érvényes e-mail címet.", consentRequired: "Kérjük, erősítse meg a hozzájárulást.", whatsapp: "Küldés WhatsAppon" },
  pl: { email: "Twój e-mail", emailPlaceholder: "Adres e-mail", consent: "Wyrażam zgodę na wykorzystanie tych danych przez LIDYA w celu odpowiedzi na moje zgłoszenie zgodnie z", privacy: "Polityką prywatności", submit: "Wyślij zgłoszenie serwisowe", submitting: "Wysyłanie...", success: "Zgłoszenie zostało przyjęte. Numer referencyjny", partial: "Zgłoszenie zostało zapisane, ale jednej z wiadomości nie udało się dostarczyć.", selectService: "Wybierz co najmniej jedną usługę.", enterName: "Wpisz swoje imię.", enterEmail: "Wpisz prawidłowy adres e-mail.", consentRequired: "Potwierdź zgodę przed wysłaniem.", whatsapp: "Wyślij przez WhatsApp" },
  ru: { email: "Ваш e-mail", emailPlaceholder: "Адрес e-mail", consent: "Я согласен, что LIDYA может использовать эти данные для ответа на мой сервисный запрос в соответствии с", privacy: "Политикой конфиденциальности", submit: "Отправить сервисный запрос", submitting: "Отправка...", success: "Сервисный запрос получен. Номер", partial: "Запрос сохранён, но одно из уведомлений не удалось доставить.", selectService: "Выберите хотя бы одну услугу.", enterName: "Введите ваше имя.", enterEmail: "Введите корректный e-mail.", consentRequired: "Подтвердите согласие перед отправкой.", whatsapp: "Отправить через WhatsApp" },
  nl: { email: "Uw e-mail", emailPlaceholder: "E-mailadres", consent: "Ik ga ermee akkoord dat LIDYA deze gegevens gebruikt om op mijn serviceaanvraag te reageren volgens het", privacy: "Privacybeleid", submit: "Serviceaanvraag versturen", submitting: "Versturen...", success: "Uw serviceaanvraag is ontvangen. Referentie", partial: "Uw aanvraag is opgeslagen, maar één notificatie-e-mail kon niet worden bezorgd.", selectService: "Selecteer minimaal één service.", enterName: "Vul uw naam in.", enterEmail: "Vul een geldig e-mailadres in.", consentRequired: "Bevestig uw toestemming vóór verzending.", whatsapp: "Versturen via WhatsApp" },
  da: { email: "Din e-mail", emailPlaceholder: "E-mailadresse", consent: "Jeg accepterer, at LIDYA må bruge disse oplysninger til at besvare min serviceforespørgsel i henhold til", privacy: "Privatlivspolitikken", submit: "Send serviceforespørgsel", submitting: "Sender...", success: "Din serviceforespørgsel er modtaget. Reference", partial: "Din forespørgsel blev gemt, men en af e-mailnotifikationerne kunne ikke leveres.", selectService: "Vælg mindst én service.", enterName: "Indtast dit navn.", enterEmail: "Indtast en gyldig e-mailadresse.", consentRequired: "Bekræft dit samtykke før afsendelse.", whatsapp: "Send via WhatsApp" },
  fi: { email: "Sähköpostisi", emailPlaceholder: "Sähköpostiosoite", consent: "Hyväksyn, että LIDYA käyttää näitä tietoja huoltopyyntööni vastaamiseen", privacy: "Tietosuojakäytännön", submit: "Lähetä huoltopyyntö", submitting: "Lähetetään...", success: "Huoltopyyntö vastaanotettu. Viite", partial: "Pyyntö tallennettiin, mutta yhtä ilmoitussähköpostia ei voitu toimittaa.", selectService: "Valitse vähintään yksi palvelu.", enterName: "Anna nimesi.", enterEmail: "Anna kelvollinen sähköpostiosoite.", consentRequired: "Vahvista suostumus ennen lähettämistä.", whatsapp: "Lähetä WhatsAppilla" },
  sv: { email: "Din e-post", emailPlaceholder: "E-postadress", consent: "Jag godkänner att LIDYA använder dessa uppgifter för att svara på min serviceförfrågan enligt", privacy: "Integritetspolicyn", submit: "Skicka serviceförfrågan", submitting: "Skickar...", success: "Din serviceförfrågan har mottagits. Referens", partial: "Förfrågan sparades, men ett av e-postmeddelandena kunde inte levereras.", selectService: "Välj minst en tjänst.", enterName: "Ange ditt namn.", enterEmail: "Ange en giltig e-postadress.", consentRequired: "Bekräfta ditt samtycke före skickning.", whatsapp: "Skicka via WhatsApp" },
  fr: { email: "Votre e-mail", emailPlaceholder: "Adresse e-mail", consent: "J’accepte que LIDYA utilise ces informations pour répondre à ma demande de service conformément à la", privacy: "Politique de confidentialité", submit: "Envoyer la demande de service", submitting: "Envoi...", success: "Votre demande de service a été reçue. Référence", partial: "Votre demande a été enregistrée, mais l’un des e-mails de notification n’a pas pu être livré.", selectService: "Veuillez sélectionner au moins un service.", enterName: "Veuillez saisir votre nom.", enterEmail: "Veuillez saisir une adresse e-mail valide.", consentRequired: "Veuillez confirmer votre consentement.", whatsapp: "Envoyer via WhatsApp" },
  it: { email: "La tua e-mail", emailPlaceholder: "Indirizzo e-mail", consent: "Acconsento che LIDYA utilizzi questi dati per rispondere alla mia richiesta di assistenza in conformità con la", privacy: "Privacy Policy", submit: "Invia richiesta di assistenza", submitting: "Invio...", success: "La richiesta di assistenza è stata ricevuta. Riferimento", partial: "La richiesta è stata salvata, ma una delle e-mail di notifica non è stata consegnata.", selectService: "Seleziona almeno un servizio.", enterName: "Inserisci il tuo nome.", enterEmail: "Inserisci un indirizzo e-mail valido.", consentRequired: "Conferma il consenso prima dell’invio.", whatsapp: "Invia via WhatsApp" },
  es: { email: "Tu e-mail", emailPlaceholder: "Dirección de e-mail", consent: "Acepto que LIDYA utilice estos datos para responder a mi solicitud de servicio de acuerdo con la", privacy: "Política de privacidad", submit: "Enviar solicitud de servicio", submitting: "Enviando...", success: "Tu solicitud de servicio ha sido recibida. Referencia", partial: "La solicitud se guardó, pero uno de los correos de notificación no pudo entregarse.", selectService: "Selecciona al menos un servicio.", enterName: "Introduce tu nombre.", enterEmail: "Introduce una dirección de e-mail válida.", consentRequired: "Confirma tu consentimiento antes de enviar.", whatsapp: "Enviar por WhatsApp" },
};

const CONTACT_PHONES: Record<string, string> = {
  victor: "905325672777",
  vierka: "905378278599",
  benny: "905376694584",
};

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ServiceResendBridge() {
  const { locale } = useLanguage();
  const copy = COPY[locale];
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  useEffect(() => {
    const ensureBridge = () => {
      const section = document.getElementById("services");
      const nameInput = document.getElementById("service-name");
      if (!section || !nameInput) return;

      const panel = nameInput.parentElement?.parentElement?.parentElement as HTMLElement | null;
      if (!panel) return;

      const actionGroups = Array.from(panel.querySelectorAll<HTMLElement>("div")).filter((el) =>
        el.className.includes("mt-7") && el.className.includes("sm:flex-row")
      );
      const originalActions = actionGroups[actionGroups.length - 1];
      if (originalActions) originalActions.style.display = "none";

      let root = document.getElementById("service-resend-bridge-root");
      if (!root) {
        root = document.createElement("div");
        root.id = "service-resend-bridge-root";
        if (originalActions?.parentElement === panel) panel.insertBefore(root, originalActions);
        else panel.appendChild(root);
      }
      if (root !== portalRoot) setPortalRoot(root);
    };

    ensureBridge();
    const observer = new MutationObserver(ensureBridge);
    const section = document.getElementById("services");
    if (section) observer.observe(section, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [locale, portalRoot]);

  const selectedContact = useMemo(() => {
    if (typeof document === "undefined") return { key: "victor", name: "Zafer (Victor)" };
    const select = document.getElementById("service-contact") as HTMLSelectElement | null;
    return {
      key: select?.value || "victor",
      name: select?.selectedOptions?.[0]?.textContent?.trim() || "Zafer (Victor)",
    };
  }, [portalRoot, message]);

  const getSelectedServices = () => {
    const section = document.getElementById("services");
    if (!section) return [];
    return Array.from(section.querySelectorAll<HTMLButtonElement>("button"))
      .filter((button) => button.textContent?.includes("✓"))
      .map((button) => (button.textContent || "").replace("✓", "").trim())
      .filter(Boolean);
  };

  const getFormValues = () => {
    const name = (document.getElementById("service-name") as HTMLInputElement | null)?.value.trim() || "";
    const note = (document.getElementById("service-note") as HTMLTextAreaElement | null)?.value.trim() || "";
    const contact = document.getElementById("service-contact") as HTMLSelectElement | null;
    const preferredContact = contact?.selectedOptions?.[0]?.textContent?.trim() || "Zafer (Victor)";
    const contactKey = contact?.value || "victor";
    return { name, note, preferredContact, contactKey };
  };

  const submitRequest = async (event: FormEvent) => {
    event.preventDefault();
    setMessage("");
    setMessageType("");

    const services = getSelectedServices();
    const { name, note, preferredContact } = getFormValues();

    if (!services.length) return showError(copy.selectService);
    if (!name) return showError(copy.enterName);
    if (!validEmail(email.trim())) return showError(copy.enterEmail);
    if (!consent) return showError(copy.consentRequired);

    setSubmitting(true);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "service",
          name,
          email: email.trim(),
          locale,
          subject: "LIDYA service request",
          message: note || `Service request: ${services.join(", ")}`,
          preferredContact,
          selectedServices: services,
          source: "services-page",
          consent: true,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to submit your request.");

      const fullyDelivered = data.confirmationEmailSent && data.adminNotificationSent;
      setMessageType(fullyDelivered ? "success" : "error");
      setMessage(fullyDelivered ? `${copy.success} ${data.reference}.` : `${copy.partial} ${data.reference ? `(${data.reference})` : ""}`);
      if (fullyDelivered) setConsent(false);
    } catch (error) {
      showError(error instanceof Error ? error.message : "Unable to submit your request.");
    } finally {
      setSubmitting(false);
    }
  };

  const showError = (text: string) => {
    setMessageType("error");
    setMessage(text);
  };

  const sendWhatsApp = () => {
    const services = getSelectedServices();
    const { name, note, contactKey } = getFormValues();
    if (!services.length) return showError(copy.selectService);
    const phone = CONTACT_PHONES[contactKey] || CONTACT_PHONES.victor;
    const text = [
      "LIDYA service request",
      name ? `Name: ${name}` : "",
      `Services: ${services.join(", ")}`,
      note ? `Note: ${note}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  if (!portalRoot) return null;

  return createPortal(
    <form onSubmit={submitRequest} className="mt-7 border-t border-plum-dark/10 pt-7">
      <div>
        <label htmlFor="service-email" className="mb-2 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-plum-dark/55">
          {copy.email}
        </label>
        <input
          id="service-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => { setEmail(event.target.value); setMessage(""); setMessageType(""); }}
          placeholder={copy.emailPlaceholder}
          className="w-full border-b border-plum-dark/20 bg-transparent px-0 py-3 text-center text-sm text-plum-dark outline-none transition-colors duration-300 placeholder:text-grey/50 focus:border-gold md:text-left"
        />
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3 text-left text-[0.7rem] leading-5 text-grey">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => { setConsent(event.target.checked); setMessage(""); setMessageType(""); }}
          className="mt-1 accent-[#c9a45c]"
        />
        <span>
          {copy.consent}{" "}
          <Link href="/privacy" className="text-plum-dark underline underline-offset-4 hover:text-gold">
            {copy.privacy}
          </Link>.
        </span>
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex min-h-[54px] flex-1 items-center justify-center gap-4 bg-gold px-6 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:bg-gold-light disabled:cursor-wait disabled:opacity-60"
        >
          {submitting ? copy.submitting : copy.submit}
          {!submitting && <span className="text-base transition-transform duration-500 group-hover:translate-x-1">→</span>}
        </button>
        <button
          type="button"
          onClick={sendWhatsApp}
          className="group inline-flex min-h-[54px] flex-1 items-center justify-center gap-4 border border-plum-dark/20 px-6 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-plum-dark transition-all duration-500 hover:border-plum-dark hover:bg-plum-dark hover:text-brand-white"
        >
          {copy.whatsapp}
          <span className="text-base transition-transform duration-500 group-hover:translate-x-1">→</span>
        </button>
      </div>

      {message && (
        <div className={`mt-4 border px-4 py-3 text-center text-xs leading-5 md:text-left ${messageType === "success" ? "border-gold/40 bg-gold/[0.08] text-plum-dark" : "border-red-300/50 bg-red-50 text-red-800"}`} aria-live="polite">
          {message}
        </div>
      )}
    </form>,
    portalRoot
  );
}

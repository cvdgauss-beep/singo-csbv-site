import { useState } from "react";
import {
  IconShieldCheck,
  IconDroplet,
  IconSettings,
  IconBrandWhatsapp,
  IconMail,
  IconWorld,
  IconMenu,
  IconX,
} from "@tabler/icons-react";
import "./prototype.css";

/* ---------------- i18n ---------------- */

const T = {
  en: {
    dir: "ltr",
    nav: ["Products", "Applications", "Quality", "Factory", "Contact"],
    navTargets: ["#products", "#contact", "#quality", "#contact", "#contact"],
    label: "CSBV · 20# Carbon Steel Ball Valves · Made by SINGO, Yuhuan",
    demoNote: "Demo preview · images and specifications pending verification",
    h1a: "CSBV 20# Carbon Steel",
    h1b: "Ball Valves, DN15–DN50",
    sub: "Zinc-plated forged 20# carbon steel bodies for water and gas lines. Factory-direct, OEM & ODM welcome, specifications confirmed per order.",
    quote: "Get a Quote",
    whatsapp: "Chat on WhatsApp",
    spec: [
      "DN15–DN50",
      "20# carbon steel",
      "Water / gas lines",
      "Red / blue PVC-coated handle",
      "Specifications on request",
    ],
    trust: [
      { icon: "steel", big: "20# Steel", small: "Forged carbon steel body" },
      { icon: "water", big: "Water / Gas", small: "Two application lines" },
      { icon: "shield", big: "Zinc-Plated", small: "Protective surface finish" },
      { icon: "oem", big: "OEM / ODM", small: "Private label welcome" },
    ],
    productsTitle: "CSBV Series",
    productsSub: "Model codes follow the SINGO catalogue. Specifications are confirmed per order.",
    inquire: "Send Inquiry",
    viewSpecs: "View specs",
    formTitle: "Get a Quote",
    formSub: "This demo opens an email draft. No data is stored on the site.",
    f_name: "Name",
    f_email: "Email",
    f_country: "Country",
    f_model: "Product / Model",
    f_msg: "Message",
    send: "Send Inquiry",
    sent: "Your email draft should now be open. If not, email us directly.",
    orMail: "or email",
  },
  ru: {
    dir: "ltr",
    nav: ["Продукция", "Применение", "Качество", "Завод", "Контакты"],
    navTargets: ["#products", "#contact", "#quality", "#contact", "#contact"],
    label: "CSBV · Шаровые краны из стали 20# · завод SINGO, Юйхуань",
    demoNote: "Демо-версия · изображения и спецификации ожидают проверки",
    h1a: "CSBV Шаровые краны",
    h1b: "из стали 20#, DN15–DN50",
    sub: "Цинкованные кованые корпуса из углеродистой стали 20# для воды и газа. Напрямую с завода, OEM и ODM, спецификации подтверждаются под заказ.",
    quote: "Запросить цену",
    whatsapp: "Написать в WhatsApp",
    spec: [
      "DN15–DN50",
      "Сталь 20#",
      "Вода / газ",
      "Рукоятка ПВХ, красная / синяя",
      "Спецификации по запросу",
    ],
    trust: [
      { icon: "steel", big: "Сталь 20#", small: "Кованый корпус из углеродистой стали" },
      { icon: "water", big: "Вода / газ", small: "Две линии применения" },
      { icon: "shield", big: "Цинковое покрытие", small: "Защитная обработка поверхности" },
      { icon: "oem", big: "OEM / ODM", small: "Производим под вашей маркой" },
    ],
    productsTitle: "Серия CSBV",
    productsSub: "Коды моделей по каталогу SINGO. Спецификации подтверждаются под заказ.",
    inquire: "Отправить запрос",
    viewSpecs: "Характеристики",
    formTitle: "Запросить цену",
    formSub: "В демо-версии откроется черновик письма. Данные на сайте не сохраняются.",
    f_name: "Имя",
    f_email: "Эл. почта",
    f_country: "Страна",
    f_model: "Продукт / модель",
    f_msg: "Сообщение",
    send: "Отправить запрос",
    sent: "Черновик письма должен открыться. Если нет, напишите нам напрямую.",
    orMail: "или эл. почта",
  },
  ar: {
    dir: "rtl",
    nav: ["المنتجات", "التطبيقات", "الجودة", "المصنع", "اتصل بنا"],
    navTargets: ["#products", "#contact", "#quality", "#contact", "#contact"],
    label: "CSBV · محابس كروية من الفولاذ الكربوني درجة 20 · مصنع سينغو، يوهوان",
    demoNote: "معاينة تجريبية · الصور والمواصفات قيد التحقق",
    h1a: "محابس CSBV من",
    h1b: "الفولاذ الكربوني درجة 20، DN15–DN50",
    sub: "أجسام فولاذ مطروق من الفولاذ الكربوني درجة 20 مطلية بالزنك لخطوط الماء والغاز. مباشرة من المصنع، OEM و ODM، والمواصفات تؤكد حسب الطلب.",
    quote: "اطلب عرض سعر",
    whatsapp: "تواصل عبر واتساب",
    spec: [
      "DN15–DN50",
      "فولاذ كربوني درجة 20",
      "خطوط الماء / الغاز",
      "مقبض PVC أحمر / أزرق",
      "المواصفات عند الطلب",
    ],
    trust: [
      { icon: "steel", big: "فولاذ درجة 20", small: "جسم فولاذ كربوني مطروق" },
      { icon: "water", big: "ماء / غاز", small: "خطان للتطبيق" },
      { icon: "shield", big: "طلاء زنك", small: "معالجة سطحية واقية" },
      { icon: "oem", big: "OEM / ODM", small: "علامة تجارية خاصة" },
    ],
    productsTitle: "سلسلة CSBV",
    productsSub: "رموز الموديلات وفق كتالوج SINGO. والمواصفات تؤكد حسب الطلب.",
    inquire: "أرسل استفسارًا",
    viewSpecs: "المواصفات",
    formTitle: "اطلب عرض سعر",
    formSub: "تفتح النسخة التجريبية مسودة بريد إلكتروني. لا يتم تخزين البيانات على الموقع.",
    f_name: "الاسم",
    f_email: "البريد الإلكتروني",
    f_country: "الدولة",
    f_model: "المنتج / الموديل",
    f_msg: "الرسالة",
    send: "أرسل الاستفسار",
    sent: "يجب أن تكون مسودة البريد مفتوحة الآن. إذا لم تفتح، راسلنا مباشرة.",
    orMail: "أو البريد الإلكتروني",
  },
};

const ASSET_BASE = import.meta.env.BASE_URL;

const PRODUCTS = [
  {
    code: "1001",
    img: `${ASSET_BASE}assets/thumb_red_front.webp`,
    line1: "DN15–DN50",
    line2: { en: "Water line · Red handle", ru: "Вода · красная рукоятка", ar: "خط الماء · مقبض أحمر" },
  },
  {
    code: "1002",
    img: `${ASSET_BASE}assets/thumb_blue_mid.webp`,
    line1: "DN15–DN50",
    line2: { en: "Gas line · Blue handle", ru: "Газ · синяя рукоятка", ar: "خط الغاز · مقبض أزرق" },
  },
  {
    code: "1003",
    img: `${ASSET_BASE}assets/thumb_red_back.webp`,
    line1: "DN15–DN50",
    line2: { en: "Water line · Red handle", ru: "Вода · красная рукоятка", ar: "خط الماء · مقبض أحمر" },
  },
];

const EMAIL = "jason.jingo@foxmail.com";
const WHATSAPP = "https://wa.me/8618658669236";

/* ---------------- app ---------------- */

export function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [preset, setPreset] = useState("");
  const t = T[lang];
  const rtl = t.dir === "rtl";

  const openQuote = (model = "") => {
    setPreset(model);
    setQuoteOpen(true);
    setMenuOpen(false);
  };

  const trustIcon = (key) =>
    key === "water" ? (
      <IconDroplet size={26} stroke={1.4} />
    ) : key === "shield" ? (
      <IconShieldCheck size={26} stroke={1.4} />
    ) : (
      <IconSettings size={26} stroke={1.4} />
    );

  return (
    <div className={`page ${rtl ? "rtl" : ""}`} dir={t.dir}>
      {/* ============ top bar ============ */}
      <header className="topbar">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">SINGO</span>
          <span className="brand-sub">
            SYSTEMS<small>Yuhuan · Zhejiang</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {t.nav.map((n, i) => (
            <a key={i} href={t.navTargets[i]} onClick={() => setMenuOpen(false)}>
              {n}
            </a>
          ))}
        </nav>

        <div className="topbar-right">
          <div className="lang" role="group" aria-label="Language">
            {["en", "ru", "ar"].map((l) => (
              <button
                key={l}
                className={`lang-btn ${lang === l ? "active" : ""}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="btn btn-accent" onClick={() => openQuote()}>
            {t.quote}
          </button>
          <button
            className="menu-toggle"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconX size={22} /> : <IconMenu size={22} />}
          </button>
        </div>
      </header>

      <div className="demo-note">{t.demoNote}</div>

      {/* ============ hero ============ */}
      <section
        className="hero"
        id="top"
      >
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-label">{t.label}</div>
            <h1>
              {t.h1a}
              <br />
              {t.h1b}
            </h1>
            <div className="hero-ctas">
              <button className="btn btn-accent btn-lg" onClick={() => openQuote()}>
                {t.quote}
              </button>
              <a className="btn btn-ghost btn-lg" href={WHATSAPP} target="_blank" rel="noreferrer">
                <IconBrandWhatsapp size={20} stroke={1.6} />
                {t.whatsapp}
              </a>
            </div>
            <div className="hero-spec">
              {t.spec.map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>

          </div>
          <div className="hero-media">
            <img
              className="hero-product-image"
              src={`${ASSET_BASE}assets/hero_products.webp`}
              alt="SINGO 20# carbon steel ball valve product range"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* ============ trust bar ============ */}
      <section className="trust" id="quality">
        <div className="trust-inner">
          {t.trust.map((item, i) => (
            <div className="trust-item" key={i}>
              <div className="trust-icon">{trustIcon(item.icon, i)}</div>
              <div>
                <div className="trust-big">{item.big}</div>
                <div className="trust-small">{item.small}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ products ============ */}
      <section className="products" id="products">
        <div className="products-head">
          <h2>{t.productsTitle}</h2>
          <p>{t.productsSub}</p>
        </div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <article className="product-card" key={p.code}>
              <div className="product-head">
                <div className="product-code">{p.code}</div>
                <span className="demo-badge">Demo visual</span>
              </div>
              <img src={p.img} alt={`CSBV ${p.code} carbon steel ball valve`} loading="lazy" />
              <div className="product-meta">
                <div className="product-line1">{p.line1}</div>
                <div className="product-line2">{p.line2[lang]}</div>
              </div>
              <div className="product-actions">
                <button className="link-btn" onClick={() => openQuote(`CSBV ${p.code}`)}>
                  {t.viewSpecs} →
                </button>
                <button className="btn btn-accent btn-sm" onClick={() => openQuote(`CSBV ${p.code}`)}>
                  {t.inquire}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ contact strip ============ */}
      <section className="contact-strip" id="contact">
        <div className="contact-inner">
          <div>
            <h3>{t.formTitle}</h3>
            <p>{t.formSub}</p>
            <div className="contact-channels">
              <a href={`mailto:${EMAIL}`}>
                <IconMail size={18} stroke={1.6} /> {EMAIL}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <IconBrandWhatsapp size={18} stroke={1.6} /> +86 186 5866 9236
              </a>
            </div>
          </div>
          <button className="btn btn-accent btn-lg" onClick={() => openQuote()}>
            {t.inquire}
          </button>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 SINGO SYSTEMS · Yuhuan, Zhejiang, China</span>
        <span className="footer-mono">CSBV-WEB-2026</span>
      </footer>

      {/* ============ quote modal ============ */}
      {quoteOpen && (
        <QuoteModal t={t} preset={preset} email={EMAIL} onClose={() => setQuoteOpen(false)} />
      )}
    </div>
  );
}

/* ---------------- quote modal ---------------- */

function QuoteModal({ t, preset, email, onClose }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    model: preset,
    msg: "",
  });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = `Inquiry: ${form.model || "CSBV Ball Valves"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Country: ${form.country}`,
      `Product / Model: ${form.model}`,
      "",
      form.msg,
    ].join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          <IconX size={20} />
        </button>
        {sent ? (
          <div className="sent">
            <div className="sent-mark">✓</div>
            <p>{t.sent}</p>
            <a className="btn btn-ghost" href={`mailto:${email}`}>
              {t.orMail}: {email}
            </a>
          </div>
        ) : (
          <>
            <h3>{t.formTitle}</h3>
            <p className="modal-sub">{t.formSub}</p>
            <form onSubmit={submit}>
              <div className="field-row">
                <label>
                  {t.f_name}
                  <input required value={form.name} onChange={set("name")} />
                </label>
                <label>
                  {t.f_email}
                  <input required type="email" value={form.email} onChange={set("email")} />
                </label>
              </div>
              <div className="field-row">
                <label>
                  {t.f_country}
                  <input value={form.country} onChange={set("country")} />
                </label>
                <label>
                  {t.f_model}
                  <input value={form.model} onChange={set("model")} />
                </label>
              </div>
              <label>
                {t.f_msg}
                <textarea rows={4} value={form.msg} onChange={set("msg")} />
              </label>
              <button className="btn btn-accent btn-lg btn-full" type="submit">
                {t.send}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

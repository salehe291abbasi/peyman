"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  CheckCheck,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Menu,
  Plus,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Brand } from "./brand";
import { ThemeToggle } from "./theme-toggle";
import { LoginEntry } from "./login-entry";
import { LandingFooter } from "./landing-footer";
import { HeroRoute, Lifecycle, PanelPreview } from "./landing-demos";
import { tabKey } from "./product-preview";
import { landingContent as content, landingNavigation } from "@/lib/content";
import { faqGroups } from "@/lib/faq-content";

const roleIcons = [GraduationCap, HeartHandshake, ClipboardList, ShieldCheck];

export function Landing() {
  const [menu, setMenu] = useState(false);
  const [role, setRole] = useState(0);
  const [shot, setShot] = useState(2);
  const [guide, setGuide] = useState(0);
  const [faq, setFaq] = useState(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const current = content.roles[role];
  function selectGuide(index: number) {
    setGuide(index);
    setShot(content.guide[index].view);
  }

  return (
    <div
      className="peyman-landing"
      id="top"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu) {
          setMenu(false);
          menuButton.current?.focus();
        }
      }}
    >
      <a className="skip-link" href="#main">
        رفتن به محتوای اصلی
      </a>
      <header className="pl-header">
        <div className="pl-container pl-nav">
          <Brand />
          <nav
            id="landing-navigation"
            className={menu ? "pl-links is-open" : "pl-links"}
            aria-label="ناوبری اصلی"
            onClick={() => setMenu(false)}
          >
            {landingNavigation.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pl-nav-actions">
            <ThemeToggle />
            <span className="pl-nav-divider" aria-hidden="true" />
            <LoginEntry
              onPreview={(index) => {
                setRole(index);
                setShot(content.roles[index].view);
                requestAnimationFrame(() =>
                  document
                    .getElementById("shot-panel")
                    ?.focus({ preventScroll: true }),
                );
              }}
            />
          </div>
          <button
            ref={menuButton}
            className="pl-menu"
            aria-label={menu ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menu}
            aria-controls="landing-navigation"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="pl-hero" aria-labelledby="hero-title">
          <div className="pl-container pl-hero-grid">
            <div className="pl-hero-copy">
              <span className="pl-eyebrow">
                <span />
                {content.eyebrow}
              </span>
              <h1 id="hero-title">
                {content.title}
                <br />
                <em>{content.titleAccent}</em>
              </h1>
              <p>{content.intro}</p>
              <div className="pl-actions">
                <a className="pl-button" href="#roles">
                  مسیر خودتان را پیدا کنید{" "}
                  <ArrowLeft size={19} aria-hidden="true" />
                </a>
                <a className="pl-text-link" href="#preview">
                  دیدن محصول <ArrowUpLeft size={19} aria-hidden="true" />
                </a>
              </div>
              <span className="pl-demo-note">
                <Sparkles size={15} aria-hidden="true" />
                {content.demoNote}
              </span>
            </div>
            <div className="pl-hero-visual">
              <div className="pl-visual-label">
                <span>از یک تصمیم، تا یک تجربهٔ یادگیری</span>
                <span dir="ltr">PEYMAN / 01</span>
              </div>
              <div className="reference-hero pl-route">
                <HeroRoute />
              </div>
              <div className="pl-visual-footer">
                <span>
                  <CheckCheck size={18} aria-hidden="true" /> یک پروندهٔ مشترک
                </span>
                <span>مسئولیت‌های روشن، در هر مرحله</span>
              </div>
            </div>
          </div>
          <div className="pl-container pl-value-strip">
            {content.benefits.map((item, index) => (
              <div key={item.title}>
                <span className="pl-index">
                  {(index + 1).toLocaleString("fa", {
                    minimumIntegerDigits: 2,
                  })}
                </span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="pl-section"
          id="roles"
          aria-labelledby="roles-title"
        >
          <div className="pl-container">
            <div className="pl-section-heading">
              <div>
                <span className="pl-eyebrow">پیمان، از نگاه شما</span>
                <h2 id="roles-title">
                  یک اردو؛
                  <br />
                  نیازهای متفاوت، مسیر مشترک.
                </h2>
              </div>
              <p>
                نقش خودتان را انتخاب کنید.
                <br />
                ببینید پیمان برای کار شما چگونه طراحی شده است.
              </p>
            </div>
            <div
              className="pl-role-tabs"
              role="tablist"
              aria-label="نقش شما در پیمان"
            >
              {content.roles.map((item, index) => {
                const Icon = roleIcons[index];
                return (
                  <button
                    key={item.label}
                    role="tab"
                    id={`role-${index}`}
                    aria-selected={role === index}
                    aria-controls="role-panel"
                    tabIndex={role === index ? 0 : -1}
                    onClick={() => setRole(index)}
                    onKeyDown={(event) =>
                      tabKey(event, role, content.roles.length, setRole)
                    }
                  >
                    <Icon size={24} aria-hidden="true" />
                    <span>
                      <strong>{item.label}</strong>
                      <small>{item.subtitle}</small>
                    </span>
                    <ArrowUpLeft size={18} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
            <div
              className="pl-role-panel"
              role="tabpanel"
              id="role-panel"
              aria-labelledby={`role-${role}`}
              tabIndex={0}
            >
              <div>
                <span className="pl-pill">برای {current.label}</span>
                <h3>{current.title}</h3>
                <p>{current.description}</p>
                <a
                  className="pl-text-link"
                  href="#preview"
                  onClick={() => setShot(current.view)}
                >
                  {current.action}
                  <ArrowLeft size={18} aria-hidden="true" />
                </a>
              </div>
              <ul>
                {current.points.map((point) => (
                  <li key={point}>
                    <Check size={18} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="pl-section pl-product-section"
          id="preview"
          aria-labelledby="preview-title"
        >
          <div className="pl-container">
            <div className="pl-section-heading">
              <div>
                <span className="pl-eyebrow">از توضیح، به تجربه</span>
                <h2 id="preview-title">
                  کارهای پراکنده،
                  <br />
                  حالا یک تصویر روشن دارند.
                </h2>
              </div>
              <p>
                این یک پیش‌نمایش تعاملی از رابط پیشنهادی است.
                <br />
                همهٔ اطلاعات نمونه‌اند و هیچ درخواستی ارسال نمی‌شود.
              </p>
            </div>
            <div
              className="pl-preview-tabs"
              role="tablist"
              aria-label="پیش‌نمایش صفحات"
            >
              {content.previewTabs.map((title, index) => (
                <button
                  key={title}
                  role="tab"
                  id={`shot-${index}`}
                  aria-controls="shot-panel"
                  aria-selected={shot === index}
                  tabIndex={shot === index ? 0 : -1}
                  onClick={() => setShot(index)}
                  onKeyDown={(event) =>
                    tabKey(event, shot, content.previewTabs.length, setShot)
                  }
                >
                  {title}
                </button>
              ))}
            </div>
            <div
              className="pl-preview-window"
              id="shot-panel"
              role="tabpanel"
              aria-labelledby={`shot-${shot}`}
              tabIndex={0}
            >
              <div className="pl-window-bar">
                <span>
                  <i />
                  <i />
                  <i />
                </span>
                <span>پیمان / محیط نمایشی</span>
                <span>
                  <ShieldCheck size={14} aria-hidden="true" /> دادهٔ نمونه
                </span>
              </div>
              <PanelPreview view={shot} />
            </div>
            <div className="pl-guide">
              <div>
                <span className="pl-eyebrow">یک مرور کوتاه</span>
                <h3>از کجا شروع می‌شود؟</h3>
                <div
                  className="pl-guide-steps"
                  role="tablist"
                  aria-label="راهنمای شروع"
                >
                  {content.guide.map((item, index) => (
                    <button
                      key={item.title}
                      role="tab"
                      id={`guide-${index}`}
                      aria-controls="guide-panel"
                      aria-selected={guide === index}
                      tabIndex={guide === index ? 0 : -1}
                      onClick={() => selectGuide(index)}
                      onKeyDown={(event) =>
                        tabKey(event, guide, content.guide.length, selectGuide)
                      }
                    >
                      <span>{(index + 1).toLocaleString("fa")}</span>
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
              <div
                role="tabpanel"
                id="guide-panel"
                aria-labelledby={`guide-${guide}`}
                tabIndex={0}
              >
                <span className="pl-pill">{content.guide[guide].status}</span>
                <p>{content.guide[guide].text}</p>
                <button
                  className="pl-text-link"
                  onClick={() =>
                    selectGuide((guide + 1) % content.guide.length)
                  }
                >
                  {guide === 2 ? "مرور دوباره" : "مرحلهٔ بعد"}
                  <ArrowLeft size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="pl-section"
          id="lifecycle"
          aria-labelledby="lifecycle-title"
        >
          <div className="pl-container">
            <div className="pl-section-heading">
              <div>
                <span className="pl-eyebrow">هیچ قدمی مبهم نماند</span>
                <h2 id="lifecycle-title">
                  از اولین درخواست،
                  <br />
                  تا آخرین «رسیدیم».
                </h2>
              </div>
              <p>
                هر مرحله را انتخاب کنید تا اقدام و مسئول آن را ببینید.
                <br />
                این مسیر، فرایند پیشنهادی محصول را نشان می‌دهد.
              </p>
            </div>
            <Lifecycle />
          </div>
        </section>
        <section className="pl-trust">
          <div className="pl-container pl-trust-grid">
            <div>
              <ShieldCheck size={34} aria-hidden="true" />
              <h2>
                اعتماد، با شفافیت
                <br />
                ساخته می‌شود.
              </h2>
              <p>
                پیمان ابزار هماهنگی و مستندسازی است؛ مسئولیت اجرای اردو و
                تصمیم‌های نظارتی با مدرسه و مراجع مربوط باقی می‌ماند.
              </p>
            </div>
            <div>
              {content.trust.map((item, index) => (
                <article key={item.title}>
                  <span>
                    {(index + 1).toLocaleString("fa", {
                      minimumIntegerDigits: 2,
                    })}
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="pl-section"
          id="questions"
          aria-labelledby="faq-title"
        >
          <div className="pl-container">
            <div className="pl-section-heading">
              <div>
                <span className="pl-eyebrow">پیش از شروع</span>
                <h2 id="faq-title">
                  پرسش شما،
                  <br />
                  پاسخ روشن دارد.
                </h2>
              </div>
              <p>راهنمای هر مخاطب را جداگانه مرور کنید.</p>
            </div>
            <div className="faq-layout">
              <div
                className="faq-categories"
                role="tablist"
                aria-label="دسته‌بندی پرسش‌ها"
              >
                {faqGroups.map((group, index) => (
                  <button
                    key={group.label}
                    role="tab"
                    id={`faq-${index}`}
                    aria-controls="faq-panel"
                    aria-selected={faq === index}
                    tabIndex={faq === index ? 0 : -1}
                    onClick={() => setFaq(index)}
                    onKeyDown={(event) =>
                      tabKey(event, faq, faqGroups.length, setFaq)
                    }
                  >
                    {group.label}
                    <span>{group.items.length.toLocaleString("fa")}</span>
                  </button>
                ))}
              </div>
              <div
                key={faq}
                id="faq-panel"
                role="tabpanel"
                aria-labelledby={`faq-${faq}`}
                tabIndex={0}
              >
                {faqGroups[faq].items.map(([question, answer]) => (
                  <details key={question}>
                    <summary>
                      {question}
                      <Plus size={19} aria-hidden="true" />
                    </summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter onRole={setRole} />
    </div>
  );
}

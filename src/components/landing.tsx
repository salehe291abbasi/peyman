"use client";
import { useState } from "react";
import { Menu, ArrowUpLeft, Plus } from "lucide-react";
import { Brand } from "./brand";
import { tabKey } from "./product-preview";
import { referenceRoles } from "@/lib/reference-content";
import { faqGroups } from "@/lib/faq-content";
import { HeroRoute, Lifecycle, PanelPreview } from "./landing-demos";
const shots = [
  { id: "dashboard", label: "داشبورد سازمان" },
  { id: "trip", label: "جزئیات سفر" },
  { id: "requests", label: "درخواست‌ها" },
  { id: "consent", label: "رضایت‌نامه‌ها" },
  { id: "supplier", label: "صندوق تأمین‌کننده" },
];
export function Landing() {
  const [menu, setMenu] = useState(false);
  const [role, setRole] = useState(1);
  const [shot, setShot] = useState(0);
  const [faq, setFaq] = useState(0);
  const current = referenceRoles[role];
  return (
    <div
      id="top"
      onKeyDown={(e) => {
        if (e.key === "Escape") setMenu(false);
      }}
    >
      <a className="skip-link" href="#main">
        رفتن به محتوای اصلی
      </a>
      <header className="premium-header">
        <div className="container premium-nav">
          <Brand />
          <nav
            aria-label="ناوبری اصلی"
            className={menu ? "premium-links open" : "premium-links"}
            onClick={() => setMenu(false)}
          >
            <a href="#problem">چرا پیمان؟</a>
            <a href="#features">راهکارها</a>
            <a href="#lifecycle">مسیر اردو</a>
            <a href="#roles">نقش‌ها</a>
            <a href="#questions">پرسش‌ها</a>
          </nav>
          <a className="nav-demo" href="#preview">
            کاوش در پیمان <ArrowUpLeft size={17} />
          </a>
          <button
            className="nav-toggle"
            aria-label="منوی اصلی"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <Menu size={23} />
          </button>
        </div>
      </header>
      <main id="main">
        <section className="reference-hero">
          <div className="grid" />
          <div className="container">
            <div className="hgrid">
              <div>
                <h1 className="rise">
                  هر اردو، یک پرونده‌ی زنده{" "}
                  <span className="rise">که همه به آن اعتماد دارند</span>
                </h1>
                <p className="s rise">
                  پیمان، مدرسه، مرکز پذیرنده، حمل‌ونقل، تغذیه، والدین و
                  آموزش‌وپرورش را در یک جریان قابل ردیابی به هم وصل می‌کند؛ از
                  اولین درخواست تا ثبت بازگشت و تحویل دانش‌آموز.
                </p>
                <div className="cta rise">
                  <a className="hero-btn p" href="#preview">
                    مشاهدهٔ پیش‌نمایش
                  </a>
                  <a className="hero-btn g" href="#lifecycle">
                    مسیر یک اردو را ببینید
                  </a>
                </div>
                <div className="pills rise">
                  <b>مدارک معتبر، پیش از رزرو</b>
                  <b>رضایت دیجیتال والدین</b>
                  <b>داشبورد نظارتی سازمان</b>
                </div>
              </div>
              <HeroRoute />
            </div>
          </div>
        </section>{" "}
        <section
          className="section"
          id="problem"
          aria-labelledby="problem-title"
        >
          <div className="container">
            <header className="section-head reveal">
              <span className="kicker">چالش و راه‌حل</span>
              <h2 id="problem-title">
                برنامه‌ریزی یک سفر مدرسه نباید از چند گروه پیام و چند برگه‌ی
                کاغذ بگذرد.
              </h2>
            </header>

            <div className="problem-grid">
              <div className="problem-col reveal">
                <h3 className="col-label col-label-muted">
                  امروز، بیشتر سفرها چنین پیش می‌روند
                </h3>
                <ol className="pain-list">
                  <li>
                    <b>پیگیری پراکنده</b>
                    <span>
                      وضعیت درخواست‌ها در تلفن، پیامک و ایمیل گم می‌شود و کسی
                      دقیق نمی‌داند کدام مرحله مانده است.
                    </span>
                  </li>
                  <li>
                    <b>رزرو بی‌مرجع</b>
                    <span>
                      مکان، وسیله‌ی نقلیه و غذا جدا از هم رزرو می‌شوند و
                      ظرفیت‌ها با تعداد دانش‌آموزان نمی‌خواند.
                    </span>
                  </li>
                  <li>
                    <b>رضایت‌نامه‌ی کاغذی</b>
                    <span>
                      اولیا برگه را دیر برمی‌گردانند و مدرسه تا روز آخر نمی‌داند
                      چه کسی همراه سفر است.
                    </span>
                  </li>
                  <li>
                    <b>نبود گزارش روشن</b>
                    <span>
                      حاضران، بازگشت و حادثه‌ها هیچ‌جا یکجا ثبت نمی‌شود و گزارش
                      پایانی با حافظه نوشته می‌شود.
                    </span>
                  </li>
                </ol>
              </div>

              <div className="bridge reveal" data-delay="1" aria-hidden="true">
                <span></span>
              </div>

              <div className="solution-col reveal" data-delay="2">
                <h3 className="col-label col-label-teal">
                  با پیمان، همه‌چیز یک مسیر دارد
                </h3>
                <ul className="solve-list">
                  <li>
                    <span className="solve-num">۱</span>
                    <div>
                      <b>وضعیت هر درخواست همیشه معلوم است</b>
                      <span>
                        از پیش‌نویس تا تأیید یا بازگشت، هر تغییر ثبت و به طرف
                        مقابل اعلام می‌شود.
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="solve-num">۲</span>
                    <div>
                      <b>رزرو کنار هم و با قاعده</b>
                      <span>
                        مکان ابتدا تأیید می‌شود و حمل‌ونقل و پذیرایی بعد از آن،
                        با ظرفیت و مبلغ مشخص.
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="solve-num">۳</span>
                    <div>
                      <b>رضایت دیجیتال و مشخص</b>
                      <span>
                        هر اولیا برای شرکت و عکس‌برداری فرزند پاسخ می‌دهد و
                        فهرست نهایی خودکار به‌روز می‌شود.
                      </span>
                    </div>
                  </li>
                  <li>
                    <span className="solve-num">۴</span>
                    <div>
                      <b>از آمادگی تا گزارش پایانی</b>
                      <span>
                        چک‌لیست ایمنی، ثبت حاضران، بازگشت و امتیاز تأمین‌کنندگان
                        در همان سامانه انجام می‌شود.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section section-tint"
          id="features"
          aria-labelledby="features-title"
        >
          <div className="container">
            <header className="section-head section-head-split reveal">
              <div>
                <span className="kicker">قابلیت‌های اصلی</span>
                <h2 id="features-title">
                  هر بخش از سفر، ابزار مخصوص خودش را دارد.
                </h2>
              </div>
              <p className="muted">
                این قابلیت‌ها در یک سامانه‌ی واحد کار می‌کنند، پس داده‌ی یک بخش
                بی‌درنگ در بخش‌های دیگر دیده می‌شود.
              </p>
            </header>

            <div className="bento">
              <article className="feature feature-xl reveal">
                <div className="feature-ico tone-blue">
                  <svg viewBox="0 0 24 24">
                    <path d="M7 3h7l5 5v13H7z" />
                    <path d="M14 3v5h5M10 13h6M10 17h4" />
                  </svg>
                </div>
                <h3>مدیریت درخواست‌های مدرسه</h3>
                <p>
                  مدیر مدرسه درخواست سفر را با هدف آموزشی، پایه، تاریخ و ساعت‌ها
                  تکمیل می‌کند. پیش از ارسال، اعتبارسنجی‌ها خطاها را نشان
                  می‌دهند تا درخواست ناقص به سازمان نرسد.
                </p>
                <div className="state-flow" aria-label="وضعیت‌های درخواست">
                  <span className="st st-draft">پیش‌نویس</span>
                  <i aria-hidden="true">←</i>
                  <span className="st st-sub">در انتظار بررسی</span>
                  <i aria-hidden="true">←</i>
                  <span className="st st-ok">تأیید شد</span>
                  <em>یا بازگشت برای اصلاح</em>
                </div>
              </article>

              <article className="feature feature-5 reveal" data-delay="1">
                <div className="feature-ico tone-indigo">
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12.5l4.2 4.2L19 7" />
                  </svg>
                </div>
                <h3>تأیید سازمانی</h3>
                <p>
                  کارشناس سازمان هر درخواست را تأیید، برای اصلاح بازگردانده یا
                  رد می‌کند. با تأیید، سفر خودکار ساخته می‌شود.
                </p>
              </article>

              <article className="feature feature-5 reveal" data-delay="1">
                <div className="feature-ico tone-purple">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 21s-7-6.2-7-11.2A7 7 0 0 1 19 9.8C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                </div>
                <h3>رزرو مکان بازدید</h3>
                <p>
                  موزه، باغ یا مرکز علمی با ظرفیت و ساعت ورود مشخص درخواست
                  می‌شود. مکان ابتدا باید تأیید کند.
                </p>
              </article>

              <article className="feature reveal" data-delay="2">
                <div className="feature-ico tone-blue">
                  <svg viewBox="0 0 24 24">
                    <rect x="4" y="5" width="16" height="12" rx="3" />
                    <path d="M4 12h16M8 19l-1 2M16 19l1 2" />
                  </svg>
                </div>
                <h3>حمل‌ونقل و پذیرایی</h3>
                <p>
                  وسیله‌ی نقلیه با تعداد دستگاه و صندلی، و وعده‌ی غذایی با نوع
                  رژیم و ساعت تحویل، جدا از هم رزرو و تأیید می‌شوند.
                </p>
              </article>

              <article className="feature feature-wide reveal" data-delay="1">
                <div className="feature-ico tone-green">
                  <svg viewBox="0 0 24 24">
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3.5 19c.8-3 3-4.8 5.5-4.8s4.7 1.8 5.5 4.8M16 5.2a3 3 0 0 1 0 5.6M17.5 14.4c1.7.7 2.8 2.4 3 4.6" />
                  </svg>
                </div>
                <div>
                  <h3>دانش‌آموزان و رضایت اولیا</h3>
                  <p>
                    دانش‌آموزان همان پایه به فهرست سفر افزوده می‌شوند و برای هر
                    کدام درخواست رضایت جداگانه برای والدین ارسال می‌شود. پاسخ
                    اولیا فوراً در فهرست دیده می‌شود.
                  </p>
                </div>
              </article>

              <article className="feature reveal" data-delay="2">
                <div className="feature-ico tone-teal">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 3l8 3v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z" />
                  </svg>
                </div>
                <h3>آمادگی سفر</h3>
                <p>
                  سه بررسی ایمنی (کمک‌های اولیه، شماره‌های تماس و توجیه گروه) و
                  تعداد مربی لازم، قبل از حرکت تأیید می‌شوند.
                </p>
              </article>

              <article className="feature reveal" data-delay="1">
                <div className="feature-ico tone-orange">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 17l5-5 4 4 7-8" />
                    <path d="M4 21h16" />
                  </svg>
                </div>
                <h3>حرکت، بازگشت و بستن سفر</h3>
                <p>
                  حاضران لحظه‌ی حرکت ثبت می‌شود، بازگشت یک‌به‌یک تأیید می‌شود و
                  گزارش پایانی با امتیاز تأمین‌کنندگان سفر را می‌بندد.
                </p>
              </article>

              <article className="feature reveal" data-delay="2">
                <div className="feature-ico tone-amber">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                </div>
                <h3>گزارش فعالیت و حادثه‌ها</h3>
                <p>
                  هر رویداد مهم، از درخواست تا حادثه‌ی احتمالی در سفر، با زمان و
                  نقش ثبت می‌شود. هر نقش فقط فعالیت‌های مرتبط با خودش را
                  می‌بیند.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section
          className="section"
          id="lifecycle"
          aria-labelledby="lifecycle-title"
        >
          <div className="container">
            <header className="section-head reveal">
              <span className="kicker">چرخه‌ی کامل سفر</span>
              <h2 id="lifecycle-title">
                ده مرحله، از یک درخواست تا یک گزارش بسته.
              </h2>
              <p className="muted">
                برای شناخت مسیر، هر مرحله را انتخاب کنید؛ مسئول و اقدام موردنیاز
                همان مرحله را ببینید.
              </p>
            </header>

            <Lifecycle />
            <div className="timeline-foot reveal">
              <p>
                <b>کمی بیشتر بدانید:</b> تا وقتی سفر در مرحله‌ی برنامه‌ریزی است،
                هر تغییر ممکن است. بعد از آماده‌سازی، فقط با بازگرداندن به
                برنامه‌ریزی امکان ویرایش دوباره وجود دارد.
              </p>
              <a className="btn btn-outline" href="#lifecycle">
                مشاهده‌ی مسیر کامل در نسخه‌ی نمایشی
              </a>
            </div>
          </div>
        </section>
        <section className="section section-dark" id="roles">
          <div className="container">
            <header className="section-head">
              <span className="kicker kicker-light">شش نقش، یک سفر</span>
              <h2>هر طرف ماجرا فقط کاری را می‌بیند که به آن مربوط است.</h2>
              <p className="role-intro">
                اطلاعات مشترک، مسئولیت‌های مشخص؛ هر کاربر در محدودهٔ نقش و ارتباط
                خود با سفر.
              </p>
            </header>
            <div className="roles">
              <div
                className="roles-tabs"
                role="tablist"
                aria-label="نقش‌های پیمان"
                aria-orientation="vertical"
              >
                {referenceRoles.map((r, i) => (
                  <button
                    key={r.id}
                    role="tab"
                    id={"role-" + i}
                    aria-controls="role-panel"
                    aria-selected={role === i}
                    tabIndex={role === i ? 0 : -1}
                    className={"role-tab " + (role === i ? "is-active" : "")}
                    onClick={() => setRole(i)}
                    onKeyDown={(e) =>
                      tabKey(e, role, referenceRoles.length, setRole)
                    }
                  >
                    <span className="rt-ico">
                      {
                        ["سازمان", "مدرسه", "مکان", "ناوگان", "غذا", "والدین"][
                          i
                        ]
                      }
                    </span>
                    <b>
                      {
                        [
                          "آموزش‌وپرورش",
                          "مدرسه",
                          "مکان‌های بازدید",
                          "حمل‌ونقل",
                          "پذیرایی",
                          "اولیا",
                        ][i]
                      }
                    </b>
                  </button>
                ))}
              </div>
              <div
                className="roles-panel"
                id="role-panel"
                role="tabpanel"
                aria-labelledby={"role-" + role}
                tabIndex={0}
              >
                <div key={role} className="role-body">
                  <span className="role-index">
                    {(role + 1).toLocaleString("fa")} / نقش شما در پیمان
                  </span>
                  <h3 className="rp-title">{current.title}</h3>
                  <p className="rp-lead">{current.lead}</p>
                  <ul className="rp-points">
                    {current.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <p className="rp-value">{current.value}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="preview">
          <div className="container">
            <header className="section-head">
              <span className="kicker">از نزدیک ببینید</span>
              <h2>یک تجربهٔ مشترک، در صفحه‌های متناسب با هر نقش.</h2>
              <p className="muted">
                رابط نمایشی با فونت و رنگ‌های یکپارچهٔ پیمان؛ اطلاعات نمونه‌اند.
              </p>
            </header>
            <div
              className="preview-tabs"
              role="tablist"
              aria-label="پیش‌نمایش صفحات"
            >
              {shots.map((s, i) => (
                <button
                  className={"pv-tab " + (shot === i ? "is-active" : "")}
                  key={s.id}
                  role="tab"
                  id={"shot-" + i}
                  aria-controls="shot-panel"
                  aria-selected={shot === i}
                  tabIndex={shot === i ? 0 : -1}
                  onClick={() => setShot(i)}
                  onKeyDown={(e) => tabKey(e, shot, shots.length, setShot)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <div
              className="screen-stage"
              id="shot-panel"
              role="tabpanel"
              aria-labelledby={"shot-" + shot}
            >
              <div className="screen-toolbar">
                <span>پیمان / {shots[shot].label}</span>
                <span>● ● ●</span>
              </div>
              <PanelPreview view={shot} />
            </div>
          </div>
        </section>{" "}
        <section
          className="section section-tint"
          id="benefits"
          aria-labelledby="benefits-title"
        >
          <div className="container">
            <div className="benefits-grid">
              <header className="benefits-head reveal">
                <span className="kicker">چرا پیمان؟</span>
                <h2 id="benefits-title">
                  شفافیت برای همه، کار اداری کمتر برای مدرسه.
                </h2>
                <p className="muted">
                  هدف پیمان این است که اعتماد بین مدرسه، سازمان، تأمین‌کنندگان و
                  اولیا به‌جای تماس‌های مکرر، بر پایه‌ی اطلاعات ثبت‌شده باشد.
                </p>
              </header>

              <div className="benefit-list">
                <article className="benefit reveal">
                  <span className="benefit-n">۰۱</span>
                  <div>
                    <h3>شفافیت عملیاتی</h3>
                    <p>
                      هر تصمیم با نام، زمان و دلیل ثبت می‌شود. کسی نمی‌ماند که
                      ندانسته تأیید کرده باشد.
                    </p>
                  </div>
                </article>
                <article className="benefit reveal" data-delay="1">
                  <span className="benefit-n">۰۲</span>
                  <div>
                    <h3>هماهنگی متمرکز</h3>
                    <p>
                      مدرسه، سازمان، مکان، ناوگان، آشپزخانه و اولیا روی یک
                      داده‌ی مشترک کار می‌کنند.
                    </p>
                  </div>
                </article>
                <article className="benefit reveal" data-delay="2">
                  <span className="benefit-n">۰۳</span>
                  <div>
                    <h3>کاهش کار اداری</h3>
                    <p>
                      فهرست دانش‌آموزان، ظرفیت‌ها و مبلغ‌ها خودکار کنترل
                      می‌شوند، پس نیازی نیست همه‌چیز دوباره نوشته شود.
                    </p>
                  </div>
                </article>
                <article className="benefit reveal" data-delay="3">
                  <span className="benefit-n">۰۴</span>
                  <div>
                    <h3>ارتباط روشن‌تر</h3>
                    <p>
                      هر طرف دقیقاً می‌داند منتظر چه کاری است و کدام مرحله بعدی
                      است، بدون پیگیری جداگانه.
                    </p>
                  </div>
                </article>
              </div>

              <div className="trust-strip reveal">
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="5" y="10" width="14" height="10" rx="2.5" />
                    <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
                  </svg>
                  <p>
                    <b>دسترسی بر اساس نقش</b> هر کاربر فقط داده‌ی مربوط به نقش
                    خودش را می‌بیند.
                  </p>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 6h16M4 12h10M4 18h7" />
                  </svg>
                  <p>
                    <b>گزارش فعالیت</b> همه‌ی رویدادهای هر سفر در یک گزارش
                    زمان‌دار ثبت می‌شود.
                  </p>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z" />
                  </svg>
                  <p>
                    <b>نسخه‌ی نمایشی</b> این پیش‌نمایش اطلاعات نمونه دارد؛ رزرو،
                    پرداخت و ارسال اعلان واقعی فعال نیستند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section faq-zone" id="questions">
          <div className="container">
            <header className="section-head">
              <span className="kicker">پرسش‌های مهم، پاسخ‌های روشن</span>
              <h2>پیش از شروع، بدانید چه چیزی در انتظار شماست.</h2>
              <p className="muted">
                راهنمای والدین، مدارس، نهاد ناظر و ارائه‌دهندگان خدمات.
              </p>
            </header>
            <div className="faq-layout">
              <div
                className="faq-categories"
                role="tablist"
                aria-label="دسته‌بندی پرسش‌ها"
              >
                {faqGroups.map((g, i) => (
                  <button
                    key={g.label}
                    role="tab"
                    id={"faq-" + i}
                    aria-controls="faq-panel"
                    aria-selected={faq === i}
                    tabIndex={faq === i ? 0 : -1}
                    onClick={() => setFaq(i)}
                    onKeyDown={(e) => tabKey(e, faq, faqGroups.length, setFaq)}
                  >
                    {g.label}
                    <span>{g.items.length.toLocaleString("fa")}</span>
                  </button>
                ))}
              </div>
              <div
                id="faq-panel"
                role="tabpanel"
                aria-labelledby={"faq-" + faq}
                key={faq}
              >
                {faqGroups[faq].items.map((item) => (
                  <details key={item[0]}>
                    <summary>
                      {item[0]}
                      <Plus size={19} />
                    </summary>
                    <p>{item[1]}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="future-band">
          <div className="container">
            <span className="kicker">امروز اردو، فردا همراه مدرسه</span>
            <h2>یک زیرساخت، برای نیازهای بیشتر مدرسه.</h2>
            <div className="future-cards">
              <article>
                <b>بوفه و تغذیه</b>
                <p>منوی روز، موجودی و رزرو غذا</p>
              </article>
              <article>
                <b>ملزومات و جوایز</b>
                <p>ارتباط با فروشندگان و سفارش مدرسه</p>
              </article>
              <article>
                <b>سرویس مدرسه</b>
                <p>بررسی مدارک و یافتن خدمات در شهر و استان</p>
              </article>
            </div>
            <p className="muted">
              در چشم‌انداز توسعه؛ این خدمات هنوز فعال نیستند.
            </p>
          </div>
        </section>
        <section className="final-cta">
          <div className="container final-inner">
            <div>
              <span className="kicker kicker-light">
                هر سفر، یک پروندهٔ روشن
              </span>
              <h2>هماهنگی دقیق‌تر، از همین‌جا شروع می‌شود.</h2>
              <p>صفحه‌های نمونه و مسیر هر نقش را مرور کنید.</p>
            </div>
            <a className="btn btn-accent btn-lg" href="#preview">
              مشاهدهٔ پیش‌نمایش محصول ←
            </a>
          </div>
        </section>
      </main>
      <footer className="premium-footer container">
        <Brand />
        <p>پیمان · زیرساخت هماهنگی خدمات مدرسه</p>
        <span>پیش‌نمایش؛ رزرو، پرداخت و اعلان واقعی فعال نیست.</span>
      </footer>
    </div>
  );
}

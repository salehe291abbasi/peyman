"use client";
import { useEffect, useRef, useState } from "react";
import {
  Pause,
  Play,
  Check,
  ShieldCheck,
  FileCheck2,
  Users,
  Route,
} from "lucide-react";
import { tabKey } from "./product-preview";
const stages = [
  "پیش‌نویس",
  "ارسال",
  "بررسی",
  "تأیید",
  "رزرو",
  "آماده اعزام",
  "در مسیر",
  "بازگشت",
];
export function HeroRoute() {
  const path = useRef<SVGPathElement>(null),
    marker = useRef<SVGGElement>(null);
  const [stage, setStage] = useState(0),
    [paused, setPaused] = useState(false),
    [reduced, setReduced] = useState(false);
  const elapsed = useRef(0);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    let frame = 0,
      previous = 0;
    const length = path.current?.getTotalLength() ?? 0;
    const tick = (now: number) => {
      if (previous && !document.hidden) elapsed.current += now - previous;
      previous = now;
      const progress = (elapsed.current % 16000) / 16000;
      const point = path.current?.getPointAtLength(length * progress);
      if (point)
        marker.current?.setAttribute(
          "transform",
          `translate(${point.x} ${point.y})`,
        );
      setStage(Math.min(7, Math.floor(progress * 8)));
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, reduced]);
  return (
    <div className="con rise" aria-label="نمونهٔ متحرک پرونده اردو">
      <div className="ch">
        <span className="live">پروندهٔ نمونهٔ اردو</span>
        <span>پایه هفتم</span>
      </div>
      <h3>سفر به آینده: پارک ملی علوم</h3>
      <svg
        className="map"
        viewBox="0 0 400 130"
        role="img"
        aria-label="حرکت از مدرسه به مرکز علوم"
      >
        <path
          ref={path}
          d="M360 98 C300 100 280 30 210 55 S110 100 44 34"
          fill="none"
          stroke="#8b7cff"
          strokeWidth="2.5"
          strokeDasharray="3 7"
        />
        <circle cx="360" cy="98" r="7" fill="#e9b95f" />
        <circle cx="44" cy="34" r="7" fill="#8b7cff" />
        <text x="360" y="120" textAnchor="middle">
          مدرسه
        </text>
        <text x="44" y="22" textAnchor="middle">
          مرکز علوم
        </text>
        <g ref={marker} transform="translate(360 98)">
          <circle r="13" fill="#8b7cff" opacity=".18" />
          <circle r="9" fill="white" />
          <circle r="4" fill="#8b7cff" />
        </g>
      </svg>
      <div className="st">
        {stages.map((s, i) => (
          <em key={s} className={i === stage ? "on" : i < stage ? "done" : ""}>
            {s}
          </em>
        ))}
      </div>
      <ul className="chk">
        <li>
          <span>مدارک مرکز و شرکت حمل‌ونقل</span>
          <b className="ok">معتبر</b>
        </li>
        <li>
          <span>رضایت‌نامه والدین</span>
          <b className="ok">۳۶ از ۳۶</b>
        </li>
        <li>
          <span>ظرفیت رزروشده</span>
          <b className="ok">۳۶ از ۴۰ نفر</b>
        </li>
      </ul>
      <div className="route-controls">
        <span>شبیه‌سازی فرایند · بدون ردیابی واقعی</span>
        {!reduced && (
          <button
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "پخش انیمیشن" : "توقف انیمیشن"}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>
        )}
      </div>
    </div>
  );
}
const steps = [
  [
    "ثبت درخواست",
    "مدیر مدرسه",
    "هدف آموزشی، پایه، تعداد و زمان پیشنهادی ثبت و برای بررسی ارسال می‌شود.",
  ],
  [
    "بررسی و تأیید",
    "سازمان",
    "درخواست همراه با دلیل، تأیید، رد یا برای اصلاح بازگردانده می‌شود.",
  ],
  [
    "ایجاد سفر",
    "سامانه",
    "پس از تأیید، پروندهٔ سفر با اطلاعات درخواست شکل می‌گیرد.",
  ],
  [
    "رزرو مکان",
    "مرکز بازدید",
    "ظرفیت و زمان بازدید بررسی و نتیجهٔ رزرو مشخص می‌شود.",
  ],
  [
    "خدمات همراه",
    "حمل‌ونقل و پذیرایی",
    "ناوگان، صندلی‌ها و وعده‌های غذایی با برنامه هماهنگ می‌شوند.",
  ],
  [
    "فهرست دانش‌آموزان",
    "مدرسه",
    "دانش‌آموزان پایه و اطلاعات ضروری به پرونده اضافه می‌شوند.",
  ],
  [
    "پاسخ به رضایت",
    "والدین",
    "رضایت حضور و اجازهٔ تصویر، برای هر فرزند مستقل ثبت می‌شود.",
  ],
  [
    "بررسی آمادگی",
    "مدرسه و سازمان",
    "مدارک، همراهان و کنترل‌های پیش از اعزام مرور می‌شوند.",
  ],
  [
    "حرکت و اجرا",
    "مسئول اردو",
    "حاضران، زمان حرکت و رویدادهای اجرا ثبت می‌شوند.",
  ],
  [
    "بازگشت و بستن",
    "مدیر مدرسه",
    "بازگشت، تحویل و گزارش پایانی، مسیر پرونده را کامل می‌کنند.",
  ],
];
export function Lifecycle() {
  const [step, setStep] = useState(0);
  return (
    <div className="journey-browser">
      <div className="journey-picker" role="tablist" aria-label="ده مرحلهٔ اردو">
        {steps.map((s, i) => (
          <button
            key={s[0]}
            id={"journey-" + i}
            role="tab"
            aria-selected={step === i}
            aria-controls="journey-detail"
            tabIndex={step === i ? 0 : -1}
            onClick={() => setStep(i)}
            onKeyDown={(e) => tabKey(e, step, steps.length, setStep)}
          >
            <span>{(i + 1).toLocaleString("fa")}</span>
            <strong>{s[0]}</strong>
            <small>{s[1]}</small>
            {i < step && <Check size={14} />}
          </button>
        ))}
      </div>
      <div
        id="journey-detail"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={"journey-" + step}
        className="journey-detail"
      >
        <div className="journey-orbit" aria-hidden="true">
          <Route size={54} />
        </div>
        <span className="kicker">
          مرحلهٔ {(step + 1).toLocaleString("fa")} از ۱۰
        </span>
        <h3>{steps[step][0]}</h3>
        <p>{steps[step][2]}</p>
        <div className="journey-owner">
          <ShieldCheck size={20} />
          <span>
            مسئول این مرحله<strong>{steps[step][1]}</strong>
          </span>
        </div>
        <div className="journey-progress">
          <span style={{ width: `${(step + 1) * 10}%` }} />
        </div>
        <button
          className="btn btn-primary"
          onClick={() => setStep((step + 1) % 10)}
        >
          {step === 9 ? "مرور از ابتدا" : "مرحلهٔ بعد ←"}
        </button>
      </div>
    </div>
  );
}
const titles = [
  "داشبورد سازمان",
  "جزئیات سفر",
  "درخواست‌ها",
  "رضایت‌نامه‌ها",
  "صندوق تأمین‌کننده",
];
export function PanelPreview({ view }: { view: number }) {
  return (
    <div className="coded-panel">
      <aside>
        <strong>پیمان</strong>
        <small>فضای کار نمونه</small>
        {titles.map((s, i) => (
          <span key={s} className={view === i ? "selected" : ""}>
            {s}
          </span>
        ))}
        <small>دسترسی متناسب با نقش</small>
      </aside>
      <div className="coded-main">
        <div className="coded-top">
          <h3>{titles[view]}</h3>
          <span>داده‌های نمایشی</span>
        </div>
        <div className="coded-welcome">
          <span>یک تصویر روشن از کارهای امروز</span>
          <h4>
            {view === 4
              ? "درخواست‌های مرتبط با خدمات شما"
              : view === 3
                ? "پیش از رضایت، جزئیات برنامه را ببینید"
                : "وضعیت هر پرونده، قدم بعدی هر مسئول"}
          </h4>
          <p>پروندهٔ بازدید علمی · مرکز علم و فناوری · پایهٔ هفتم</p>
        </div>
        <div className="coded-stats">
          {[
            { Icon: FileCheck2, value: "۱", label: "نیازمند بررسی" },
            { Icon: Route, value: "۳", label: "پروندهٔ فعال" },
            { Icon: Users, value: "۳۶", label: "شرکت‌کننده" },
          ].map(({Icon, value, label}, i) => {
            const Component = Icon;
            return (
              <div key={i}>
                <Component size={23} />
                <b>{value}</b>
                <span>{label}</span>
              </div>
            );
          })}
        </div>
        <div className="coded-table">
          <h4>
            {view === 4
              ? "صندوق درخواست‌های رزرو"
              : view === 3
                ? "وضعیت رضایت فرزندان"
                : "پرونده‌های نیازمند اقدام"}
          </h4>
          {[
            "بازدید از مرکز علوم",
            "اردوی فرهنگی و موزه",
            "بازدید آموزشی طبیعت",
          ].map((s, i) => (
            <div key={s}>
              <span className="coded-avatar">
                {(i + 1).toLocaleString("fa")}
              </span>
              <span>
                <strong>{s}</strong>
                <small>مدرسهٔ نمونه · برنامهٔ یک‌روزه</small>
              </span>
              <span className="coded-status">
                {["در انتظار بررسی", "تکمیل مدارک", "آماده‌سازی"][i]}
              </span>
              <span className="coded-action">مشاهده ←</span>
            </div>
          ))}
        </div>
        <p className="coded-caption">
          پیش‌نمایش رابط کاربری · رزرو و اطلاعات واقعی نیست
        </p>
      </div>
    </div>
  );
}


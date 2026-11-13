"use client";

import { useState, type KeyboardEvent } from "react";
import {
  ArrowLeft,
  Bell,
  Check,
  ChevronLeft,
  CircleHelp,
  ClipboardList,
  FileCheck2,
  LayoutDashboard,
  LockKeyhole,
  ShieldCheck,
  Users,
  Clock3,
} from "lucide-react";
import { workflow } from "@/lib/content";

export function tabKey(
  event: KeyboardEvent<HTMLButtonElement>,
  current: number,
  count: number,
  select: (index: number) => void,
) {
  const offset =
    event.key === "ArrowLeft" ? 1 : event.key === "ArrowRight" ? -1 : 0;
  if (!offset && event.key !== "Home" && event.key !== "End") return;
  event.preventDefault();
  const next =
    event.key === "Home"
      ? 0
      : event.key === "End"
        ? count - 1
        : (current + offset + count) % count;
  select(next);
  event.currentTarget
    .closest('[role="tablist"]')
    ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    [next]?.focus();
}

export function ProductPreview({
  id = "product",
  compact = false,
}: {
  id?: string;
  compact?: boolean;
}) {
  const [step, setStep] = useState(2);
  const current = workflow[step];
  return (
    <div className={`product-window${compact ? " compact" : ""}`}>
      <div className="window-top">
        <span>
          <i />
          پیش‌نمایش تعاملی پیمان
        </span>
        <span className="sample-label">اطلاعات نمونه</span>
        <span className="window-dots" aria-hidden="true">
          ● ● ●
        </span>
      </div>
      <div className="workspace">
        <aside className="app-sidebar" aria-label="بخش‌های نمایشی سامانه">
          <div className="workspace-name">
            <span className="school-avatar">م</span>
            <span>
              مدرسهٔ نمونه<small>فضای مدیریت مدرسه</small>
            </span>
          </div>
          <span className="sidebar-label">میز کار شما</span>
          <span>
            <LayoutDashboard size={16} />
            نمای کلی
          </span>
          <span className="selected">
            <ClipboardList size={16} />
            پرونده‌های اردو<span className="count">۳</span>
          </span>
          <span>
            <Users size={16} />
            دانش‌آموزان و اولیا
          </span>
          <span>
            <FileCheck2 size={16} />
            مدارک و مجوزها
          </span>
          <div className="sidebar-bottom">
            <LockKeyhole size={16} />
            <span>
              دسترسی متناسب با نقش<small>مدیر مدرسه</small>
            </span>
          </div>
        </aside>
        <div className="app-main">
          <div className="app-breadcrumb">
            <span>
              پرونده‌های اردو <ChevronLeft size={12} /> بازدید علمی
            </span>
            <Bell size={16} />
          </div>
          <div className="app-heading">
            <div>
              <span className="file-code">پروندهٔ نمونه · ۰۲۴</span>
              <h3>بازدید از مرکز علم و فناوری</h3>
              <p>
                پایهٔ هشتم <span>·</span> ۳۲ دانش‌آموز <span>·</span> یک‌روزه
              </p>
            </div>
            <span className="status-pill">
              <Clock3 size={13} />
              {current.status}
            </span>
          </div>
          <div
            className="workflow-tabs"
            role="tablist"
            aria-label="مراحل پروندهٔ نمونه"
          >
            {workflow.map((item, index) => (
              <button
                key={item.title}
                role="tab"
                id={`${id}-tab-${index}`}
                aria-controls={`${id}-panel`}
                aria-selected={step === index}
                tabIndex={step === index ? 0 : -1}
                onKeyDown={(e) => tabKey(e, step, workflow.length, setStep)}
                onClick={() => setStep(index)}
              >
                <span>
                  {index < step ? (
                    <Check size={12} />
                  ) : (
                    (index + 1).toLocaleString("fa-IR")
                  )}
                </span>
                {item.short}
              </button>
            ))}
          </div>
          <div
            className="app-panel"
            id={`${id}-panel`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${step}`}
            tabIndex={0}
          >
            <div className="checklist">
              <div className="panel-heading">
                <h4>{current.title}</h4>
                <span>{current.counter}</span>
              </div>
              {current.checks.map((check) => (
                <div className="check-row" key={check.label}>
                  <span
                    className={check.done ? "check-icon done" : "check-icon"}
                  >
                    {check.done ? <Check size={12} /> : <Clock3 size={12} />}
                  </span>
                  <span>
                    {check.label}
                    <small>{check.detail}</small>
                  </span>
                  <span
                    className={check.done ? "row-state" : "row-state waiting"}
                  >
                    {check.done ? "تکمیل" : "نیازمند پیگیری"}
                  </span>
                </div>
              ))}
            </div>
            <aside className="activity">
              <h4>مسئول قدم بعدی</h4>
              <span className="responsible-avatar">
                {current.owner.slice(0, 1)}
              </span>
              <strong>{current.owner}</strong>
              <p>{current.action}</p>
              <div className="activity-note">
                <ShieldCheck size={15} />
                <span>هر تصمیم با مسئول و سابقهٔ مشخص</span>
              </div>
            </aside>
          </div>
          <div className="app-footer">
            <span>
              <CircleHelp size={14} />
              برای مرور فرایند، مراحل بالا را انتخاب کنید.
            </span>
            <span>
              مشاهدهٔ نمونه <ArrowLeft size={13} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

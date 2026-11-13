import type { Metadata, Viewport } from "next";
import "@fontsource-variable/vazirmatn";
import "./globals.css";

export const metadata: Metadata = {
  title: "پیمان | مدیریت دقیق اردو، از درخواست تا بازگشت",
  description:
    "پیمان، همراه مدرسه در برنامه‌ریزی اردوهای آموزشی؛ از انتخاب مقصد و هماهنگی خدمات تا رضایت والدین و بازگشت. با چشم‌انداز یکپارچه‌سازی خدمات مدرسه.",
  applicationName: "پیمان",
  openGraph: {
    title: "پیمان؛ زیرساخت هماهنگی خدمات مدرسه",
    description:
      "مجوزها، خدمات، رضایت والدین و آمادگی اعزام؛ در یک پرونده و مسیر روشن.",
    locale: "fa_IR",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#0a0f24" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}


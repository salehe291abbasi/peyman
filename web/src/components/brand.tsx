export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      className={`brand${inverse ? " brand-inverse" : ""}`}
      href="#top"
      aria-label="پیمان، بازگشت به ابتدای صفحه"
    >
      <svg
        className="brand-mark"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="11" fill="currentColor" />
        <path
          d="M11 27V13h10a7 7 0 0 1 0 14h-4v-6h4a1 1 0 0 0 0-2h-4v8"
          stroke="white"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="m25 10 4 4"
          stroke="#e9b95f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="brand-name">
        پیمان<span>همراهِ مدرسه</span>
      </span>
    </a>
  );
}

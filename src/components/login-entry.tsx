"use client";

import { useRef } from "react";
import { LogIn, X, LockKeyhole } from "lucide-react";
import { accessContent, landingContent } from "@/lib/content";

export function LoginEntry({
  onPreview,
}: {
  onPreview: (role: number) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="pl-login"
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-haspopup="dialog"
      >
        <LogIn size={17} strokeWidth={1.8} aria-hidden="true" />
        {accessContent.trigger}
      </button>
      <dialog
        ref={dialog}
        className="pl-access"
        aria-labelledby="access-title"
        aria-describedby="access-description"
      >
        <div className="pl-access-top">
          <span className="pl-pill">{accessContent.badge}</span>
          <button
            className="pl-icon-button"
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label={accessContent.close}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <div className="pl-access-symbol">
          <LockKeyhole size={25} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <h2 id="access-title">{accessContent.title}</h2>
        <p id="access-description">{accessContent.description}</p>
        <div className="pl-access-roles">
          {landingContent.roles.map((role, index) => (
            <a
              key={role.label}
              href="#preview"
              onClick={() => {
                dialog.current?.close();
                onPreview(index);
              }}
            >
              <strong>{role.label}</strong>
              <span>{accessContent.preview}</span>
            </a>
          ))}
        </div>
        <p className="pl-access-note">{accessContent.note}</p>
      </dialog>
    </>
  );
}

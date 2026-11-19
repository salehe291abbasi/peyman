import { Compass, ChevronUp, Sparkles } from "lucide-react";
import { Brand } from "./brand";
import {
  footerContent as content,
  landingContent,
  landingNavigation,
} from "@/lib/content";

export function LandingFooter({ onRole }: { onRole: (role: number) => void }) {
  return (
    <footer className="pl-footer" aria-label={content.label}>
      <div className="pl-container">
        <div className="pl-footer-invitation">
          <div>
            <span className="pl-eyebrow">{content.eyebrow}</span>
            <h2>
              {content.title}
              <br />
              <em>{content.titleAccent}</em>
            </h2>
            <p>{content.description}</p>
          </div>
          <div className="pl-footer-action">
            <span className="pl-footer-orbit" aria-hidden="true">
              <Compass size={34} strokeWidth={1.2} />
            </span>
            <a className="pl-button" href="#roles">
              {content.action}
            </a>
          </div>
        </div>
        <div className="pl-footer-grid">
          <div className="pl-footer-brand">
            <Brand />
            <p>{content.about}</p>
            <span className="pl-footer-wordmark" aria-hidden="true">
              PEYMAN
            </span>
          </div>
          <nav aria-label={content.navigation}>
            <h3>{content.navigation}</h3>
            {landingNavigation.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <nav aria-label={content.audiences}>
            <h3>{content.audiences}</h3>
            {landingContent.roles.map((role, index) => (
              <a key={role.label} href="#roles" onClick={() => onRole(index)}>
                {role.label}
              </a>
            ))}
          </nav>
          <div className="pl-footer-preview">
            <span>
              <Sparkles size={17} aria-hidden="true" />
              {content.status}
            </span>
            <h3>{content.statusTitle}</h3>
            <p>{content.statusDescription}</p>
            <a href="#preview">{content.statusAction}</a>
          </div>
        </div>
        <div className="pl-footer-bottom">
          <p>{content.note}</p>
          <span>{content.signature}</span>
          <a href="#top">
            {content.top}
            <ChevronUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

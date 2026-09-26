import type { SocialKey } from "@/data/profile";

type P = { className?: string };

export const TelegramIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M21.94 4.3 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.47-2.27 2.19c-.25.25-.46.46-.94.46l.34-4.78 8.7-7.86c.38-.34-.08-.53-.59-.19L6.99 12.9 2.35 11.45c-1.01-.32-1.03-1.01.21-1.5l18.14-6.99c.84-.31 1.57.19 1.24 1.34z" />
  </svg>
);

export const InstagramIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5.5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" stroke="none" />
  </svg>
);

export const WhatsappIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.9 9.9 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2m0 1.84c2.17 0 4.2.85 5.74 2.38a8.07 8.07 0 0 1 2.38 5.74c0 4.48-3.64 8.12-8.13 8.12a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.08.81.82-3-.19-.31a8.06 8.06 0 0 1-1.24-4.31c0-4.48 3.65-8.12 8.13-8.12M8.5 7.2c-.17 0-.44.06-.67.31s-.88.86-.88 2.1.9 2.43 1.03 2.6c.13.16 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.1-.23-.16-.48-.29s-1.48-.73-1.71-.81c-.23-.09-.4-.13-.56.12s-.64.81-.79.98c-.14.16-.29.19-.54.06s-1.05-.39-2-1.23c-.74-.66-1.24-1.47-1.38-1.72s-.02-.38.11-.5c.11-.11.25-.29.37-.44s.16-.25.25-.41c.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.4-.42-.55-.42z" />
  </svg>
);

/** ایتا — نشان ساده‌شده */
export const EitaaIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
    <path d="M17.6 4.6c1.6 3.4 1.5 7.4-.6 10.5-2.6 3.9-7.7 5.1-11.6 2.7" strokeLinecap="round" />
    <path d="M6.6 19.4c-1.7-3.4-1.5-7.5.6-10.6C9.8 4.9 14.9 3.7 18.8 6" strokeLinecap="round" />
    <circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none" />
  </svg>
);

/** بله — نشان ساده‌شده */
export const BaleIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
    <path
      d="M12 3.2c4.85 0 8.8 3.55 8.8 7.92 0 4.38-3.95 7.93-8.8 7.93-.93 0-1.83-.13-2.67-.37L4.4 20.6l1.2-3.5C4.1 15.72 3.2 13.86 3.2 11.12 3.2 6.75 7.15 3.2 12 3.2Z"
      strokeLinejoin="round"
    />
    <path d="M8.6 11.3l2.3 2.4 4.5-4.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** روبیکا — نشان ساده‌شده */
export const RubikaIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
    <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.6" />
    <path d="M9 16.5V8.4h3.3a2.6 2.6 0 0 1 0 5.2H9.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 13.6l3 2.9" strokeLinecap="round" />
  </svg>
);

export const PhoneIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path
      d="M6.2 3.5h3l1.6 4-2 1.4a12.5 12.5 0 0 0 6.3 6.3l1.4-2 4 1.6v3c0 1.1-.9 2-2 2A16.2 16.2 0 0 1 4.2 5.5c0-1.1.9-2 2-2Z"
      strokeLinejoin="round"
    />
  </svg>
);

export const PinIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ContactIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="16" rx="3" />
    <circle cx="9.5" cy="10.5" r="2.4" />
    <path d="M5.8 17c.6-1.9 2-2.8 3.7-2.8s3.1.9 3.7 2.8M16 9.5h3.2M16 13h3.2" strokeLinecap="round" />
  </svg>
);

export const ShareIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="18" cy="5.5" r="2.6" />
    <circle cx="6" cy="12" r="2.6" />
    <circle cx="18" cy="18.5" r="2.6" />
    <path d="M8.3 10.8 15.7 6.8M8.3 13.2l7.4 4" strokeLinecap="round" />
  </svg>
);

export const ChevronIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ClockIcon = ({ className }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.2V12l3 1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const socialIcons: Record<SocialKey, (p: P) => React.ReactElement> = {
  telegram: TelegramIcon,
  instagram: InstagramIcon,
  eitaa: EitaaIcon,
  bale: BaleIcon,
  rubika: RubikaIcon,
  whatsapp: WhatsappIcon,
};

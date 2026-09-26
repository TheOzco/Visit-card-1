type P = { className?: string };

/** جداکنندهٔ تزئینی طلایی */
export const Divider = ({ className = "" }: P) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <span className="gold-line h-px w-16 sm:w-24" />
    <svg viewBox="0 0 40 20" className="h-4 w-9 text-gold-2" fill="none" stroke="currentColor" strokeWidth="1.1">
      <path d="M2 10h7M31 10h7" strokeLinecap="round" />
      <path d="M20 3.5 25.5 10 20 16.5 14.5 10Z" />
      <circle cx="20" cy="10" r="1.6" fill="currentColor" stroke="none" />
    </svg>
    <span className="gold-line h-px w-16 sm:w-24" />
  </div>
);

/** گوشه‌های تزئینی قاب */
export const Corner = ({ className = "" }: P) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M1 20V6a5 5 0 0 1 5-5h14" strokeLinecap="round" />
    <path d="M7 24V12a5 5 0 0 1 5-5h12" strokeLinecap="round" opacity="0.55" />
    <circle cx="13" cy="13" r="1.8" fill="currentColor" stroke="none" />
  </svg>
);

/** قاب تزئینی با چهار گوشه */
export const OrnateFrame = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    <Corner className="pointer-events-none absolute -top-[1px] -right-[1px] h-8 w-8 rotate-90 text-gold/70" />
    <Corner className="pointer-events-none absolute -top-[1px] -left-[1px] h-8 w-8 text-gold/70" />
    <Corner className="pointer-events-none absolute -bottom-[1px] -right-[1px] h-8 w-8 rotate-180 text-gold/70" />
    <Corner className="pointer-events-none absolute -bottom-[1px] -left-[1px] h-8 w-8 -rotate-90 text-gold/70" />
    {children}
  </div>
);

/** عنوان بخش با آرایه */
export const SectionTitle = ({ title, kicker }: { title: string; kicker?: string }) => (
  <div className="mb-5 text-center">
    {kicker && (
      <p className="font-latin text-[11px] tracking-[0.4em] text-gold/70 uppercase">{kicker}</p>
    )}
    <h2 className="gold-text font-naskh mt-1 text-2xl font-bold">{title}</h2>
    <Divider className="mt-3" />
  </div>
);

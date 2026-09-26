import { useState } from "react";
import { profile, mapLinks, socials } from "@/data/profile";
import { ContactIcon, PhoneIcon, PinIcon, ShareIcon, ClockIcon, socialIcons } from "@/components/Icons";
import { SectionTitle } from "@/components/Ornaments";

function saveVCard() {
  const v = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${profile.name}`,
    `N:محمودیه دهکردی;محمد;;دکتر;`,
    `TITLE:${profile.title}`,
    `TEL;TYPE=CELL:${profile.phone}`,
    `TEL;TYPE=WORK:${profile.clinicPhone}`,
    `ADR;TYPE=WORK:;;${profile.address};;;;`,
    `URL:${mapLinks.google}`,
    `NOTE:${profile.subtitle} — ${profile.hours}`,
    "END:VCARD",
  ].join("\n");

  const blob = new Blob(["\ufeff" + v], { type: "text/vcard;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dr-mahmoudieh.vcf";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

export function Actions() {
  const [toast, setToast] = useState("");

  const show = (m: string) => {
    setToast(m);
    setTimeout(() => setToast(""), 2200);
  };

  const share = async () => {
    const data = {
      title: profile.name,
      text: `${profile.name} — ${profile.title}`,
      url: window.location.href,
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(window.location.href);
        show("لینک کارت ویزیت کپی شد ✓");
      }
    } catch {
      /* کاربر لغو کرد */
    }
  };

  return (
    <section className="px-5">
      {/* دکمهٔ اصلی تماس */}
      <a
        href={`tel:${profile.phone}`}
        className="btn-gold flex items-center justify-center gap-2.5 rounded-2xl px-5 py-3.5 text-[15px] font-extrabold transition-transform"
      >
        <PhoneIcon className="h-5 w-5" />
        تماس با مطب
        <span className="font-latin text-[12px] font-bold opacity-70">{profile.phoneDisplay}</span>
      </a>

      {/* لوکیشن */}
      <div className="panel mt-3 rounded-2xl border border-gold/25 p-3.5">
        <a
          href={mapLinks.google}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-gold/35 bg-gold/10 px-3.5 py-3 transition-colors active:bg-gold/20"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/45 bg-ink/60">
            <PinIcon className="h-5 w-5 text-gold-2" />
          </span>
          <span className="flex-1 text-right">
            <span className="block text-[14px] font-bold text-gold-2">مسیریابی به مطب</span>
            <span className="block text-[11.5px] leading-6 text-cream/65">{profile.address}</span>
          </span>
          <span className="font-latin text-[11px] tracking-widest text-gold/60">GO</span>
        </a>

        <div className="mt-2.5 grid grid-cols-3 gap-2">
          {[
            { t: "گوگل‌مپ", u: mapLinks.google },
            { t: "نشان", u: mapLinks.neshan },
            { t: "ویز", u: mapLinks.waze },
          ].map((m) => (
            <a
              key={m.t}
              href={m.u}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-gold/20 bg-ink/45 py-2 text-center text-[12px] text-cream/80 active:border-gold/50"
            >
              {m.t}
            </a>
          ))}
        </div>

        <div className="mt-3 flex items-start gap-2 border-t border-gold/15 pt-3 text-[11.5px] leading-6 text-sage/80">
          <ClockIcon className="mt-1 h-4 w-4 shrink-0 text-gold/70" />
          <p>{profile.hours}</p>
        </div>
      </div>

      {/* ذخیره مخاطب / اشتراک‌گذاری */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        <button
          onClick={saveVCard}
          className="panel flex items-center justify-center gap-2 rounded-2xl border border-gold/25 py-3 text-[13.5px] font-semibold text-cream/90 active:border-gold/60"
        >
          <ContactIcon className="h-5 w-5 text-gold" />
          ذخیره در مخاطبین
        </button>
        <button
          onClick={share}
          className="panel flex items-center justify-center gap-2 rounded-2xl border border-gold/25 py-3 text-[13.5px] font-semibold text-cream/90 active:border-gold/60"
        >
          <ShareIcon className="h-5 w-5 text-gold" />
          ارسال کارت
        </button>
      </div>

      {/* شبکه‌های اجتماعی */}
      <div className="mt-9">
        <SectionTitle title="راه‌های ارتباطی" kicker="Connect" />
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {socials.map((s) => {
            const Icon = socialIcons[s.key];
            return (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="panel group flex items-center gap-2.5 rounded-xl border border-gold/22 px-3 py-2.5 transition-all active:border-gold/60"
              >
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 bg-ink/60"
                  style={{ color: s.color }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[13px] font-bold text-cream/90">{s.label}</span>
                  <span className="font-latin block truncate text-[10.5px] text-sage/60" dir="ltr">
                    {s.handle}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {toast && (
        <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center px-6">
          <div className="rounded-full border border-gold/50 bg-ink-2 px-5 py-2.5 text-[13px] text-gold-2 shadow-2xl">
            {toast}
          </div>
        </div>
      )}
    </section>
  );
}

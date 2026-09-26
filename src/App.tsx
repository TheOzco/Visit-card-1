import { Hero } from "@/components/Hero";
import { Actions } from "@/components/Actions";
import { CareItem } from "@/components/CareAccordion";
import { FooterLogo } from "@/components/FooterLogo";
import { OrnateFrame, SectionTitle } from "@/components/Ornaments";
import { careSections, generalNotes } from "@/data/care";
import { profile } from "@/data/profile";

export default function App() {
  return (
    <div className="bg-vintage paper-grain relative min-h-screen w-full overflow-x-hidden">
      <div className="relative z-10 mx-auto w-full max-w-md px-3 py-5 sm:py-8">
        <OrnateFrame className="panel rounded-[26px] border border-gold/30 pb-2">
          <Hero />
          <Actions />

          {/* مراقبت‌های بعد از درمان */}
          <section className="mt-10 px-5">
            <SectionTitle title="مراقبت‌های بعد از درمان" kicker="Aftercare" />
            <p className="mx-auto mb-5 max-w-sm text-center text-[12px] leading-7 text-cream/60">
              برای مشاهدهٔ توصیه‌های تخصصی، روی درمان خود بزنید. رعایت این نکات، نتیجهٔ درمان و ماندگاری
              آن را تضمین می‌کند.
            </p>

            <div className="space-y-3">
              {careSections.map((b, i) => (
                <CareItem key={b.id} block={b} index={i} />
              ))}
            </div>

            {/* نکات کلی */}
            <div className="mt-5 rounded-2xl border border-gold/25 bg-gold/8 p-4">
              <p className="font-naskh mb-2 text-center text-[14px] font-bold text-gold-2">
                نکات کلیدی برای همهٔ درمان‌ها
              </p>
              <ul className="space-y-2">
                {generalNotes.map((n, i) => (
                  <li key={i} className="flex gap-2 text-[12.5px] leading-7 text-cream/80">
                    <span className="text-gold">◆</span>
                    {n}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${profile.phone}`}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-gold/45 bg-ink/50 py-2.5 text-[13px] font-bold text-gold-2 active:bg-ink/80"
              >
                ☎ مشاورهٔ اورژانس پس از درمان
              </a>
            </div>
          </section>

          <FooterLogo />
        </OrnateFrame>

        <p className="mt-4 text-center text-[10px] leading-6 text-cream/25">
          © {new Date().toLocaleDateString("fa-IR", { year: "numeric" })} — تمامی حقوق محفوظ است
        </p>
      </div>
    </div>
  );
}

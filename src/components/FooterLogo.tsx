import logoImg from "@/assets/logo.jpg";
import { profile } from "@/data/profile";
import { Divider } from "@/components/Ornaments";

export function FooterLogo() {
  return (
    <footer className="mt-12 px-6 pb-12 text-center">
      <Divider className="mb-7" />

      {/* جایگاه لوگو */}
      <div className="relative mx-auto h-32 w-32">
        <div className="absolute inset-0 rounded-full border border-gold/30" />
        <div className="absolute inset-2 rounded-full border border-gold/20" />
        <div className="absolute inset-3 overflow-hidden rounded-full bg-ink-2">
          <img
            src={logoImg}
            alt="لوگوی مطب"
            className="h-full w-full object-contain mix-blend-screen [filter:contrast(1.1)_saturate(1.05)]"
          />
        </div>
        <span className="shimmer pointer-events-none absolute inset-3 rounded-full opacity-40" />
      </div>

      <p className="font-naskh mt-5 text-[15px] font-bold text-gold-2">{profile.name}</p>
      <p className="font-latin mt-1 text-[10.5px] tracking-[0.35em] text-sage/55 uppercase">
        Dental Clinic · Est. 1399
      </p>

      <div className="mx-auto mt-6 flex max-w-xs items-center justify-center gap-2 text-[10.5px] text-cream/35">
        <span className="gold-line h-px flex-1 opacity-50" />
        <span>طراحی و اجرا: کارت ویزیت دیجیتال</span>
        <span className="gold-line h-px flex-1 opacity-50" />
      </div>
    </footer>
  );
}

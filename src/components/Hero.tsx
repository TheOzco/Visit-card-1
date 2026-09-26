import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data/profile";
import { Divider } from "@/components/Ornaments";

export function Hero() {
  return (
    <header className="fade-up relative px-6 pt-10 pb-6 text-center">
      {/* هالهٔ طلایی چرخان پشت عکس */}
      <div className="relative mx-auto h-36 w-36 sm:h-40 sm:w-40">
        <div className="halo absolute inset-[-14px] rounded-full opacity-70">
          <svg viewBox="0 0 200 200" className="h-full w-full text-gold/45" fill="none" stroke="currentColor">
            <circle cx="100" cy="100" r="96" strokeWidth="0.8" strokeDasharray="3 9" />
            <circle cx="100" cy="100" r="88" strokeWidth="0.6" />
          </svg>
        </div>
        <div className="absolute inset-0 rounded-full p-[3px] [background:linear-gradient(150deg,#f4e5b6,#c9a227_35%,#6f5615_65%,#e9d391)] shadow-[0_18px_45px_-18px_rgba(201,162,39,0.9)]">
          <div className="h-full w-full overflow-hidden rounded-full border-2 border-ink/70 bg-ink">
            <img
              src={profileImg}
              alt={profile.name}
              className="h-full w-full object-cover [filter:sepia(0.18)_contrast(1.05)_saturate(0.95)]"
            />
          </div>
        </div>
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full border border-gold/50 bg-ink px-3 py-[3px] font-latin text-[10px] tracking-[0.25em] text-gold-2">
          DDS
        </span>
      </div>

      <h1 className="gold-text font-naskh mt-7 text-[26px] leading-tight font-bold sm:text-3xl">
        {profile.name}
      </h1>
      <p className="font-latin mt-1 text-[12px] tracking-[0.22em] text-sage/70 uppercase">
        {profile.nameLatin}
      </p>

      <Divider className="my-4" />

      <p className="text-[15px] font-semibold text-gold-2">{profile.title}</p>
      <p className="mx-auto mt-1 max-w-xs text-[12.5px] leading-6 text-cream/65">{profile.subtitle}</p>
      <p className="font-naskh mt-3 text-[13px] text-gold/80">«{profile.motto}»</p>
    </header>
  );
}

import { useState } from "react";
import type { CareBlock } from "@/data/care";
import { ChevronIcon } from "@/components/Icons";

function TipList({ tips, warn }: { tips: string[]; warn?: string }) {
  return (
    <div className="space-y-2.5 pt-1">
      {tips.map((t, i) => (
        <div key={i} className="flex gap-2.5 text-[13.5px] leading-7 text-cream/85">
          <svg viewBox="0 0 12 12" className="mt-2 h-2.5 w-2.5 shrink-0 text-gold" fill="currentColor">
            <path d="M6 0 7.6 4.4 12 6 7.6 7.6 6 12 4.4 7.6 0 6l4.4-1.6Z" />
          </svg>
          <p>{t}</p>
        </div>
      ))}
      {warn && (
        <div className="mt-3 flex gap-2.5 rounded-xl border border-gold/30 bg-gold/8 p-3">
          <span className="text-base leading-6">⚠️</span>
          <p className="text-[13px] leading-7 text-gold-2">{warn}</p>
        </div>
      )}
    </div>
  );
}

function ChildItem({ block }: { block: CareBlock }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`overflow-hidden rounded-xl border transition-colors ${
        open ? "border-gold/45 bg-ink/50" : "border-gold/18 bg-ink/30"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-3.5 py-3 text-right"
      >
        <span className="text-lg">{block.icon}</span>
        <span className="flex-1">
          <span className="block font-naskh text-[15px] font-semibold text-gold-2">{block.title}</span>
          <span className="block text-[11px] text-sage/70">{block.summary}</span>
        </span>
        <ChevronIcon className={`h-4 w-4 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`acc-content px-3.5 ${open ? "open" : ""}`}>
        <div className="acc-inner">
          <div className="border-t border-gold/15 pt-3 pb-4">
            <TipList tips={block.tips} warn={block.warn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CareItem({ block, index }: { block: CareBlock; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`panel relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        open ? "border-gold/50" : "border-gold/22"
      }`}
    >
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center gap-3 p-4 text-right">
        <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-ink/60 text-xl">
          {block.icon}
        </span>
        <span className="flex-1">
          <span className="block font-naskh text-[16px] font-bold text-cream">{block.title}</span>
          <span className="block text-[11.5px] text-sage/75">{block.summary}</span>
        </span>
        <span className="font-latin text-[11px] tracking-widest text-gold/50">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ChevronIcon className={`h-5 w-5 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div className={`acc-content px-4 ${open ? "open" : ""}`}>
        <div className="acc-inner">
          <div className="border-t border-gold/18 pt-3 pb-4">
            <TipList tips={block.tips} warn={block.warn} />
            {block.children && (
              <div className="mt-4 space-y-2.5">
                {block.children.map((c) => (
                  <ChildItem key={c.id} block={c} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

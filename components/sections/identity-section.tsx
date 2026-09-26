import {stellar} from "../../config/stellar";

export function IdentitySection(){
  const rows=[
    ["Asset",stellar.asset],
    ["Issuer",stellar.issuer],
    ["Decimals",String(stellar.decimals)],
    ["Network","Stellar Public"],
    ["Distribution",stellar.distribution],
  ];
  return(
    <section id="identity" className="border-y border-white/[0.06] py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cyan-200/70">01 / Identity</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">One asset.<br/><span className="text-slate-600">One public identity.</span></h2>
          <p className="mt-7 max-w-md leading-8 text-slate-500">
            VANTA is a classic Stellar asset identified by its asset code and
            issuer account. The on-chain identity is deterministic and publicly
            verifiable.
          </p>
        </div>
        <div className="overflow-hidden border border-white/[0.08] bg-[#090d12]">
          {rows.map(([label,value])=>(
            <div key={label} className="grid gap-3 border-b border-white/[0.06] px-6 py-5 last:border-b-0 sm:grid-cols-[120px_1fr]">
              <span className="font-mono text-[9px] uppercase tracking-[.15em] text-slate-600">{label}</span>
              <span className="break-all text-sm text-slate-300">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

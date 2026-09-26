import {stellar} from "../../config/stellar";

const rows=[
  ["Asset",stellar.assetId],
  ["Issuer",stellar.issuer],
  ["Supply",stellar.supply],
  ["Decimals",String(stellar.decimals)],
  ["Network","Stellar Public Network"],
];

export function VerificationSection(){
  return(
    <section id="verification" className="border-t border-white/[0.06] py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cyan-200/70">03 / Verification</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Evidence over noise.</h2>
          <p className="mt-7 max-w-md leading-8 text-slate-500">
            Verify the exact VANTA asset directly against Stellar and inspect its
            public ledger identity before interacting with it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={stellar.stellarExpertUrl} target="_blank" rel="noreferrer" className="border border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[.12em] text-slate-300 hover:border-cyan-300/30 hover:text-cyan-200">StellarExpert</a>
            <a href="https://lab.stellar.org/" target="_blank" rel="noreferrer" className="border border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[.12em] text-slate-300 hover:border-cyan-300/30 hover:text-cyan-200">Stellar Lab</a>
          </div>
        </div>
        <div className="overflow-hidden border border-white/[0.08] bg-[#090d12]">
          {rows.map(([label,value])=>(
            <div key={label} className="grid gap-3 border-b border-white/[0.06] px-6 py-5 last:border-b-0 sm:grid-cols-[120px_1fr]">
              <span className="font-mono text-[9px] uppercase tracking-[.15em] text-slate-600">{label}</span>
              <span className="break-all text-sm text-slate-300">{value}</span>
            </div>
          ))}
        </div>
        <div className="border border-cyan-200/10 bg-cyan-200/[0.025] p-6 md:col-span-2">
          <p className="font-mono text-[9px] uppercase tracking-[.18em] text-cyan-200/70">Soroban path</p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
            This repository prepares the deterministic Stellar Asset Contract
            workflow for VANTA. A deployed SAC is the Soroban interface to the
            same classic Stellar asset; it is not a second VANTA token.
          </p>
        </div>
      </div>
    </section>
  );
}

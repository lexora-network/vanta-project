import {stellar} from "../../config/stellar";

export function SupplySection(){
  return(
    <section id="supply" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cyan-200/70">04 / Supply</p>
        <div className="mt-6 grid gap-1 border border-white/[0.08] bg-white/[0.08] md:grid-cols-[1.4fr_.6fr]">
          <div className="bg-[#090d12] p-8">
            <p className="font-mono text-[9px] uppercase tracking-[.15em] text-slate-600">Total issued supply</p>
            <p className="mt-5 text-5xl font-extrabold tracking-[-.06em]">{stellar.supply}</p>
            <p className="mt-4 font-mono text-[9px] text-slate-600">VANTA · 7 DECIMALS</p>
          </div>
          <div className="bg-[#090d12] p-8">
            <p className="font-mono text-[9px] uppercase tracking-[.15em] text-slate-600">Network</p>
            <p className="mt-5 text-2xl font-semibold">Stellar</p>
            <p className="mt-2 text-sm text-slate-600">Public network</p>
          </div>
        </div>
      </div>
    </section>
  );
}

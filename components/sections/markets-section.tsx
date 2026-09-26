import {markets} from "../../config/stellar";

export function MarketsSection(){
  return(
    <section id="markets" className="border-b border-white/[0.06] bg-[#070a0e] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-cyan-200/70">02 / Markets</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Built to move<br/><span className="text-slate-600">across the ecosystem.</span></h2>
          </div>
          <p className="self-end max-w-md leading-8 text-slate-500">
            The known VANTA market layer includes XLM, FARM and SIKE pairs.
            Pool references below are kept as operational identifiers rather
            than presented as guarantees of current liquidity.
          </p>
        </div>
        <div className="border-t border-white/[0.08]">
          {markets.map((market,index)=>(
            <div key={market.pair} className="grid min-h-28 grid-cols-[42px_1fr_auto] items-center gap-5 border-b border-white/[0.08]">
              <span className="font-mono text-[10px] text-slate-700">0{index+1}</span>
              <div>
                <strong className="text-lg tracking-tight">{market.pair}</strong>
                <span className="mt-2 block font-mono text-[9px] uppercase tracking-[.12em] text-slate-600">Pool {market.pool} · {market.initialReserve}</span>
              </div>
              <span className="font-mono text-cyan-200/60">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {VantaMark} from "../brand/vanta-mark";
import {site} from "../../config/site";

export function HeroSection(){
  return(
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(circle_at_70%_42%,rgba(121,242,255,.09),transparent_34%)]"/>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-7 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.2em] text-cyan-200/70">
            <VantaMark size={28}/> LEXORA / VANTA
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-slate-500">A Stellar ecosystem asset</p>
          <h1 className="mt-5 max-w-4xl text-6xl font-extrabold tracking-[-.065em] sm:text-8xl">
            VANTA<span className="text-slate-600">.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
            A dark, technical asset identity built around movement, liquidity,
            participation and the wider Lexora ecosystem.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#markets" className="border border-cyan-300 bg-cyan-300 px-5 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-[#031014] hover:shadow-[0_0_30px_rgba(121,242,255,.16)]">Explore markets</a>
            <a href="#verification" className="border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-slate-300 hover:border-cyan-300/30 hover:text-cyan-200">Verify asset</a>
          </div>
        </div>

        <div className="relative grid min-h-[430px] place-items-center">
          <div className="absolute h-[350px] w-[350px] rounded-full border border-cyan-200/10 [transform:rotate(-25deg)_scaleY(.42)]"/>
          <div className="absolute h-[430px] w-[250px] rounded-full border border-cyan-200/[0.07] [transform:rotate(55deg)]"/>
          <div className="grid h-44 w-44 place-items-center rounded-full border border-cyan-200/35 bg-[radial-gradient(circle_at_45%_35%,#10232a,#060a0e_66%)] shadow-[0_0_80px_rgba(121,242,255,.1)]">
            <div className="text-center">
              <div className="text-7xl font-extrabold tracking-[-.1em] text-cyan-200">V</div>
              <div className="font-mono text-[8px] uppercase tracking-[.28em] text-slate-500">VANTA / STELLAR</div>
            </div>
          </div>
          <span className="absolute right-4 top-16 border border-white/10 bg-[#05070a]/80 px-2 py-1 font-mono text-[9px] text-cyan-200">LIVE ASSET</span>
          <span className="absolute bottom-12 left-5 border border-white/10 bg-[#05070a]/80 px-2 py-1 font-mono text-[9px] text-slate-500">922B SUPPLY</span>
        </div>
      </div>
    </section>
  );
}

import {VantaMark} from "../brand/vanta-mark";

export function Header(){
  return(
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#05070a]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3">
          <VantaMark/>
          <span className="text-sm font-bold tracking-[.18em]">VANTA</span>
        </a>
        <nav className="hidden items-center gap-7 font-mono text-[10px] uppercase tracking-[.14em] text-slate-500 sm:flex">
          <a href="#identity" className="hover:text-cyan-200">Identity</a>
          <a href="#markets" className="hover:text-cyan-200">Markets</a>
          <a href="#verification" className="hover:text-cyan-200">Verify</a>
          <a href="#supply" className="hover:text-cyan-200">Supply</a>
        </nav>
        <a href="#verification" className="border border-white/10 px-3 py-2 font-mono text-[10px] uppercase tracking-[.12em] text-slate-300 hover:border-cyan-300/30 hover:text-cyan-200">
          Verify
        </a>
      </div>
    </header>
  );
}

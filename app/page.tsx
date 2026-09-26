export default function Home() {
  const telemetry = [
    ["NETWORK", "STELLAR / PUBLIC"],
    ["ASSET", "VANTA"],
    ["STANDARD", "CLASSIC ASSET"],
    ["STATUS", "VERIFIED ON-CHAIN"],
  ];

  const markets = [
    ["01", "VANTA / XLM", "STELLAR DEX"],
    ["02", "VANTA / FARM", "STELLAR DEX"],
    ["03", "VANTA / SIKE", "STELLAR DEX"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030609] text-slate-100 selection:bg-cyan-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.025] [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.85%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')]"
      />
      <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-3xl" />

      <header className="relative z-10 border-b border-white/[0.07] bg-[#030609]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center border border-cyan-300/50 font-mono text-sm text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,.08)]">V</span>
            <span className="font-mono text-sm font-bold tracking-[.28em]">VANTA</span>
          </a>
          <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[.18em] text-slate-500 md:flex">
            <a className="transition hover:text-cyan-200" href="#identity">Identity</a>
            <a className="transition hover:text-cyan-200" href="#markets">Markets</a>
            <a className="transition hover:text-cyan-200" href="#verification">Verification</a>
          </nav>
          <a href="#verification" className="border border-white/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[.16em] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
            Inspect →
          </a>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 pt-28 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-36 lg:pt-36">
        <div>
          <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.24em] text-cyan-200/70">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />
            LEXORA NETWORK / STELLAR
          </div>
          <h1 className="max-w-4xl text-[clamp(4.5rem,12vw,9.5rem)] font-black leading-[.82] tracking-[-.085em]">
            VANTA<span className="text-slate-700">.</span>
          </h1>
          <p className="mt-9 max-w-xl text-base leading-8 text-slate-400">
            A public Stellar asset presented as infrastructure: transparent identity,
            observable markets, and verifiable on-chain state.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#markets" className="bg-cyan-300 px-5 py-3 font-mono text-[10px] font-medium uppercase tracking-[.16em] text-[#031014] transition hover:bg-cyan-200 hover:shadow-[0_0_35px_rgba(103,232,249,.16)]">
              Explore markets
            </a>
            <a href="#verification" className="border border-white/10 px-5 py-3 font-mono text-[10px] uppercase tracking-[.16em] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">
              Verify asset
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <div className="absolute inset-[12%] rounded-full border border-cyan-200/[0.08] [transform:rotate(-25deg)_scaleY(.42)]" />
          <div className="absolute inset-[4%_24%] rounded-full border border-cyan-200/[0.06] [transform:rotate(55deg)]" />
          <div className="absolute inset-[22%] rounded-full border border-cyan-200/[0.12] shadow-[0_0_100px_rgba(34,211,238,.05)]" />
          <div className="absolute inset-[31%] rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_40%_30%,#123039,#05090d_68%)] shadow-[0_0_90px_rgba(34,211,238,.1)]">
            <div className="flex h-full flex-col items-center justify-center">
              <span className="text-[clamp(4rem,9vw,7rem)] font-black leading-none tracking-[-.12em] text-cyan-200">V</span>
              <span className="mt-3 font-mono text-[8px] uppercase tracking-[.32em] text-slate-500">VANTA / STELLAR</span>
            </div>
          </div>
          <span className="absolute right-0 top-[18%] border border-white/10 bg-[#030609]/90 px-3 py-2 font-mono text-[9px] uppercase tracking-[.12em] text-cyan-200">Live network</span>
          <span className="absolute bottom-[17%] left-0 border border-white/10 bg-[#030609]/90 px-3 py-2 font-mono text-[9px] uppercase tracking-[.12em] text-slate-500">Public ledger</span>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[0.07] bg-white/[0.012]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4 lg:px-10">
          {telemetry.map(([label, value], i) => (
            <div key={label} className={`border-white/[0.07] px-5 py-7 ${i % 2 ? "border-l" : ""} lg:border-l lg:first:border-l-0`}>
              <div className="font-mono text-[9px] uppercase tracking-[.18em] text-slate-600">{label}</div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[.12em] text-slate-300">{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="identity" className="relative z-10 mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-36">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.22em] text-cyan-200/70">01 / Identity</p>
          <h2 className="mt-6 text-4xl font-semibold leading-[.95] tracking-[-.065em] sm:text-6xl">
            One asset.
            <br />
            <span className="text-slate-600">One public identity.</span>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-slate-500">
            The interface stays deliberately close to the ledger. No decorative
            claims are needed when the underlying asset can be inspected directly.
          </p>
        </div>
        <div className="border border-white/[0.08] bg-[#070b10]">
          {[
            ["Asset code", "VANTA"],
            ["Network", "Stellar Public Network"],
            ["Asset type", "Classic Stellar Asset"],
            ["Verification", "Public ledger / Horizon"],
          ].map(([label, value]) => (
            <div key={label} className="grid gap-3 border-b border-white/[0.06] px-6 py-6 last:border-0 sm:grid-cols-[180px_1fr]">
              <span className="font-mono text-[9px] uppercase tracking-[.16em] text-slate-600">{label}</span>
              <span className="text-sm text-slate-300">{value}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="markets" className="relative z-10 border-y border-white/[0.07] bg-[#060a0e]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.22em] text-cyan-200/70">02 / Markets</p>
              <h2 className="mt-6 text-4xl font-semibold leading-[.95] tracking-[-.065em] sm:text-6xl">
                Market
                <br />
                <span className="text-slate-600">infrastructure.</span>
              </h2>
            </div>
            <p className="max-w-md self-end text-sm leading-7 text-slate-500">
              Market references are shown as operational routes. Current reserves,
              prices and execution state should always be verified on-chain.
            </p>
          </div>

          <div className="mt-16 border-t border-white/[0.08]">
            {markets.map(([number, pair, venue]) => (
              <div key={pair} className="group grid min-h-28 grid-cols-[42px_1fr_auto] items-center gap-5 border-b border-white/[0.08] transition hover:bg-cyan-300/[0.018]">
                <span className="font-mono text-[10px] text-slate-700">{number}</span>
                <div>
                  <div className="text-lg font-medium tracking-tight text-slate-200">{pair}</div>
                  <div className="mt-2 font-mono text-[9px] uppercase tracking-[.15em] text-slate-600">{venue} · public route</div>
                </div>
                <span className="pr-2 text-cyan-200 transition group-hover:translate-x-1">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="verification" className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[.22em] text-cyan-200/70">03 / Verification</p>
            <h2 className="mt-6 text-4xl font-semibold leading-[.95] tracking-[-.065em] sm:text-6xl">
              Evidence
              <br />
              <span className="text-slate-600">over noise.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-slate-500">
              Use independent Stellar explorers and tools to verify the exact
              issuer, balances, trustlines and market state before interacting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://stellar.expert/" target="_blank" rel="noreferrer" className="border border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">StellarExpert ↗</a>
              <a href="https://lab.stellar.org/" target="_blank" rel="noreferrer" className="border border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[.14em] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200">Stellar Lab ↗</a>
            </div>
          </div>
          <div className="border border-cyan-200/10 bg-cyan-200/[0.02] p-7 sm:p-9">
            <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
              <span className="font-mono text-[9px] uppercase tracking-[.18em] text-slate-600">Verification console</span>
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.14em] text-cyan-200"><i className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" /> Ready</span>
            </div>
            <div className="mt-7 space-y-5 font-mono text-[10px]">
              <div className="flex justify-between gap-6"><span className="text-slate-600">NETWORK</span><span className="text-slate-300">PUBLIC</span></div>
              <div className="flex justify-between gap-6"><span className="text-slate-600">ASSET</span><span className="text-cyan-200">VANTA</span></div>
              <div className="flex justify-between gap-6"><span className="text-slate-600">SOURCE</span><span className="text-slate-300">STELLAR LEDGER</span></div>
              <div className="flex justify-between gap-6"><span className="text-slate-600">STATE</span><span className="text-slate-300">PUBLIC / OBSERVABLE</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 font-mono text-[9px] uppercase tracking-[.16em] text-slate-700 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>VANTA · LEXORA</span>
          <span>STELLAR / PUBLIC NETWORK</span>
        </div>
      </footer>
    </main>
  );
}

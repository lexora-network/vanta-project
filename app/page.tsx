const stats = [
  ["922B", "Maximum supply"],
  ["7", "Decimals"],
  ["30 bp", "AMM fee"],
];

const pools = [
  { pair: "VANTA / XLM", reserve: "1B VANTA · 10 XLM", role: "Primary market" },
  { pair: "VANTA / FARM", reserve: "400M VANTA · 4M FARM", role: "Ecosystem route" },
  { pair: "VANTA / SIKE", reserve: "200M VANTA · 2M SIKE", role: "Ecosystem route" },
];

export default function Home() {
  return (
    <main>
      <div className="noise" />
      <nav className="nav shell">
        <a className="brand" href="#top"><span className="brand-mark">V</span><span>VANTA</span></a>
        <div className="nav-links"><a href="#asset">Asset</a><a href="#markets">Markets</a><a href="#network">Network</a></div>
        <a className="nav-cta" href="#asset">Explore asset <span>↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><i /> STELLAR NETWORK · LIVE INFRASTRUCTURE</div>
          <h1>Dark infrastructure<br /><span>for a new asset.</span></h1>
          <p className="hero-text">VANTA is an independent digital asset built on Stellar. Engineered for transparent supply, native settlement, and a market layer that can scale without the noise.</p>
          <div className="hero-actions"><a className="button primary" href="#markets">View markets <span>→</span></a><a className="button ghost" href="#asset">Asset details</a></div>
        </div>
        <div className="orbital" aria-hidden="true">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="core"><div className="core-glow" /><strong>V</strong><small>VANTA</small></div>
          <div className="signal s1">01</div><div className="signal s2">07</div><div className="signal s3">30</div>
        </div>
      </section>

      <section className="stats shell">
        {stats.map(([value, label]) => <div className="stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        <div className="status"><span className="pulse" /><div><strong>MAINNET</strong><span>Stellar settlement layer</span></div></div>
      </section>

      <section className="section shell" id="asset">
        <div className="section-head">
          <div><div className="eyebrow">01 / ASSET</div><h2>Built to be legible.</h2></div>
          <p>VANTA keeps the fundamentals visible: fixed supply, explicit issuer identity, on-chain reserves, and a market structure anyone can inspect.</p>
        </div>
        <div className="identity-grid">
          <div className="panel identity">
            <div className="panel-label">ASSET IDENTITY</div>
            <div className="identity-row"><span>Code</span><strong>VANTA</strong></div>
            <div className="identity-row"><span>Network</span><strong>Stellar Mainnet</strong></div>
            <div className="identity-row"><span>Decimals</span><strong>7</strong></div>
            <div className="identity-row"><span>Supply</span><strong>922,000,000,000</strong></div>
          </div>
          <div className="panel philosophy">
            <div className="panel-label">DESIGN PRINCIPLE</div>
            <div className="big-line">Less noise.<br /><em>More signal.</em></div>
            <p>No synthetic dashboards. No artificial volume. The interface reflects what the network can actually verify.</p>
          </div>
        </div>
      </section>

      <section className="section market-section" id="markets">
        <div className="shell">
          <div className="section-head">
            <div><div className="eyebrow">02 / MARKET LAYER</div><h2>Three routes.<br />One asset.</h2></div>
            <p>Initial liquidity is intentionally small and transparent. VANTA/XLM is the primary price-discovery route; FARM and SIKE provide independent ecosystem paths.</p>
          </div>
          <div className="pool-list">
            {pools.map((pool, index) => <div className="pool" key={pool.pair}><span className="pool-index">0{index + 1}</span><div className="pool-main"><strong>{pool.pair}</strong><span>{pool.role}</span></div><div className="pool-reserve">{pool.reserve}</div><span className="arrow">↗</span></div>)}
          </div>
        </div>
      </section>

      <section className="network shell" id="network">
        <div className="network-copy">
          <div className="eyebrow">03 / NETWORK</div><h2>Native settlement.<br /><span>Public state.</span></h2>
          <p>VANTA settles on Stellar, with market state readable directly from the network. The design separates infrastructure from presentation so the source of truth stays on-chain.</p>
        </div>
        <div className="network-card">
          <div className="card-top"><span>NETWORK STATUS</span><span className="live">● LIVE</span></div>
          <div className="grid-lines" /><div className="network-value">STELLAR</div>
          <div className="network-meta"><span>Settlement <b>Native</b></span><span>AMM <b>Constant product</b></span><span>Fee <b>30 bp</b></span></div>
        </div>
      </section>

      <footer className="footer shell"><div className="brand"><span className="brand-mark">V</span><span>VANTA</span></div><p>Independent digital asset · Stellar Mainnet</p><span className="footer-note">ON-CHAIN / 2026</span></footer>
    </main>
  );
}
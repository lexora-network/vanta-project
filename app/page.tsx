import {Header} from "../components/layout/header";
import {HeroSection} from "../components/sections/hero-section";
import {IdentitySection} from "../components/sections/identity-section";
import {MarketsSection} from "../components/sections/markets-section";
import {VerificationSection} from "../components/sections/verification-section";
import {SupplySection} from "../components/sections/supply-section";

export default function Home(){
  return(
    <>
      <div className="noise"/>
      <Header/>
      <main>
        <HeroSection/>
        <IdentitySection/>
        <MarketsSection/>
        <VerificationSection/>
        <SupplySection/>
      </main>
      <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-6xl justify-between px-6 font-mono text-[9px] uppercase tracking-[.14em] text-slate-700">
          <span>VANTA · LEXORA</span>
          <span>STELLAR / PUBLIC</span>
        </div>
      </footer>
    </>
  );
}

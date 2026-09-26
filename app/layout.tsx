import type {Metadata} from "next";
import "./globals.css";

export const metadata:Metadata={
  title:"VANTA",
  description:"VANTA — a Stellar asset in the Lexora ecosystem.",
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body className="bg-[#030609] text-slate-100 antialiased">{children}</body></html>;
}

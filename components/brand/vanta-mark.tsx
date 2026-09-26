export function VantaMark({size=34}:{size?:number}){
  return(
    <div
      aria-label="VANTA mark"
      className="grid place-items-center border border-cyan-300/40 bg-cyan-300/[0.03] text-cyan-200"
      style={{width:size,height:size}}
    >
      <span className="font-mono text-[10px] tracking-[.08em]">V</span>
    </div>
  );
}

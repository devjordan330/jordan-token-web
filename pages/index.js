import React, { useState } from 'react';

export default function Home() {
  const contractAddress = "0x0000000000000000000000000000000000000000"; 
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (err) { console.error(err); }
    } else { alert("Please install MetaMask or Trust Wallet!"); }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract Copied!");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      
      {/* --- CHART PATTERN BACKGROUND --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`, 
           backgroundSize: '40px 40px, 80px 80px, 80px 80px' }}>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10 pointer-events-none"
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/graphy.png')` }}>
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5 backdrop-blur-sm">
          <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent uppercase">
            METAWORLD
          </h1>
          <button onClick={connectWallet} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-xs font-black transition shadow-[0_0_15px_rgba(37,99,235,0.4)]">
            {walletAddress ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : "CONNECT WALLET"}
          </button>
        </nav>

        <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
          {/* Stablecoin Tagline */}
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] backdrop-blur-md">
            BEP-20 Stable Asset • Institutional Grade
          </div>
          
          <h2 className="text-6xl md:text-[100px] font-black mb-8 tracking-tighter uppercase leading-[0.85] text-white">
            THE FUTURE <br /> <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">IS HERE.</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] uppercase tracking-widest text-sm">
              BUY USDX
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black hover:bg-white/10 transition uppercase tracking-widest text-sm backdrop-blur-md">
              Whitepaper
            </button>
          </div>

          {/* Stats & Contract Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-12 pb-8 items-center">
            <div className="md:border-r border-white/5">
              <div className="text-3xl font-black mb-1">1B+</div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">Total Supply</div>
            </div>
            <div className="border-white/5 md:border-r">
              <div className="text-3xl font-black text-blue-500 mb-1">0%</div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">Tax</div>
            </div>
            <div className="hidden md:block border-r border-white/5 text-center px-4">
              <div className="text-3xl font-black uppercase mb-1">BEP-20</div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">Network</div>
            </div>
            
            {/* Compact Contract Next to Stats */}
            <div className="col-span-2 md:col-span-1 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
               <span className="text-[9px] text-gray-500 uppercase font-black mb-2 block tracking-widest">Contract</span>
               <div className="flex items-center gap-3 bg-black/60 p-2.5 rounded-xl border border-white/5">
                  <code className="text-blue-400 text-[11px] font-mono truncate flex-1">{contractAddress}</code>
                  <button onClick={copyAddress} className="bg-blue-600 hover:bg-blue-400 text-white p-2 rounded-lg transition-all active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
               </div>
            </div>
          </div>

          {/* Socials & Charts Hub */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pb-16 border-b border-white/5">
            {[ 
              { name: 'Telegram', color: 'hover:bg-sky-500/20', icon: 'TG' },
              { name: 'Twitter', color: 'hover:bg-white/10', icon: '𝕏' },
              { name: 'DexScreener', color: 'hover:bg-blue-500/20', icon: 'DS' },
              { name: 'DEXTools', color: 'hover:bg-cyan-500/20', icon: 'DT' },
              { name: 'GeckoTerminal', color: 'hover:bg-green-500/20', icon: 'GT' }
            ].map((social) => (
              <a key={social.name} href="#" className={`flex items-center gap-2 bg-white/5 border border-white/5 px-5 py-3 rounded-xl text-[10px] font-black transition-all uppercase tracking-widest ${social.color}`}>
                <span className="text-blue-400">{social.icon}</span> {social.name}
              </a>
            ))}
          </div>
        </main>

        <footer className="py-12 text-gray-600 text-[11px] tracking-[0.5em] uppercase font-bold text-center">
          © 2026 MetaWorld Protocol • Precision Engineered
        </footer>
      </div>
    </div>
  );
}

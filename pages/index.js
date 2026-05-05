import React, { useState } from 'react';

export default function Home() {
  const contractAddress = "0x0000000000000000000000000000000000000000"; 
  const [walletAddress, setWalletAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // OFFICIAL WORKING LINKS
  const links = {
    telegram: "https://t.me/metaworld_token",
    twitter: "https://twitter.com/metaworld",
    dexscreener: "https://dexscreener.com",
    dextools: "https://www.dextools.io",
    geckoterminal: "https://www.geckoterminal.com"
  };

  const connectWallet = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
        setIsModalOpen(false);
      } catch (err) { console.error("Denied"); }
    } else { alert("Please use Trust Wallet or MetaMask!"); }
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Contract Copied!");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative text-center">
      
      {/* Chart Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10">
        {/* Navbar with Header Options */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto border-b border-white/5 backdrop-blur-md">
          <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent uppercase">
            METAWORLD
          </h1>
          
          {/* Header Menu Options Wapas Aa Gaye */}
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-blue-400 transition">Ecosystem</a>
            <a href="#" className="hover:text-blue-400 transition">Governance</a>
            <a href="#" className="hover:text-blue-400 transition">Whitepaper</a>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)} 
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-full text-xs font-black transition shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            {walletAddress ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : "CONNECT WALLET"}
          </button>
        </nav>

        {/* Multi-Wallet Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
            <div className="bg-[#0f172a] border border-white/10 p-8 rounded-3xl max-w-sm w-full relative">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white text-2xl">×</button>
              <h3 className="text-xl font-black mb-6 uppercase text-left">Select Wallet</h3>
              <div className="flex flex-col gap-3 text-left">
                <button onClick={connectWallet} className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10">
                  <span className="font-bold">MetaMask</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" className="h-6 w-6" />
                </button>
                <button onClick={connectWallet} className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10">
                  <span className="font-bold">Trust Wallet</span>
                  <img src="https://trustwallet.com/assets/images/media/assets/trust_platform.svg" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        )}

        <main className="max-w-7xl mx-auto px-6 pt-24 pb-12">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em]">
            BEP-20 Stable Asset • Institutional Grade
          </div>
          
          <h2 className="text-6xl md:text-[100px] font-black mb-8 tracking-tighter uppercase leading-[0.85]">
            THE FUTURE <br /> <span className="text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">IS HERE.</span>
          </h2>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-20">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-2xl font-black transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] uppercase text-sm">BUY USDX</button>
            <button className="bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black hover:bg-white/10 transition uppercase text-sm">Whitepaper</button>
          </div>

          {/* --- CORRECTED STATS & CONTRACT SECTION (Same Style) --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12 items-center">
            <div>
              <div className="text-3xl font-black mb-1">1B+</div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Total Supply</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-500 mb-1">0%</div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Tax</div>
            </div>
            <div>
              <div className="text-3xl font-black uppercase mb-1 text-white">BEP-20</div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Network</div>
            </div>
            {/* Contract now looks exactly like BEP-20 section */}
            <div className="cursor-pointer" onClick={copyAddress}>
              <div className="text-[12px] font-mono text-blue-400 mb-1 bg-white/5 py-2 px-1 rounded-lg border border-white/10 truncate">
                {contractAddress.slice(0,10)}...{contractAddress.slice(-4)}
              </div>
              <div className="text-gray-500 text-[10px] uppercase font-bold tracking-widest flex items-center justify-center gap-1">
                Contract Address <span className="text-[8px]">(Copy)</span>
              </div>
            </div>
          </div>

          {/* Official Social Links Bar */}
          <div className="flex flex-wrap justify-center gap-4 py-16">
            <a href={links.telegram} target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/5 px-6 py-3 rounded-xl text-[10px] font-black transition-all hover:bg-blue-400/10">
              <span className="text-blue-400 text-lg">TG</span> TELEGRAM
            </a>
            <a href={links.twitter} target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/5 px-6 py-3 rounded-xl text-[10px] font-black transition-all hover:bg-white/10">
              <span className="text-white text-lg">𝕏</span> TWITTER
            </a>
            <a href={links.dexscreener} target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/5 px-6 py-3 rounded-xl text-[10px] font-black transition-all hover:bg-pink-500/10">
              <span className="text-pink-500 text-lg">DS</span> DEXSCREENER
            </a>
            <a href={links.dextools} target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/5 px-6 py-3 rounded-xl text-[10px] font-black transition-all hover:bg-cyan-500/10">
              <span className="text-cyan-400 text-lg">DT</span> DEXTOOLS
            </a>
            <a href={links.geckoterminal} target="_blank" className="flex items-center gap-2 bg-white/5 border border-white/5 px-6 py-3 rounded-xl text-[10px] font-black transition-all hover:bg-green-500/10">
              <span className="text-green-400 text-lg">GT</span> GECKOTERMINAL
            </a>
          </div>
        </main>

        <footer className="py-12 text-gray-600 text-[10px] tracking-[0.5em] uppercase font-bold">
          © 2026 MetaWorld Protocol • Multi-Layer Stability
        </footer>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error(err.message);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <Head>
        <title>MetaWorld | USDX Token</title>
        <meta name="description" content="The New Standard of Digital Currency" />
      </Head>

      {/* Animated Background Glows */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[60%] h-[60%] rounded-full bg-pink-900/10 blur-[150px]" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-6 sticky top-0 bg-black/40 backdrop-blur-xl border-b border-white/5 z-50">
          <div className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            METAWORLD
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Ecosystem</a>
            <a href="#" className="hover:text-white transition-colors">Governance</a>
            <a href="#" className="hover:text-white transition-colors">Whitepaper</a>
          </div>
          <button onClick={connectWallet} className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all active:scale-95">
            {walletAddress ? `${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"}
          </button>
        </nav>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-8 pt-24 pb-32">
          <div className="text-center space-y-8">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]">
              THE FUTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                IS HERE.
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl font-medium opacity-80">
              MetaWorld is building the next generation of decentralized finance. Fast, secure, and limitless.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center pt-10">
              <button className="px-12 py-5 bg-purple-600 rounded-2xl font-bold hover:bg-purple-500 hover:scale-105 transition-all shadow-[0_20px_50px_rgba(147,51,234,0.3)]">
                BUY USDX
              </button>
              <button className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                View Chart
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-40 border-t border-white/5 pt-20">
            {[
              { label: "Total Supply", val: "1B+" },
              { label: "Tax", val: "0%" },
              { label: "Network", val: "BEP-20" }
            ].map((s, i) => (
              <div key={i} className="text-center p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="text-5xl font-black mb-3">{s.val}</div>
                <div className="text-gray-500 uppercase tracking-widest text-xs font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </main>

        <footer className="py-20 text-center text-gray-600 border-t border-white/5">
          © 2026 MetaWorld Protocol. <span className="text-white/20 ml-2 italic underline">Built for the future.</span>
        </footer>
      </div>
    </div>
  );
}

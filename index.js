import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
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
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7' }}>METAWORLD</div>
        <button 
          onClick={connectWallet} 
          style={{ padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', backgroundColor: 'white', color: 'black', border: 'none', fontWeight: 'bold' }}
        >
          {walletAddress ? `${walletAddress.substring(0, 6)}...` : "Connect Wallet"}
        </button>
      </nav>
      <main style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={{ fontSize: '72px', fontWeight: '900', letterSpacing: '-2px' }}>THE FUTURE <br/> IS HERE.</h1>
        <p style={{ color: '#666', marginBottom: '40px' }}>Experience the next generation of digital assets.</p>
        <button style={{ padding: '15px 40px', backgroundColor: '#9333ea', color: 'white', borderRadius: '10px', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '18px' }}>
          BUY USDX
        </button>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import React, { useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from '@solana/wallet-adapter-react';
import {
  SolflareWalletAdapter,
  LedgerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

const WalletProvider = ({ children }) => {
  const endpoint = useMemo(() => 'https://hidden-patient-slug.solana-mainnet.quiknode.pro/d8cb6d9a7b156d44efaca020f46f9196d20bc926', []);
  //const endpoint = useMemo(()=>'https://api.devnet.solana.com',[]);
  const wallets = useMemo(
    () => [
      // Remove PhantomWalletAdapter if it's registered automatically
      new SolflareWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </SolanaWalletProvider>
    </ConnectionProvider>
  );
};

export default WalletProvider;

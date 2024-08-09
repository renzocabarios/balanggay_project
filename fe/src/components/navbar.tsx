import { ConnectButton } from "arweave-wallet-kit";

export default function Navbar() {
  return (
    <div className="w-full sticky top-0 right-0 py-6 px-8 flex items-center justify-between gap-4 bg-background">
      <p className="font-medium text-2xl flex-1">Recall</p>

      <ConnectButton profileModal={true} showBalance={true} />
    </div>
  );
}

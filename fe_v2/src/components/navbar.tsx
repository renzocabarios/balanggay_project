import { ConnectButton } from "arweave-wallet-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 right-0 w-full px-6 py-4 flex items-center justify-center bg-background text-primary-foreground">
      <div className="w-full max-w-[1440px] flex items-center justify-between">
        <p className="text-2xl font-bold">Recall</p>

        <div className="flex gap-4 items-center text-lg font-semibold">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <Link to={"/explore"}>
            <p>Explore</p>
          </Link>{" "}
          <Link to={"/proposals"}>
            <p>Proposals</p>
          </Link>
          <ConnectButton profileModal={true} showBalance={true} />
        </div>
      </div>
    </div>
  );
}

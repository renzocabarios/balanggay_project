import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { ArweaveWalletKit } from "arweave-wallet-kit";
import HomeView from "@/views/home";
import useMounted from "@/hooks/useMounted";
import ProposalsView from "@/views/proposals";
import DeckDetailsView from "@/views/deck-details";
import ExploreView from "@/views/explore";
import ProposalDetailsView from "./views/proposal-details";

function App() {
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }
  return (
    <ArweaveWalletKit>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<HomeView />} />
          <Route path={"deck/:id"} element={<DeckDetailsView />} />
          <Route path={"proposal/:id"} element={<ProposalDetailsView />} />
          <Route path={"explore"} element={<ExploreView />} />
          <Route path={"proposals"} element={<ProposalsView />} />
        </Routes>
      </HashRouter>
    </ArweaveWalletKit>
  );
}

export default App;

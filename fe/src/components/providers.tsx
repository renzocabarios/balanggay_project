import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ArweaveWalletKit } from "arweave-wallet-kit";
const queryClient = new QueryClient();

export default function Providers({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>
      <ArweaveWalletKit>{children}</ArweaveWalletKit>
    </QueryClientProvider>
  );
}

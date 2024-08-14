import { PROCCESS_ID } from "@/lib/web3";
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import { useQuery } from "@tanstack/react-query";

interface IGetMyDecksArgs {}

export const getMyDecks = async ({}: IGetMyDecksArgs) => {
  const test = await message({
    process: PROCCESS_ID,
    tags: [{ name: "Action", value: "GetMyDecks" }],
    signer: createDataItemSigner(window.arweaveWallet),
  });

  const { Messages } = await result({
    message: test,
    process: PROCCESS_ID,
  });

  const parsed = JSON.parse(Messages[0].Data);
  return parsed;
};

export default function useGetMyDecks() {
  const query = useQuery({
    queryFn: () => {
      return getMyDecks({});
    },
    queryKey: ["mydecks"],
  });

  return { ...query };
}

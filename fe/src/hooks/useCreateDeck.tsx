import { PROCCESS_ID } from "@/lib/web3";
import { createDataItemSigner, message } from "@permaweb/aoconnect";
import { useMutation } from "@tanstack/react-query";

interface ICreateDeckArgs {
  name: string;
  description: string;
}

export const createDeck = async ({ name, description }: ICreateDeckArgs) => {
  const txHash = await message({
    process: PROCCESS_ID,
    tags: [{ name: "Action", value: "CreateDeck" }],
    signer: createDataItemSigner(window.arweaveWallet),
    data: JSON.stringify({ name, description }),
  });

  return txHash;
};

export default function useCreateDeck() {
  const mutation = useMutation({
    mutationFn: (values: ICreateDeckArgs) => {
      return createDeck(values);
    },
  });

  return { ...mutation };
}

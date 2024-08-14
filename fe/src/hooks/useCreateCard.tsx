import { PROCCESS_ID } from "@/lib/web3";
import { createDataItemSigner, message } from "@permaweb/aoconnect";
import { useMutation } from "@tanstack/react-query";

interface ICreateCardArgs {
  question: string;
  answer: string;
  deck_id: number;
}

export const createCard = async ({
  answer,
  question,
  deck_id,
}: ICreateCardArgs) => {
  const txHash = await message({
    process: PROCCESS_ID,
    tags: [{ name: "Action", value: "CreateCard" }],
    signer: createDataItemSigner(window.arweaveWallet),
    data: JSON.stringify({ answer, question, deck_id }),
  });

  return txHash;
};

export default function useCreateCard() {
  const mutation = useMutation({
    mutationFn: (values: ICreateCardArgs) => {
      return createCard(values);
    },
  });

  return { ...mutation };
}

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import PulseLoader from "react-spinners/PulseLoader";

interface ILoadingModalProps {
  open: boolean;
}

export default function LoadingModal({ open }: ILoadingModalProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          {/* <AlertDialogTitle vis>Create your own deck</AlertDialogTitle> */}
          <AlertDialogDescription className="flex flex-col gap-8 justify-center items-center w-full">
            <PulseLoader color="#64748b" size={20} />

            <p className="text-2xl font-medium">Transaction is ongoing</p>
            <p className="text-xs text-gray-500">
              Please wait as your transaction is being proccessed
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

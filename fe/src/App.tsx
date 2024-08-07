import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
function App() {
  return (
    <>
      <div className="min-h-screen relative flex flex-col gap-4">
        <div className="w-full sticky top-0 right-0 p-8 flex items-center justify-between gap-4">
          <p className="font-medium text-2xl flex-1">Balanggay Project</p>
          <Button>Create Deck</Button>
          <Button>Connect Wallet</Button>
        </div>

        <div className="w-full flex gap-4 p-4">
          <div className="p-4 grow basis-[1/3] border border-border rounded-xl">
            <p className="">Due: 3</p>
            <p className="">Medical Field</p>

            <AlertDialog>
              <AlertDialogTrigger>Open</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="p-4 grow basis-[1/3] border border-border rounded-xl">
            <p className="">Due: 3</p>
            <p className="">Medical Field</p>
          </div>

          <div className="p-4 grow basis-[1/3] border border-border rounded-xl">
            <p className="">Due: 3</p>
            <p className="">Medical Field</p>
          </div>

          <div className="p-4 grow basis-[1/3] border border-border rounded-xl">
            <p className="">Due: 3</p>
            <p className="">Medical Field</p>
          </div>

          <div className="p-4 grow basis-[1/3] border border-border rounded-xl">
            <p className="">Due: 3</p>
            <p className="">Medical Field</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

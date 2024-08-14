import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";
import { cn, truncateAddress } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CreateDeckSchema,
  CreateDeckSchemaDefaults,
  ICreateDeckSchema,
} from "@/lib/schemas/create-deck.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from "@/layouts/main.layout";

export default function DeckDetailsView() {
  const [createDeckModalOpen, setCreateDeckModalOpen] = useState(false);

  return (
    <>
      <MemorizeModal
        open={createDeckModalOpen}
        onOpenChange={setCreateDeckModalOpen}
      />
      <MainLayout>
        <Button
          className="h-12"
          onClick={() => {
            setCreateDeckModalOpen(true);
          }}
        >
          <p className="text-2xl font-light">Start Recalling</p>{" "}
        </Button>

        <Button className="h-12">
          <p className="text-2xl font-light">Sync Cards</p>{" "}
        </Button>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">Medical Field</p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus atque tenetur est laborum odit ipsa eaque. Quis iure
            ipsam ab. Quae quis soluta facilis. Ratione magni reiciendis
            voluptatem veniam repudiandae.
          </p>
        </div>

        <p className="text-2xl font-semibold">Cards (3)</p>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 p-4 rounded-xl border-border border">
            <p className="text-xl font-semibold">
              What is the meaning of lorem ipsum
            </p>
            <p className="text-sm">It is what it is</p>
          </div>

          <div className="flex flex-col gap-4 p-4 rounded-xl border-border border">
            <p className="text-xl font-semibold">
              What is the meaning of lorem ipsum
            </p>
            <p className="text-sm">It is what it is</p>
          </div>
          <div className="flex flex-col gap-4 p-4 rounded-xl border-border border">
            <p className="text-xl font-semibold">
              What is the meaning of lorem ipsum
            </p>
            <p className="text-sm">It is what it is</p>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

interface IMemorizeModalProps {
  open: boolean;
  onOpenChange: any;
}

function MemorizeModal({ open, onOpenChange }: IMemorizeModalProps) {
  const form = useForm<ICreateDeckSchema>({
    resolver: zodResolver(CreateDeckSchema),
    defaultValues: CreateDeckSchemaDefaults,
  });

  function onSubmit(values: ICreateDeckSchema) {
    console.log(values);
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className={cn("max-w-[1000px] max-h-[1000px]")}>
        <AlertDialogHeader>
          <AlertDialogDescription className="w-full flex flex-col gap-8">
            <p className="text-3xl text-center">
              What is the meaning of lorem ipsum
            </p>

            <hr />

            <p className="text-xl text-center">
              What is the meaning of lorem ipsum
            </p>

            <div className="w-full flex gap-4 items-center justify-center">
              <Button size={"lg"} className={cn("bg-destructive text-2xl")}>
                Fail
              </Button>
              <Button size={"lg"} className={cn("bg-green-500 text-2xl")}>
                Pass
              </Button>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

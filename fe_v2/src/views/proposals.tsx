import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";
import { truncateAddress } from "@/lib/utils";
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

export default function ProposalsView() {
  const [createDeckModalOpen, setCreateDeckModalOpen] = useState(false);
  // useGetProposals
  return (
    <>
      <CreateDeckModal
        open={createDeckModalOpen}
        onOpenChange={setCreateDeckModalOpen}
      />
      <MainLayout>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">Proposals</p>
          {/* <p className="">Vote Wisely</p> */}
        </div>

        <div className="flex flex-wrap w-full gap-4">
          <Deck
            name="Medical Deck"
            description="This is just a test"
            author={truncateAddress(
              "_89TeNGkjWHsPVNNFETVtJYoUUCianNWC0dRnuhXHyc"
            )}
            deck_id={1}
          />
        </div>
      </MainLayout>
    </>
  );
}

interface IDeckProps {
  name: string;
  description: string;
  author: string;
  deck_id: number;
}

function Deck({ name, description, author, deck_id }: IDeckProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 p-4 basis-[32%] rounded-xl border border-border">
      <div className="flex flex-col gap-2">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">by {author}</p>
      </div>

      <p className="text-sm">{description}</p>

      <Button
        className="flex items-center justify-center gap-2"
        onClick={() => {
          navigate(`/proposal/${deck_id}`);
        }}
      >
        <p className="text-lg font-medium">View</p>
      </Button>
    </div>
  );
}

interface ICreateDeckModalProps {
  open: boolean;
  onOpenChange: any;
}

function CreateDeckModal({ open, onOpenChange }: ICreateDeckModalProps) {
  const form = useForm<ICreateDeckSchema>({
    resolver: zodResolver(CreateDeckSchema),
    defaultValues: CreateDeckSchemaDefaults,
  });

  function onSubmit(values: ICreateDeckSchema) {
    console.log(values);
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create Deck</AlertDialogTitle>
          <AlertDialogDescription className="w-full flex flex-col gap-4">
            <Form {...form}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter description of the deck"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
            </Form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

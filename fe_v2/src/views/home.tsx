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

export default function HomeView() {
  const [createDeckModalOpen, setCreateDeckModalOpen] = useState(false);
  // useGetMyDecks
  return (
    <>
      <CreateDeckModal
        open={createDeckModalOpen}
        onOpenChange={setCreateDeckModalOpen}
      />
      <MainLayout>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">My Decks</p>

          <Button
            className="flex items-center gap-1"
            onClick={() => {
              setCreateDeckModalOpen((state) => !state);
            }}
          >
            <p>Create Deck</p> <Plus size={16}></Plus>
          </Button>
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
  deck_id: number;
  name: string;
  description: string;
  author: string;
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
          navigate(`/deck/${deck_id}`);
        }}
      >
        <p className="text-lg font-medium">Start</p> <Play size={16} />
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
  // useCreateDeck

  function onSubmit(values: ICreateDeckSchema) {
    onOpenChange(false);
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
                      <Input placeholder="enter name" {...field} />
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

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import {
  CreateDeckSchema,
  CreateDeckSchemaDefaults,
  ICreateDeckSchema,
} from "@/lib/schema/create-deck.schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useCreateDeck from "@/hooks/useCreateDeck";
import LoadingModal from "./loading-modal";

export default function CreateDeck() {
  const { mutate, isPending } = useCreateDeck();
  const form = useForm<ICreateDeckSchema>({
    resolver: zodResolver(CreateDeckSchema),
    defaultValues: CreateDeckSchemaDefaults,
  });

  function onSubmit(values: ICreateDeckSchema) {
    mutate(values);
  }

  return (
    <>
      <LoadingModal open={isPending} />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size={"icon"} variant={"ghost"}>
            <Plus />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create your own deck</AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col gap-8 items-center w-full">
              <Form {...form}>
                <div className="w-full">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
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
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  className="w-full"
                  onClick={form.handleSubmit(onSubmit)}
                >
                  Create Deck
                </Button>
              </Form>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

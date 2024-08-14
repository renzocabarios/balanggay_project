import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useCreateCard from "@/hooks/useCreateCard";
import LoadingModal from "./loading-modal";
import {
  ICreateCardSchema,
  CreateCardSchema,
  CreateCardSchemaDefaults,
} from "@/lib/schema/create-card.schema";

interface ICreateCardProps {
  deck_id: number;
  open: boolean;
}

export default function CreateCard({ deck_id, open }: ICreateCardProps) {
  const { mutate, isPending } = useCreateCard();
  const form = useForm<ICreateCardSchema>({
    resolver: zodResolver(CreateCardSchema),
    defaultValues: CreateCardSchemaDefaults,
  });

  function onSubmit(values: ICreateCardSchema) {
    mutate({ deck_id, ...values });
  }

  return (
    <>
      <LoadingModal open={isPending} />

      <AlertDialog open={open}>
        <AlertDialogContent className="min-w-[900px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Deck: Medical Field</AlertDialogTitle>
            <AlertDialogDescription className="flex grow gap-4 w-full">
              <Form {...form}>
                <div className="flex flex-col gap-4 items-center flex-1 w-full">
                  <FormField
                    control={form.control}
                    name="question"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Question</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="answer"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Answer</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="w-full"
                    onClick={form.handleSubmit(onSubmit)}
                  >
                    Add this Card
                  </Button>
                </div>
              </Form>

              {/* <div className="flex flex-col gap-2  max-h-[500px] p-2 flex-1">
                <p>My Cards</p>

                <div className="flex flex-col gap-2 overflow-y-scroll">
                  <div className="flex flex-col gap-2 border-border border p-4 rounded-2xl">
                    <p>What is life?</p>
                    <p>It is amazing</p>

                    <p>Due: 03-12-24 12:12:12</p>
                    <p>Started: 03-12-24 12:12:12</p>
                    <p>Retention Rate: 100%</p>
                    <AlertDialog>
                      <AlertDialogTrigger>Edit</AlertDialogTrigger>
                      <AlertDialogContent className="min-w-[900px]">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Deck: Medical Field
                          </AlertDialogTitle>
                          <AlertDialogDescription className="flex flex-col gap-4 items-center flex-1">
                            <div className="flex flex-col gap-2 w-full">
                              <p>Question</p>
                              <Input></Input>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                              <p>Answer</p>
                              <Input></Input>
                            </div>

                            <Button className="w-full">Update card</Button>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  <div className="flex flex-col gap-2 border-border border p-4 rounded-2xl">
                    <p>What is life?</p>
                    <p>It is amazing</p>

                    <p>Due: 03-12-24 12:12:12</p>
                    <p>Started: 03-12-24 12:12:12</p>
                    <p>Retention Rate: 100%</p>
                    <AlertDialog>
                      <AlertDialogTrigger>Edit</AlertDialogTrigger>
                      <AlertDialogContent className="min-w-[900px]">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Deck: Medical Field
                          </AlertDialogTitle>
                          <AlertDialogDescription className="flex flex-col gap-4 items-center flex-1">
                            <div className="flex flex-col gap-2 w-full">
                              <p>Question</p>
                              <Input></Input>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                              <p>Answer</p>
                              <Input></Input>
                            </div>

                            <Button className="w-full">Update card</Button>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>{" "}
                  <div className="flex flex-col gap-2 border-border border p-4 rounded-2xl">
                    <p>What is life?</p>
                    <p>It is amazing</p>

                    <p>Due: 03-12-24 12:12:12</p>
                    <p>Started: 03-12-24 12:12:12</p>
                    <p>Retention Rate: 100%</p>
                    <AlertDialog>
                      <AlertDialogTrigger>Edit</AlertDialogTrigger>
                      <AlertDialogContent className="min-w-[900px]">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Deck: Medical Field
                          </AlertDialogTitle>
                          <AlertDialogDescription className="flex flex-col gap-4 items-center flex-1">
                            <div className="flex flex-col gap-2 w-full">
                              <p>Question</p>
                              <Input></Input>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                              <p>Answer</p>
                              <Input></Input>
                            </div>

                            <Button className="w-full">Update card</Button>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>{" "}
                  <div className="flex flex-col gap-2 border-border border p-4 rounded-2xl">
                    <p>What is life?</p>
                    <p>It is amazing</p>

                    <p>Due: 03-12-24 12:12:12</p>
                    <p>Started: 03-12-24 12:12:12</p>
                    <p>Retention Rate: 100%</p>
                    <AlertDialog>
                      <AlertDialogTrigger>Edit</AlertDialogTrigger>
                      <AlertDialogContent className="min-w-[900px]">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Deck: Medical Field
                          </AlertDialogTitle>
                          <AlertDialogDescription className="flex flex-col gap-4 items-center flex-1">
                            <div className="flex flex-col gap-2 w-full">
                              <p>Question</p>
                              <Input></Input>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                              <p>Answer</p>
                              <Input></Input>
                            </div>

                            <Button className="w-full">Update card</Button>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  <div className="flex flex-col gap-2 border-border border p-4 rounded-2xl">
                    <p>What is life?</p>
                    <p>It is amazing</p>

                    <p>Due: 03-12-24 12:12:12</p>
                    <p>Started: 03-12-24 12:12:12</p>
                    <p>Retention Rate: 100%</p>
                    <AlertDialog>
                      <AlertDialogTrigger>Edit</AlertDialogTrigger>
                      <AlertDialogContent className="min-w-[900px]">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Deck: Medical Field
                          </AlertDialogTitle>
                          <AlertDialogDescription className="flex flex-col gap-4 items-center flex-1">
                            <div className="flex flex-col gap-2 w-full">
                              <p>Question</p>
                              <Input></Input>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                              <p>Answer</p>
                              <Input></Input>
                            </div>

                            <Button className="w-full">Update card</Button>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div> */}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

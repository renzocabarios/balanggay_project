import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./components/ui/input";
import { ChevronDown, EllipsisVertical, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Navbar from "@/components/navbar";

function App() {
  const [position, setPosition] = useState("bottom");
  return (
    <div className="flex justify-center">
      <div className="min-h-screen relative flex flex-col gap-2 min-w-[1440px]">
        <Navbar />
        <div className="flex flex-col gap-8 px-8 w-full">
          <Header />

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-medium">Due Today</p>
            </div>

            <div className="flex flex-wrap gap-4 w-full">
              <Deck />
              <Deck />
              <Deck />
              <Deck />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-medium">Marketplace Favourites</p>
            </div>

            <div className="flex flex-wrap gap-4 w-full">
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center gap-2">
              <p className="text-2xl font-medium">My Decks</p>

              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant={"ghost"}
                      className="flex items-center gap-2"
                    >
                      Sort By <ChevronDown size={16} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                    >
                      <DropdownMenuRadioItem value="top">
                        Deck Name A-Z
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="bottom">
                        Deck Name Z-A
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="right">
                        Due Date closest to now
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="right">
                        Due Date farthest from now
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Input className="max-w-[200px]"></Input>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 w-full">
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
              <Deck />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-between">
      <p>Welcome, renzothenoob</p>

      <div className="flex gap-2">
        <div className="p-4 border border-border rounded-xl">
          <p>Total Cards Due: 100</p>
        </div>

        <div className="p-4 border border-border rounded-xl">
          <p>Total Decks: 3</p>
        </div>

        <div className="p-4 border border-border rounded-xl">
          <p>Overall Retention: 90%</p>
        </div>
      </div>
      <CreateDeckModal />
    </div>
  );
}

function Deck() {
  return (
    <div className="p-4 flex flex-col gap-4 w-full basis-[19%] border border-border rounded-xl">
      <div className="flex items-center justify-between">
        <p className="">Due: 3</p>

        <p>Total Retention: 90%</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-2xl">Medical Field</p>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          aspernatur autem omnis fugiat est, quaerat delectus sit ducimus
          aliquid nulla officia vel, quasi fugit. Doloremque cupiditate deserunt
          sunt quo animi.
        </p>
      </div>

      <div className="flex w-full gap-2">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={"outline"} className="flex-1">
              Open Deck
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="">
                Deck: Medical Field
              </AlertDialogTitle>
              <AlertDialogDescription className="flex flex-col gap-8 items-center py-6">
                <p className="text-2xl font-medium">Question</p>

                <div className="flex flex-col gap-2 w-full">
                  <hr className="bg-primary h-[1px] w-full" />
                  <p className="text-center">Answer</p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="w-full flex items-center justify-center gap-4">
                    <Button className="bg-red-500 text-white">Fail</Button>
                    <Button className="bg-green-500 text-white">Pass</Button>
                  </div>

                  <div className="w-full flex items-center justify-center gap-4">
                    <p>New: 1</p>
                    <p>Failed: 23</p>
                    <p>To Review: 1</p>
                  </div>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant={"outline"}>
              <EllipsisVertical size={15} />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="min-w-[900px]">
            <AlertDialogHeader>
              <AlertDialogTitle>Deck: Medical Field</AlertDialogTitle>
              <AlertDialogDescription className="flex grow gap-4  h-[500px]">
                <div className="flex flex-col gap-4 items-center flex-1">
                  <div className="flex flex-col gap-2 w-full">
                    <p>Question</p>
                    <Input></Input>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <p>Answer</p>
                    <Input></Input>
                  </div>

                  <Button className="w-full">Add this Card</Button>
                </div>

                <div className="flex flex-col gap-2  max-h-[500px] p-2 flex-1">
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
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

function CreateDeckModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Plus />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create your own deck</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-2 w-full">
              <p>Name</p>
              <Input></Input>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <p>Description</p>
              <Input></Input>
            </div>

            <Button className="w-full">Create Deck</Button>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default App;

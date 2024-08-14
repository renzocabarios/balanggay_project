import Navbar from "@/components/navbar";

interface IMainLayoutProps {
  children: any;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <div className="relative flex flex-col gap-4 min-h-screen">
      <Navbar />

      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1440px] flex flex-col gap-8 items-center ">
          <div className="flex flex-col gap-4 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

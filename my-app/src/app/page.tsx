import Header from "@/components/Header";
import Steps from "@/components/Steps";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-zinc-950 text-white min-h-screen px-2 overflow-auto">
        <div className="md:max-w-screen-2xl md:pt-36 pt-20 sm:pb-20 md:pb-10 mx-auto sm:mx-12 text-white border-x-2 border-zinc-900 min-h-screen">
        {/* <hr className="h-px border-0 bg-gray-800 mb-1"/> */}
        <Header />
        {/* <hr className="h-px border-0 bg-gray-800 mt-1"/> */}
        <VideoPlayer/>
        <Steps/>
      </div>
    </main>
  );
}
